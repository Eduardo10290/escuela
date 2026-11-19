# 🎓 Portal Universitario — Instituto Universitario A.L.

Plataforma web institucional del **Instituto Universitario A.L.** — *La puerta al éxito*.

---

## 📚 Oferta Académica Incluida (25 Programas con Validez Oficial SEP)

### 🎓 Licenciaturas (18):
1. Ciencias de la Comunicación
2. Derecho
3. Informática Administrativa
4. Psicología
5. Administración
6. Contaduría
7. Criminología y Criminalística
8. Lengua Inglesa
9. Mercadotecnia
10. Educación
11. Pedagogía
12. Administración Turística (mixta)
13. Negocios Internacionales
14. Ciencias Forenses
15. Administración Pública y Ciencias Políticas
16. Comercio Internacional y Aduanas
17. Enfermería
18. Trabajo Social *(por confirmar)*

### 🏅 Maestrías (5):
1. Maestría en Educación
2. Maestría en Ciencias de la Educación
3. Maestría en Administración (MBA)
4. Maestría en Finanzas
5. Maestría en Auditoría

### 🏛️ Doctorados (2):
1. Doctorado en Educación
2. Doctorado en Alta Dirección

Todos los programas se muestran con **Validez Oficial SEP**.

---

## 🚀 Características y Módulos del Sistema

1. **Hero de Alta Conversión (Captura de Aspirantes):**
   - Cintillo con promoción de nuevo ingreso.
   - Formulario rápido en el banner principal para recibir prospectos de inmediato.
   - Mensajes de confianza: Validez Oficial SEP, titulación directa y contacto por WhatsApp.

2. **Oferta Académica en Lista:**
   - Los programas se muestran como una lista de texto agrupada por nivel: **Licenciaturas**, **Maestrías** y **Doctorados**.
   - Cada programa muestra duración, modalidades y su Validez Oficial SEP.
   - Botón **"Solicitar informes"** que abre WhatsApp con el programa elegido ya escrito en el mensaje.

3. **Sección de Inscripción en 4 pasos:**
   - **Elige tu nivel:** Revalidación · Licenciatura, Maestría o Doctorado.
   - **Calcula tu colegiatura:** solicitud directa por WhatsApp según el nivel elegido (sin mostrar precios en la página).
   - **Documentos en PDF:** descarga de la lista oficial 2026-2027 y consulta por nivel.
   - **Fechas disponibles:** nuevos inicios cada 3 meses; la primera fecha es en diciembre.

4. **Sección "Un solo examen y revalidación":**
   - Explica el ingreso mediante un solo examen de admisión y la revalidación de materias para quienes ya cursaron estudios previos.

5. **Galería Institucional:**
   - Muestra la pieza de titulación (Licenciatura, Maestría y Doctorado) y fotografías reales de las aulas e instalaciones, con apertura de cada imagen en tamaño completo.

6. **Ubicación:**
   - Mapa de Google integrado al final de la página para que los aspirantes localicen las instalaciones.

7. **Integración con WhatsApp y Teléfono:**
   - Botón flotante de WhatsApp con efecto de pulso.
   - Al enviar cualquier formulario, se genera automáticamente un enlace de WhatsApp con el mensaje estructurado (nombre, programa, modalidad, promedio y contacto) listo para el equipo de admisiones.
   - Teléfono fijo enlazado con `tel:` para llamar directo desde el celular.

---

## 💻 ¿Cómo abrir y ver la página?

### Forma 1: Directo en tu navegador (Sin instalar nada)
Haz doble clic sobre el archivo `index.html` de esta carpeta para que se abra en Google Chrome, Microsoft Edge, Safari o tu navegador preferido.

> La página funciona sin internet: Tailwind, Lucide, las fuentes y las imágenes están guardadas localmente en las carpetas `vendor/`, `img/` y `docs/`. El único elemento externo es el mapa de Google.

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

- **Cambiar el nombre de la institución o el eslogan:** Edita `index.html` en el `<header>` y el `<footer>`. El nombre actual es *Instituto Universitario A.L.* y el eslogan *La puerta al éxito*.
- **Cambiar el logo de la escuela:** Reemplaza el archivo `img/logo-instituto-al.png` (se usa en el encabezado y el pie de página).
- **Cambiar el icono de la escuela (favicon):** Reemplaza los archivos `favicon-16x16.png`, `favicon-32x32.png`, `favicon.ico` y `apple-touch-icon.png` en la raíz de la carpeta. Todos se generan a partir del logo institucional.
- **Cambiar la lista de documentos:** Reemplaza `docs/lista-documentos-2026-2027.pdf` y actualiza el texto de la sección de inscripción en `index.html` si cambian los requisitos.
- **Cambiar las imágenes de la galería:** Reemplaza `img/promo-titulacion.jpg` (pieza de titulación) y las fotografías `img/aula-clase-ingles.jpg`, `img/aula-clase-comunicacion.jpg`, `img/aula-01.jpg`, `img/aula-02.jpg` y `img/aula-03.jpg` en la sección de galería.
- **Cambiar los teléfonos:**
  - Teléfono fijo: busca `tel:+527221328421` y el texto `722 132 8421`.
  - WhatsApp: busca `527226119681` en `index.html` y en `js/app.js` (formato internacional sin signos: `52` + número).
- **Cambiar la ubicación:** En `index.html`, busca la sección `id="ubicacion"` y reemplaza el `src` del `iframe` por el enlace de Google Maps que corresponda.
- **Agregar o modificar programas:** Abre el archivo `js/programs-data.js`. Cada programa incluye nombre, nivel, duración, modalidades, validez y un resumen breve. La página no muestra precios ni colegiaturas.
