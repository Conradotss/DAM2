package ExamenAD.ExamenADRoy.data;

import ExamenAD.ExamenADRoy.dominio.Tecnico;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TecnicoRepository extends JpaRepository<Tecnico, Integer>{

    @Query("SELECT t FROM Tecnico t JOIN t.listaMiembro m WHERE m.nivel = 1 AND m.fechaFin >= :fecha")
    List<Tecnico> buscarEntrenadoresPrincipales(@Param("fecha") LocalDate fecha);
    
}

