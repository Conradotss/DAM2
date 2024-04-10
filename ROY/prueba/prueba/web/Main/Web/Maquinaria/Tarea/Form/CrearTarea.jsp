<%-- 
    Document   : CrearTarea
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="Clases.Maquinaria.Tarea.DatosTarea"%>
<!--<%//@page import="java.util.ArrayList"%>-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="CrearTarea" name="frmNuevoTarea" method="POST" 
      enctype="multipart/form-data" id="frmNuevoTarea">

    <div class="form-title-row">
        <h1><%=DatosTarea.tituloCrear%></h1>
    </div>

    <br>
    <div class="form-row">
        <label>
            <span>Nombres</span>
            <input name="nombre" id="nombre" />
        </label>
    </div>
    <div class="form-row">
        <label>
            <span>Tipo</span>
            <select name="tipo" id="tipo" >
                <option value="">Seleccione:</option>
                <%
                    for (int i = 0; i < DatosTarea.tipo.length; i++) {
                %>
                <option value="<%=i%>"><%=DatosTarea.tipo[i]%></option>
                <%
                    }
                %>
            </select>
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
        <button class="btnFormAceptar" type="submit" id="btnCrearTarea" title='Aceptar'></button>                   
        <button class="btnFormCancelar" type="button" id="btnCancelarTarea" title="Cancelar"></button>

    </div>



</form>

