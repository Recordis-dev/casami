# Casami Auto - Ecosistema Digital

Este proyecto es una modernización del sistema de gestión y ventas de Casami Auto, integrando E-Commerce, Punto de Venta (POS), ERP de inventario y CRM estratégico.

## 🚀 Despliegue en GitHub Pages

Para que el sitio sea visible en `https://recordis-dev.github.io/casami/`, sigue estos pasos:

### Opción A: Automatizado (Recomendado)
He incluido un flujo de trabajo de GitHub Actions que despliega automáticamente el sitio cada vez que haces push a `main`.
1. Ve a la pestaña **Settings** de tu repositorio en GitHub.
2. En el menú lateral, selecciona **Pages**.
3. En la sección **Build and deployment > Source**, cambia de "Deploy from a branch" a **"GitHub Actions"**.
4. ¡Listo! La próxima vez que subas cambios (o si ejecutas manualmente el workflow en la pestaña **Actions**), el sitio se actualizará.

### Opción B: Manual
Si prefieres desplegar manualmente desde tu terminal:
1. Ejecuta `npm install`.
2. Ejecuta `npm run deploy`.
3. En GitHub **Settings > Pages**, asegúrate de que el origen sea "Deploy from a branch" y la rama seleccionada sea **`gh-pages`**.

## 🛠️ Estructura del Proyecto

- `src/components/`: Contiene las vistas modulares (Ecommerce, Tablet, ERP, Admin, Proposal).
- `src/data/`: Datos simulados centralizados.
- `vite.config.js`: Configurado con `base: '/casami/'` para compatibilidad con GitHub Pages.

## 📄 Documentación Incluida

- `devlog.md`: Registro de desarrollo.
- `gap_analysis.md`: Análisis de brechas para llegar a producción real.
- `implementation_roadmap.md`: Plan de trabajo por fases.
- `insights.md`: Observaciones estratégicas sobre el ecosistema.
