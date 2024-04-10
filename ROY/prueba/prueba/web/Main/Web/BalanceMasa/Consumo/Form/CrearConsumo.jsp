<%-- 
    Document   : CrearConsumo
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="Clases.BalanceMasa.Consumo.DatosConsumo"%>
<!--<%//@page import="java.util.ArrayList"%>-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="CrearConsumo" name="frmNuevoConsumo" method="POST" 
      enctype="multipart/form-data" id="frmNuevoConsumo">

    <div class="form-title-row">
        <h1>Admin - Crear consumos</h1>
    </div>

    <br>
    <div class="form-row">
        <label>
            <span>Cantidad:</span>
            <input name="cantidad" id="cantidad" />
        </label>
    </div>

    <br>

    <div class="form-row">
        <label>
            <span>Lot:</span>
            <input name="lot" id="lot" />
        </label>
    </div>

    <%     

        ResultSet rs = Clases.BalanceMasa.Consumo.ModeloConsumos.obtenerMaterial();
    %>



    <div class="form-row">
        <label>
            <span>Material:</span>
            <select name="bm_material" id="bm_material">
                <option value="">Selecciona una opcion</option>

                <% while (rs.next()) {%>

                <option value=<%= rs.getInt("bm_material_id")%>><%= rs.getString("nombre")%></option>
                <% }%>

            </select>        
        </label>
    </div>



    <div class="form-row">
        <label>
            <span>Orden trabajo:</span>
            <input name="orden" id="orden" />
        </label>
    </div>


    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnCrearConsumo" title='Aceptar'></button>                   
        <button class="btnFormCancelar" type="button" id="btnCancelarConsumo" title="Cancelar"></button>

    </div>



</form>
