package com.roy.chatapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuInflater
import android.view.MenuItem
import androidx.appcompat.widget.Toolbar
import com.google.firebase.auth.FirebaseAuth

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        val inflater : MenuInflater = menuInflater
        inflater.inflate(R.menu.menu_principal, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // El método onOptionsItemSelected() se llama cuando un usuario selecciona un elemento del menú de opciones.
        // Aquí, se utiliza una expresión 'when' para manejar diferentes casos de acción de menú.
        return when(item.itemId){
            // Si el ID del elemento de menú es 'R.id.menu_salir' (es decir, el usuario seleccionó la opción de cerrar sesión), entonces:
            R.id.menu_salir->{
                // Se cierra la sesión del usuario utilizando FirebaseAuth.signOut().
                FirebaseAuth.getInstance().signOut()
                // Se crea un nuevo Intent para iniciar la actividad Inicio.
                val intent = Intent(this@MainActivity, Inicio::class.java)
                startActivity(intent)
                // Se devuelve 'true' para indicar que la acción de menú se ha manejado correctamente.
                return true
            }else -> super.onOptionsItemSelected(item)
            // Si el ID del elemento de menú no coincide con ninguno de los casos anteriores, entonces:
            // Se llama al método onOptionsItemSelected() de la superclase (Activity) para manejar la acción de menú.
        }
    }
}