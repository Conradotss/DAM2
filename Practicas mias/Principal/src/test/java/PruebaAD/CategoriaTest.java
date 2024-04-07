package PruebaAD;

import PruebaAD.categoria.Categoria;
import PruebaAD.categoria.categoriaRepository;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class CategoriaTest {

    @Autowired
    private categoriaRepository repositorio;
//
//    @Test
//    public void testCrearCategoria() {
//        Categoria categoria = repositorio.save(new Categoria("Ordenador"));
//        assertThat(categoria.getId()).isGreaterThan(0);
//    }

}
