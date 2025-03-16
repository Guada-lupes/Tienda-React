TiendaReact

👋  Hola!
Este proyecto consiste en un carrito de compra para una tienda tecnológica. Está diseñado con la metodología Mobile First, lo que lo hace responsivo, y utiliza React, CSS y HTML.

🚀  Mejoras realizadas en este fork

Se añadió un spinner de carga para mejorar la experiencia del usuario al esperar la carga de productos.

Se optimizó la navegación para mejorar la fluidez en dispositivos móviles.

Estructura del proyecto

TiendaReact
│
├── index.html: Contiene el <div> root y el script que apunta a main.jsx.
├── README.md: Documento de información sobre el proyecto.
│
└── SRC
    ├── Main.jsx: Configura la raíz de la aplicación enlazando el elemento root HTML y utilizando:
    │             - `Provider` de Redux
    │             - `BrowserRouter` para el enrutado
    │             - La store con el reducer
    │             Envuelve el componente `App` con estos elementos.
    │
    ├── App.jsx: Configura el layout principal para incluir el header y footer en todas las páginas.
    │            Define las siguientes 4 rutas, envueltas en el contexto `ProductosProvider`:
    │            - Inicio
    │            - Categorías
    │            - Detalles de producto
    │            - Carrito
    │
    ├── pages/: Contiene las dos páginas principales:
    │           - `Inicio`
    │           - `Carrito`
    │
    ├── componentes/: Incluye 9 componentes, incluyendo el nuevo **spinner de carga**.
    │
    ├── contextos/: Contiene un contexto para los productos de la tienda,
    │               facilitando el acceso a los datos desde cualquier componente.
    │
    ├── customHooks/: Incluye un hook personalizado para el manejo del menú desplegable.
    │
    ├── features/: Gestión del estado del carrito con Redux y Toolkit.
    │              El archivo `CarritoSlice.jsx` maneja los estados.
    │
    ├── store/: Contiene la store donde se guarda el único reducer del proyecto.
    │
    ├── services/: Incluye el array con los datos de los productos.
    │
    ├── style/: Archivos de estilos asociados a cada componente.
    

✨ Cómo navegar por la aplicación

Header:

Contiene el logo con el nombre de la tienda: "Lupas's". Haz clic en el logo para regresar al inicio.

En la esquina derecha del header encontrarás el icono del carrito, que cambiará de color al seleccionar tu primer producto.

Página principal:

Se despliegan los productos disponibles en la tienda.

Debajo del header, a la izquierda, encontrarás un menú desplegable con categorías para filtrar tu búsqueda.

Detalles de producto:

Haz clic en "Detalles" para obtener más información sobre un producto específico.

Carrito:

Haz clic en el icono del carrito para ver los productos seleccionados.

🔧 Problemas pendientes por resolver

Ocultar el botón "Volver" al abrir el menú desplegable:
Este es un pequeño fallo que se corregirá en futuras actualizaciones.

🚀  Espero que disfrutes de la experiencia! 😊
Guadalupe & Antonio
