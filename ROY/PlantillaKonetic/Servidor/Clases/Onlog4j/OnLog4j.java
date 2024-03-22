/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Onlog4j;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.net.URL;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.config.ConfigurationSource;
import org.apache.logging.log4j.core.config.Configurator;

/**
 *
 * @author Angel
 */
public class OnLog4j {

    public static Logger Log() {

        //BasicConfigurator.configure();
        URL url = OnLog4j.class.getResource("log4j2.properties");
        //System.out.println("getPath: "+url.getPath());
        //System.out.println("getFile: "+url.getFile());
        String propertiesFile = url.getPath();
        ConfigurationSource source = null;

        // System.out.println(new File(".").getAbsolutePath());
        //System.out.println(new File(propertiesFile));
        //File File = new File(propertiesFile);
        
//        System.out.println(File);
//        
//        System.out.println("isAbsolute: "+File.isAbsolute());
//        System.out.println("isDirectory: "+File.isDirectory());
//        System.out.println("isFile: "+File.isFile());
//        System.out.println("isHidden: "+File.isHidden());
//        System.out.println("exists: "+File.exists());
//        System.out.println("getName: "+File.getName());
//        
//        
//         System.out.println(new File("C:/Program Files").isDirectory());
//         System.out.println(new File("C:/Program Files/").isDirectory());
//         
//         
//         System.out.println(new File("C:/Program Files").exists());
//         System.out.println(new File("C:/Program Files/").exists());
//         System.out.println("-------");
//         System.out.println(new File("C:/Program Files/Apache Software Foundation").isDirectory());
//         System.out.println(new File("C:/Program Files/Apache Software Foundation/Tomcat 9.0").isDirectory());
//         System.out.println(new File("C:/Program Files/Apache Software Foundation/Tomcat 9.0/webapps").isDirectory());
//         System.out.println(new File("C:/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/OnGestion").isDirectory());
//         System.out.println(new File("C:/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/OnGestion/WEB-INF").isDirectory());
//         System.out.println(new File("C:/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/OnGestion/WEB-INF/classes").isDirectory());
//         System.out.println(new File("C:/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/OnGestion/WEB-INF/classes/Clases").isDirectory());
//         System.out.println(new File("C:/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/OnGestion/WEB-INF/classes/Clases/Onlog4j").isDirectory());
//         System.out.println(new File("C:/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/OnGestion/WEB-INF/classes/Clases/Onlog4j/log4j2.properties").isDirectory());
//         
//         System.out.println("-------");
//         System.out.println(new File("C:/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/OnGestion/WEB-INF/classes/Clases/Onlog4j/log4j2.properties").exists());
//        
        try {
            propertiesFile = propertiesFile.replaceAll("%20", " ");
           // System.out.println("Ruta definitiva: " + propertiesFile);
            source = new ConfigurationSource(new FileInputStream(propertiesFile), new File(propertiesFile));

        } catch (FileNotFoundException e) {

            System.out.println(e);
        }
        Configurator.initialize(null, source);
        Logger Logger = LogManager.getRootLogger();
        //System.out.println(Logger);
        //Logger log = LogManager.getRootLogger();
        //PropertyConfigurator.configure(url);
        return Logger;
    }

}
