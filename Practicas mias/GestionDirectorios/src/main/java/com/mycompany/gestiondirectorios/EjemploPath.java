    package com.mycompany.gestiondirectorios;

import java.nio.file.Path;
import java.nio.file.Paths;

public class EjemploPath {
    public static void main(String[] args) {
        // Ejemplo de creación de rutas usando Paths.get()
        Path rutaBase = Paths.get("/home/usuario");
        Path subdirectorio = Paths.get("documentos");
        Path archivo = Paths.get("archivo.txt");
        
        // Método resolve() para combinar las rutas
        Path rutaCompleta = rutaBase.resolve(subdirectorio).resolve(archivo);
        System.out.println("Ruta completa: " + rutaCompleta);

        // Método relativize() para obtener la ruta relativa
        Path rutaRelativa = rutaBase.relativize(rutaCompleta);
        System.out.println("Ruta relativa: " + rutaRelativa);
    }
}
