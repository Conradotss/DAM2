<%-- 
    Document   : CrearUsuario
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="java.sql.ResultSet"%>
<%@page import="java.nio.file.Paths"%>
<%@page import="java.nio.file.Path"%>
<%@page import="Clases.Telegram.Usuario.ControladorUsuarios"%>
<%@page import="Clases.Telegram.Usuario.Usuario"%>
<%@page import="Clases.Telegram.Usuario.DatosUsuario"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="ModificarUsuario" name="frmModificarUsuario" 
      method="POST" id="frmModificarUsuario" enctype="multipart/form-data">

    <div class="form-title-row">
        <h1>Modificar</h1>
    </div>

    <%
        Usuario Usuario = null;
        try {
            ControladorUsuarios controlador = new ControladorUsuarios();
            response.setContentType("text/html;charset=UTF-8");
            int Usuario_id = Integer.parseInt(request.getParameter("usuario_id"));
            //System.out.println(nombreUsuario);
            Usuario = controlador.getUsuario(Usuario_id);
        } catch (Exception e) {
            e.printStackTrace();
        }

    %>
    <!--Datos de página-->            


    <input type="hidden" name="id" value="<%=Usuario.getBasedatosID()%>"/>

    <br>

    <div class="form-row">
        <label>
            <span>ID Telegram:</span>
            <input name="telegram" id="telegram" value="<%=Usuario.getTelegramID()%>"/>
        </label>
    </div>

    <br>

    <div class="form-row">
        <label>
            <span>Nombre:</span>
            <input name="nombre" id="nombre" value="<%=Usuario.getNombre()%>"/>
        </label>
    </div>






    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnModificarUsuario" title="Aceptar"></button>
        <button class="btnFormCancelar" type="button" id="btnCancelarUsuario" title="Cancelar"></button>
    </div>    

</form>

