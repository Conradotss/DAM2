package roy.spring.spring_roy.web;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import roy.spring.spring_roy.dao.PersonaDAO;
import roy.spring.spring_roy.dominio.Persona;
import roy.spring.spring_roy.servicio.PersonaServicioI;

@Controller
public class Controlador {
    @Autowired
   PersonaServicioI personaServicio;
    
    @GetMapping("/")
    public String inicio(Model modelo){
        List<Persona> personas = (List<Persona>) personaServicio.listarPersonas();
        modelo.addAttribute("personas", personas);
        return "inicio";
    }
    
    @GetMapping("/agregar")
    public String agregar(Persona persona){
        return "agregar";
    }
    
    @PostMapping("/guardar")
    public String guardar(Persona persona){
        personaServicio.guardar(persona);
        return "redirect:/";
    }
    
    @GetMapping("/modificar/{idPersona}")
    public String modificar(Persona persona, Model modelo){
        persona = personaServicio.encontrarPersona(persona);
        modelo.addAttribute("persona", persona);
        return "/agregar";
    }
    
    @GetMapping("/eliminar/{idPersona}")
    public String eliminar(Persona persona){
        personaServicio.eliminar(persona);
        return "redirect:/";
    }
}
