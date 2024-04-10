<%-- 
    Document   : CrearBot
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="java.sql.ResultSet"%>
<%@page import="java.nio.file.Paths"%>
<%@page import="java.nio.file.Path"%>
<%@page import="Clases.Telegram.Bot.ControladorBots"%>
<%@page import="Clases.Telegram.Bot.Bot"%>
<%@page import="Clases.Telegram.Bot.DatosBot"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="ModificarBot" name="frmModificarBot" 
      method="POST" id="frmModificarBot" enctype="multipart/form-data">

    <div class="form-title-row">
        <h1>Modificar</h1>
    </div>

    <%
        Bot Bot = null;
        try {
            ControladorBots controlador = new ControladorBots();
            response.setContentType("text/html;charset=UTF-8");
            int Bot_id = Integer.parseInt(request.getParameter("bot_id"));
            //System.out.println(nombreBot);
            Bot = controlador.getBot(Bot_id);
        } catch (Exception e) {
            e.printStackTrace();
        }

    %>
    <!--Datos de página-->            


    <input type="hidden" name="id" value="<%=Bot.getBasedatosID()%>"/>

    <br>

    <div class="form-row">
        <label>
            <span>ID Token:</span>
            <input name="token" id="token" value="<%=Bot.getToken()%>"/>
        </label>
    </div>

    <br>

    <div class="form-row">
        <label>
            <span>Nombre:</span>
            <input name="nombre" id="nombre" value="<%=Bot.getNombre()%>"/>
        </label>
    </div>






    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnModificarBot" title="Aceptar"></button>
        <button class="btnFormCancelar" type="button" id="btnCancelarBot" title="Cancelar"></button>
    </div>    

</form>

