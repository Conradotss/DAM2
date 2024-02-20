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
El protocolo FTP proporciona un mecanismo estandar de transferencia de archivos entre sistemas a través de redes TCP/IP. las principales prestaciones son las siguientes:
-Permite el intercambio de archivos entre maquinas remotas a través de la red
-Consigue una conexion y una transferencia de datos muy rapidas
Sin mebargo el servicio FTP carece de una importante medida de seguridad:
-La información y contraseñas se transmiten en texto plano, esta diseñado así, para conseguir una mayor velocidad de transferencia. Este problema se puede solucionar mediante la encriptacion de todo el trafico de informacion a traves del protocolo SFTP usando SSH o del protocoo FTPS usando SSL
FTP es un servicio basado en una arquitectura cliente-servidor y como tal seguira las pautas generales de funcionamiento de este modelo:
-El servidor da su servicio a traves de dos puertos:
	-El puerto 20: para transferencia de datos
	-El puerto 21, para transferencia de ordenes de control, como conexion y 	desconexion
-El cliente se conecta al servidor haciendo uso de un puerto local mayor de 1024 y tomando como puerto destino del servidor 21
Principales caracteristicas del servicio FTP son las siguientes:
-La conexion de un usuario remoto al servidor FTP
-El acceso al sistema de archuvos es mas o menos limitado, segun el tiepo de usuario que se conecte y sus privilegios
-El servicio FTP soporta os modos de conexion : modo activo y modo pasivo
	-Modo activo, es la forma nativa de funcionamiento, se establecen dos conexciones 	distintas, la peticion de transferencia por parte del cliente y la atencion a dicha peticion iniciada por el servidor, de manera que si el cliente esta protegido con un cortafuegos debera configurarlo para que permite esta peticion de conexion entrante a traves de un puerto que normalmente esta cerrado por motivos de seguridad
	-Modo pasivo, el cliente sigue iniciando la conexion, pero el problema del cortafuegos



### Protocolo SMTP y POP3
El cooreo electronico es un servicio que permite a los usuarios enviar y recibir mensajes y archivos rapidamente a traves de la red
-Principalmente se usa este nombre para denominar al sistema que provee a sete servicio en internet, mediante el protcolo SMTP aunque por extension tambien puede verse aplicadoa sistemas analogos que usen otras tecnologias
-Por medio de mensajes de correo electronico se puede enviar, no solmante texto sino todo tipo de documentos digitales
El servicio de correo basado en e protocolo SMTP sigue el modelo cliente-servidor, por lo que el trabajo se distribuye entre el programa servidor y el cliente, estas son algunas consideraciones sobre el servicio SMTP a tener en cuenta:
-El servidor mantiene las cuentas de los usuarios asi como los buzones correspondientes
-Los clientes de correo gestionan la descarga de mensajes asi como su elaboracion
-El servicio STMP usa el puerto 25
-El protocolo SMTP se encarga del tranwsporte del correo saliente desde la maquina del usuario remitente hasta el servidor que almacene los mensaje de los destinatarios
	-El usuario remitente redacta su mensaje y lo envia hacia su servidor de correo
	-Desde alli se reenvia al servidor del destinatario, quien lo descarga del buzon en 	la maquina local medainte el protocolo POP3 o a la consulta via web, haciendo uso 	del protocolo IMAP



### El protoclo HTTP
El protocolo http es un conjunto de normas que posibilitan la comunicacion entre servidor y cliente permitiendo la transmision de infrormacion entre ambos, la informacion transferida so las conocidas HTML, se trata del metodo mas comun de intercambio de informacion en la www, http defina tanto la sintaxis como la semantica que usan clientes y servidores para comunicarse, algunas consideraciones sobre http son:
-Es un protocolo que sigue el esquema peticion-respuesta entre un cliente y un servidor
-Usa por defecto el puerto 80
-Al cliente que efectua la peticion, se le conoce como agente del usuario
-A la informacion transmitida se le llama recurso y se la identifica mediante un localizador uniforme de recursos URL
-Los recursos pueden ser arhivo, el resultado de la ejecucion de una programa, una consulta auna base de datos, la traduccion automatica de un documento...
El funcionamiento esquematico del protocolo http es el siguiente:
-El ususario especifica en el cliente web la direccion del recurso a localizar con el siguente formato http://www.marca.com
-El cliente web desompone la informacion de la url diferenciando el protocolo de acceso, la ip o nombre de dominio del servidor, el puerto y otro parametros
-El clente web establece una conxeion por un metodo por ejemplo get y otras lineas
-El servidor contesta con un mensaje encabezado con la linea http/1.1 200 ok si existe la pagina y la envia o bien envia un codigo de error
-El cliente web interpreta el codigo html recibido 
-se cierra la conexion



### Bibliotecas de clases y componentes java
El paquete principal que proporciona el api de java para programar aplicaciones con comunicaciones en red es:
-java.net, este soporta clases para generar diferentes servicios de red, servidores y clientes
Otros paquetes para comunicacciones en red son:
-java.rmi: permite implementar una interfaz de control remoto(RMI)
-java.mail: permite implementar sistemas de correo electronico
Para otros servicios estandar, java no proporciona objetos predefinidos y por tanto una solucion facil para generarlos es recurrir a bibliotecas externas, como el api de Apache Commons Net, esta api permite implementar aplicaciones cliente para los protocolos estandar mas populares, como telnet, ftp, o fot sobre http



