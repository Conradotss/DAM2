package com.roy.chatapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth

class Login : AppCompatActivity() {
    private lateinit var lg_email : EditText
    private lateinit var lg_password : EditText
    private lateinit var btn_login : Button
    private lateinit var auth : FirebaseAuth


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        iniciarVariables()
        btn_login.setOnClickListener({
            validarDatos()
        })
    }

    private fun validarDatos() {
        val email : String = lg_email.text.toString()
        val password : String = lg_password.text.toString()

        if(email.isEmpty()){
            Toast.makeText(applicationContext, "Campo correo vacio", Toast.LENGTH_SHORT).show()
        }else if (password.isEmpty()){
            Toast.makeText(applicationContext, "Campo password vacio", Toast.LENGTH_SHORT).show()
        }else{
            LoginUsuario(email, password)
        }
    }

    private fun LoginUsuario(email: String, password: String) {
        auth.signInWithEmailAndPassword(email, password).addOnCompleteListener { task ->
            if(task.isSuccessful){
                val intent = Intent(applicationContext, MainActivity::class.java)
                startActivity(intent)
                finish()
            }else{
                Toast.makeText(applicationContext, "Se ha producido un error", Toast.LENGTH_SHORT).show()
            }
        }.addOnFailureListener { e-> Toast.makeText(applicationContext, "${e.message}", Toast.LENGTH_SHORT).show() }
    }

    private fun iniciarVariables(){
        lg_email = findViewById(R.id.lg_email)
        lg_password = findViewById(R.id.lg_passowrd)
        btn_login = findViewById(R.id.btn_aceptar_login)
        auth = FirebaseAuth.getInstance()
    }
}