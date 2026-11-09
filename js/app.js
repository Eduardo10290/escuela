// ============================================================
// Lógica de la Plataforma Universitaria
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de estado
  let currentFilter = 'all';
  let searchQuery = '';
  
  // Elementos DOM
  const programsGrid = document.getElementById('programs-grid');
  const programCountBadge = document.getElementById('program-count-badge');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('search-program');
  
  // Modal de Detalle de Programa
  const programModal = document.getElementById('program-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  
  // Calculadora de Becas
  const calcLevelSelect = document.getElementById('calc-level');
  const calcProgramSelect = document.getElementById('calc-program');
  const calcGradeSlider = document.getElementById('calc-grade-slider');
  const calcGradeDisplay = document.getElementById('calc-grade-display');
  const calcTierBadge = document.getElementById('calc-tier-badge');
  const calcRegularFee = document.getElementById('calc-regular-fee');
  const calcDiscountPercent = document.getElementById('calc-discount-percent');
  const calcDiscountAmount = document.getElementById('calc-discount-amount');
  const calcFinalFee = document.getElementById('calc-final-fee');
  const calcAnnualSaving = document.getElementById('calc-annual-saving');
  const calcLockScholarshipBtn = document.getElementById('calc-lock-scholarship-btn');
  
  // Formulario de Admisión / Aspirante
  const leadForm = document.getElementById('lead-form');
  const formProgramSelect = document.getElementById('form-program');
  const formNotificationToast = document.getElementById('notification-toast');
  const toastMessage = document.getElementById('toast-message');

  // Modal de Administración de Prospectos (CRM Local)
  const leadsModal = document.getElementById('leads-modal');
  const openLeadsBtn = document.getElementById('open-leads-btn');
  const closeLeadsBtn = document.getElementById('close-leads-btn');
  const leadsTableBody = document.getElementById('leads-table-body');
  const exportCsvBtn = document.getElementById('export-csv-btn');
  const clearLeadsBtn = document.getElementById('clear-leads-btn');

  // Menú Móvil
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // ============================================================
  // 1. POBLAR SELECTORES CON LOS 12 PROGRAMAS
  // ============================================================
  function populateProgramSelects() {
    if (!calcProgramSelect || !formProgramSelect) return;

    // Llenar select del formulario principal
    formProgramSelect.innerHTML = '<option value="">Selecciona tu programa de interés...</option>';
    
    // Grupos para formulario
    const optGroupLic = document.createElement('optgroup');
    optGroupLic.label = 'Licenciaturas';
    const optGroupMae = document.createElement('optgroup');
    optGroupMae.label = 'Maestrías';
    const optGroupDoc = document.createElement('optgroup');
    optGroupDoc.label = 'Doctorados';

    ACADEMIC_PROGRAMS.forEach(prog => {
      const opt = document.createElement('option');
      opt.value = prog.name;
      opt.textContent = `${prog.name} (${prog.modalities.join(', ')})`;
      if (prog.level === 'licenciatura') optGroupLic.appendChild(opt);
      else if (prog.level === 'maestria') optGroupMae.appendChild(opt);
      else if (prog.level === 'doctorado') optGroupDoc.appendChild(opt);
    });

    formProgramSelect.appendChild(optGroupLic);
    formProgramSelect.appendChild(optGroupMae);
    formProgramSelect.appendChild(optGroupDoc);

    // Actualizar programas en la calculadora según nivel seleccionado
    updateCalculatorPrograms();
  }

  function updateCalculatorPrograms() {
    if (!calcLevelSelect || !calcProgramSelect) return;
    const selectedLevel = calcLevelSelect.value;
    const filtered = ACADEMIC_PROGRAMS.filter(p => p.level === selectedLevel);

    calcProgramSelect.innerHTML = '';
    filtered.forEach(prog => {
      const opt = document.createElement('option');
      opt.value = prog.id;
      opt.textContent = prog.name;
      calcProgramSelect.appendChild(opt);
    });

    calculateScholarship();
  }

  // ============================================================
  // 2. RENDERIZAR CARDS DE PROGRAMAS CON DISEÑO MODERNO
  // ============================================================
  function renderPrograms() {
    if (!programsGrid) return;

    let filtered = ACADEMIC_PROGRAMS.filter(prog => {
      const matchesFilter = currentFilter === 'all' || prog.level === currentFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        prog.name.toLowerCase().includes(q) || 
        prog.summary.toLowerCase().includes(q) ||
        prog.area.toLowerCase().includes(q) ||
        prog.cuatrimestres.some(c => c.materias.some(m => m.toLowerCase().includes(q)));
      return matchesFilter && matchesSearch;
    });

    if (programCountBadge) {
      programCountBadge.textContent = `${filtered.length} programa${filtered.length === 1 ? '' : 's'} disponible${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      programsGrid.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div class="w-16 h-16 mx-auto mb-4 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-2">No encontramos programas con ese criterio</h3>
          <p class="text-slate-600 mb-4">Intenta buscar otra palabra o restablece los filtros para ver la oferta académica.</p>
          <button onclick="resetFilters()" class="px-5 py-2.5 bg-[#FF6500] hover:bg-[#E55800] text-white font-semibold rounded-xl text-sm transition">
            Ver Todos los Programas
          </button>
        </div>
      `;
      return;
    }

    programsGrid.innerHTML = filtered.map(prog => {
      // Color y etiqueta según nivel
      let levelBadgeColor = 'bg-blue-100 text-blue-800 border-blue-200';
      if (prog.level === 'maestria') levelBadgeColor = 'bg-purple-100 text-purple-800 border-purple-200';
      if (prog.level === 'doctorado') levelBadgeColor = 'bg-amber-100 text-amber-900 border-amber-300';

      return `
        <div class="card-hover-lift bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between transition-all group">
          <!-- Imagen y Badges -->
          <div class="relative h-48 w-full overflow-hidden bg-slate-100">
            <img 
              src="${prog.image}" 
              alt="${prog.name}" 
              loading="lazy" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <!-- Badges superiores -->
            <div class="absolute top-3 left-3 right-3 flex justify-between items-start gap-2">
              <span class="px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider border shadow-sm ${levelBadgeColor}">
                ${prog.levelName}
              </span>
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/95 text-white flex items-center gap-1 shadow-sm">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                SEP RVOE
              </span>
            </div>

            <!-- Título superpuesto en la imagen -->
            <div class="absolute bottom-3 left-4 right-4 text-white">
              <span class="text-xs text-orange-300 font-semibold uppercase tracking-wider block mb-0.5">${prog.area}</span>
              <h3 class="text-xl font-bold leading-snug drop-shadow-sm">${prog.name}</h3>
            </div>
          </div>

          <!-- Contenido Central -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <!-- Duración y Modalidades -->
              <div class="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4 pb-3 border-b border-slate-100">
                <div class="flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong>Duración:</strong> ${prog.duration.split('(')[0]}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span><strong>Modalidad:</strong> En línea / Presencial</span>
                </div>
              </div>

              <!-- Resumen -->
              <p class="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                ${prog.summary}
              </p>

              <!-- Tags de modalidades -->
              <div class="flex flex-wrap gap-1.5 mb-5">
                ${prog.modalities.map(m => `
                  <span class="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md">
                    ${m}
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- Pie de Card y Acciones -->
            <div class="pt-3 border-t border-slate-100">
              <div class="flex items-center justify-between mb-3 text-xs">
                <span class="text-slate-500">Colegiatura mensual desde:</span>
                <span class="text-sm font-bold text-[#0B192C]">
                  $${Math.round(prog.baseMonthlyFee * 0.50).toLocaleString('es-MX')} MXN <span class="text-[10px] text-orange-600 font-normal">con 50% beca</span>
                </span>
              </div>

              <div class="grid grid-cols-2 gap-2">
                <button 
                  onclick="openProgramModal('${prog.id}')"
                  class="w-full px-3 py-2.5 text-xs font-bold text-[#0B192C] bg-slate-100 hover:bg-slate-200 rounded-xl transition text-center flex items-center justify-center gap-1.5"
                >
                  <svg class="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  Plan de Estudios
                </button>
                <button 
                  onclick="selectProgramForCalculator('${prog.id}')"
                  class="w-full px-3 py-2.5 text-xs font-bold text-white bg-[#FF6500] hover:bg-[#E55800] rounded-xl transition shadow-sm text-center flex items-center justify-center gap-1.5"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  Calcular Beca
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ============================================================
  // 3. MODAL DE DETALLE COMPLETO DEL PROGRAMA
  // ============================================================
  window.openProgramModal = function(programId) {
    const prog = ACADEMIC_PROGRAMS.find(p => p.id === programId);
    if (!prog || !programModal) return;

    let levelBadgeColor = 'bg-blue-100 text-blue-800';
    if (prog.level === 'maestria') levelBadgeColor = 'bg-purple-100 text-purple-800';
    if (prog.level === 'doctorado') levelBadgeColor = 'bg-amber-100 text-amber-900';

    const modalBody = document.getElementById('modal-dynamic-content');
    modalBody.innerHTML = `
      <!-- Cabecera del Programa -->
      <div class="relative bg-[#0B192C] text-white p-6 sm:p-8 rounded-t-2xl overflow-hidden">
        <div class="absolute -right-16 -top-16 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10">
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="px-3 py-1 text-xs font-bold rounded-full ${levelBadgeColor}">
              ${prog.levelName}
            </span>
            <span class="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ${prog.rvoe}
            </span>
            <span class="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white">
              ${prog.duration}
            </span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">${prog.name}</h2>
          <p class="text-slate-300 text-sm max-w-2xl leading-relaxed">${prog.summary}</p>
        </div>
      </div>

      <!-- Pestañas de Navegación del Modal -->
      <div class="p-6 sm:p-8 space-y-8 bg-slate-50">
        
        <!-- Pestaña 1: Plan de Estudios / Materias por Cuatrimestre -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              📚
            </div>
            <h3 class="text-xl font-bold text-slate-800">Mapa Curricular y Asignaturas</h3>
          </div>
          <p class="text-xs text-slate-500 mb-4">Plan estructurado por cuatrimestres para una formación integral, actualizada y con alta orientación práctica.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${prog.cuatrimestres.map(c => `
              <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div class="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2.5 pb-1 border-b border-orange-100 flex items-center justify-between">
                  <span>${c.numero}</span>
                  <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-normal">${c.materias.length} materias</span>
                </div>
                <ul class="space-y-1.5">
                  ${c.materias.map(m => `
                    <li class="text-xs text-slate-700 flex items-start gap-1.5">
                      <span class="text-orange-500 font-bold text-[10px] mt-0.5">•</span>
                      <span>${m}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Pestaña 2: Perfil de Egreso y Campo Laboral -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 class="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Perfil de Egreso
            </h4>
            <ul class="space-y-2.5">
              ${prog.perfilEgreso.map(p => `
                <li class="text-xs text-slate-600 flex items-start gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                  <span>${p}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 class="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Dónde Podrás Trabajar
            </h4>
            <ul class="space-y-2.5">
              ${prog.campoLaboral.map(c => `
                <li class="text-xs text-slate-600 flex items-start gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                  <span>${c}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Llamado a la acción inferior en el modal -->
        <div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <h4 class="text-lg font-bold">¿Te interesa estudiar ${prog.name}?</h4>
            <p class="text-xs text-orange-100">Calcula tu colegiatura con hasta 50% de beca garantizada.</p>
          </div>
          <button 
            onclick="selectProgramFromModal('${prog.id}')"
            class="px-6 py-3 bg-white text-orange-600 font-bold rounded-xl text-sm shadow hover:bg-orange-50 transition shrink-0"
          >
            Quiero mi Beca para este Programa →
          </button>
        </div>
      </div>
    `;

    programModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeProgramModal = function() {
    if (!programModal) return;
    programModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  window.selectProgramFromModal = function(programId) {
    closeProgramModal();
    selectProgramForCalculator(programId);
  };

  window.selectProgramForCalculator = function(programId) {
    const prog = ACADEMIC_PROGRAMS.find(p => p.id === programId);
    if (!prog) return;

    if (calcLevelSelect) calcLevelSelect.value = prog.level;
    updateCalculatorPrograms();
    if (calcProgramSelect) calcProgramSelect.value = prog.id;

    if (formProgramSelect) {
      for (let i = 0; i < formProgramSelect.options.length; i++) {
        if (formProgramSelect.options[i].value.includes(prog.name)) {
          formProgramSelect.selectedIndex = i;
          break;
        }
      }
    }

    calculateScholarship();

    const calcSection = document.getElementById('calculadora');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ============================================================
  // 4. CALCULADORA DE BECAS Y SIMULADOR DE COLEGIATURA
  // ============================================================
  function calculateScholarship() {
    if (!calcProgramSelect || !calcGradeSlider) return;

    const selectedProgramId = calcProgramSelect.value;
    const prog = ACADEMIC_PROGRAMS.find(p => p.id === selectedProgramId) || ACADEMIC_PROGRAMS[0];
    const grade = parseFloat(calcGradeSlider.value);

    // Actualizar visualizador de promedio
    if (calcGradeDisplay) {
      calcGradeDisplay.textContent = grade.toFixed(1);
    }

    // Modalidad seleccionada
    const modalityRadio = document.querySelector('input[name="calc-modality"]:checked');
    const modality = modalityRadio ? modalityRadio.value : 'presencial';

    // Factor según modalidad (Online tiene tarifa preferencial)
    let modalityMultiplier = 1.0;
    if (modality === 'online') modalityMultiplier = 0.88;
    if (modality === 'ejecutiva') modalityMultiplier = 0.94;

    const baseMonthly = Math.round(prog.baseMonthlyFee * modalityMultiplier);

    // Determinar nivel de beca según promedio
    let scholarship = SCHOLARSHIP_TIERS.find(t => grade >= t.minGrade && grade <= t.maxGrade);
    if (!scholarship) scholarship = SCHOLARSHIP_TIERS[SCHOLARSHIP_TIERS.length - 1];

    const discountAmount = Math.round(baseMonthly * scholarship.discount);
    const finalMonthlyFee = baseMonthly - discountAmount;
    const annualSaving = discountAmount * 12;

    // Actualizar interfaz
    if (calcTierBadge) {
      calcTierBadge.textContent = scholarship.label;
      calcTierBadge.className = `inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
        scholarship.discount >= 0.5 ? 'bg-emerald-500 text-white' :
        scholarship.discount >= 0.4 ? 'bg-blue-600 text-white' :
        scholarship.discount >= 0.3 ? 'bg-amber-500 text-white' :
        'bg-slate-700 text-white'
      }`;
    }

    if (calcRegularFee) calcRegularFee.textContent = `$${baseMonthly.toLocaleString('es-MX')} MXN`;
    if (calcDiscountPercent) calcDiscountPercent.textContent = `-${Math.round(scholarship.discount * 100)}%`;
    if (calcDiscountAmount) calcDiscountAmount.textContent = `-$${discountAmount.toLocaleString('es-MX')} MXN`;
    if (calcFinalFee) calcFinalFee.textContent = `$${finalMonthlyFee.toLocaleString('es-MX')}`;
    if (calcAnnualSaving) calcAnnualSaving.textContent = `$${annualSaving.toLocaleString('es-MX')} MXN`;

    return {
      programName: prog.name,
      level: prog.levelName,
      modality,
      grade,
      discountPercent: Math.round(scholarship.discount * 100),
      discountAmount,
      finalMonthlyFee,
      regularFee: baseMonthly
    };
  }

  // Pre-llenar formulario al hacer clic en "Apartar Beca"
  if (calcLockScholarshipBtn) {
    calcLockScholarshipBtn.addEventListener('click', () => {
      const calcData = calculateScholarship();
      if (!calcData) return;

      // Sincronizar con el formulario de admisión
      if (formProgramSelect) {
        for (let i = 0; i < formProgramSelect.options.length; i++) {
          if (formProgramSelect.options[i].value.includes(calcData.programName)) {
            formProgramSelect.selectedIndex = i;
            break;
          }
        }
      }

      // Marcar modalidad en formulario si existe
      const formModalitySelect = document.getElementById('form-modality');
      if (formModalitySelect) {
        formModalitySelect.value = calcData.modality;
      }

      const formAvgInput = document.getElementById('form-average');
      if (formAvgInput) {
        formAvgInput.value = calcData.grade.toFixed(1);
      }

      // Desplazarse al formulario
      const formElement = document.getElementById('registro-aspirante');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
        // Efecto visual de resaltado
        formElement.classList.add('ring-4', 'ring-orange-400');
        setTimeout(() => formElement.classList.remove('ring-4', 'ring-orange-400'), 2000);
      }
    });
  }

  // ============================================================
  // 5. REGISTRO DE PROSPECTOS Y ENVÍO A WHATSAPP
  // ============================================================
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const program = formProgramSelect.value;
      const modality = document.getElementById('form-modality').value;
      const average = document.getElementById('form-average')?.value || '8.5';
      const campus = document.getElementById('form-campus')?.value || 'Campus Central / En Línea';

      if (!name || !phone || !email || !program) {
        showToast('Por favor completa todos los campos obligatorios.', 'error');
        return;
      }

      // Guardar prospecto localmente (CRM para la escuela)
      const newLead = {
        id: Date.now(),
        fecha: new Date().toLocaleString('es-MX'),
        nombre: name,
        telefono: phone,
        email: email,
        programa: program,
        modalidad: modality,
        promedio: average,
        campus: campus
      };

      const existingLeads = JSON.parse(localStorage.getItem('utc_school_leads') || '[]');
      existingLeads.unshift(newLead);
      localStorage.setItem('utc_school_leads', JSON.stringify(existingLeads));

      // Construir mensaje de WhatsApp institucional
      const waNumber = "525512345678"; // Número de admisiones configurable
      const waMessage = encodeURIComponent(
        `¡Hola Universidad! 👋 Mi nombre es *${name}*.\n\n` +
        `Solicito información y deseo tramitar mi beca para:\n` +
        `🎓 *Programa:* ${program}\n` +
        `📍 *Modalidad:* ${modality}\n` +
        `📊 *Promedio anterior:* ${average}\n` +
        `🏢 *Sede/Modalidad de interés:* ${campus}\n` +
        `📧 *Correo:* ${email}\n` +
        `📱 *Teléfono:* ${phone}\n\n` +
        `¿Podrían confirmarme mi porcentaje de beca y los requisitos de inscripción?`
      );

      showToast('¡Registro exitoso! Te estamos canalizando con un asesor vía WhatsApp...', 'success');

      leadForm.reset();

      // Abrir WhatsApp en pestaña nueva
      setTimeout(() => {
        window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
      }, 1500);
    });
  }

  function showToast(message, type = 'success') {
    if (!formNotificationToast || !toastMessage) return;
    toastMessage.textContent = message;
    formNotificationToast.className = `fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl text-white font-medium text-sm transition-all duration-300 ${
      type === 'success' ? 'bg-emerald-600' : 'bg-rose-600'
    }`;
    formNotificationToast.classList.remove('translate-y-20', 'opacity-0');

    setTimeout(() => {
      formNotificationToast.classList.add('translate-y-20', 'opacity-0');
    }, 4500);
  }

  // ============================================================
  // 6. PORTAL DE ADMINISTRACIÓN LOCAL DE PROSPECTOS (LEADS CRM)
  // ============================================================
  window.openLeadsModal = function() {
    if (!leadsModal || !leadsTableBody) return;
    const leads = JSON.parse(localStorage.getItem('utc_school_leads') || '[]');

    if (leads.length === 0) {
      leadsTableBody.innerHTML = `
        <tr>
          <td colspan="6" class="px-4 py-8 text-center text-slate-500 text-xs">
            Aún no hay aspirantes registrados. Cuando los prospectos llenen el formulario o calculadora aparecerán aquí.
          </td>
        </tr>
      `;
    } else {
      leadsTableBody.innerHTML = leads.map(l => `
        <tr class="border-b border-slate-100 hover:bg-slate-50">
          <td class="px-4 py-3 text-xs text-slate-500">${l.fecha}</td>
          <td class="px-4 py-3 text-xs font-semibold text-slate-800">${l.nombre}</td>
          <td class="px-4 py-3 text-xs text-slate-600">
            <a href="https://wa.me/52${l.telefono.replace(/\D/g,'')}" target="_blank" class="text-emerald-600 hover:underline flex items-center gap-1">
              ${l.telefono}
            </a>
          </td>
          <td class="px-4 py-3 text-xs text-slate-600">${l.email}</td>
          <td class="px-4 py-3 text-xs font-medium text-orange-600">${l.programa} (${l.modalidad})</td>
          <td class="px-4 py-3 text-xs text-slate-700 font-bold">${l.promedio}</td>
        </tr>
      `).join('');
    }

    leadsModal.classList.add('active');
  };

  window.closeLeadsModal = function() {
    if (leadsModal) leadsModal.classList.remove('active');
  };

  if (openLeadsBtn) openLeadsBtn.addEventListener('click', openLeadsModal);
  if (closeLeadsBtn) closeLeadsBtn.addEventListener('click', closeLeadsModal);

  // Exportar prospectos a archivo CSV
  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', () => {
      const leads = JSON.parse(localStorage.getItem('utc_school_leads') || '[]');
      if (leads.length === 0) {
        alert('No hay prospectos para exportar.');
        return;
      }

      let csv = "Fecha,Nombre,Telefono,Email,Programa,Modalidad,Promedio,Campus\n";
      leads.forEach(l => {
        csv += `"${l.fecha}","${l.nombre}","${l.telefono}","${l.email}","${l.programa}","${l.modalidad}","${l.promedio}","${l.campus}"\n`;
      });

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `prospectos_escuela_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  if (clearLeadsBtn) {
    clearLeadsBtn.addEventListener('click', () => {
      if (confirm('¿Deseas vaciar la lista de prospectos locales?')) {
        localStorage.removeItem('utc_school_leads');
        openLeadsModal();
      }
    });
  }

  // ============================================================
  // 7. EVENTOS DE FILTRADO Y BÚSQUEDA
  // ============================================================
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-[#FF6500]', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-100');
      });
      btn.classList.add('bg-[#FF6500]', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-100');

      currentFilter = btn.dataset.filter;
      renderPrograms();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderPrograms();
    });
  }

  window.resetFilters = function() {
    searchQuery = '';
    currentFilter = 'all';
    if (searchInput) searchInput.value = '';
    filterButtons.forEach((b, index) => {
      if (index === 0) {
        b.classList.add('bg-[#FF6500]', 'text-white', 'shadow-sm');
        b.classList.remove('bg-white', 'text-slate-600');
      } else {
        b.classList.remove('bg-[#FF6500]', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-slate-600');
      }
    });
    renderPrograms();
  };

  // Eventos de la calculadora
  if (calcLevelSelect) calcLevelSelect.addEventListener('change', updateCalculatorPrograms);
  if (calcProgramSelect) calcProgramSelect.addEventListener('change', calculateScholarship);
  if (calcGradeSlider) calcGradeSlider.addEventListener('input', calculateScholarship);
  
  const modalityInputs = document.querySelectorAll('input[name="calc-modality"]');
  modalityInputs.forEach(input => input.addEventListener('change', calculateScholarship));

  // FAQ Accordion
  window.toggleFaq = function(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.faq-icon');
    
    if (answer.classList.contains('hidden')) {
      answer.classList.remove('hidden');
      if (icon) icon.classList.add('rotate-180');
    } else {
      answer.classList.add('hidden');
      if (icon) icon.classList.remove('rotate-180');
    }
  };

  // Menú Móvil
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Cerrar modal al presionar ESC o click afuera
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProgramModal();
      closeLeadsModal();
    }
  });

  if (programModal) {
    programModal.addEventListener('click', (e) => {
      if (e.target === programModal) closeProgramModal();
    });
  }

  if (leadsModal) {
    leadsModal.addEventListener('click', (e) => {
      if (e.target === leadsModal) closeLeadsModal();
    });
  }

  // Inicializar
  populateProgramSelects();
  renderPrograms();
  calculateScholarship();
});
