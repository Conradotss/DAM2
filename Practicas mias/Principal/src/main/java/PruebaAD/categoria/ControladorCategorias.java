package PruebaAD.categoria;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ControladorCategorias {

    @Autowired
    private categoriaRepository repositorio;

    @GetMapping("/categorias")
    public String listaCategorias(Model modelo) {
        List<Categoria> categorias = repositorio.findAll();
        modelo.addAttribute("categorias", categorias);
        return "categoria";
    }

    @GetMapping("/categorias/nuevo")
    public String crearCategoria(Model modelo){
        modelo.addAttribute("categoria", new Categoria());
        return "categoria_formulario";
    }
    
    @PostMapping("/categorias/guardar")
    public String guardarCategoria(Categoria ct){
        repositorio.save(ct);
        return "redirect:/categorias";
    }
    
}
