package PruebaAD.marca;

import PruebaAD.categoria.Categoria;
import PruebaAD.categoria.categoriaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControladorMarca {
    @Autowired
    private categoriaRepository categoriaRepository;
    
    @Autowired
    private marcaRepository marcaRepository;
    
    @GetMapping("/marca/nueva")
    public String crearNuevaMarca(Model modelo){
        List<Categoria> listaCategoria = categoriaRepository.findAll();
        modelo.addAttribute("listaCategoria", listaCategoria);
        modelo.addAttribute("marca", new Marca());
        //1:53 minuto por el que va el video
        return "marca_formulario";
    }
    
}
