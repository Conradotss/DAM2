<%-- 
    Document   : CrearMaterial
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="Clases.BalanceMasa.Material.DatosMaterial"%>
<!--<%//@page import="java.util.ArrayList"%>-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="CrearMaterial" name="frmNuevoMaterial" method="POST" 
      enctype="multipart/form-data" id="frmNuevoMaterial">

    <div class="form-title-row">
        <h1>Admin - Crear materiales</h1>
    </div>

    

    <br>
    <div class="form-row">
        <label>
            <span>Referencia</span>
            <input name="referencia" id="referencia" />
        </label>
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
        <button class="btnFormAceptar" type="submit" id="btnCrearMaterial" title='Aceptar'></button>                   
        <button class="btnFormCancelar" type="button" id="btnCancelarMaterial" title="Cancelar"></button>

    </div>



</form>
