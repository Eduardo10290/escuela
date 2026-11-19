// Base de datos de programas académicos
// Todos los programas cuentan con Validez Oficial SEP.
const ACADEMIC_PROGRAMS = [
  // ==========================================
  // LICENCIATURAS (18)
  // ==========================================
  {
    id: "lic-ciencias-comunicacion",
    name: "Licenciatura en Ciencias de la Comunicación",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Humanidades y Ciencias Sociales",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    badge: "Alta Demanda Laboral",
    summary: "Forma comunicadores capaces de crear, gestionar y difundir mensajes en medios tradicionales y digitales, con visión crítica y responsabilidad social."
  },
  {
    id: "lic-derecho",
    name: "Licenciatura en Derecho",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias Sociales",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    badge: "Alta Demanda Laboral",
    summary: "Prepárate para interpretar y aplicar el marco jurídico mexicano, litigar, asesorar y defender los derechos de personas y organizaciones."
  },
  {
    id: "lic-informatica-administrativa",
    name: "Licenciatura en Informática Administrativa",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ingeniería y Tecnología",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Integra la tecnología de la información con la gestión administrativa para optimizar procesos, datos y sistemas en las organizaciones."
  },
  {
    id: "lic-psicologia",
    name: "Licenciatura en Psicología",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias de la Salud",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    badge: "Alta Demanda Laboral",
    summary: "Comprende el comportamiento humano y acompaña procesos de evaluación, intervención y orientación psicológica en contextos clínicos, educativos y laborales."
  },
  {
    id: "lic-administracion",
    name: "Licenciatura en Administración",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias Económico-Administrativas",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Desarrolla habilidades para planear, organizar y dirigir recursos humanos, financieros y materiales con enfoque estratégico e innovador."
  },
  {
    id: "lic-contaduria",
    name: "Licenciatura en Contaduría",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias Económico-Administrativas",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Domina la contabilidad, la auditoría y las finanzas para tomar decisiones fiscales y financieras en empresas y despachos."
  },
  {
    id: "lic-criminologia-criminalistica",
    name: "Licenciatura en Criminología y Criminalística",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias Sociales y Forenses",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    badge: "Alta Demanda Laboral",
    summary: "Estudia el delito, sus causas y su prevención, así como las técnicas científicas de investigación y procesamiento de la escena del crimen."
  },
  {
    id: "lic-lengua-inglesa",
    name: "Licenciatura en Lengua Inglesa",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Humanidades e Idiomas",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Forma docentes y especialistas en el dominio del inglés con herramientas didácticas, lingüísticas y de traducción para el ámbito global."
  },
  {
    id: "lic-mercadotecnia",
    name: "Licenciatura en Mercadotecnia",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias Económico-Administrativas",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Diseña estrategias comerciales, campañas digitales y estudios de mercado para conectar marcas con sus consumidores."
  },
  {
    id: "lic-educacion",
    name: "Licenciatura en Educación",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Humanidades y Ciencias Sociales",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Forma profesionistas con liderazgo pedagógico capaces de transformar los procesos de enseñanza-aprendizaje mediante innovación curricular y tecnología educativa."
  },
  {
    id: "lic-pedagogia",
    name: "Licenciatura en Pedagogía",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Humanidades y Ciencias Sociales",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Diseña e implementa modelos educativos, estrategias didácticas y programas de orientación para distintos niveles y contextos."
  },
  {
    id: "lic-administracion-turistica",
    name: "Licenciatura en Administración Turística",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias Económico-Administrativas",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Mixta", "En Línea"],
    validez: "Validez Oficial SEP",
    summary: "Gestiona empresas y destinos turísticos con enfoque de servicio, sostenibilidad y desarrollo económico regional."
  },
  {
    id: "lic-negocios-internacionales",
    name: "Licenciatura en Negocios Internacionales",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias Económico-Administrativas",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    badge: "Alta Demanda Laboral",
    summary: "Desarrolla estrategias de comercio global, exportación e inversión para empresas que compiten en mercados internacionales."
  },
  {
    id: "lic-ciencias-forenses",
    name: "Licenciatura en Ciencias Forenses",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias de la Salud y Forenses",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea"],
    validez: "Validez Oficial SEP",
    summary: "Aplica métodos científicos al análisis de evidencias y a la resolución de casos, con rigor técnico y respeto a los derechos humanos."
  },
  {
    id: "lic-administracion-publica-ciencias-politicas",
    name: "Licenciatura en Administración Pública y Ciencias Políticas",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias Sociales",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Forma servidores públicos y analistas capaces de diseñar políticas, gestionar instituciones y fortalecer la vida democrática."
  },
  {
    id: "lic-comercio-internacional-aduanas",
    name: "Licenciatura en Comercio Internacional y Aduanas",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias Económico-Administrativas",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Especialízate en logística, clasificación arancelaria y normatividad aduanera para operaciones de importación y exportación."
  },
  {
    id: "lic-enfermeria",
    name: "Licenciatura en Enfermería",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias de la Salud",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial"],
    validez: "Validez Oficial SEP",
    badge: "Alta Demanda Laboral",
    summary: "Brinda cuidado integral a la persona, familia y comunidad, con base científica, humanista y ética en instituciones de salud."
  },
  {
    id: "lic-trabajo-social",
    name: "Licenciatura en Trabajo Social",
    level: "licenciatura",
    levelName: "Licenciatura",
    area: "Ciencias Sociales",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea"],
    validez: "Validez Oficial SEP",
    note: "Por confirmar",
    summary: "Interviene en problemáticas sociales para promover el bienestar, la inclusión y el desarrollo de personas y comunidades."
  },

  // ==========================================
  // MAESTRÍAS (5)
  // ==========================================
  {
    id: "mae-educacion",
    name: "Maestría en Educación",
    level: "maestria",
    levelName: "Maestría",
    area: "Humanidades y Ciencias Sociales",
    duration: "2 años (6 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Profundiza en la innovación educativa, la gestión escolar y la investigación para liderar proyectos de mejora académica."
  },
  {
    id: "mae-ciencias-educacion",
    name: "Maestría en Ciencias de la Educación",
    level: "maestria",
    levelName: "Maestría",
    area: "Humanidades y Ciencias Sociales",
    duration: "2 años (6 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Forma investigadores y especialistas capaces de analizar, diseñar y evaluar modelos pedagógicos con rigor científico."
  },
  {
    id: "mae-administracion",
    name: "Maestría en Administración (MBA)",
    level: "maestria",
    levelName: "Maestría",
    area: "Ciencias Económico-Administrativas",
    duration: "2 años (6 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    badge: "Alta Demanda Laboral",
    summary: "Desarrolla competencias directivas para la toma de decisiones estratégicas, la gestión del talento y la competitividad empresarial."
  },
  {
    id: "mae-finanzas",
    name: "Maestría en Finanzas",
    level: "maestria",
    levelName: "Maestría",
    area: "Ciencias Económico-Administrativas",
    duration: "2 años (6 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Especialízate en inversiones, riesgo, valuación y planeación financiera para dirigir áreas financieras de alto impacto."
  },
  {
    id: "mae-auditoria",
    name: "Maestría en Auditoría",
    level: "maestria",
    levelName: "Maestría",
    area: "Ciencias Económico-Administrativas",
    duration: "2 años (6 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Fortalece el control interno, la auditoría financiera y el cumplimiento normativo en organizaciones públicas y privadas."
  },

  // ==========================================
  // DOCTORADOS (2)
  // ==========================================
  {
    id: "doc-educacion",
    name: "Doctorado en Educación",
    level: "doctorado",
    levelName: "Doctorado",
    area: "Humanidades y Ciencias Sociales",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Forma investigadores de alto nivel capaces de generar conocimiento y liderar transformaciones en el sistema educativo."
  },
  {
    id: "doc-alta-direccion",
    name: "Doctorado en Alta Dirección",
    level: "doctorado",
    levelName: "Doctorado",
    area: "Ciencias Económico-Administrativas",
    duration: "3 años (9 cuatrimestres)",
    modalities: ["Presencial", "En Línea", "Ejecutiva Sabatina"],
    validez: "Validez Oficial SEP",
    summary: "Desarrolla pensamiento estratégico y liderazgo para dirigir organizaciones complejas con visión global y responsabilidad social."
  }
];
