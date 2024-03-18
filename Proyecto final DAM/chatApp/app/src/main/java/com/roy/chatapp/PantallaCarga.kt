package com.roy.chatapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.CountDownTimer
import android.widget.Toast

class PantallaCarga : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_pantalla_carga)
        mostrarBienvenida()
    }

    fun mostrarBienvenida(){
        object : CountDownTimer(3000, 1000){
            override fun onTick(millisUntilFinished: Long) {
                //Metodo para configurar algun mensaje que se reproduzca como cuenta regresiva
            }

            override fun onFinish() {
                //Que pasara cuando se termine la cuenta atras?
                try {
                    val intent = Intent(applicationContext, Inicio::class.java)
                    startActivity(intent)
                    finish()
                } catch (e: Exception) {
                    Toast.makeText(applicationContext, "algo salio mal", Toast.LENGTH_SHORT).show()
                    Toast.makeText(applicationContext, e.message, Toast.LENGTH_SHORT).show()
                }
            }

        }.start()
    }
}