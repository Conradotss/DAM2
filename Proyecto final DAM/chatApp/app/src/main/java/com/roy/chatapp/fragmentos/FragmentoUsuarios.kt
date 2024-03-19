package com.roy.chatapp.fragmentos

import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.EditText
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.ValueEventListener
import com.roy.chatapp.R
import com.roy.chatapp.adaptador.AdaptadorUsuario
import com.roy.chatapp.modelo.Usuario

class FragmentoUsuarios : Fragment() {

    private var usuarioAdaptador : AdaptadorUsuario?=null
    private var usuarioLista : List<Usuario>?=null
    private var rvUsuarios : RecyclerView?=null
    private lateinit var et_buscar_usuario : EditText


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view : View = inflater.inflate(R.layout.fragment_fragmento_usuarios, container, false)

        rvUsuarios = view.findViewById(R.id.rv_usuarios)
        rvUsuarios!!.setHasFixedSize(true)
        rvUsuarios!!.layoutManager = LinearLayoutManager(context)
        et_buscar_usuario = view.findViewById(R.id.et_buscar_usuario)

        usuarioLista = ArrayList()
        ObtenerUsuariosBD()

        et_buscar_usuario.addTextChangedListener(object : TextWatcher{
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {

            }

            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
                buscarUsuario(s.toString().lowercase())
            }

            override fun afterTextChanged(s: Editable?) {

            }

        })

        return view
    }

    private fun ObtenerUsuariosBD() {
        val firebaseUser = FirebaseAuth.getInstance().currentUser!!.uid
        val reference = FirebaseDatabase.getInstance().reference.child("Usuarios").orderByChild("nombre_usuario")
        reference.addValueEventListener(object : ValueEventListener{
            override fun onDataChange(snapshot: DataSnapshot) {
                (usuarioLista as ArrayList<Usuario>).clear()
                if(et_buscar_usuario.text.toString().isEmpty()){
                    for (sh in snapshot.children){
                        val usuario : Usuario?= sh.getValue(Usuario::class.java)
                        if(!(usuario!!.getUid()).equals(firebaseUser)){
                            (usuarioLista as ArrayList<Usuario>).add(usuario)
                        }
                    }
                    usuarioAdaptador = AdaptadorUsuario(context!!, usuarioLista!!)
                    rvUsuarios!!.adapter= usuarioAdaptador
                }


            }

            override fun onCancelled(error: DatabaseError) {
                TODO("Not yet implemented")
            }

        })
    }

    private fun buscarUsuario(buscaUsuario : String){
        val firebaseUser = FirebaseAuth.getInstance().currentUser!!.uid
        val consulta = FirebaseDatabase.getInstance().reference.child("Usuarios").orderByChild("buscar")
            .startAt(buscaUsuario).endAt(buscaUsuario + "\uf8ff")
        consulta.addValueEventListener(object : ValueEventListener{
            override fun onDataChange(snapshot: DataSnapshot) {
                (usuarioLista as ArrayList<Usuario>).clear()
                for (sh in snapshot.children){
                    val usuario : Usuario?= sh.getValue(Usuario::class.java)
                    if(!(usuario!!.getUid()).equals(firebaseUser)){
                        (usuarioLista as ArrayList<Usuario>).add(usuario)
                    }
                }
                usuarioAdaptador = AdaptadorUsuario(context!!, usuarioLista!!)
                rvUsuarios!!.adapter= usuarioAdaptador
            }

            override fun onCancelled(error: DatabaseError) {
                TODO("Not yet implemented")
            }

        })
    }


}