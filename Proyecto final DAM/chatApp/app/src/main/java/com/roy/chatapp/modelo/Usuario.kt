package com.roy.chatapp.modelo

class Usuario {
    private var uid : String = ""
    private var nombre_usuario : String = ""
    private var email : String = ""
    private var telefono : String = ""
    private var imagen : String = ""
    private var buscar : String = ""
    private var nombre : String = ""
    private var apellidos : String = ""
    private var edad : String = ""
    private var profesion : String = ""
    private var domicilio : String = ""

    constructor()

    constructor(
        uid: String,
        nombre_usuario: String,
        email: String,
        telefono: String,
        imagen: String,
        buscar: String,
        nombres: String,
        apellidos: String,
        edad: String,
        profesion: String,
        domicilio: String
    ) {
        this.uid = uid
        this.nombre_usuario = nombre_usuario
        this.email = email
        this.telefono = telefono
        this.imagen = imagen
        this.buscar = buscar
        this.nombre = nombres
        this.apellidos = apellidos
        this.edad = edad
        this.profesion = profesion
        this.domicilio = domicilio
    }

    //getters y setters
    fun getUid() : String?{
        return uid
    }

    fun setUid(uid : String){
        this.uid = uid
    }

    fun getNombre_Usuario() : String?{
        return nombre_usuario
    }

    fun setNombre_Usuario(n_usuario : String){
        this.nombre_usuario = n_usuario
    }

    fun getEmail() : String?{
        return email
    }

    fun setEmail(email : String){
        this.email = email
    }

    fun getTelefono() : String?{
        return telefono
    }

    fun setTelefono(telefono : String){
        this.telefono = telefono
    }

    fun getImagen() : String?{
        return imagen
    }

    fun setImagen(imagen : String){
        this.imagen = imagen
    }

    fun getBuscar() : String?{
        return buscar
    }

    fun setBuscar(buscar : String){
        this.buscar = buscar
    }

    fun getNombres() : String?{
        return nombre
    }

    fun setNombres(nombres : String){
        this.nombre = nombres
    }

    fun getApellidos() : String?{
        return apellidos
    }

    fun setApellidos(apellidos : String){
        this.apellidos = apellidos
    }

    fun getEdad() : String?{
        return edad
    }

    fun setEdad(edad : String){
        this.edad = edad
    }

    fun getProfesion() : String?{
        return profesion
    }

    fun setProfesion(profesion : String){
        this.profesion = profesion
    }

    fun getDomicilio() : String?{
        return domicilio
    }

    fun setDomicilio(domicilio : String){
        this.domicilio = domicilio
    }
}