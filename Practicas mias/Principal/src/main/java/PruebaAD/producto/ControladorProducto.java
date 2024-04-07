package PruebaAD.producto;

import PruebaAD.categoria.Categoria;
import PruebaAD.categoria.categoriaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ControladorProducto {
    @Autowired
    private categoriaRepository catRepositorio;
    
    @Autowired
    private productoRepository prodRepositorio;
    
    @GetMapping("producto/nuevo")
    public String agregarProducto(Model modelo){
        List<Categoria> listaCategoria = catRepositorio.findAll();
        modelo.addAttribute("producto", new Producto());
        modelo.addAttribute("listaCategoria", listaCategoria);
        return "producto_formulario";
    }
    
    @PostMapping("/producto/guardar")
    public String guardarProducto(Producto producto){
        prodRepositorio.save(producto);
        return "redirect:/";
    }
    
    @GetMapping("/producto")
    public String listarProductos(Model modelo){
        List<Producto> listaProductos = prodRepositorio.findAll();
        modelo.addAttribute("listaProductos", listaProductos);
        return "producto";
    }
    
    @GetMapping("/producto/editar/{id}")
    public String editarProducto(@PathVariable("id") Integer id, Model modelo){
        Producto producto = prodRepositorio.findById(id).get();
        prodRepositorio.save(producto);
        modelo.addAttribute("producto", producto);
        List<Categoria> listaCategoria = catRepositorio.findAll();
        modelo.addAttribute("listaCategoria", listaCategoria);
        
        
        return "producto_formulario";
    }
    
    
    @GetMapping("/producto/eliminar/{id}")
    public String eliminarProducto(@PathVariable("id") Integer id, Model modelo){
        prodRepositorio.deleteById(id);
        return "redirect:/producto";
    }
}