### Objetos predefinidos 
El paquete java.net nos da una api que se puede dividir en dos niveles:
-Una api de bajo nivel, que permite representar los siguientes objetos:
	-Direcciones, son los identificadores de red
		-Clases inetAddres: implementa una direccion ip
	-Sockets, son los mecanismos basicos de comunicacion bidireccional de datos
		-Clase socket: implementa un extremo de una conexion bidireccional
		-Clase Serversocket: implementa un socket que los servidores pueden usar 		para escuchar y aceptar peticiones de clientes
		-Clase DatagramSocket: implementa un socket para el envio y recepcion de 		datagramas
		-Clase MulticastScoetk: representa un socket datagrama, util para enviar 		paquetes multidifusion
	-Interfaces, Describen las interfaces de red
	-Clase NetworkInterface, representa una interfaz de red compuesta por un nombre y 	una lista de direcciones ip asignadas a esta interfaz
-Una api de alto nivel que se ocupa de representar los siguientes objetos , mediante las clases que te indicamos
	-URI: representan los identificadores de recursos universales
		-Clase URI
	-URL: representan localizadores de recursos universales
		-Clase URL
	-Conexiones: representa las conexiones con el recurso apuntado por el URL
		-Clase URLConnetion, es la superclase de todas las clases que representan 		un enlace de comunicaciones entre la aplicacion y una URL
		-Clase HTTPURLConnection, representa una URLConnection con soporte para 		http y con ciertas caracteristicas especiales



### Metodos y ejemplos de uso de inetAdress
La clase inetAdress nos da objetos que puede usar para manipular direcciones ip como nombres de dominio, una instancia inetAdress consta de una direccion ip en algunos casos tambien del nombre de host asociado.
Esta clase no tiene constructores, sin embargo inetAddres dispone de metodos estáticos que devuelven objetos inetAddres:
-getLocalHost(): devuelve un objeto de tipo inetAddres con los datos de direccionammiento de mi equipo en la red local
-getByName(String host): devuelve un objeto de tipo inetAddres con los datos de direccionamiento del host que le pasamos como parametro, donde el parametro host tiene que ser un nombre o ip valido ya sea de internet o de tu red de area local
-getAllByName: devuelve un array de objeteos de tipo inetAddpress con los datos de direccionamiento del host pasado como parametr, recuerda que en internet es frecuente que un mismo dominio tenga a su disposicion mas de una ip
Algunos metodos de un objeto inetAddress:
-getHostAddress: devuelve en una cadena de texto la correspondiente ip
getAddress: devuelve en un array formado por los grupos de bytes de la ip correspondiente
Otros metodos:
-getHotName:devuelve en cadena el nombre del host
-isReachable(int tiempo) devuelve true o false dependiendo de si la direccion es alcanzable en el tiempo indicado en el parametro



### Programacion con url
Se produce a un nivel mas algo que la programacion de sockets, una url es un localizador uniforme de recursos:
-Puede referirse a sitios web, ficherosm sitio ftp, direcciones de correo electronico, etc
-La estructura de una URL se puede deividir en varias partes
-Protocolo: protocolo://nombrehost(:puerto)ruta#referencia
-Nombrehost
-Puerto
-Ruta
-Referencia


### Crear y analizar objetos URL
Crear objetos URL:
-URL url = new URL("http", "www.loquesea.com", "80", "index.html")
-A partir de la cadena especificada
-A partir de una ruta relativa pasada como primer parametro
-A partir de las especificaciones indicadas y un manejdaor de protocolo que conoce como como comunicarse con el servidor 
Cada constructor puede lanzar una malformedURLExpcetion si lor argumentos del constructor son nulos o el protocolo es desconocido, usar try-catch
Se puede analizar y descomponer una URL con los siguientes metodos
-getProtocol
-getHost
-getPort
-getDefaultPort
-GetFile
-getRef
Metodos que nos permiten trabajar con conexiones URL
-URL.openConnection, deuvleve un objeto URLConnection que representa una nueva conexion con el recurso reomot al que se refiere la url
-URL.openStream, abre una conexion a esta direccion url y devuelve un inputStream para la lectura de es conexion, es una abreviatura de openConnection(),getInputStream()
-URL.getContent, devuelve el contenido de esa url
Crear una conexion url
-Crear un objeto urlconnection este llama al metodo openConnnecion() de un objeto url
-Establecer los parametros y propiedades de la peticion
-Estableces la conexion usando el metodo connect
-Se puede obtener infroamcion sobre la cabecera y obtener el recurso remoto




### Bibliotecas para programar un cliente FTP
Paquete apache:
-Clase FTP, da funcionalidades basicas para implementar un cliente FTP
-Clase FTPReplay, permite almacenar valores devueltos por el servidor como codigo de respuesta a las peticiones del cliente
-Clase FTPCliente, encapsula la funcionalidad que necesitamos para almacenar y recuperar archivos de un servidor ftp
-Clase FTPclientConfig, proporciona una forma alternativa de configurar objetos ftpclient
-Clase FTPSClient proporciona FTP seguro, sobre ssl, esta clase hereda de ftoclient



### Telnet
Telnet nos permite administrar un equipo de forma remota, el servidor escucha las peticiones por el puerto 23