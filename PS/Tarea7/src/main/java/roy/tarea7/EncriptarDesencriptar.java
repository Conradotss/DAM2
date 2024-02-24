package roy.tarea7;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

public class EncriptarDesencriptar {

    public static void main(String[] args) {
        String nombreUsuario = "usuario";
        String password = "contrasena";
        String textoPlano = generarTextoAleatorio(10);

        System.out.println("Texto plano: " + textoPlano);

        SecretKey clave = generarClaveAES(nombreUsuario + password);

        String textoEncriptado = encriptar(textoPlano, clave);

        System.out.println("Texto encriptado: " + textoEncriptado);

        guardarEncriptado(textoEncriptado, "fichero.cifrado");

        String textoDesencriptado = desencriptar("fichero.cifrado", clave);

        System.out.println("Texto desencriptado: " + textoDesencriptado);
    }

    private static String generarTextoAleatorio(int longitud) {
        byte[] bytes = new byte[longitud];
        new SecureRandom().nextBytes(bytes);
        return new String(bytes);
    }

    private static SecretKey generarClaveAES(String semilla) {
        try {
            KeyGenerator keyGen = KeyGenerator.getInstance("AES");
            keyGen.init(128, new SecureRandom(semilla.getBytes()));
            return keyGen.generateKey();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    private static String encriptar(String textoPlano, SecretKey clave) {
        try {
            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
            cipher.init(Cipher.ENCRYPT_MODE, clave);
            byte[] textoPlanoBytes = textoPlano.getBytes();
            byte[] textoEncriptadoBytes = cipher.doFinal(textoPlanoBytes);
            return Base64.getEncoder().encodeToString(textoEncriptadoBytes);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private static void guardarEncriptado(String textoEncriptado, String nombreFichero) {
        try (OutputStream outputStream = new FileOutputStream(nombreFichero)) {
            outputStream.write(textoEncriptado.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private static String desencriptar(String nombreFichero, SecretKey clave) {
        try {
            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
            cipher.init(Cipher.DECRYPT_MODE, clave);
            byte[] textoEncriptadoBytes = Files.readAllBytes(Paths.get(nombreFichero));
            byte[] textoPlanoBytes = cipher.doFinal(textoEncriptadoBytes);
            return new String(textoPlanoBytes);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}