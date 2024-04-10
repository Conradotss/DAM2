<%-- 
    Document   : CrearMaterial
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="java.nio.file.Paths"%>
<%@page import="java.nio.file.Path"%>
<%@page import="Clases.BalanceMasa.Material.ControladorMateriales"%>
<%@page import="Clases.BalanceMasa.Material.Material"%>
<%@page import="Clases.BalanceMasa.Material.DatosMaterial"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="ModificarMaterial" name="frmModificarMaterial" 
      method="POST" id="frmModificarMaterial" enctype="multipart/form-data">

    <div class="form-title-row">
        <h1>Material</h1>
    </div>

    <%
        Material Material = null;
        try {
            ControladorMateriales controlador = new ControladorMateriales();
            response.setContentType("text/html;charset=UTF-8");
            int Material_id = Integer.parseInt(request.getParameter("material_id"));
            //System.out.println(nombreMaterial);
            Material = controlador.getMaterial(Material_id);
        } catch (Exception e) {
            e.printStackTrace();
        }

    %>
    <!--Datos de página-->            


    <input type="hidden" name="id" value="<%=Material.getMaterial_id()%>"/>

    <div class="form-row">
        <label>
            <span>Referencia</span>
            <input type="text" name="referencia" id="referencia"  value="<%=Material.getReferencia()%>"/>
        </label>
    </div>


    <div class="form-row">
        <label>
            <span>Nombre</span>
            <input type="text" name="nombre" id="nombre"  value="<%=Material.getNombre()%>"/>
        </label>
    </div>


    <br>

    <div class="form-row">
        <label>
            <span>Descripción</span>
            <textarea name="descripcion" id="descripcion" style="width: 380px"/><%=Material.getDescripcion()%></textarea>
        </label>
    </div>

    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnModificarMaterial" title="Aceptar"></button>
        <button class="btnFormCancelar" type="button" id="btnCancelarMaterial" title="Cancelar"></button>
    </div>    

</form>

