# Apuntes Tema 4 Programacion procesos

## Paradigma cliente-servidor
### Los elementos que componen el modelo son:
Cliente: Es el proceso que permite intaractuar con el usuario, se comporta como la interfaz front-end. las funciones que lleva a cabo este proceso son:
-Interactual con el usuario
-Procesar las peticiones para ver si son validas y evitar peticiones maliciosas al servidor
-Recibir los resultados del servidor
-Formatear y mostrar los resultados
Servidor: Es el proceso encargado de recibir y procesar las peticiones de los clientes para permitir el acceso a algun recurso, actua como back-end, sus funciones son:
-Aceptar las peticiones de los clientes
-Procesar las peticiones 
-Formatear y enviar el resultado a los clientes
-Procesar la logica de la aplicacion y realizar validaciones de datos
-Asegurar la consistencia de la informacion
-Evitar que las peticiones de los clientes interfieran entre si
-Mantener la seguridad del sistema

### Caracteristicas basicas de una arquitectura cliente-servidor
-Combinacion de un cliente que interactua con el usuario y un servidor que interactua con los recursos compartidos
-Las tareas del cliente y sevidor tienen diferentes requerimientos en cuanto al procesamietno, todo el trabajo de procesamiento lo hace el servidor mientras el cliente interactua con el usuario
-Se establece una relacion entre distintos procesos, las cuales se pueden ejecutar en uno o varios equipos distribuidos a lo largo de la red
-Existe una clara distincion de funciones basada en el conecpto de servicio que se establece entre clientes y servidores
-La relacion establecida puede ser de muchos a uno, en la que un servidor puede dar servicio a muchos clientes, regulando el acceso a los recursos compartidos 
-Los clientes corresponden a procesos activos ya que realizan las peticiones de servicios a los servidores, y estos ultimos son procesos pasviso ya que esperan las peticiones de los clientes
-Las comunicaciones se realizan estrictamente a traves del intercambio de mensajes 
-Los clientes puede usar sistemas heterogeneos ya que permite conectar clientes y servidores independientemente de sus plataformas


### Ventajas y desventajas
-Uso de clientes ligeros 
-Facil integracion entre sistemas diferentes y comparte informacion permitiendo interfaces amigables al usuario 
-Favorece el uso de interfaces graficas interactivas para los clientes para interactuar con el servidor 
-El mantenimiento y desarrollo de aplicacioners resulta rapido usando las herramientas existentes
-La estructura inherente modular facilita faademas la iantegracion de nmuevas tecnologias y el crecimiento de la infraestructura computacional, favoreciendo asi la escalabilidad de las soluciones
-Ayuda a proporcionar a los diferentes departamentos de una organizacion, soluciones locales, pero permitiendo la integracion de la informacion relevante a nivel global
-El acceso a los recursos esta centralizado
-Los clientes acceden de forma simultanea a los datos compartiendo informacion entre si

-El mantenimiento de los sistemas es mas dificil
-Hay que tener estrategias para el manejo de errores del sistema
-Es importante mantener la seguridad del sistema
-Hay que garantizar la consistencia de la informacion


### Modelos
La principal forma de clasificar los modelos cliente-servidor es a partir del numero de capas que tienen:
-1 capa(1-tier): el proceso cliente-servidor se encuentra en el mismo equipo, no se considera un modelo cliente-servidor ya que esta todo en el mismo equipo
-2 capas(2-tiers): Es el modelo tradicional en el que existe un servidor y unos clientes bien diferenciados, el principal problema de este modelo es que no permite la escalabilidad del sistema y se puede sobrecargar
-3 capas(3-tiers): para mejorar el rendimiento del sistema en el modelo de dos capas se incorpora una nueva capa de servidores 
    -Servidor de aplicacion: encargado de interactuar con los diferentes clientes y enviar las peticiones de procesamiento al servidor de datos 
    -Servidor de datos: el que recibe las peticiones del servidor de aplicacion, las procesa y le devuelve su resultado al servidor de aplicacion para que este los envie al cliente
-n capas(n-tiers): A partir del modelo anterior, se pueden incorporar capas adicionales de servidores con el objetivo de separar la funcionalidad de cada servidor y de mejorar el renidmiento del sistema


### Programacion
De forma interna el servidor realiza estos pasos:
-Publicar puerto
-Esperar peticiones
-Envio y recepcion de datos
-Una vez terminada la comunicacion se cierra el socket
Los pasos que realiza el cliente son:
-Conectarse con el servidor: a traves de un puerto especifico, se crea el socket donde se comunican
-Envio y recepcion de datos
-Una vez finalizada la comunicacion se cierra el socket


### Optimizacion de sockets
Es importante optimizar el uso de los sockets, nuestra aplicacion debe contar con las siguientes caracteristicas:
-Atender multiples peticiones simultaneamente
-Seguridad
-Monitorizar los tiempos de respuesta


### Conexiones 
Cuando un servidor recibe la conexion del cliente(accept) se crea el socket del cliente, se realiza el envio y recepcion de datos y se cierra el socket, como el objetivo es que muchos clientes usen el servidor de forma simultanea es necesario que la parte que atiende al cliente se atienda independientemente para cada uno de los clientes
Para ello en lugar de ejecutar todo el codigo del servidor de forma secuencial, vamos a tener un bucle while para que cada vez que se realice la conexion de un cliente se cree un hilo, que sera el encargado de atender al cliente


### Perdida de informacion
La perdida de paquetes en las comunicaciones de red es un factor muy importante que hay que tener en cuenta, para evitar la perdida de estos, cada vez que se envia un paquete el receptor envia al emisor un paquete de confirmacion ACK, en el caso de que el paquete no lleguee correctamente al receptor el paquete de confirmacion no se envia nunca, el emisor cuando transcurre un determinado tiempo considera que el paquete se ha producido un error y vuelve a enviar el paquete. Este metodo aunque efectivo resulta bastante lento ya que para enviar un nuevo paquete debe esperar el ACK del paquete anterior por lo que se produce un retardo en las comunicaciones, una mejora importante del metodo anterior consiste en permitir al emisor que envie multiples paquetes sin necesidad de esperar los paquetes de confirmacion 


### Transacciones 
Uno de los principales fallos de seguridad que se producen en los programas clieten-servidor es que el cliente pueda realizar:
-Operaciones no autorizadas:
-Mensajes mal formados:cuando el cliente envia al servidor mensajes mal formados y produzca un error de procesamiento del sistema
Comandos que puede usar el cliente para ver el flujo de informacion del servidor:
-ls: va al estado 2 mostrando el contenido del directorio y vuelve al estado 1
-get: lleva al estado 3 donde le solicita al cliente el nombre del archivo a mostrar, al introducirlo el nombre del archivo se desplaza al estado 4 donde muestra el contenido del archivo y vuelve automaticamente al estado 1
-exit: lleva directamente al estado donde finaliza la cconexion del cliente(estado -1)


### Monitorizar tiempos de respuesta
Un aspecto importante de nuestra aplicacion son los tiempos de respuesta del servidor, desde que el servidor realiza una peticion hasta que recibe su resultado intervienen dos tiempos:
-Tiempo de procesamiento: es el tiempo que el servidor necesita para procesar la peticion del cliente y enviar los datos
-Tiempo de transmision: tiempo que transcurre para que los mensajes viajen a traves de los diferentes dispositivos de la red hasta llegar a su destino