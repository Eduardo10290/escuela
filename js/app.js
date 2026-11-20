// ============================================================
// Lógica de la Plataforma Universitaria
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Elementos DOM
  const programsList = document.getElementById('programs-list');

  // Formulario de Admisión / Aspirante
  const leadForm = document.getElementById('lead-form');
  const formProgramSelect = document.getElementById('form-program');
  const formNotificationToast = document.getElementById('notification-toast');
  const toastMessage = document.getElementById('toast-message');

  // Menú Móvil
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  const WA_NUMBER = '527226119681';

  // ============================================================
  // 1. POBLAR SELECTORES CON TODOS LOS PROGRAMAS
  // ============================================================
  function populateProgramSelects() {
    const heroProgramSelect = document.getElementById('hero-program');
    const selects = [formProgramSelect, heroProgramSelect].filter(Boolean);

    selects.forEach(select => {
      select.innerHTML = '<option value="">Selecciona tu programa de interés...</option>';

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

      select.appendChild(optGroupLic);
      select.appendChild(optGroupMae);
      select.appendChild(optGroupDoc);
    });
  }

  // ============================================================
  // 2. RENDERIZAR LA OFERTA ACADÉMICA COMO LISTA POR NIVEL
  // ============================================================
  const LEVEL_GROUPS = [
    {
      level: 'licenciatura',
      title: 'Licenciaturas',
      color: 'bg-blue-50 text-blue-700',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.42A12 12 0 0112 21a12 12 0 01-6.16-10.42L12 14z"></path></svg>'
    },
    {
      level: 'maestria',
      title: 'Maestrías',
      color: 'bg-purple-50 text-purple-700',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    },
    {
      level: 'doctorado',
      title: 'Doctorados',
      color: 'bg-amber-50 text-amber-700',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 8.7l5.4-.8L12 3z"></path></svg>'
    }
  ];

  function renderPrograms() {
    if (!programsList) return;

    programsList.innerHTML = LEVEL_GROUPS.map(group => {
      const programs = ACADEMIC_PROGRAMS.filter(p => p.level === group.level);
      if (programs.length === 0) return '';

      const items = programs.map(prog => `
        <li class="px-5 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition">
          <div class="min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <p class="text-base font-bold text-slate-800">${prog.name}</p>
              ${prog.note ? `<span class="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full">${prog.note}</span>` : ''}
            </div>
            <p class="text-sm text-emerald-700 font-semibold mt-1">Validez SEP</p>
          </div>
          <button
            type="button"
            onclick="requestProgramInfo('${prog.id}')"
            class="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FF6500] hover:bg-[#E55800] transition shadow-sm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            Solicitar informes
          </button>
        </li>
      `).join('');

      return `
        <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="px-5 sm:px-8 py-5 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-xl ${group.color} flex items-center justify-center shrink-0">
                ${group.icon}
              </span>
              <div>
                <h3 class="text-lg font-extrabold text-[#0B192C] font-heading leading-tight">${group.title}</h3>
                <p class="text-[11px] text-slate-500 font-medium">${programs.length} programa${programs.length === 1 ? '' : 's'} disponible${programs.length === 1 ? '' : 's'}</p>
              </div>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">Validez Oficial SEP</span>
          </div>
          <ul class="divide-y divide-slate-100">
            ${items}
          </ul>
        </div>
      `;
    }).join('');
  }

  // ============================================================
  // 3. SOLICITAR INFORMES POR WHATSAPP (PROGRAMA SELECCIONADO)
  // ============================================================
  window.requestProgramInfo = function(programId) {
    const prog = ACADEMIC_PROGRAMS.find(p => p.id === programId);
    if (!prog) return;

    const waMessage = encodeURIComponent(
      `¡Hola Instituto Universitario A.L.! 👋\n\n` +
      `Me interesa recibir información sobre:\n` +
      `🎓 *Programa:* ${prog.name}\n` +
      `📚 *Nivel:* ${prog.levelName}\n` +
      `✅ *Validez:* ${prog.validez}\n` +
      `🏫 *Modalidades:* ${prog.modalities.join(', ')}\n\n` +
      `¿Me pueden enviar la información de inscripción y colegiatura?`
    );

    window.open(`https://wa.me/${WA_NUMBER}?text=${waMessage}`, '_blank');
  };

  // ============================================================
  // 4. SECCIÓN DE INSCRIPCIÓN: NIVEL, COLEGIATURA Y FECHAS
  // ============================================================
  let inscriptionLevel = 'Revalidación · Licenciatura';

  window.selectInscriptionLevel = function(level, label) {
    inscriptionLevel = label;

    document.querySelectorAll('.nivel-btn').forEach(btn => {
      btn.classList.remove('bg-[#FF6500]', 'text-white', 'border-[#FF6500]');
      btn.classList.add('bg-white/5', 'text-slate-200', 'border-white/10');
    });

    const selected = document.querySelector(`.nivel-btn[data-level="${level}"]`);
    if (selected) {
      selected.classList.remove('bg-white/5', 'text-slate-200', 'border-white/10');
      selected.classList.add('bg-[#FF6500]', 'text-white', 'border-[#FF6500]');
    }

    const labelEl = document.getElementById('nivel-seleccionado');
    if (labelEl) labelEl.textContent = label;
  };

  window.requestColegiatura = function() {
    const message = encodeURIComponent(
      `¡Hola Instituto Universitario A.L.! 👋\n\n` +
      `Quiero calcular mi colegiatura para el nivel: *${inscriptionLevel}*.\n` +
      `¿Me pueden compartir la información de costos y modalidades?`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, '_blank');
  };

  window.requestFechas = function() {
    const message = encodeURIComponent(
      `¡Hola Instituto Universitario A.L.! 👋\n\n` +
      `Quiero información sobre las fechas de inicio disponibles para el nivel: *${inscriptionLevel}*.\n` +
      `Entiendo que hay inicios cada 3 meses y que el primero es en diciembre.`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, '_blank');
  };

  // ============================================================
  // 5. REGISTRO DE ASPIRANTES Y ENVÍO A WHATSAPP
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

      const waMessage = encodeURIComponent(
        `¡Hola Instituto Universitario A.L.! 👋 Mi nombre es *${name}*.\n\n` +
        `Solicito información para:\n` +
        `🎓 *Programa:* ${program}\n` +
        `📍 *Modalidad:* ${modality}\n` +
        `📊 *Promedio anterior:* ${average}\n` +
        `🏢 *Sede/Modalidad de interés:* ${campus}\n` +
        `📧 *Correo:* ${email}\n` +
        `📱 *Teléfono:* ${phone}\n\n` +
        `¿Podrían enviarme los requisitos de inscripción y la información del programa?`
      );

      showToast('¡Registro exitoso! Te estamos canalizando con un asesor vía WhatsApp...', 'success');

      leadForm.reset();

      setTimeout(() => {
        window.open(`https://wa.me/${WA_NUMBER}?text=${waMessage}`, '_blank');
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

  // ============================================================
  // 6. REDES SOCIALES (arriba en la barra superior y abajo en el footer)
  // Pega aquí las URL completas de tus páginas oficiales.
  // ============================================================
  const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/people/Instituto-Universitario-AL/61596388126228/',
    instagram: 'https://www.instagram.com/instituto.universitarioal/'
  };

  const SOCIAL_META = {
    facebook: {
      label: 'Facebook',
      classes: 'bg-[#1877F2] hover:bg-[#0f63cc]',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'
    },
    instagram: {
      label: 'Instagram',
      classes: 'bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90',
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>'
    }
  };

  function renderSocialLinks() {
    // Los iconos se muestran SIEMPRE. Si aún no hay URL, quedan visibles
    // pero sin navegar (para activarlos basta con llenar SOCIAL_LINKS).
    const entries = Object.entries(SOCIAL_LINKS);

    const containers = [
      { el: document.getElementById('social-top'), size: 'w-6 h-6 rounded-md', icon: 'w-3.5 h-3.5' },
      { el: document.getElementById('social-links'), size: 'w-10 h-10 rounded-lg', icon: 'w-5 h-5' }
    ];

    containers.forEach(({ el, size, icon }) => {
      if (!el) return;
      el.innerHTML = entries.map(([key, url]) => {
        const meta = SOCIAL_META[key];
        const hasUrl = url && url.trim() !== '';
        const tag = hasUrl ? 'a' : 'span';
        const attrs = hasUrl
          ? `href="${url}" target="_blank" rel="noopener noreferrer"`
          : `role="img"`;

        return `
          <${tag}
            ${attrs}
            aria-label="${meta.label}"
            title="${meta.label}"
            class="${size} ${meta.classes} text-white flex items-center justify-center transition shadow-sm ${hasUrl ? 'cursor-pointer' : 'cursor-default'}"
          >
            <span class="${icon} block [&>svg]:w-full [&>svg]:h-full">${meta.svg}</span>
          </${tag}>
        `;
      }).join('');
    });
  }

  // ============================================================
  // 7. INICIALIZACIÓN
  // ============================================================
  populateProgramSelects();
  renderPrograms();
  renderSocialLinks();
});
