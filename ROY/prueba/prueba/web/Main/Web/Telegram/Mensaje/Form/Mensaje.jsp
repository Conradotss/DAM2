<%-- 
    Document   : CrearMensaje
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="java.sql.ResultSet"%>
<%@page import="Clases.Telegram.Mensaje.DatosMensaje"%>
<!--<%//@page import="java.util.ArrayList"%>-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="../../../../../Mensaje" name="frmNuevoMensaje" method="POST" 
      enctype="multipart/form-data" id="frmNuevoMensaje">

    <div class="form-title-row">
        <h1>MENSAJERÍA</h1>
    </div>




    <%     

        ResultSet rs = Clases.Telegram.Mensaje.ModeloMensajes.obtenerUsuario();
    %>



    <div class="form-row">
        <label>
            <span>Elegir usuario:</span>
            <select name="usuario" id="usuario">
                <option value="">Selecciona una opcion</option>

                <% while (rs.next()) {%>

                <option value=<%= rs.getString("id_telegram")%>><%= rs.getString("nombre")%></option>
                <% }%>

            </select>        
        </label>
    </div>

    <%

        ResultSet rs2 = Clases.Telegram.Mensaje.ModeloMensajes.obtenerBot();
    %>



    <div class="form-row">
        <label>
            <span>Elegir bot:</span>
            <select name="token" id="token">
                <option value="">Selecciona una opcion</option>

                <% while (rs2.next()) {%>

                <option value=<%= rs2.getString("token")%>,<%= rs2.getString("nombre")%> ><%= rs2.getString("nombre")%></option>
                <% }%>

            </select>        
        </label>
    </div>

  



    <div class="form-row">
        <label>
            <span>Escribir texto</span>
            <textarea name="nombre" id="nombre"/></textarea>
        </label>
    </div>


    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnCrearMensaje" title='Aceptar'></button>                   
        <button class="btnFormCancelar" type="button" id="btnCancelarMensaje" title="Cancelar"></button>

    </div>



</form>

