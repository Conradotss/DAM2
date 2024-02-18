package roy.Tarea07.tarea07.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import roy.Tarea07.tarea07.dominio.audi;
import roy.Tarea07.tarea07.dominio.bmw;
import roy.Tarea07.tarea07.dominio.hyundai;
import roy.Tarea07.tarea07.dominio.mercedes;
import roy.Tarea07.tarea07.dominio.peugeot;
import roy.Tarea07.tarea07.servicio.audiServicioI;
import roy.Tarea07.tarea07.servicio.bmwServicioI;
import roy.Tarea07.tarea07.servicio.hyundaiServicioI;
import roy.Tarea07.tarea07.servicio.mercedesServicioI;
import roy.Tarea07.tarea07.servicio.peugeotServicioI;


@Controller
public class Controlador {
    
    @Autowired
    private audiServicioI audiServicioI;
    
    @Autowired
    private bmwServicioI bmwServicioI;
    
    @Autowired
    private hyundaiServicioI hyundaiServicioI;
    
    @Autowired
    private mercedesServicioI mercedesServicioI;
    
    @Autowired
    private peugeotServicioI peugeotServicioI;
    
    
    @GetMapping("/")
    public String inicio (Model modelo){
//        var audi =audiServicioI.listaAudi();
//        modelo.addAttribute("audis", audi);
        return "inicio";
    }
    
    @GetMapping("/verAudi")
    public String verAudi(Model modelo){
        var audi = audiServicioI.listaAudi();
        modelo.addAttribute("audis", audi);
        return "indiceAudi";
    }
    
    @GetMapping("/agregarAudi")
    public String agregar(audi audi){
        return "modificarAudi";
    }
    
    @PostMapping("/guardarAudi")
    public String guardarAudi(audi audi, Errors errores){
        if(errores.hasErrors()){
            return "modificarAudi";
        }
        audiServicioI.guardar(audi);
        return "redirect:/verAudi";
    }
    
    @GetMapping("/editarAudi/{idaudi}")
    public String editarAudi(audi audi, Model modelo){
        audi = audiServicioI.buscarAudi(audi);
        modelo.addAttribute("audi", audi);
        return "modificarAudi";
    }
    
    @GetMapping("/eliminarAudi/{idaudi}")
    public String eliminarAudi(audi audi){
        audiServicioI.eliminar(audi);
        return "redirect:/verAudi";
    }
    
    @GetMapping("/verBMW")
    public String verBMW(Model modelo){
        var bmw = bmwServicioI.listaBMW();
        modelo.addAttribute("bmws", bmw);
        return "indiceBMW";
    }
    
    @GetMapping("/agregarBMW")
    public String agregarBMW(bmw bmw){
        return "modificarBMW";
    }
    
    @PostMapping("/guardarBMW")
    public String guardarBMW(bmw bmw, Errors errores){
        if(errores.hasErrors()){
            return "modificarBMW";
        }
        bmwServicioI.guardar(bmw);
        return "redirect:/verBMW";
    }
    
    @GetMapping("/editarBMW/{idbmw}")
    public String editarBMW(bmw bmw, Model modelo){
        bmw = bmwServicioI.buscarBMW(bmw);
        modelo.addAttribute("bmw", bmw);
        return "modificarBMW";
    }
    
    @GetMapping("/eliminarBMW/{idbmw}")
    public String eliminar(bmw bmw){
        bmwServicioI.eliminar(bmw);
        return "redirect:/verBMW";
    }
    
    
    @GetMapping("/verHyundai")
    public String verHyundai(Model modelo){
        var hyundai = hyundaiServicioI.listaHyundai();
        modelo.addAttribute("hyundais", hyundai);
        return "indiceHyundai";
    }
    
    @GetMapping("/agregarHyundai")
    public String agregar(hyundai hyundai){
        return "modificarHyundai";
    }
    
    @PostMapping("/guardarHyundai")
    public String guardarHyundai(hyundai hyundai, Errors errores){
        if(errores.hasErrors()){
            return "modificarHyundai";
        }
        hyundaiServicioI.guardar(hyundai);
        return "redirect:/verHyundai";
    }
    
    @GetMapping("/editarHyundai/{idhyundai}")
    public String editarHundai(hyundai hyundai, Model modelo){
        hyundai = hyundaiServicioI.buscarHyundai(hyundai);
        modelo.addAttribute("hyundai", hyundai);
        return "modificarHyundai";
    }
    
    @GetMapping("/eliminarHyundai/{idhyundai}")
    public String eliminar(hyundai hyundai){
        hyundaiServicioI.eliminar(hyundai);
        return "redirect:/verHyundai";
    }
    
    
    @GetMapping("/verMercedes")
    public String verMercedes(Model modelo){
        var mercedes = mercedesServicioI.listaMercedes();
        modelo.addAttribute("mercedess", mercedes);
        return "indiceMercedes";
    }
    
    
    @GetMapping("/agregarMercedes")
    public String agregarMercedes(mercedes mercedes){
        return "modificarMercedes";
    }
    
    @PostMapping("/guardarMercedes")
    public String guardarMercedes(mercedes mercedes, Errors errores){
        if(errores.hasErrors()){
            return "modificarMercedes";
        }
        mercedesServicioI.guardar(mercedes);
        return "redirect:/verMercedes";
    }
    
    @GetMapping("/editarMercedes/{idmercedes}")
    public String editarMercedes(mercedes mercedes, Model modelo){
        mercedes = mercedesServicioI.buscarMercedes(mercedes);
        modelo.addAttribute("mercedes", mercedes);
        return "modificarMercedes";
    }
    
    @GetMapping("/eliminarMercedes/{idmercedes}")
    public String eliminarMercedes(mercedes mercedes){
        mercedesServicioI.eliminar(mercedes);
        return "redirect:/verMercedes";
    }
    
    
    @GetMapping("/verPeugeot")
    public String verPeugeot(Model modelo){
        var peugeot = peugeotServicioI.listaPeugeot();
        modelo.addAttribute("peugeots", peugeot);
        return "indicePeugeot";
    }
    
    @GetMapping("/agregarPeugeot")
    public String agregarPeugeot(peugeot peugeot){
        return "modificarPeugeot";
    }
    
    @PostMapping("/guardarPeugeot")
    public String guardarPeugeot(peugeot peugeot, Errors errores){
        if(errores.hasErrors()){
            return "modificarPeugeot";
        }
        peugeotServicioI.guardar(peugeot);
        return "redirect:/verPeugeot";
    }
    
    @GetMapping("/editarPeugeot/{idpeugeot}")
    public String editarPeugeot(peugeot peugeot, Model modelo){
        peugeot = peugeotServicioI.buscarPeugeot(peugeot);
        modelo.addAttribute("peugeot", peugeot);
        return "modificarPeugeot";
    }
    
    @GetMapping("/eliminarPeugeot/{idpeugeot}")
    public String eliminarPeugeot(peugeot peugeot){
        peugeotServicioI.eliminar(peugeot);
        return "redirect:/verPeugeot";
    }
    
    
}
