# GrupoClavD Web

Sitio corporativo de GrupoClavD construido con Astro, TypeScript y Tailwind CSS.

## Desarrollo

Requiere Node.js 22.12 o posterior.

```sh
npm install
npm run dev
```

## Estructura

```text
/
├── public/          Recursos públicos
├── src/assets/      Imágenes procesadas por Astro
├── src/components/  Componentes de interfaz y secciones
├── src/data/        Navegación y datos compartidos
├── src/layouts/     Layouts globales
├── src/pages/       Rutas del sitio
└── src/styles/      Estilos globales
```

Las rutas compartidas deben declararse en `src/data/navigation.ts` para evitar diferencias entre el header, el footer y el contenido.

## Comprobaciones

Antes de entregar cambios:

```sh
npm run validate
```

Este comando ejecuta el análisis estático de Astro y genera la compilación de producción.

## Comandos

| Comando | Acción |
| :-- | :-- |
| `npm run dev` | Inicia el servidor local |
| `npm run check` | Comprueba Astro y TypeScript |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run validate` | Ejecuta check y build |
| `npm run preview` | Previsualiza la compilación |

## Pruebas de contacto y conversiones

Las pruebas usan la compilación de `dist/` y Chromium. Interceptan Web3Forms y los servicios de analítica: no envían mensajes ni datos de prueba a GA4.

```sh
npx playwright install chromium
npm run validate
npm run test:conversions
```

El formulario debe estar configurado en la compilación con `PUBLIC_WEB3FORMS_ACCESS_KEY`. Para estas pruebas puede usarse una clave ficticia exclusivamente en el build local, ya que el proveedor se simula. No publicar esa compilación de prueba.

La opción `--google-tag /ruta/gtag.js` permite ejecutar la misma batería con una copia de la etiqueta pública de Google en lugar del script vacío usado por defecto. Sus peticiones siguen interceptadas; esto prueba el comportamiento del navegador, no la recepción en GA4.

El diagnóstico de producción y los ajustes pendientes en GA4 se recogen en [docs/revision-web-2026-10-11.md](docs/revision-web-2026-10-11.md).
