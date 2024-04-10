<%-- 
    Document   : CrearUbicacion
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="Clases.BalanceMasa.Ubicacion.DatosUbicacion"%>
<!--<%//@page import="java.util.ArrayList"%>-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="CrearUbicacion" name="frmNuevoUbicacion" method="POST" 
      enctype="multipart/form-data" id="frmNuevoUbicacion">

    <div class="form-title-row">
        <h1>Admin - Crear Ubicaciones</h1>
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
        <button class="btnFormAceptar" type="submit" id="btnCrearUbicacion" title='Aceptar'></button>                   
        <button class="btnFormCancelar" type="button" id="btnCancelarUbicacion" title="Cancelar"></button>

    </div>



</form>
