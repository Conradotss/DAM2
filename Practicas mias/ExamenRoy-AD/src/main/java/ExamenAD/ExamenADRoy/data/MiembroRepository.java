package ExamenAD.ExamenADRoy.data;

import ExamenAD.ExamenADRoy.dominio.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface MiembroRepository extends JpaRepository<Miembro, Integer>{
    
       @Query("SELECT COUNT(m) FROM Miembro m WHERE m.tecnico = :tecnico AND m.nivel = :nivel AND m.fechaFin >= :fecha")
    int tecnicoEspecifico(@Param("tecnico") Tecnico tecnico, @Param("nivel") int nivel, @Param("fecha") LocalDate fecha);
}
