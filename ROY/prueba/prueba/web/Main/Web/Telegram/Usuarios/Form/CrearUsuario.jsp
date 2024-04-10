<%-- 
    Document   : CrearUsuario
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="Clases.Telegram.Usuario.DatosUsuario"%>
<!--<%//@page import="java.util.ArrayList"%>-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="CrearUsuario" name="frmNuevoUsuario" method="POST" 
      enctype="multipart/form-data" id="frmNuevoUsuario">

    <div class="form-title-row">
        <h1>Admin - Crear usuarios</h1>
    </div>

    <br>
    <div class="form-row">
        <label>
            <span>ID Telegram:</span>
            <input name="telegram" id="telegram" />
        </label>
    </div>

    <br>
    
    <div class="form-row">
        <label>
            <span>Nombre usuario:</span>
            <input name="nombre" id="nombre" />
        </label>
    </div>

    <br>

   

    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnCrearUsuario" title='Aceptar'></button>                   
        <button class="btnFormCancelar" type="button" id="btnCancelarUsuario" title="Cancelar"></button>

    </div>



</form>
