package com.roy.chatapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.FirebaseDatabase

class Registrar : AppCompatActivity() {

    private lateinit var rg_nombre_usuario : EditText
    private lateinit var rg_email_usuario : EditText
    private lateinit var rg_password : EditText
    private lateinit var rg_password_repeat : EditText
    private lateinit var Btn_aceptar_registro : Button

    private lateinit var auth : FirebaseAuth
    private lateinit var reference : DatabaseReference

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_registrar)
        iniciarVariables()
        Btn_aceptar_registro.setOnClickListener({
            validarDatos()
        })

    }

    private fun validarDatos() {
        val nombre_usuario : String = rg_nombre_usuario.text.toString()
        val email : String = rg_email_usuario.text.toString()
        val password : String = rg_password.text.toString()
        val password2 : String = rg_password_repeat.text.toString()

        if(nombre_usuario.isEmpty()){
            Toast.makeText(applicationContext, "Nombre usuario vacio", Toast.LENGTH_SHORT).show()
        }else if(email.isEmpty()){
            Toast.makeText(applicationContext, "Email vacio", Toast.LENGTH_SHORT).show()
        }else if(password.isEmpty()){
            Toast.makeText(applicationContext, "password vacio", Toast.LENGTH_SHORT).show()
        }else if (password2.isEmpty()){
            Toast.makeText(applicationContext, "password vacio", Toast.LENGTH_SHORT).show()
        }else if(!password.equals(password2)){
            Toast.makeText(applicationContext, "Campos password no coinciden", Toast.LENGTH_SHORT).show()
        }else{
            RegistrarUsuario(email, password)
        }

    }

    private fun RegistrarUsuario(email: String, password: String) {
        auth.createUserWithEmailAndPassword(email, password).addOnCompleteListener {
            task -> if (task.isSuccessful){
                var uid : String = ""
            uid = auth.currentUser!!.uid
            reference = FirebaseDatabase.getInstance().reference.child("Usuarios").child(uid)

            val hashmap = HashMap<String, Any>()
            val nombre_usuario : String = rg_nombre_usuario.text.toString()
            val email : String = rg_email_usuario.text.toString()

            hashmap["uid"] = uid
            hashmap["nombre_usuario"] = nombre_usuario
            hashmap["email"] = email
            hashmap["imagen"] = ""
            hashmap["buscar"] = nombre_usuario.toLowerCase()

            reference.updateChildren(hashmap).addOnCompleteListener { task2 ->
                if(task2.isSuccessful){
                    val intent = Intent(applicationContext, MainActivity::class.java)
                    startActivity(intent)
                    finish()
                }
            }.addOnFailureListener { e ->
                Toast.makeText(applicationContext, "${e.message}", Toast.LENGTH_SHORT).show()
            }
        }else{
            Toast.makeText(applicationContext, "Ha ocurrido un error", Toast.LENGTH_SHORT).show()
        }
        }.addOnFailureListener { e-> Toast.makeText(applicationContext, "${e.message}", Toast.LENGTH_SHORT).show() }
    }

    private fun iniciarVariables(){
        rg_nombre_usuario = findViewById(R.id.rg_nombre)
        rg_email_usuario = findViewById(R.id.rg_email)
        rg_password = findViewById(R.id.rg_passowrd)
        rg_password_repeat = findViewById(R.id.rg_password2)
        Btn_aceptar_registro = findViewById(R.id.btn_aceptar_registro)
        auth = FirebaseAuth.getInstance()
    }
}