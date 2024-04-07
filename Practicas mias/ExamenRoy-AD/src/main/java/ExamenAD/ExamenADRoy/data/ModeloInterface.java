package ExamenAD.ExamenADRoy.data;

import ExamenAD.ExamenADRoy.dominio.Equipo;
import ExamenAD.ExamenADRoy.dominio.Informe;
import ExamenAD.ExamenADRoy.dominio.Miembro;
import ExamenAD.ExamenADRoy.dominio.Tecnico;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModeloInterface {
    @Autowired
    private MiembroRepository miembroRepository;
    @Autowired
    private TecnicoRepository tecnicoRepository;
    @Autowired
    private EquipoRepository equipoRepository;
    
    //CRUD Tecnico
    public List<Tecnico> listarTecnicos(){
        List<Tecnico> listaTecnicos = tecnicoRepository.findAll();
        return listaTecnicos;
    }
    
    public void crearTecnico(Tecnico tecnico){
        tecnicoRepository.save(tecnico);
    }
    
    public void eliminarTecnico(Tecnico tecnico){
        tecnicoRepository.delete(tecnico);
    }
    
    public Optional<Tecnico> editarTecnico(Tecnico tecnico){
        Optional<Tecnico> tecnicoActualizado = tecnicoRepository.findById(tecnico.getId());
        return tecnicoActualizado;
    }
    
    //CRUD Equipo
    public List<Equipo> listarEquipos(){
        List<Equipo> listaEquipos = equipoRepository.findAll();
        return listaEquipos;
    }
    
    public void crearEquipo (Equipo equipo){
        equipoRepository.save(equipo);
    }
    
    public void eliminarEquipo(Equipo equipo){
        equipoRepository.delete(equipo);
    }
    
    public Optional<Equipo> editarEquipo(Equipo equipo){
        Optional<Equipo> equipoActualizado = equipoRepository.findById(equipo.getId());
        return equipoActualizado;
    }
    
    //CRUD Miembro
    public List<Miembro> listarMiembros(){
        List<Miembro> listaMiembros = miembroRepository.findAll();
        return listaMiembros;
    }
    
    public void crearMiembro (Miembro miembro){
        miembroRepository.save(miembro);
    }
    
    public void eliminarMiembro(Miembro miembro){
        miembroRepository.delete(miembro);
    }
    
    
    
    public ArrayList<Informe> topVeteranos(int numDias) {
        LocalDate fecha = LocalDate.now().minusDays(numDias);
        List<Tecnico> tecnicos = tecnicoRepository.buscarEntrenadoresPrincipales(fecha);
        ArrayList<Informe> informes = new ArrayList<>();
        for (Tecnico tecnico : tecnicos) {
            int diasComoEntrenadorPrincipal = miembroRepository.tecnicoEspecifico(tecnico, 1, fecha);
            informes.add(new Informe(tecnico, diasComoEntrenadorPrincipal));
        }
        return informes;
    }
    
    public ArrayList<Tecnico> activos(int numEquipos) {
    List<Equipo> equipos = equipoRepository.findAll();
    Map<Tecnico, Integer> tecnicosEquipos = new HashMap<>();

    for (Equipo equipo : equipos) {
        for (Miembro miembro : equipo.getListaMiembros()) {
            if (miembro.getTecnico() != null) {
                tecnicosEquipos.put(miembro.getTecnico(), tecnicosEquipos.getOrDefault(miembro.getTecnico(), 0) + 1);
            }
        }
    }

    List<Tecnico> activos = new ArrayList<>();
    for (Map.Entry<Tecnico, Integer> entry : tecnicosEquipos.entrySet()) {
        if (entry.getValue() >= numEquipos) {
            activos.add(entry.getKey());
        }
    }

    Collections.sort(activos, new Comparator<Tecnico>() {
        @Override
        public int compare(Tecnico o1, Tecnico o2) {
            return o1.getNombre().compareTo(o2.getNombre());
        }
    });

    return new ArrayList<>(activos);
}
    
    public Map<Equipo, Double> estabilidad() {
    List<Equipo> equipos = equipoRepository.findAll();
    Map<Equipo, Double> estabilidadEquipos = new HashMap<>();

    for (Equipo equipo : equipos) {
        int contador = 0;
        int numEntrenadores = 0;

        for (Miembro miembro : equipo.getListaMiembros()) {
            if (miembro.getTecnico() != null) {
                contador += ChronoUnit.DAYS.between(miembro.getFechaInicio(), miembro.getFechaFin() != null ? miembro.getFechaFin() : LocalDate.now());
                numEntrenadores++;
            }
        }

        if (numEntrenadores > 0) {
            double estabilidad = (double) contador / numEntrenadores;
            estabilidadEquipos.put(equipo, estabilidad);
        }
    }

    List<Map.Entry<Equipo, Double>> list = new ArrayList<>(estabilidadEquipos.entrySet());
    Collections.sort(list, new Comparator<Map.Entry<Equipo, Double>>() {
        @Override
        public int compare(Map.Entry<Equipo, Double> o1, Map.Entry<Equipo, Double> o2) {
            return o2.getValue().compareTo(o1.getValue());
        }
    });

    Map<Equipo, Double> resultado = new HashMap<>();
    for (Map.Entry<Equipo, Double> entry : list) {
        resultado.put(entry.getKey(), entry.getValue());
    }

    return resultado;
}
    
}
