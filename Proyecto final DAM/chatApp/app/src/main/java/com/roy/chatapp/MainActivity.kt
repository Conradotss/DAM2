package com.roy.chatapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuInflater
import android.view.MenuItem
import android.widget.TextView
import androidx.appcompat.widget.Toolbar
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.FragmentPagerAdapter
import androidx.viewpager.widget.ViewPager
import com.google.android.material.tabs.TabLayout
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.ValueEventListener
import com.roy.chatapp.fragmentos.FragmentoChats
import com.roy.chatapp.fragmentos.FragmentoUsuarios
import com.roy.chatapp.modelo.Usuario

class MainActivity : AppCompatActivity() {

    var firebaseUser : FirebaseUser?=null
    var reference : DatabaseReference?=null
    private lateinit var nombre_usuario : TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        iniciarComponentes()
        ObtenerDato()
    }

    fun iniciarComponentes(){
        val toolbar : Toolbar = findViewById(R.id.toolbar_main)
        setSupportActionBar(toolbar)
        toolbar.title=""
        val tablayout : TabLayout = findViewById(R.id.tablayout_main)
        val viewPager : ViewPager = findViewById(R.id.view_pager_main)

        firebaseUser = FirebaseAuth.getInstance().currentUser
        reference = FirebaseDatabase.getInstance().reference.child("Usuarios").child(firebaseUser!!.uid)

        nombre_usuario = findViewById(R.id.nombre_usuario_toolbar)

        val viewPagerAdapter = ViewPagerAdapter(supportFragmentManager)

        viewPagerAdapter.adItem(FragmentoUsuarios(), "Usuarios")
        viewPagerAdapter.adItem(FragmentoChats(), "Chats")

        viewPager.adapter = viewPagerAdapter
        tablayout.setupWithViewPager(viewPager)
    }

    fun ObtenerDato(){
        // Oculta el título de la actividad antes de establecer el texto en el TextView.
        supportActionBar?.setDisplayShowTitleEnabled(false)

        reference!!.addValueEventListener(object : ValueEventListener{
            override fun onDataChange(snapshot: DataSnapshot) {
                if(snapshot.exists()){
                    val usuario : Usuario? = snapshot.getValue(Usuario::class.java)
                    nombre_usuario.text = usuario!!.getNombre_Usuario()

                    // Establece el título de la actividad en la Toolbar.
                    supportActionBar?.title = usuario.getNombre_Usuario()
                }
            }

            override fun onCancelled(error: DatabaseError) {
                TODO("Not yet implemented")
            }

        })
    }



    class ViewPagerAdapter(fragmentManager: FragmentManager): FragmentPagerAdapter(fragmentManager){
        private val listaFragmentos : MutableList<Fragment> = ArrayList()
        private val listaTitulos : MutableList<String> = ArrayList()

        override fun getCount(): Int {
            return listaFragmentos.size
        }

        override fun getItem(position: Int): Fragment {
            return listaFragmentos[position]
        }

        override fun getPageTitle(position: Int): CharSequence? {
            return listaTitulos[position]
        }

        fun adItem(fragment : Fragment, titulo : String){
            listaFragmentos.add(fragment)
            listaTitulos.add(titulo)
        }

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
                finish()
                // Se devuelve 'true' para indicar que la acción de menú se ha manejado correctamente.
                return true
            }else -> super.onOptionsItemSelected(item)
            // Si el ID del elemento de menú no coincide con ninguno de los casos anteriores, entonces:
            // Se llama al método onOptionsItemSelected() de la superclase (Activity) para manejar la acción de menú.
        }
    }
}