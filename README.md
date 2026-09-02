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
