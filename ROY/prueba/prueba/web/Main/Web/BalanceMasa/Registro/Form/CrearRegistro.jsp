<%-- 
    Document   : CrearRegistro
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="Clases.BalanceMasa.Registro.DatosRegistro"%>
<!--<%//@page import="java.util.ArrayList"%>-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="CrearRegistro" name="frmNuevoRegistro" method="POST" 
      enctype="multipart/form-data" id="frmNuevoRegistro">

    <div class="form-title-row">
        <h1>Admin - Crear registros</h1>
    </div>

    <br>
    <div class="form-row">
        <label>
            <span>Orden trabajo:</span>
            <input name="ordenTrabajo" id="ordenTrabajo" />
        </label>
    </div>

    <br>

    <div class="form-row">
        <label>
            <span>Dato produccion:</span>
            <input name="datoProduccion" id="datoProduccion" />
        </label>
    </div>

    <%     

        ResultSet rs = Clases.BalanceMasa.Registro.ModeloRegistros.obtenerTips();
        ResultSet rs2 = Clases.BalanceMasa.Registro.ModeloRegistros.obtenerUbi();
        ResultSet rs3 = Clases.BalanceMasa.Registro.ModeloRegistros.obtenerUbi();
    %>

    <div class="form-row">
        <label>
            <span>Tipo registro:</span>
            <select name="tipoID" id="tipoID">
                <option value="">Selecciona una opcion</option>

                <% while (rs.next()) {%>

                <option value=<%= rs.getInt("bm_tiporegistroproduccion_id")%>><%= rs.getString("nombre")%></option>
                <% }%>

            </select>
        </label>
    </div>

    <div class="form-row">
        <label>
            <span>Ubicacion origen:</span>
            <select name="origenID" id="origenID">
                <option value="">Selecciona una opcion</option>

                <% while (rs2.next()) {%>

                <option value=<%= rs2.getInt("bm_ubicacion_id")%>><%= rs2.getString("nombre")%></option>
                <% }%>

            </select>        
        </label>
    </div>

    <div class="form-row">
        <label>
            <span>Ubicacion destino:</span>
            <select name="destinoID" id="destinoID">
                <option value="">Selecciona una opcion</option>

                <% while (rs3.next()) {%>

                <option value=<%= rs3.getInt("bm_ubicacion_id")%>><%= rs3.getString("nombre")%></option>
                <% }%>

            </select>        
        </label>
    </div>


    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnCrearRegistro" title='Aceptar'></button>                   
        <button class="btnFormCancelar" type="button" id="btnCancelarRegistro" title="Cancelar"></button>

    </div>



</form>
