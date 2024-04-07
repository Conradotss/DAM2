/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ExamenAD.ExamenADRoy.dominio;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name="miembro")
public class Miembro{
@Embedded
private MiembroId id;

@Column(nullable = false)
private LocalDate fechaInicio;

@Column(nullable = false)
private LocalDate fechaFin;

@Column(nullable = false)
private int nivel;

@ManyToOne
@JoinColumn(name = "id_tecnico")
private Tecnico tecnico;


@ManyToOne
@JoinColumn(name = "id_equipo")
private Equipo equipo;

    public Miembro() {
    }

    public MiembroId getId() {
        return id;
    }

    public void setId(MiembroId id) {
        this.id = id;
    }

    public LocalDate getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public LocalDate getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(LocalDate fechaFin) {
        this.fechaFin = fechaFin;
    }

    public int getNivel() {
        return nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    public Tecnico getTecnico() {
        return tecnico;
    }

    public void setTecnico(Tecnico tecnico) {
        this.tecnico = tecnico;
    }

    public Equipo getEquipo() {
        return equipo;
    }

    public void setEquipo(Equipo equipo) {
        this.equipo = equipo;
    }


}




/*

    public Miembro(MiembroId id, LocalDate fechaInicio, LocalDate fechaFin, int nivel, Tecnico tecnico, Equipo equipo) {
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.nivel = nivel;
        this.tecnico = tecnico;
        this.equipo = equipo;
    }

    public Miembro(LocalDate fechaInicio, LocalDate fechaFin, int nivel, Tecnico tecnico, Equipo equipo) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.nivel = nivel;
        this.tecnico = tecnico;
        this.equipo = equipo;
    }

    public MiembroId getId() {
        return id;
    }

    public void setId(MiembroId id) {
        this.id = id;
    }

    public LocalDate getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public LocalDate getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(LocalDate fechaFin) {
        this.fechaFin = fechaFin;
    }

    public int getNivel() {
        return nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    public Tecnico getTecnico() {
        return tecnico;
    }

    public void setTecnico(Tecnico tecnico) {
        this.tecnico = tecnico;
    }

    public Equipo getEquipo() {
        return equipo;
    }

    public void setEquipo(Equipo equipo) {
        this.equipo = equipo;
    }

    @Override
    public String toString() {
        return "Miembro{" + "id=" + id + ", fechaInicio=" + fechaInicio + ", fechaFin=" + fechaFin + ", nivel=" + nivel + ", tecnico=" + tecnico + ", equipo=" + equipo + '}';
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 47 * hash + Objects.hashCode(this.id);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final ExamenAD.ExamenADRoy.dominio.Miembro other = (ExamenAD.ExamenADRoy.dominio.Miembro) obj;
        return Objects.equals(this.id, other.id);
    }

}
*/