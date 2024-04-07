package ExmanenAccesoDatos.controller;

import ExmanenAccesoDatos.dao.LibroDAO;
import ExmanenAccesoDatos.dominio.Libro;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class Controlador {

    @Autowired
    LibroDAO libroDAo;

    @GetMapping("/")
    public String indice(Model modelo) {
        List<Libro> libros = (List<Libro>) libroDAo.findAll();
        modelo.addAttribute("libros", libros);
        return "indice";
    }

    @GetMapping("/crear")
    public String crear(Libro libro) {
        return "modificar";
    }

    @PostMapping("/guardar")
    public String guardar(Libro libro) {
        libroDAo.save(libro);
        return "modificar";
    }

    @GetMapping("/actualizar/{id}")
    public String actualizar(Model modelo, Libro libro) {
        libro = libroDAo.findById(libro.getId()).orElse(null);
        modelo.addAttribute("libro", libro);
        return "modificar";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminar(Libro libro) {
        libroDAo.delete(libro);
        return "redirect:/";
    }

}
