# 🎓 Portal Universitario Moderno (Inspirado en UTC)

Plataforma web institucional y comercial de alta conversión para escuela/universidad, diseñada con los estándares modernos de **Universidad Tres Culturas (utc.mx)** y universidades líderes en México.

---

## 📚 Oferta Académica Incluida (12 Programas con Validez Oficial SEP)

### 🎓 Licenciaturas (5):
1. **Licenciatura en Educación** (RVOE Federal 2024-EDU-0418)
2. **Licenciatura en Pedagogía** (RVOE Federal 2024-PED-0512)
3. **Licenciatura en Psicología** (RVOE Federal 2024-PSI-0630)
4. **Licenciatura en Administración** (RVOE Federal 2024-ADM-0711)
5. **Licenciatura en Lengua Inglesa** (RVOE Federal 2024-ING-0822)

### 🏅 Maestrías (5):
1. **Maestría en Educación** (RVOE Federal 2024-POS-1015)
2. **Maestría en Ciencias de la Educación** (RVOE Federal 2024-POS-1019)
3. **Maestría en Administración (MBA)** (RVOE Federal 2024-POS-1030)
4. **Maestría en Finanzas** (RVOE Federal 2024-POS-1044)
5. **Maestría en Auditoría** (RVOE Federal 2024-POS-1052)

### 🏛️ Doctorados (2):
1. **Doctorado en Educación** (RVOE Federal 2024-DOC-2011)
2. **Doctorado en Alta Dirección** (RVOE Federal 2024-DOC-2025)

---

## 🚀 Características y Módulos del Sistema

1. **Hero de Alta Conversión (Captura de Aspirantes):**
   - Cintillo con promoción de nuevo ingreso.
   - Formulario rápido en el banner principal para recibir prospectos de inmediato.
   - Badges de confianza: RVOE SEP, hasta 50% de beca, titulación directa.

2. **Explorador Interactivo de Carreras:**
   - Filtros por nivel: *Todos (12)*, *Licenciaturas (5)*, *Maestrías (5)*, *Doctorados (2)*.
   - Buscador en tiempo real por nombre de carrera, área o materias.
   - Tarjetas modernas con fotografía de alta resolución, duración, modalidades y botón de plan de estudios.

3. **Modal de Ficha Técnica y Plan de Estudios Completo:**
   - Al hacer clic en "Plan de Estudios" se despliega una ventana con:
     - Asignaturas organizadas por cuatrimestre.
     - Perfil de Egreso y competencias.
     - Campo Laboral y áreas donde podrá trabajar el egresado.
     - Botón directo para apartar beca para esa carrera en específico.

4. **Simulador / Calculadora Interactiva de Becas:**
   - Selección de nivel y carrera.
   - Selector de modalidad (Presencial, Ejecutiva Sabatina, 100% En Línea con descuento adicional).
   - Control deslizante interactivo de promedio (7.0 a 10.0).
   - Cálculo automático en tiempo real de:
     - Colegiatura regular.
     - Porcentaje de beca asignada (20%, 30%, 40% o 50%).
     - Colegiatura final neta mensual.
     - Ahorro anual estimado.
   - Botón *"Apartar y Congelar Beca"* que precarga todos los datos en el formulario de inscripción.

5. **Integración con WhatsApp:**
   - Botón flotante siempre visible en la esquina inferior derecha con efecto de pulso.
   - Al enviar cualquier formulario, se genera automáticamente un enlace de WhatsApp con el mensaje estructurado con el nombre, programa, modalidad y promedio del aspirante listo para el equipo de admisiones.

6. **CRM Local de Aspirantes (Panel de Control de Prospectos):**
   - Guarda automáticamente cada registro en el navegador (`localStorage`).
   - Accesible desde el botón *"Portal Aspirantes (CRM)"* en la barra superior o pie de página.
   - Permite visualizar la lista completa de prospectos registrados.
   - **Botón de exportación a archivo CSV (Excel)** con un solo clic.

---

## 💻 ¿Cómo abrir y ver la página?

### Forma 1: Directo en tu navegador (Sin instalar nada)
Haz doble clic sobre el archivo `index.html` en la carpeta `Pagina de esceula` para que se abra en Google Chrome, Microsoft Edge, Safari o tu navegador preferido.

### Forma 2: Con servidor local (Opcional)
Si tienes Node.js instalado, puedes ejecutar en la terminal de esta carpeta:
```bash
npm start
```
O bien:
```bash
npx serve .
```

---

## 🛠️ ¿Cómo personalizar la información?

- **Cambiar el nombre de la Universidad o Logo:** Edita `index.html` en las etiquetas `<header>` y `<footer>`.
- **Cambiar el número de WhatsApp de admisiones:** Busca `"525512345678"` en `index.html` y en `js/app.js` y reemplázalo por el número real con clave de país (ej. `52155...`).
- **Añadir o modificar materias y costos:** Abre el archivo `js/programs-data.js`. Cada programa tiene sus cuatrimestres, colegiatura base y datos fácilmente editables.
