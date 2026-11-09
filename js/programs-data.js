// Base de datos de programas académicos
const ACADEMIC_PROGRAMS = [
  // ==========================================
  // LICENCIATURAS
  // ==========================================
  {
    id: "lic-educacion",
    name: "Licenciatura en Educación",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Humanidades y Ciencias Sociales",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    rvoe: "RVOE SEP Federal: 2024-EDU-0418",
    badge: "Alta Demanda Laboral",
    baseMonthlyFee: 2850,
    icon: "graduation-cap",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    summary: "Forma profesionistas con liderazgo pedagógico capaces de transformar los procesos de enseñanza-aprendizaje mediante innovación curricular, tecnología educativa e inclusión social.",
    perfilEgreso: [
      "Diseño e implementación de modelos educativos contemporáneos y vanguardistas.",
      "Integración de entornos virtuales de aprendizaje y herramientas EdTech.",
      "Evaluación y diagnóstico del rendimiento académico a nivel institucional.",
      "Capacidad directiva para la gestión de instituciones educativas públicas y privadas."
    ],
    campoLaboral: [
      "Instituciones educativas de nivel básico, medio superior y superior.",
      "Dirección y coordinación pedagógica en colegios y universidades.",
      "Diseño de contenidos e-learning en empresas de capacitación y EdTech.",
      "Organismos gubernamentales de política educativa (SEP, institutos estatales).",
      "Consultoría educativa independiente y tutoría psicopedagógica."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Fundamentos de la Educación", "Historia General de la Educación", "Psicología del Desarrollo Infantil", "Metodología de la Investigación", "Comunicación Oral y Escrita"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Teorías del Aprendizaje", "Sociología de la Educación", "Psicología del Adolescente y Adulto", "Filosofía Educativa", "Tecnologías de la Información Aplicadas"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Didáctica General", "Modelos de Intervención Educativa", "Legislación y Políticas Educativas en México", "Estadística Aplicada a la Educación", "Ética y Responsabilidad Social"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Diseño y Evaluación Curricular", "Estrategias de Enseñanza-Aprendizaje", "Educación Inclusiva y Diversidad", "Orientación Educativa y Tutoría", "Taller de Expresión Docente"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Evaluación del Aprendizaje e Institucional", "Entornos Virtuales de Aprendizaje", "Materiales Didácticos Multimedia", "Problemas de Aprendizaje", "Prácticas de Observación Educativa"]
      },
      {
        numero: "6to Cuatrimestre",
        materias: ["Gestión y Administración Escolar", "Investigación Educativa Cualitativa", "Capacitación y Desarrollo de Talento Humano", "Innovación y Tendencias Educativas", "Prácticas de Docencia I"]
      },
      {
        numero: "7mo Cuatrimestre",
        materias: ["Supervisión y Acreditación de Calidad Educativa", "Educación para la Sustentabilidad", "Investigación Educativa Cuantitativa", "Educación Basada en Competencias", "Prácticas de Docencia II"]
      },
      {
        numero: "8vo Cuatrimestre",
        materias: ["Emprendimiento de Proyectos Educativos", "Educación Continua y Andragogía", "Políticas Educativas Internacionales", "Seminario de Titulación I"]
      },
      {
        numero: "9no Cuatrimestre",
        materias: ["Liderazgo y Gestión del Cambio Institucional", "Auditoría de Procesos Educativos", "Bioética en el Ejercicio Docente", "Seminario de Titulación II"]
      }
    ]
  },
  {
    id: "lic-pedagogia",
    name: "Licenciatura en Pedagogía",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Humanidades y Ciencias Sociales",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    rvoe: "RVOE SEP Federal: 2024-PED-0512",
    badge: "Enfoque Multidisciplinario",
    baseMonthlyFee: 2850,
    icon: "book-open",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    summary: "Especialízate en el estudio profundo de los fenómenos formativos y el desarrollo humano, dominando técnicas psicopedagógicas, orientación vocacional y capacitación empresarial.",
    perfilEgreso: [
      "Diagnóstico psicopedagógico e intervención en dificultades de aprendizaje.",
      "Diseño de programas de capacitación corporativa y desarrollo de talento.",
      "Orientación vocacional, profesional y desarrollo socioemocional.",
      "Creación de planes de estudio y materiales didácticos interactivos."
    ],
    campoLaboral: [
      "Departamentos de Recursos Humanos y Capacitación en empresas y corporativos.",
      "Centros de atención psicopedagógica y educación especial.",
      "Escuelas públicas y privadas en áreas de orientación, tutoría y dirección.",
      "Organizaciones no gubernamentales e instituciones de asistencia social.",
      "Consultoría particular en regularización académica y estimulación temprana."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Introducción a la Pedagogía", "Historia de las Ideas Pedagógicas", "Bases Biológicas de la Conducta", "Técnicas de Estudio e Investigación", "Pensamiento Lógico y Creativo"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Corrientes Pedagógicas Contemporáneas", "Psicología Evolutiva", "Sociología y Cultura", "Epistemología Pedagógica", "Tecnología Educativa I"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Psicopedagogía", "Pedagogía Social", "Didáctica Específica", "Estadística Descriptiva en Educación", "Comunicación Educativa"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Diagnóstico e Intervención Psicopedagógica", "Planeación Educativa", "Diseño de Programas de Capacitación", "Orientación Vocacional y Ocupacional", "Educación Especial"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Pedagogía Hospitalaria y Comunitaria", "Capacitación en Entornos Laborales", "Diseño Curricular", "Evaluación de Programas Educativos", "Prácticas de Campo I"]
      },
      {
        numero: "6to Cuatrimestre",
        materias: ["Andragogía y Educación de Adultos", "Psicometría Aplicada a la Educación", "Gestión de Talento Humano", "Metodología de la Investigación Pedagógica", "Prácticas de Campo II"]
      },
      {
        numero: "7mo Cuatrimestre",
        materias: ["Innovación Pedagógica y Gamificación", "Educación en Derechos Humanos", "Tutoría y Mentoría Universitaria", "Supervisión Escolar", "Seminario de Proyectos Pedagógicos"]
      },
      {
        numero: "8vo Cuatrimestre",
        materias: ["Consultoría Pedagógica", "Neuropedagogía", "Bioética y Responsabilidad Profesional", "Seminario de Titulación I"]
      },
      {
        numero: "9no Cuatrimestre",
        materias: ["Dirección de Institutos Formativos", "Prospectiva de la Educación", "Seminario de Titulación II"]
      }
    ]
  },
  {
    id: "lic-psicologia",
    name: "Licenciatura en Psicología",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias de la Salud y la Conducta",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    rvoe: "RVOE SEP Federal: 2024-PSI-0630",
    badge: "Laboratorio de Psicometría",
    baseMonthlyFee: 2950,
    icon: "brain",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    summary: "Comprende la conducta y los procesos mentales del ser humano. Domina la evaluación diagnóstica, la psicometría, la intervención psicológica y la salud mental integral.",
    perfilEgreso: [
      "Aplicación e interpretación ética de pruebas psicométricas y proyectivas.",
      "Detección y atención de trastornos del comportamiento y emocionales.",
      "Diseño de intervenciones en psicología clínica, organizacional y educativa.",
      "Manejo de dinámicas de grupo, reclutamiento y clima laboral en empresas."
    ],
    campoLaboral: [
      "Clínicas de salud mental, hospitales públicos y consulta privada.",
      "Empresas y corporativos en el área de Atracción de Talento y Desarrollo Organizacional.",
      "Departamentos de orientación psicológica en instituciones educativas.",
      "Centros de rehabilitación, prevención de adicciones y desarrollo comunitario.",
      "Peritaje psicológico y consultoría en bienestar laboral."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Historia y Sistemas de la Psicología", "Bases Neurobiológicas de la Conducta", "Procesos Psicológicos Básicos I (Atención y Percepción)", "Epistemología de la Psicología", "Habilidades de Comunicación Terapéutica"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Procesos Psicológicos Básicos II (Memoria, Aprendizaje y Emoción)", "Neuroanatomía y Neurofisiología", "Psicología del Desarrollo: Infancia y Niñez", "Metodología de la Investigación en Psicología", "Teorías de la Personalidad I"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Teorías de la Personalidad II", "Psicología del Desarrollo: Adolescencia y Vejez", "Psicometría y Teoría de la Medida", "Psicología Social", "Estadística Aplicada a las Ciencias de la Conducta"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Evaluación Psicométrica de la Inteligencia", "Psicopatología I (Trastornos del Estado de Ánimo y Ansiedad)", "Entrevista Psicológica", "Dinámica y Procesos de Grupos", "Psicología Educativa"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Psicopatología II (Trastornos Psicóticos y de la Personalidad)", "Evaluación de la Personalidad y Pruebas Proyectivas", "Psicología Organizacional e Industrial", "Técnicas de Intervención en Crisis", "Prácticas Clínicas I"]
      },
      {
        numero: "6to Cuatrimestre",
        materias: ["Enfoques Psicoterapéuticos (Cognitivo-Conductual, Sistémico, Humanista)", "Evaluación Neuropsicológica", "Reclutamiento, Selección y Evaluación por Competencias", "Psicología Comunitaria", "Prácticas Clínicas II"]
      },
      {
        numero: "7mo Cuatrimestre",
        materias: ["Psicología de la Salud y Prevención", "Psicofarmacología Básica", "Clima, Cultura y Bienestar Organizacional", "Ética Profesional en Psicología", "Seminario de Investigación Psicológica"]
      },
      {
        numero: "8vo Cuatrimestre",
        materias: ["Intervención Familiar y de Pareja", "Peritaje y Psicología Forense", "Seminario de Titulación I"]
      },
      {
        numero: "9no Cuatrimestre",
        materias: ["Supervisión de Casos Clínicos", "Tendencias Contemporáneas en Neurociencias", "Seminario de Titulación II"]
      }
    ]
  },
  {
    id: "lic-administracion",
    name: "Licenciatura en Administración",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Económico-Administrativas",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    rvoe: "RVOE SEP Federal: 2024-ADM-0711",
    badge: "Simuladores de Negocios",
    baseMonthlyFee: 2750,
    icon: "briefcase",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    summary: "Prepárate para liderar organizaciones y emprender negocios competitivos. Aprende a coordinar recursos financieros, humanos, tecnológicos y de mercadotecnia con visión estratégica global.",
    perfilEgreso: [
      "Planeación estratégica y toma de decisiones corporativas rentables.",
      "Gestión de equipos de alto rendimiento y liderazgo organizacional.",
      "Análisis de información financiera y estructuración de presupuestos.",
      "Creación y aceleración de nuevos modelos de negocio sostenibles e innovadores."
    ],
    campoLaboral: [
      "Dirección y gerencia en empresas multinacionales, PyMEs y startups.",
      "Emprendimiento propio y consultoría de negocios estratégicos.",
      "Áreas de mercadotecnia, finanzas, operaciones y cadena de suministro.",
      "Sector público en áreas de administración pública, compras y planeación.",
      "Banca comercial, casas de bolsa e instituciones financieras."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Fundamentos de Administración", "Contabilidad General", "Matemáticas Financieras", "Derecho Mercantil", "Comunicación para Negocios"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Proceso Administrativo", "Contabilidad de Costos", "Microeconomía", "Tecnologías de la Información Empresarial", "Habilidades Directivas I"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Administración del Capital Humano", "Macroeconomía", "Estadística Aplicada a los Negocios", "Mercadotecnia Estratégica", "Derecho Laboral"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Comportamiento Organizacional", "Administración Financiera", "Investigación de Mercados", "Comercio Internacional y Aduanas", "Habilidades Directivas II"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Administración de la Producción y Operaciones", "Presupuestos y Control de Gestión", "Logística y Cadena de Suministro", "Marketing Digital y E-commerce", "Sistemas de Gestión de Calidad"]
      },
      {
        numero: "6to Cuatrimestre",
        materias: ["Dirección Estratégica Corporativa", "Formulación y Evaluación de Proyectos de Inversión", "Auditoría Administrativa", "Responsabilidad Social Empresarial", "Simulador de Negocios I"]
      },
      {
        numero: "7mo Cuatrimestre",
        materias: ["Desarrollo Emprendedor e Incubación", "Finanzas Corporativas", "Negociación y Resolución de Conflictos", "Simulador de Negocios II", "Ética en los Negocios"]
      },
      {
        numero: "8vo Cuatrimestre",
        materias: ["Gobernanza Corporativa y Gestión de Riesgos", "Inteligencia de Negocios (Business Intelligence)", "Seminario de Titulación I"]
      },
      {
        numero: "9no Cuatrimestre",
        materias: ["Innovación y Modelos de Negocio Disruptivos", "Seminario de Titulación II"]
      }
    ]
  },
  {
    id: "lic-lengua-inglesa",
    name: "Licenciatura en Lengua Inglesa",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Humanidades e Idiomas",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    rvoe: "RVOE SEP Federal: 2024-ING-0822",
    badge: "Certificaciones Cambridge & TOEFL",
    baseMonthlyFee: 2850,
    icon: "languages",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
    summary: "Domina el idioma inglés a nivel nativo/C2 y profesionalízate en traducción especializada, interpretación, docencia con estándares internacionales (TESOL) y comunicación global.",
    perfilEgreso: [
      "Dominio operativo C1/C2 bajo el Marco Común Europeo de Referencia (MCER).",
      "Metodologías modernas para la enseñanza del inglés como segundo idioma (ELT/TESOL).",
      "Traducción técnica, literaria, legal y comercial inglés-español y viceversa.",
      "Comunicación intercultural corporativa en contextos diplomáticos y de negocios globales."
    ],
    campoLaboral: [
      "Docencia del idioma inglés en colegios bilingües, centros de idiomas y universidades.",
      "Traducción e interpretación en agencias internacionales y embajadas.",
      "Industria editorial, localización de software, videojuegos y subtitulaje audiovisual.",
      "Empresas transnacionales en comunicación corporativa, relaciones públicas y atención a clientes globales.",
      "Consultoría lingüística independiente y proyectos de traducción freelance."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Language Skills Development I (Advanced Grammar & Lexis)", "Fonética y Fonología del Inglés", "Lingüística General", "Historia de la Lengua Inglesa", "Competencias Comunicativas en Español"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Language Skills Development II", "Morfología y Sintaxis del Inglés", "Teorías de la Adquisición de Segundas Lenguas", "Cultura y Civilización de los Países Angloparlantes I", "Tecnologías Aplicadas a la Lingüística"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Language Skills Development III", "Semántica y Pragmática", "Metodologías de la Enseñanza del Inglés (ELT)", "Cultura y Civilización de los Países Angloparlantes II", "Lectura y Crítica de Textos en Inglés"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Advanced English Writing & Discourse Analysis", "Diseño de Materiales Didácticos y Planes de Clase", "Introducción a la Teoría y Práctica de la Traducción", "Evaluación y Certificación del Idioma Inglés", "Psicolingüística"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Traducción Técnica y Comercial", "Enseñanza del Inglés para Fines Específicos (ESP)", "Literatura Británica", "Sociolingüística", "Prácticas de Enseñanza I"]
      },
      {
        numero: "6to Cuatrimestre",
        materias: ["Traducción Jurídica y Financiera", "Literatura Norteamericana", "Técnicas de Interpretación Consecutiva", "Gestión de Centros y Coordinaciones de Idiomas", "Prácticas de Enseñanza II"]
      },
      {
        numero: "7mo Cuatrimestre",
        materias: ["Localización de Software y Traducción Audiovisual", "Interpretación Simultánea Básica", "Literatura Poscolonial Anglófona", "Investigación Aplicada en Lingüística", "Taller de Certificación Internacional (TKT / CELTA Prep)"]
      },
      {
        numero: "8vo Cuatrimestre",
        materias: ["Comunicación Intercultural para Negocios Internacionales", "Ética Profesional del Traductor y Docente", "Seminario de Titulación I"]
      },
      {
        numero: "9no Cuatrimestre",
        materias: ["Emprendimiento en Servicios Lingüísticos y Academias", "Seminario de Titulación II"]
      }
    ]
  },

  // ==========================================
  // MAESTRÍAS
  // ==========================================
  {
    id: "mae-educacion",
    name: "Maestría en Educación",
    level: "maestria",
    levelName: "Maestría",
    area: "Posgrados en Educación",
    duration: "1 año 8 meses (5 cuatrimestres)",
    modalities: ["En Línea", "Ejecutiva Sabatina"],
    rvoe: "RVOE SEP Federal: 2024-POS-1015",
    badge: "Horarios para Profesionistas",
    baseMonthlyFee: 3400,
    icon: "award",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    summary: "Impulsa tu trayectoria como líder pedagógico, directivo institucional o innovador en ambientes de aprendizaje digitales y presenciales para cualquier nivel académico.",
    perfilEgreso: [
      "Dirección y gestión estratégica de centros e instituciones educativas.",
      "Innovación didáctica basada en neuroeducación y metodologías activas.",
      "Liderazgo en acreditaciones de calidad y certificación escolar.",
      "Diseño de modelos educativos híbridos y basados en competencias."
    ],
    campoLaboral: [
      "Dirección y rectoría en planteles escolares públicos y privados.",
      "Coordinación académica y desarrollo docente.",
      "Asesoría técnica pedagógica y supervisión escolar.",
      "Diseño instruccional en plataformas educativas globales."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Modelos Pedagógicos Contemporáneos", "Gestión y Liderazgo en Instituciones Educativas", "Tecnología Educativa y Ambientes Virtuales"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Diseño Curricular Basado en Competencias", "Evaluación Institucional y de los Aprendizajes", "Metodología de la Investigación Educativa"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Neuroeducación y Aprendizaje Emocional", "Políticas Públicas y Reformas Educativas", "Seminario de Investigación I"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Innovación y Emprendimiento Educativo", "Supervisión y Auditoría de la Calidad Escolar", "Seminario de Investigación II"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Dirección del Talento Docente", "Seminario de Tesis de Grado"]
      }
    ]
  },
  {
    id: "mae-ciencias-educacion",
    name: "Maestría en Ciencias de la Educación",
    level: "maestria",
    levelName: "Maestría",
    area: "Posgrados en Educación",
    duration: "1 año 8 meses (5 cuatrimestres)",
    modalities: ["En Línea", "Ejecutiva Sabatina"],
    rvoe: "RVOE SEP Federal: 2024-POS-1019",
    badge: "Enfoque en Investigación",
    baseMonthlyFee: 3400,
    icon: "microscope",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    summary: "Profundiza en el análisis epistemológico, sociológico y científico de los sistemas educativos para generar investigaciones de alto impacto y resolver problemáticas complejas de aprendizaje.",
    perfilEgreso: [
      "Dominio de metodologías cuantitativas, cualitativas y mixtas en educación.",
      "Publicación de artículos y ponencias en revistas científicas indexadas.",
      "Evaluación sociológica y económica de sistemas educativos nacionales.",
      "Formulación de políticas educativas fundamentadas en evidencia empírica."
    ],
    campoLaboral: [
      "Institutos de investigación educativa y think tanks.",
      "Comités de evaluación, organismos certificadores y acreditadores.",
      "Cátedra de posgrado y dirección de proyectos de titulación universitaria.",
      "Asesoría de alto nivel en secretarías y ministerios de educación."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Epistemología de las Ciencias de la Educación", "Sociología y Economía de la Educación", "Estadística Aplicada a la Investigación Educativa"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Metodología de la Investigación Cualitativa", "Teorías del Aprendizaje y Procesos Cognitivos", "Historia Comparada de la Educación"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Metodología de la Investigación Cuantitativa", "Evaluación de Políticas y Programas Educativos", "Coloquio de Investigación I"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Filosofía y Ética en la Educación Contemporánea", "Redacción y Difusión de Producción Científica", "Coloquio de Investigación II"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Seminario de Titulación y Defensa de Grado"]
      }
    ]
  },
  {
    id: "mae-administracion",
    name: "Maestría en Administración (MBA)",
    level: "maestria",
    levelName: "Maestría",
    area: "Posgrados en Negocios",
    duration: "1 año 8 meses (5 cuatrimestres)",
    modalities: ["En Línea", "Ejecutiva Sabatina"],
    rvoe: "RVOE SEP Federal: 2024-POS-1030",
    badge: "Visión Global Directiva",
    baseMonthlyFee: 3600,
    icon: "trending-up",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    summary: "Desarrolla habilidades directivas de alto impacto para liderar organizaciones globales, acelerar la transformación digital e impulsar el crecimiento sostenible de los negocios.",
    perfilEgreso: [
      "Toma de decisiones ejecutivas en entornos de alta volatilidad e incertidumbre.",
      "Liderazgo transformacional y gestión del cambio en equipos multidisciplinarios.",
      "Estrategias de mercadotecnia digital y penetración en mercados internacionales.",
      "Optimización de la cadena de valor y gobierno corporativo eficiente."
    ],
    campoLaboral: [
      "Dirección general, gerencias regionales y direcciones funcionales.",
      "Consultoría estratégica corporativa y reestructuración empresarial.",
      "Emprendimiento de empresas con potencial de escalabilidad internacional.",
      "Consejos de administración y comités directivos de organizaciones."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Dirección Estratégica y Competitividad Global", "Finanzas para la Toma de Decisiones Ejecutivas", "Comportamiento Organizacional y Liderazgo de Alto Desempeño"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Estrategias de Marketing Digital y Omnicanalidad", "Gestión de Operaciones y Cadena de Suministro Moderna", "Marco Legal y Fiscal Corporativo"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Transformación Digital y Business Analytics", "Evaluación de Proyectos y Creación de Valor Empresarial", "Seminario de Proyectos Empresariales I"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Negociación Ejecutiva y Manejo de Crisis", "Innovación Corporativa y Nuevos Modelos de Negocio", "Seminario de Proyectos Empresariales II"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Gobierno Corporativo y Sostenibilidad ESG", "Proyecto Integrador de Grado"]
      }
    ]
  },
  {
    id: "mae-finanzas",
    name: "Maestría en Finanzas",
    level: "maestria",
    levelName: "Maestría",
    area: "Posgrados en Negocios",
    duration: "1 año 8 meses (5 cuatrimestres)",
    modalities: ["En Línea", "Ejecutiva Sabatina"],
    rvoe: "RVOE SEP Federal: 2024-POS-1044",
    badge: "Modelado Financiero & Riesgos",
    baseMonthlyFee: 3600,
    icon: "dollar-sign",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    summary: "Conviértete en un estratega financiero indispensable: domina la ingeniería financiera, los mercados bursátiles, la valuación de empresas y la gestión de portafolios y riesgos.",
    perfilEgreso: [
      "Valuación integral de empresas, activos intangibles y proyectos de inversión complejos.",
      "Administración y cobertura de riesgos financieros (tasas, tipos de cambio, commodities).",
      "Estructuración de operaciones bursátiles, fusiones y adquisiciones (M&A).",
      "Manejo avanzado de herramientas cuantitativas y finanzas computacionales."
    ],
    campoLaboral: [
      "Dirección de Finanzas (CFO) y Tesorería Corporativa en grandes consorcios.",
      "Banca de Inversión, Casas de Bolsa y Fondos de Capital Privado (Private Equity).",
      "Calificadoras de Valores, Aseguradoras y Afores.",
      "Consultoría financiera y peritajes económicos especializados."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Análisis Financiero Avanzado y Contabilidad para Directivos", "Economía Financiera y Entorno Macroeconómico", "Matemáticas y Estadística Financiera Aplicada"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Mercados Financieros e Instrumentos de Renta Fija y Variable", "Estructura de Capital y Finanzas Corporativas", "Estrategia Fiscal y Planeación Financiera"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Instrumentos Derivados y Estrategias de Cobertura", "Valuación de Empresas, Fusiones y Adquisiciones", "Seminario de Investigación Financiera I"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Administración Integral de Riesgos (Mercado, Crédito y Operativo)", "Gestión de Carteras y Portafolios de Inversión", "Seminario de Investigación Financiera II"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Fintech, Blockchain y Nuevas Tecnologías Financieras", "Tesis o Caso de Grado Financiero"]
      }
    ]
  },
  {
    id: "mae-auditoria",
    name: "Maestría en Auditoría",
    level: "maestria",
    levelName: "Maestría",
    area: "Posgrados en Negocios y Control",
    duration: "1 año 8 meses (5 cuatrimestres)",
    modalities: ["En Línea", "Ejecutiva Sabatina"],
    rvoe: "RVOE SEP Federal: 2024-POS-1052",
    badge: "Auditoría Forense y COSO",
    baseMonthlyFee: 3600,
    icon: "shield-check",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    summary: "Especialízate en control interno, auditoría integral, prevención y detección de fraudes (auditoría forense) y dictamen conforme a las Normas Internacionales de Auditoría (NIA).",
    perfilEgreso: [
      "Aplicación rigurosa de las Normas Internacionales de Auditoría (NIA y NIF).",
      "Diseño y evaluación de sistemas de control interno bajo metodología COSO.",
      "Investigación de fraudes financieros mediante técnicas de auditoría forense.",
      "Dictaminación fiscal, financiera, de cumplimiento normativo y gubernamental."
    ],
    campoLaboral: [
      "Firmas internacionales y nacionales de auditoría (Big Four y despachos especializados).",
      "Dirección de Auditoría Interna y Contraloría General en corporativos.",
      "Órganos de fiscalización superior (ASF, secretarías de la función pública, SAT).",
      "Peritaje contable-forense en litigios mercantiles y judiciales."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Normas Internacionales de Auditoría (NIA) y Ética Profesional", "Marco Integrado de Control Interno (COSO)", "Contabilidad Financiera Avanzada y NIF"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Auditoría de Estados Financieros y Dictamen", "Auditoría Fiscal y Defensa del Contribuyente", "Gobierno Corporativo y Gestión de Riesgos Operativos"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Auditoría Forense: Detección y Prevención del Fraude", "Auditoría de Sistemas y Seguridad de la Información", "Seminario de Auditoría I"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Auditoría Gubernamental y Fiscalización del Gasto Público", "Auditoría Operacional y de Desempeño Administrativo", "Seminario de Auditoría II"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Compliance y Prevención de Lavado de Dinero (PLD)", "Defensa de Grado Profesional"]
      }
    ]
  },

  // ==========================================
  // DOCTORADOS
  // ==========================================
  {
    id: "doc-educacion",
    name: "Doctorado en Educación",
    level: "doctorado",
    levelName: "Doctorado",
    area: "Posgrados de Máximo Nivel",
    duration: "2 años (6 cuatrimestres)",
    modalities: ["En Línea", "Semipresencial Mensual"],
    rvoe: "RVOE SEP Federal: 2024-DOC-2011",
    badge: "Grado Máximo Académico",
    baseMonthlyFee: 4700,
    icon: "feather",
    image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=800&q=80",
    summary: "Alcanza la cúspide de la carrera académica. Conviértete en un investigador y líder intelectual capaz de formular modelos educativos inéditos y transformar las políticas públicas de tu país.",
    perfilEgreso: [
      "Generación de nuevo conocimiento original y transferible en el campo educativo.",
      "Diseño y evaluación de políticas públicas educativas de alcance nacional e internacional.",
      "Asesoría a organismos multilaterales (UNESCO, OCDE, OEI) e instituciones de prestigio.",
      "Dirección de cuerpos académicos de investigación y formación de nuevos investigadores."
    ],
    campoLaboral: [
      "Investigador y profesor de posgrado titular en universidades públicas y privadas.",
      "Secretarías de Educación Pública a nivel directivo y consultivo.",
      "Presidencia y dirección en consejos de acreditación y calidad educativa.",
      "Organismos internacionales de cooperación y desarrollo social."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Epistemología Contemporánea y Ciencias de la Complejidad", "Seminario de Investigación Doctoral I (Construcción del Objeto de Estudio)", "Paradigmas Emergentes en Educación Global"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Políticas Públicas y Gobernanza de los Sistemas Educativos", "Seminario de Investigación Doctoral II (Marco Teórico y Estado del Arte)", "Prospectiva e Innovación en Modelos Pedagógicos"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Diseño Metodológico Avanzado y Validación de Instrumentos", "Seminario de Investigación Doctoral III (Trabajo de Campo y Recolección)", "Sociología Crítica y Filosofía de la Educación"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Análisis de Datos Cuantitativos y Cualitativos de Alta Densidad", "Seminario de Investigación Doctoral IV (Análisis de Resultados)", "Bioética en la Investigación Social"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Publicación Científica y Arbitraje en Revistas JCR/Scopus", "Seminario de Tesis Doctoral I (Redacción del Informe Final)", "Coloquio Internacional de Investigadores"]
      },
      {
        numero: "6to Cuatrimestre",
        materias: ["Seminario de Tesis Doctoral II (Revisión Final y Disertación)", "Defensa de Grado Doctoral ante Sínodo"]
      }
    ]
  },
  {
    id: "doc-alta-direccion",
    name: "Doctorado en Alta Dirección",
    level: "doctorado",
    levelName: "Doctorado",
    area: "Posgrados de Máximo Nivel",
    duration: "2 años (6 cuatrimestres)",
    modalities: ["En Línea", "Semipresencial Mensual"],
    rvoe: "RVOE SEP Federal: 2024-DOC-2025",
    badge: "Liderazgo y Gobernanza",
    baseMonthlyFee: 4900,
    icon: "crown",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    summary: "Diseñado para presidentes, directores generales y consejeros de administración. Desarrolla investigación aplicada para la toma de decisiones estratégicas al más alto nivel corporativo y gubernamental.",
    perfilEgreso: [
      "Formulación de visiones corporativas de alcance global y gobierno corporativo sólido.",
      "Resolución de dilemas estratégicos en contextos macroeconómicos de alta complejidad.",
      "Liderazgo ético en consejos de administración y comités de gobierno empresarial.",
      "Creación de modelos de valor empresarial que conjugan rentabilidad, ética y sostenibilidad."
    ],
    campoLaboral: [
      "Presidentes ejecutivos (CEO), directores generales y miembros de consejos directivos.",
      "Asesores de gobernanza corporativa para conglomerados e instituciones financieras.",
      "Catedráticos de cátedras doctorales de negocios y alta dirección.",
      "Titulares de secretarías de estado y organismos de desarrollo económico."
    ],
    cuatrimestres: [
      {
        numero: "1er Cuatrimestre",
        materias: ["Pensamiento Estratégico y Gobernanza Corporativa Global", "Seminario de Investigación Doctoral I (Problematización en la Alta Dirección)", "Geopolítica y Geoeconomía Internacional"]
      },
      {
        numero: "2do Cuatrimestre",
        materias: ["Toma de Decisiones en Entornos de Incertidumbre Extrema", "Seminario de Investigación Doctoral II (Marco Conceptual y Estrategias)", "Liderazgo de Alto Nivel y Ética Corporativa"]
      },
      {
        numero: "3er Cuatrimestre",
        materias: ["Creación de Valor Sostenible y Criterios ESG", "Seminario de Investigación Doctoral III (Metodología y Diseño de Caso)", "Finanzas Corporativas y Estructuras de Capital Globales"]
      },
      {
        numero: "4to Cuatrimestre",
        materias: ["Disrupción Tecnológica e Inteligencia Artificial en Negocios", "Seminario de Investigación Doctoral IV (Validación del Modelo)", "Transformación Organizacional y Gestión del Riesgo Sistémico"]
      },
      {
        numero: "5to Cuatrimestre",
        materias: ["Seminario de Tesis Doctoral I (Integración de la Disertación)", "Estrategia de Alianzas, M&A y Expansión Multinacional", "Coloquio de Alta Dirección y Líderes Empresariales"]
      },
      {
        numero: "6to Cuatrimestre",
        materias: ["Seminario de Tesis Doctoral II (Disertación y Réplica Oral)", "Defensa de Grado Doctoral"]
      }
    ]
  }
];

// Opciones de becas y colegiaturas base
const SCHOLARSHIP_TIERS = [
  { minGrade: 9.5, maxGrade: 10.0, discount: 0.50, label: "50% de Beca de Excelencia", color: "emerald" },
  { minGrade: 8.5, maxGrade: 9.49, discount: 0.40, label: "40% de Beca al Mérito", color: "blue" },
  { minGrade: 8.0, maxGrade: 8.49, discount: 0.30, label: "30% de Beca Impulso", color: "amber" },
  { minGrade: 7.0, maxGrade: 7.99, discount: 0.20, label: "20% de Beca Apoyo Inicial", color: "slate" }
];
