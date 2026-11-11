# 🎓 Portal Universitario — Instituto Universitario L.A.

Plataforma web institucional y comercial de alta conversión para el **Instituto Universitario L.A.** — *La puerta al éxito*.

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
   - Badges de confianza: RVOE SEP, titulación directa y contacto directo por WhatsApp.

2. **Explorador Interactivo de Carreras:**
   - Filtros por nivel: *Todos (12)*, *Licenciaturas (5)*, *Maestrías (5)*, *Doctorados (2)*.
   - Buscador en tiempo real por nombre de carrera, área o materias.
   - Tarjetas modernas con fotografía, duración, modalidades y botón **"Solicitar Informes por WhatsApp"** que envía el programa elegido directamente al asesor.

3. **Sección de Inscripción en 4 pasos:**
   - **Elige tu nivel:** Revalidación · Licenciatura, Maestría o Doctorado.
   - **Calcula tu colegiatura:** solicitud directa por WhatsApp según el nivel elegido (sin mostrar precios en la página).
   - **Documentos en PDF:** descarga de la lista oficial 2026-2027 y consulta por nivel.
   - **Fechas disponibles:** nuevos inicios cada 3 meses; la primera fecha es en diciembre.

4. **Sección "Un solo examen y revalidación":**
   - Explica el ingreso mediante un solo examen de admisión y la revalidación de materias para quienes ya cursaron estudios previos.

5. **Galería Institucional:**
   - Muestra las piezas promocionales del Instituto (Licenciatura, Maestría y Doctorado) con apertura de cada imagen en tamaño completo.

6. **Integración con WhatsApp y Teléfono:**
   - Botón flotante de WhatsApp con efecto de pulso.
   - Al enviar cualquier formulario, se genera automáticamente un enlace de WhatsApp con el mensaje estructurado (nombre, programa, modalidad, promedio y contacto) listo para el equipo de admisiones.
   - Teléfono fijo enlazado con `tel:` para llamar directo desde el celular.

7. **CRM Local de Aspirantes (Panel de Control de Prospectos):**
   - Guarda automáticamente cada registro en el navegador (`localStorage`).
   - Accesible desde el botón *"Portal Aspirantes (CRM)"* en la barra superior o pie de página.
   - Permite visualizar la lista completa de prospectos registrados.
   - **Botón de exportación a archivo CSV (Excel)** con un solo clic.

---

## 💻 ¿Cómo abrir y ver la página?

### Forma 1: Directo en tu navegador (Sin instalar nada)
Haz doble clic sobre el archivo `index.html` de esta carpeta para que se abra en Google Chrome, Microsoft Edge, Safari o tu navegador preferido.

> La página ya no depende de internet: Tailwind, Lucide, las fuentes y las imágenes están guardadas localmente en las carpetas `vendor/`, `img/` y `docs/`.

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

- **Cambiar el nombre de la institución o el eslogan:** Edita `index.html` en el `<header>` y el `<footer>`. El nombre actual es *Instituto Universitario L.A.* y el eslogan *La puerta al éxito*.
- **Cambiar el logo de la escuela:** Reemplaza el archivo `img/logo-instituto-al.png` (se usa en el encabezado y el pie de página).
- **Cambiar el icono de la escuela (favicon):** Reemplaza los archivos `favicon-16x16.png`, `favicon-32x32.png`, `favicon.ico` y `apple-touch-icon.png` en la raíz de la carpeta. Todos se generan a partir del logo institucional.
- **Cambiar la lista de documentos:** Reemplaza `docs/lista-documentos-2026-2027.pdf` y actualiza el texto de la sección de inscripción en `index.html` si cambian los requisitos.
- **Cambiar las imágenes promocionales:** Reemplaza los archivos `img/promo-01.jpg` a `img/promo-06.jpg` en la sección de galería.
- **Cambiar los teléfonos:**
  - Teléfono fijo: busca `tel:+527221328421` y el texto `722 132 8421`.
  - WhatsApp: busca `527226119681` en `index.html` y en `js/app.js` (formato internacional sin signos: `52` + número).
- **Añadir o modificar materias:** Abre el archivo `js/programs-data.js`. Cada programa tiene sus cuatrimestres y datos fácilmente editables. La página no muestra precios ni colegiaturas.
