package com.roy.chatapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser

class Inicio : AppCompatActivity() {
    private lateinit var btn_registro : Button
    private lateinit var btn_inicio : Button

    var  firebaseUser : FirebaseUser ?= null



    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_inicio)

        btn_registro = findViewById(R.id.btn_registrar)
        btn_inicio = findViewById(R.id.btn_login)



        btn_registro.setOnClickListener {
            val intent = Intent(this@Inicio, Registrar::class.java)
            startActivity(intent)
            finish()
        }

        btn_inicio.setOnClickListener{
            val intent = Intent(this@Inicio, Login::class.java)
            startActivity(intent)
            finish()
        }

    }

    private fun ComprobarSesion(){
        firebaseUser = FirebaseAuth.getInstance().currentUser
        if(firebaseUser!= null){
            val intent = Intent(applicationContext, MainActivity::class.java)
            startActivity(intent)
            finish()
        }
    }

    //Funcion que se ejecutara al iniciar la actividad para comprobar si hay alguna sesion activa
    override fun onStart() {
        ComprobarSesion()
        super.onStart()
    }


}