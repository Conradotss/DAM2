# PROYECTOS DAM

#comando para quitar el autoCRLF
git config core.autocrlf true

#Maven Repository para importar dependencias que necesitemos, solo buscamos el nombre de la dependencia

## Configuracion para Spring application properties
logging.pattern.dateformat=hh.mm
spring.main.banner-mode=off
spring.thymeleaf.cache=false
#Conexion SQL
spring.datasource.url=jdbc:mysql://localhost/test?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrival=true
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
#Mostrar sql
spring.jpa.properties.hibernate.format_sql=true
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE

##Configuracion para paginas html en spring
xmlns:th="http://www.thymeleaf.org" //Para usar thymeleaf
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> //Para usar bootstrap y poner diseños ya hechos


## Dependencias e imports para usar JUnit en Netbeans
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

 <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId>
            <version>5.10.2</version>
            <scope>test</scope>
        </dependency>
