<%-- 
    Document   : CrearTipo
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="java.nio.file.Paths"%>
<%@page import="java.nio.file.Path"%>
<%@page import="Clases.BalanceMasa.Tipo.ControladorTipos"%>
<%@page import="Clases.BalanceMasa.Tipo.Tipo"%>
<%@page import="Clases.BalanceMasa.Tipo.DatosTipo"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="ModificarTipo" name="frmModificarTipo" 
      method="POST" id="frmModificarTipo" enctype="multipart/form-data">

    <div class="form-title-row">
        <h1>Tipo</h1>
    </div>

    <%
        Tipo Tipo = null;
        try {
            ControladorTipos controlador = new ControladorTipos();
            response.setContentType("text/html;charset=UTF-8");
            int Tipo_id = Integer.parseInt(request.getParameter("tipo_id"));
            //System.out.println(nombreTipo);
            Tipo = controlador.getTipo(Tipo_id);
        } catch (Exception e) {
            e.printStackTrace();
        }

    %>
    <!--Datos de página-->            


    <input type="hidden" name="id" value="<%=Tipo.getTipo_id()%>"/>

    <div class="form-row">
        <label>
            <span>Nombre</span>
            <input type="text" name="nombre" id="nombre"  value="<%=Tipo.getNombre()%>"/>
        </label>
    </div>

 
    <br>

    <div class="form-row">
        <label>
            <span>Descripción</span>
            <textarea name="descripcion" id="descripcion" style="width: 380px"/><%=Tipo.getdescripcion()%></textarea>
        </label>
    </div>

    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnModificarTipo" title="Aceptar"></button>
        <button class="btnFormCancelar" type="button" id="btnCancelarTipo" title="Cancelar"></button>
    </div>    

</form>

