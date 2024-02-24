package roy.Tarea4.pruebas;

import java.io.File;


public class listarDirectorio {
    public static void main(String[] args) {
        // Obtener la ruta del directorio actual
        String directorioActual = System.getProperty("user.dir");

        // Crear un objeto File para representar el directorio
        File directorio = new File(directorioActual);

        // Obtener la lista de archivos y directorios en el directorio actual
        String[] contenido = directorio.list();

        // Mostrar el contenido
        if (contenido != null) {
            System.out.println("Contenido del directorio actual:");
            for (String elemento : contenido) {
                System.out.println(elemento);
            }
        } else {
            System.out.println("No se pudo obtener el contenido del directorio.");
        }
    }
}