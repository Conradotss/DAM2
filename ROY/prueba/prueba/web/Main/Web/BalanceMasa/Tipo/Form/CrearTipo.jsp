<%-- 
    Document   : CrearTipo
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="Clases.BalanceMasa.Tipo.DatosTipo"%>
<!--<%//@page import="java.util.ArrayList"%>-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="CrearTipo" name="frmNuevoTipo" method="POST" 
      enctype="multipart/form-data" id="frmNuevoTipo">

    <div class="form-title-row">
        <h1>Admin - Crear tipos</h1>
    </div>

    <br>
    <div class="form-row">
        <label>
            <span>Nombre</span>
            <input name="nombre" id="nombre" />
        </label>
    </div>
 
    <br>

    <div class="form-row">
        <label>
            <span>Descripción</span>
            <textarea name="descripcion" id="descripcion"/></textarea>
        </label>
    </div>


    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnCrearTipo" title='Aceptar'></button>                   
        <button class="btnFormCancelar" type="button" id="btnCancelarTipo" title="Cancelar"></button>

    </div>



</form>
