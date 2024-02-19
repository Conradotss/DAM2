# Apuntes Tema 5 Programacion procesos

## Generacion de servicios en red

### Introduccion
Las principales ventajas de usar una red de ordenadores son:
-Reduccion en el presupuesto para software y hardware
-Posibilidad de organizar grupos de trabajo
-Mejoras en la administracion de los equipos y las aplicaciones 
-Mejoras en la integridad de los datos
-Mayor seguridad para acceder a la informacion
-Mayor facilidad de comunicacion
Clasificacion de los servicios en red atendiendo a su finalidad:
-Administracion-Configuracion: estos servicios nos facilitan la administracion y gestion de las configuraciones de los distintos equipos de la red(DHCP, DNS)
-Acceso y control remoto: Los servicios de acceso y control remoto se encargan de permitir la conexion de usuarios a la red desde lugares remotos, verificando su identidad y controlando su acceso(Telnet, SSH)
-De ficheros: consisten en ofrecer a la red grandes capacidades de almacenamiento para descongestionar o eliminar los discos de las estaciones de trabajo, permititendo tanto el almacenamiento como la transferencia de ficheros(FTP)
-Impresion: permite compartir de forma remota impresoras de alta calidad, capacidad y coste entre multiples usuarios, reduciendo asi el gasto
-Informacion: Los servicios de informacion pueden servir ficheros en funcion de sus contenidos, como pueden ser los documentos de hipert3exto, como HTTP o bien pueden servir informacion para ser procesada por las aplicaciones como es el caso de los servidores de bases de datos
-Comunicacion: Permiten la comunicacion entre los usuarios a traves de mensajes escritos, como email o correo electronico mediante protocolo SMTP


### Protocolos de comunicaciones del nuvel de aplicacion
Dentro de la jerarquia de protocolos TCP/IP la capa de aplicacion icupa el nivel superior y es precisamente la que incluye lso protocolos de alto nivel relacionados con los servicios en red. Protocolos a destacar por su importancia y gran uso a nivel de aplicacion:
-FTP: Protocolo para la transferencia de ficheros
-Telnet: Protocolo que permite acceder a maquinas remotas a traves de una red
-SMTP: Protocolo que permite transferir por correo electronico, recurre al protocolo de oficina postal POP para almacenar mensajes en los servidores, en sus versiones POP2(Dependiente de SMTP para el envio de mensajes) y POP3 (independiente de SMTP)
-HTTP: Protocolo de transferencia de hipertexto
-SSH: Protoclo que permite gestionar remotamente a otra computadora de la red de forma segura
-NNTP: Protocolo de transferencia de noticias
-IRC: Chat basado en internet 
-DNS: Protocolo para traducir direcciones de red


### Comunicacion entre aplicaciones
-Cliente: programa que ejecuta el usuario y solicita un servicio al servidor
-Servidor: programa que sse ejecuta en una maquina o varias de red y ofrece un servicio(FPT, web, SMTP, etc) a uno o mas clientes
En el nivel de transporte, las aplicaciones normalmente usan TPC y UDP y son asociados a un numero de puerto. La World wide web usa el proteoclo HTTP sigue fielmente el modelo cliente-servidor:
-Los clientes son las aplicaciones que permiten consultar las paginas web(navegadores) y los servidores, las aplicaciones que suministran paginas web
-Cuando un usuario introduce una direccion web en el navegador este solicita mediante el protocolo HTTP la pagina web al servidor web que se ejecuta en la maquina donde esta la pagina
-El servidor web envia la pagina por internet al cliente que la solicito y este ultimo la muestra al usuario
Los dos extremos gialogan siguiendo un protocolo de aplicacion :
-El cliente solicita el recurso web www.pagina.es mediante GET HTTP
-El servidor le contesta HTTP 200 ok(todo correcto) y le envia la pagina hgtml solicitada


### Conexion, transmision y desconexion
Los protocolos de aplicacion se comunican con el nivel de transporte mediante una API, denominada API socket, en java vienen en el paquete java.net. Dentro de una red, un socket es unico pues vien carecterizado por cinco parametros, el protocolo usado(HTTP, FTP...), dos direcciones IP(La direccion del equipo local donde reside el proceso cliente y  la del remoto donde reside el proceso servicio) y dos puertos(uno local y otro remoto), pasos para establecer, mantener y cerrar una conexion TCP/IP
-Se crean los sockets en el cliente y el servidor
-El servidor establece el puerto por el que proporciona el servicio
-El servidor permanece a la escucha de las peticiones de los clientes
-Un cliente conecta con el servidor 
-El servidor acepta la conexion
-Se realiza el intercambio de datos
-El cliente o el servidor cierran la conexion



### DNS y resolucion de nombres
El sistema DNS es el mecanismo que se invento para que los nodos que ofrecen algun tipo de servicio interesante tengan un nombre facil de recordar, lo que se denomina un nombre de dominio, como www.marca.es
DNS es un sistema de nomenclatura jerarquica para computadoras, servicios o cualquier recurso conectado a internet o una red privada, el objetivo del DNS es traducir los nombres de dominio en las direcciones IP de cada equipo conectado a la red, con el proposito de poder localizar y direccionar estos equipos dentro de la red, este servicio nos da una ventajas:
-Permite que una misma direccion IP sea compartida por varios dominios
-Permite que un mismo dominio se corresponda con diferentes direccione IP
-Permite que cualquier servicio de red pueda cambiar de nodo y por tanto de IP sin cambiar de nombre de dominio



### Protocolo FTP

