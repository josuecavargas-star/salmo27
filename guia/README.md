# Guía del Proyecto — Salmo 27 Web

## Información del Proyecto

| Campo | Detalle |
|---|---|
| **Nombre** | Salmo 27 |
| **Tipo** | Librería cristiana |
| **Servicios** | Venta de Biblias, literatura cristiana, artículos cristianos para regalo |
| **Ubicación** | Liberia, Guanacaste, Costa Rica |
| **Logo** | `img/logoprincipal.png` |
| **Paleta de colores** | Verde oscuro, verde azulado, beige, verde musgo, malva, gris azulado claro |

## Paleta de Colores

| Nombre | Hex | Uso |
|---|---|---|
| Verde oscuro / azul noche | `#273A39` | Primary (header, footer, texto principal) |
| Verde azulado / petróleo medio | `#3B5E5B` | Accent, botones, enlaces hover |
| Beige / crema | `#EAE7D4` | Background de la página |
| Verde musgo suave | `#818A7D` | Background de secciones alternas |
| Verde oliva / grisáceo | `#838C7D` | Texto secundario |
| Malva / rosa viejo | `#7D6B73` | Highlights, notas de formulario |
| Gris azulado claro | `#C9D2D0` | Bordes, separadores |

## Estructura de Archivos

```
salmo27/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos con la paleta de colores
├── js/
│   └── main.js         # Funcionalidades (menú móvil, formulario, año dinámico)
├── img/
│   ├── logoprincipal.png
│   ├── paleta.jpg
│   └── salmo 27 logos/
│       ├── Portada Facebook - Color sólido.png
│       ├── Portada facebook.psd
│       ├── Portada-facebook.jpg
│       ├── Salmo 27 - A color - Sin Fondo.png
│       ├── ... (más logos en PNG, PSD, varios colores)
│       └── Salmo27- Presentación Elegante 2.png
└── guia/
    └── README.md       # Esta guía
```

## Secciones de la Página Web (`index.html`)

1. **Header** — Logo + navegación (Inicio, Catálogo, Categorías, Nosotros, Contacto). Menú responsive con toggle para móviles.
2. **Hero** — Banner principal con título, descripción y botones de acción. Fondo degradado primario → accent.
3. **Catálogo de Facebook** — Imagen destacada que enlaza a la página de Facebook.
4. **Categorías** — Grid de 6 tarjetas: Biblias, Literatura cristiana, Artes y decoración, Música cristiana, Artículos de oración, Regalos cristianos.
5. **Sobre nosotros** — Texto institucional + estadísticas.
6. **Contacto** — Información de contacto + formulario (nombre, email, mensaje).
7. **Footer** — Logo, enlaces a redes sociales, año dinámico y texto institucional.

## Tecnologías

- **HTML5** — Estructura semántica, responsive con `viewport`.
- **CSS3** — Variables CSS personalizadas, Grid, Flexbox, media queries (mobile-first + tablet).
- **JavaScript (vanilla)** — `main.js` con IIFE, toggle de menú móvil, año automático en footer, validación de formulario.

## Estado del Repositorio Git

- **Rama principal**: `main`
- **Commit inicial**: `511398e` — "feat: crear sitio web de Salmo 27 librería cristiana"
- **Remote**: Pendiente de configurar (el usuario ya creó el repositorio en GitHub).

## Próximos Pasos (pendientes)

1. **Configurar el remote de GitHub**:
   ```bash
   git remote add origin https://github.com/USUARIO/salmo27.git
   git push -u origin main
   ```
2. **Completar enlaces de redes sociales** — El footer e íconos usan URLs de placeholder. Pendiente de reemplazar con las redes reales del cliente.
3. **Verificar el enlace de catálogo de Facebook** — Actualmente apunta a `https://www.facebook.com/Salmo27Libreria` como placeholder.
4. **Deploy en Netlify** — El proyecto está ubicado en `C:\Users\josue\Desktop\netlify\salmo27` lo que sugiere intención de desplegar en Netlify.

## Cómo Probar Localmente

1. Desde la carpeta `salmo27/`, abrir `index.html` en el navegador.
2. El sitio no requiere dependencias externas (no usa frameworks ni npm).
3. Todas las imágenes, CSS y JS son referenciados con rutas relativas.

## Notas

- No se usan librerías externas (ni Bootstrap, ni jQuery, ni Tailwind).
- Las imágenes de logoprincipal.png se usan con `filter: brightness(0) invert(1)` en el header/footer para adaptarse al fondo oscuro.
- La validación de formulario es solo frontend (no hay backend configurado).
