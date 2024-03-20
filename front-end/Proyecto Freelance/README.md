# Anotaciones para desarrollo web
## Paginas para obtener recursos de utilidad
* Crea texto para rellenar https://es.lipsum.com/
* Paginas para poner iconos a nuestra web https://tablericons.com/ https://heroicons.com/ https://fontawesome.com/
* Pagina para descargar fuentes https://fonts.google.com/
* Pagina para implementar un css que haga que la pagina se vea igual en todos los dipositivos https://necolas.github.io/normalize.css/8.0.1/normalize.css


## Apuntes web 
### Selectores css
* selector elemento -> p{color:blue} selecciona un elemento en base a su etiqueta
* selector clase -> .cliente{color:black} una clase se puede crear varias veces e inicia con un punto
* selector id -> #cliente{color : blue} pueden haber muchos ids en cada pagina pero su nombre no se puede repetir
* selector atributo -> [src = "imagen.jpg"]{color : blue}
* combinacion de descendentes -> .cliente #nombre {color:blue} selecciona los elementos hijo cuyo padre sea una clase o Id en especifico
* todos los hijos -> .cliente > p{color:black} aplica a todos los parrafos en este caso hijos

### !important
* para que una design se aplique a todos los elementos referenciados usamos !important al final de la linea y esto lo que hara sera aplicar esa modificacion a todos sin importar que las clases o ids de estos no sean los mismos