<%-- 
    Document   : CrearBot
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="Clases.Telegram.Bot.DatosBot"%>
<!--<%//@page import="java.util.ArrayList"%>-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="CrearBot" name="frmNuevoBot" method="POST" 
      enctype="multipart/form-data" id="frmNuevoBot">

    <div class="form-title-row">
        <h1>Admin - Crear bots</h1>
    </div>

    <br>
    <div class="form-row">
        <label>
            <span>Token:</span>
            <input name="token" id="token" />
        </label>
    </div>

    <br>

    <div class="form-row">
        <label>
            <span>Nombre bot:</span>
            <input name="nombre" id="nombre" />
        </label>
    </div>

    <br>



    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnCrearBot" title='Aceptar'></button>                   
        <button class="btnFormCancelar" type="button" id="btnCancelarBot" title="Cancelar"></button>

    </div>



</form>
