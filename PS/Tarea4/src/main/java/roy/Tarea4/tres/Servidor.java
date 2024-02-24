package roy.Tarea4.tres;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Servidor {

    //Creamos el socket para el servidor
    private ServerSocket serverSocket;
    //El puerto por el que estara escuchando
    private final static int PUERTO = 1400;
    //Clases para comunicarnos entre el cliente y servidor
    private DataInputStream in;
    private DataOutputStream out;

    public Servidor() {
        //Clase que ejecuta hilos
        ExecutorService ex = Executors.newFixedThreadPool(10);
        try {
            //Iniciamos el servidor
            serverSocket = new ServerSocket(PUERTO);
            System.out.println("Escuchando por le puerto " + PUERTO);
            int cli = 0;
            while (cli < 10) {
                Socket cliente = serverSocket.accept();
                System.out.println("Nuevo cliente conectado");
                ex.execute(new clienteHandler(cliente));
                cli++;
            }

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            ex.shutdown();
        }

    }

    private static class clienteHandler implements Runnable {
        //Clase que maneja la comunicacion con varios clientes a la vez
        private Socket clienteS;
        DataOutputStream out;
        DataInputStream in;

        public clienteHandler(Socket clienteS) {
            this.clienteS = clienteS;
        }

        @Override
        public void run() {
            try {
                //Creamos un login basico
                out = new DataOutputStream(clienteS.getOutputStream());
                out.writeUTF("Introduzca usuario:");
                in = new DataInputStream(clienteS.getInputStream());

                out.writeUTF("Introduzca password:");

                if (in.readUTF().equals("roy") && in.readUTF().equals("root")) {
                    int estado = 1;
                    //En caso de acertar entramos al programa
                    do {
                        switch (estado) {
                            case 1:

                                out = new DataOutputStream(clienteS.getOutputStream());
                                out.writeUTF("Bienvenido! \n "
                                        + "Elige una de las siguientes opciones: \n"
                                        + "*Ver directorio actual \n"
                                        + "*Ver un archivo determinado \n"
                                        + "*Salir");
                                in = new DataInputStream(clienteS.getInputStream());
                                String respuesta = in.readUTF();
                                if (respuesta.equals("Ver directorio actual")) {
                                    String mensaje = "Contenido del directorio actual:";
                                    String directorioActual = System.getProperty("user.dir");
                                    File directorio = new File(directorioActual);
                                    String[] contenido = directorio.list();
                                    if (contenido != null) {
                                        System.out.println("Contenido del directorio actual:");
                                        for (String elemento : contenido) {
                                            System.out.println(elemento);
                                            mensaje += elemento + "\n";
                                        }
                                    } else {
                                        mensaje = "No se han encontrado elementos";
                                    }
                                    out.writeUTF(mensaje);
                                    estado = 1;

                                } else if (respuesta.equals("Ver un archivo determinado")) {
                                    out.writeUTF("Introduce la ruta completa del archivo a visualizar");
                                    estado = 2;

                                } else if (respuesta.equals("Salir")) {
                                    out.writeUTF("Hasta pronto!");
                                    estado = 0;

                                }
                                break;
                            case 2:
                                String ruta = in.readUTF();
                                BufferedReader br = new BufferedReader(new FileReader(ruta));
                                String lectura;
                                String archivo = "";
                                while((lectura = br.readLine())!= null){
                                    archivo += lectura + "\n"; 
                                }
                                
                                out.writeUTF(archivo);
                                estado = 1;
                                break;
                        }
                    } while (estado != 0);
                } else {
                    out.writeUTF("Credenciales incorrectas");
                }

            } catch (IOException e) {
                e.printStackTrace();
                e.getMessage();
            } finally {
                try {
                    clienteS.close();
                    System.out.println("Conexion con el cliente cerrada");
                } catch (IOException ex) {
                    Logger.getLogger(Servidor.class.getName()).log(Level.SEVERE, null, ex);
                }

            }

        }
    }

    public static void main(String[] args) {
        new Servidor();
    }
}
