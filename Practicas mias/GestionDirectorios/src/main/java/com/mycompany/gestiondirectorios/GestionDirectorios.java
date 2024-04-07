package com.mycompany.gestiondirectorios;

import java.io.File;
import java.io.IOException;

public class GestionDirectorios {

    public static void main(String[] args) {
        // Obtén el directorio actual
        String directorioActual = System.getProperty("user.dir");

        // Crea el nuevo directorio
        String nuevoDirectorio = directorioActual + File.separator + "NuevoDir";
        File directorio = new File(nuevoDirectorio);
        if (!directorio.exists()) {
            directorio.mkdir();
            System.out.println("Directorio creado: " + nuevoDirectorio);
        }

        // Crea dos archivos vacíos en el nuevo directorio
        String archivo1 = nuevoDirectorio + File.separator + "Archivo1.txt";
        String archivo2 = nuevoDirectorio + File.separator + "Archivo2.txt";
        try {
            new File(archivo1).createNewFile();
            new File(archivo2).createNewFile();
            System.out.println("Archivos creados en el directorio: " + nuevoDirectorio);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Renombra uno de los archivos
        String nuevoNombre = nuevoDirectorio + File.separator + "NuevoNombre.txt";
        File antiguoArchivo = new File(archivo1);
        File nuevoArchivo = new File(nuevoNombre);
        if (antiguoArchivo.renameTo(nuevoArchivo)) {
            System.out.println("Archivo renombrado a: " + nuevoNombre);
        } else {
            System.out.println("No se pudo renombrar el archivo.");
        }

        // Muestra el contenido del directorio antes de borrarlo
        System.out.println("Contenido del directorio antes de borrarlo:");
        File[] contenidoDirectorio = directorio.listFiles();
        if (contenidoDirectorio != null) {
            for (File archivo : contenidoDirectorio) {
                System.out.println(archivo.getName());
            }
        }

        // Borra el directorio y su contenido
        if (directorio.delete()) {
            System.out.println("Directorio borrado: " + nuevoDirectorio);
        } else {
            System.out.println("No se pudo borrar el directorio.");
        }
    }
}