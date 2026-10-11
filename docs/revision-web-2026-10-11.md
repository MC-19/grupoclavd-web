# Revisión de web y medición — 11 de octubre de 2026

## Producción comprobada antes de editar

- El listado público enlaza a las 12 fichas de proyectos.
- Las 12 fichas responden HTTP 200 y contienen los dos apartados ampliados del código publicado.
- Contacto tiene el servicio de Web3Forms configurado y el botón de envío habilitado.
- Chromium sobre la web pública: Google no envía solicitudes de medición antes de aceptar el consentimiento; el éxito **simulado** del proveedor genera un `generate_lead` en la cola de medición.
- WhatsApp, teléfono y email generan respectivamente `click_whatsapp`, `click_phone` y `click_email`, una vez por clic comprobado. Se impidió abrir los canales externos; no se enviaron mensajes ni se realizaron llamadas.
- Presupuesto transfiere el desglose a Contacto sin emitir un lead antes del envío final.
- Las solicitudes de Google y del proveedor se interceptaron. No se verificó la entrega de un email ni la recepción de un evento en los servidores de GA4.

## Hallazgo del evento antiguo

Propiedad GA4 conectada: `466683261`; etiqueta: `G-9JF2L5RGN9`.

Windsor.ai devuelve para el 13 de septiembre–10 de octubre de 2026 dos `ads_conversion_Contactar_1`, ambos registrados como eventos clave: uno el 2 de octubre y otro el 7 de octubre, en `/contacto/`. No devuelve `generate_lead` en ese periodo.

La etiqueta pública servida por Google contiene esta regla de creación:

```text
nuevo evento: ads_conversion_Contactar_1
evento de origen: page_view
condición: page_path empieza por /contacto
```

Se confirmó también en navegador que visitar Contacto produce el evento antiguo antes de enviar el formulario. Por tanto, esos registros representan visitas a Contacto, no solicitudes recibidas. El evento antiguo no se crea en el código de Astro.

La configuración pública habilita también la medición automática de formularios (`form_start` / `form_submit`). Esos eventos describen interacciones o intentos; no deben sumarse a `generate_lead` para contar consultas satisfactorias.

Windsor ofrece lectura de GA4, pero no una acción para editar estas reglas. No se modificó la configuración de la cuenta ni el evento antiguo.

## Cambios locales preparados

### Contacto, presupuesto y consentimiento

- Se mantiene la condición de éxito: respuesta HTTP satisfactoria y `success === true` del proveedor.
- Se bloquean envíos concurrentes y se genera un ID independiente por envío satisfactorio. La medición rechaza repeticiones del mismo ID.
- `lead_source` distingue `contact` y `quote`. No se envían a Analytics nombres, emails, teléfonos ni contenido de los mensajes desde el evento personalizado.
- El mensaje de éxito y el reseteo del formulario no dependen de Analytics. Un error de medición no provoca un nuevo intento de envío.
- Google se carga solo con consentimiento. La retirada activa `ga-disable-G-9JF2L5RGN9`, deniega los consentimientos de Google y elimina las cookies `_ga` / `_ga_*` accesibles del dominio.
- La decisión se conserva en memoria si el navegador bloquea el almacenamiento. Su retirada se sincroniza entre pestañas.
- Se evita volver a instalar listeners, volver a cargar la etiqueta o repetir su configuración en la misma página.
- Google Signals y las señales de personalización publicitaria quedan deshabilitados en la configuración local.
- Si `sessionStorage` falla, el presupuesto utiliza el fragmento de la URL para trasladar el desglose. La ubicación y el referente enviados por nuestro código a GA4 omiten fragmentos y los antiguos parámetros `asunto` y `mensaje`.
- Los clics de WhatsApp, teléfono y email mantienen sus eventos propios y requieren consentimiento analítico. No se contabilizan como envíos satisfactorios.

### SEO local y contenido

