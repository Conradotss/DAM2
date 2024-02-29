# Apuntes PSPM
## Validaciones de entrada
-importacion de la libreria java.util.regex.* (Viene instalada por default en java)
-Definir variables de las clases 
	Pattern(La que genera la validacion)
	Matcher(La que verific que la validacion se cumple)
- Aplicar el patron a utilizar -> pat = Pattern.complie(patron);
	x -> El caracter x
	[abc]-> los caracteres a, b o c
	[a-z]-> una letra en minuscula
	[A-Z]-> una letra en mayuscula
	[a-zA-Z]->Una letra en minuscula o mayuscula
	[0-9]-> Un numero comprendido entre el 0 y 9
	[a-zA-Z0-9]-> una letra minuscula mayuscula o un numero
	[a-z]{2}->Hay que introducir 2 letras minusculas
	[a-z]{2,5}->Hay que introducir de 2 a 5 letras en minuscula
	[a-z]{2,}->Hay que introducir mas de 2 letras en minuscula
	hola|adios->Es la operacion logica OR y permite indicar que se introduzca el texto 	hola o adios
	XY->Es la operacion AND logica y permite indicar que se deben introducir dos 	expresiones X seguida de Y
	e(n|l)-> Los delimitadores() permite hacer expresiones mas completjas, en el ejemplo 	el usuario debe introducir el texto "n" o "l"
-Ejemplos
	pat=Pattern.compile("[0-9]{3}-[0-9]{6}"); Telefono(000-000000)
	pat=Pattern.compile("[0-9]{8}-[a-zA-z]"); DNI(3849583-d)
	pat=Pattern.compile("Murcia", "Cadiz", "Malaga"); Provincias
	
-Comprobar si se cumplen los parametros
	mat=pat.matcher(textoAComprobar);
	if(mat=find()){
	//Si coincide
	}else{
	//No coincide
	}

## Ficheros de registro
-Importar libreria java.util.logging.*;
-Crear el logger que vamos a usar-> Logger log = Logger.getLogger("MyLog")
-Buscar fichero donde almacenar nuestro log->FileHandler fh = new FileHandler("c:\\ruta.log",true);
-Establecer formato del fichero
	SimpleFormatter formatter = new SimpleFormatter();
	fh.setFormatter(formatter);
	XMLFormatter formato = new XMLFormatter();->Otra forma de hacerlo
-Niveles de seguridad de registros
	Severe 7
	Warning 6
	Info 5
	Config 4
	Fine 3
	Finer 2
	Finest 1
-Para registrar solo registros graves ejecutamos
	logger.setLevel(Level.SEVERE)
-Para registrar todo
	logger.setLevel(Level.ALL)


os.name ->Version del SO
user.home -> directorio home del usuario

-Para complicar un proyecto javac nombre.java

## Firma proyecto jar
-keytool -genkey -alias roy -keypass roy123 -keystore repositorio -storepass roy123 -keyalg rsa -> Configuramos la creacion de la llave (Empresa, nombre, ciudad....)
-jarsigner -keystore repositorio(Repositorio donde se encuentra nuestras firmas) -signedjar ProyectoFirmado.jar(Proyecto que se creara firmado) Servidor.jar(Servicio sin firmar) roy(generador de llaves)
-keytool -export -keystore repositorio -alias roy -file Roy.cert -> Exportamos nuestra llave publica para compartir nuestro proyecto con demas usuarios