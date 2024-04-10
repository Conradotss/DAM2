<%-- 
    Document   : CrearUbicacion
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="java.nio.file.Paths"%>
<%@page import="java.nio.file.Path"%>
<%@page import="Clases.BalanceMasa.Ubicacion.ControladorUbicacion"%>
<%@page import="Clases.BalanceMasa.Ubicacion.Ubicacion"%>
<%@page import="Clases.BalanceMasa.Ubicacion.DatosUbicacion"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="ModificarUbicacion" name="frmModificarUbicacion" 
      method="POST" id="frmModificarUbicacion" enctype="multipart/form-data">

    <div class="form-title-row">
        <h1>Ubicacion</h1>
    </div>

    <%
        Ubicacion Ubicacion = null;
        try {
            ControladorUbicacion controlador = new ControladorUbicacion();
            response.setContentType("text/html;charset=UTF-8");
            int ubicacion_id = Integer.parseInt(request.getParameter("ubicacion_id"));
            //System.out.println(nombreUbicacion);
            Ubicacion = controlador.getUbicacion(ubicacion_id);
        } catch (Exception e) {
            e.printStackTrace();
        }

    %>
    <!--Datos de página-->            


    <input type="hidden" name="id" value="<%=Ubicacion.getUbicacion_id()%>"/>

    <div class="form-row">
        <label>
            <span>Nombre</span>
            <input name="nombre" id="nombre"  value="<%=Ubicacion.getNombre()%>"/>
        </label>
    </div>

   
    <br>

    <div class="form-row">
        <label>
            <span>Descripción</span>
            <textarea name="descripcion" id="descripcion" style="width: 380px"/><%=Ubicacion.getdescripcion()%></textarea>
        </label>
    </div>

    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnModificarUbicacion" title="Aceptar"></button>
        <button class="btnFormCancelar" type="button" id="btnCancelarUbicacion" title="Cancelar"></button>
    </div>    

</form>