- Se incorpora de forma natural la base en Elche, la atención a Alicante y la cobertura nacional en home, Contacto y servicios principales.
- Se mantienen los títulos comerciales. El título de Nosotros cambia para describir la historia y el equipo que ahora presenta esa página.
- Nosotros presenta el trato directo, la coordinación del encargo y su aplicación final. Presenta el origen en 2019 y la trayectoria previa del fundador en un bloque propio de historia, sin tarjetas de funciones, referencias a formación ni número de personas. La forma de trabajar se conecta con proyectos reales y omite instrucciones de formulario y condiciones de instalación o retirada. Las fotografías de taller y del stand de Mila, junto con las fichas de Mila y Bistrea, respaldan el contenido.
- Se explican el trabajo en taller y el montaje sin inventar maquinaria, medidas, experiencia adicional, colaboradores ni testimonios.
- No se añade una dirección de taller, mapa, horario ni atención presencial. El domicilio ya existente en la información legal no se presenta como local visitable.
- Se mantiene `Organization`, con fundador, año y áreas atendidas. No se crea un `LocalBusiness` que presente el domicilio familiar como taller abierto al público.

### Enlaces internos

- Las 13 páginas de servicios y las dos páginas de soluciones incluyen enlaces a fichas concretas de proyectos, además de presupuesto.
- Nosotros enlaza con casos que ilustran las distintas formas de trabajar.
- Las 12 fichas de proyectos enlazan con servicios y presupuesto. Alcampo añade el servicio de instalación, documentado en su imagen de montaje.
- Cuando no hay un caso confirmado del material específico —por ejemplo textiles— se muestran referencias de procesos o aplicaciones relacionados bajo un encabezado explícito, sin atribuir ese material al proyecto.
- Se reutilizan las tarjetas, botones, tipografía, colores y espaciados existentes.

## Pruebas locales

- `npm run validate`: análisis estático y compilación de producción.
- `npm run test:conversions -- --google-tag /tmp/clavd-production-gtag.js`: batería con Chromium y una copia de la etiqueta pública; todos los destinos externos interceptados.
- 17 escenarios: formulario sin consentimiento; rechazo persistido; campos inválidos; HTTP fallido; `success` falso; JSON inválido; fallo de red; reintentos; doble envío; ID repetido; segundo envío legítimo; fallo de Analytics; retirada y reaceptación; cookies GA; tres canales de contacto; retirada entre pestañas; presupuesto normal y con almacenamiento bloqueado; presentación móvil y comprobación de home, Nosotros, servicios y proyecto en móvil y escritorio.
- Comprobación de las 47 páginas generadas: un H1 por página y enlaces internos con destino existente.
- Todas las páginas de servicios tienen enlaces a fichas específicas. Todas las fichas tienen enlaces a servicios y presupuesto.

Estas pruebas confirman el comportamiento del código y del navegador. No prueban recepción de correos, autorización real de la clave Web3Forms ni ingestión/deduplicación posterior en los servidores de Google.

## Pendiente fuera del código

1. Publicar los cambios locales y repetir las comprobaciones de consentimiento y conversiones contra el nuevo despliegue.
2. En Administración de GA4, revisar la regla identificada de `ads_conversion_Contactar_1` y retirar la conversión basada en visitas a `/contacto`. Desmarcarla como evento clave para que no se cuente junto a los leads. Conservar la lectura histórica como visitas, no presupuestos.
3. Marcar el `generate_lead` enviado por el código como evento clave, con recuento por evento. No crear otra regla basada en clics, vistas o `form_submit`, ni un segundo disparador del mismo `generate_lead`.
4. Si existe una conversión de Google Ads enlazada al evento antiguo, revisar esa vinculación antes de retirarla o sustituirla. No se comprobó la configuración de Google Ads.
5. Realizar un envío real controlado con consentimiento, verificar su recepción por email y comprobar en Tiempo real/DebugView y posteriormente en informes que llega un solo `generate_lead`. No se ha enviado una consulta ficticia al negocio.
6. Revisar los filtros de tráfico interno y de desarrolladores de GA4 para separar pruebas futuras. No puede clasificarse el tráfico histórico como interno únicamente por los recuentos del informe.

Referencias oficiales: [privacidad y desactivación de Google Analytics](https://developers.google.com/tag-platform/security/guides/privacy), [creación y modificación de eventos](https://support.google.com/analytics/answer/12844695), [eventos clave](https://support.google.com/analytics/answer/13965727).
