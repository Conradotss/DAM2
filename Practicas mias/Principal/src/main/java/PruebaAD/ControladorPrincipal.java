package PruebaAD;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControladorPrincipal {
    
    @GetMapping("")
    public String paginaInicio(){
        return "index";
    }
}
