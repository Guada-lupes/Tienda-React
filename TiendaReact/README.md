¡Hola!!

El presente proyecto consiste en un carrito de compra de una tienda tecnológica. Se ha diseñado con "MobileFirst" haciendola responsive y  utilizando React, CSS y HTML.

-------Estructura-------

**TiendaReact**

    *index.html: contiene el <div> root y el script a main.jsx
    *README.md
        SRC
            Main.jsx: Se crea la ruta obteniendo el elemento root HTML. Se importan la herramientas: Provider de redux, BrowseRouter para el enrutado, la store con el reducer. Se envuelve App con los elementos anteriores.
            App.jsx: Se crea un un layout para integrar header y footer en todas las paginas. Se envuelven las rutas en el contexto ProductosProvider. Se crean 4 rutas: Inicio, Categorias, Detalles de producto y Carrito.
            *pages: Son dos las páginas principales (Carrito e Inicio)
            *componentes: Incluyendo del header y el footer, existen 8 componentes.
            *contextos: Se ha creado un contexto con los productos de la tienda para facilitar el acceso a la data desde cualqueir componente.
            *customHooks: Se ha customizado un hook para utilizarlo en el menú desplegable.
            *features: Se ha utilizado Redux y Toolkit para gestionar los estados del carrito. CarritoSlice.jsx maneja los estados.
            *store: La tienda donde se guardan los reducer del pryecto, en este caso, unicamente uno.
            *Services: Contiene el array de productos.
            *Style: Contiene las páginas de estilos asociadas a cada componente.

-------Navegar por la página-------

Como podrás comprobar, la app es muy sencilla. 
En el header podrás ver el logo con el nombre de la tienda "Lupas`s". Siempre que quieras regresar al inicio, pincha en el logo. En la parte derecha del header encontrarás el icono del carrito. Cuando selecciones tu primer producto, fíjate si cambia su color.

En la página principal se despliega los productos de la tienda. Puedes ver un menú desplegable debajo del header, a la izquierda. Este menú guarda algunas categorías que te pueden ayudar a filtrar tu búsqueda.

Si te interesa tener más información sobre un producto, pincha en "Detalles".

Si quieres ver que hay en tu carrito, pincha en el carrito.

Hay varios fallos y mejoras que me hubiese gustado corregir, como los siguientes:

----El volver debe desaparecer si pincho en menu desplegable.
----Un mismo componente renderiza productos y categorias, lo cual complica aplicar estilos diferenciados, perjudicando la visualización del producto en categorias.
----Al pasar de una página a otra, si estoy en la parte inferior de la web, aparezco en la parte inferior de la siguiente página.
---- Al añadir un producto a la página, que el botón reaccione de alguna manera y el icono carrito también, no sólo con le primer producto

Pero no me da la vida, ya lo arreglaré más adelante.

Espero que lo disfrutes, saludos !

Guadalupe


