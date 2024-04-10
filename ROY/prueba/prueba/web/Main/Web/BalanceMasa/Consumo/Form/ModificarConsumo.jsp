<%-- 
    Document   : CrearConsumo
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="java.sql.ResultSet"%>
<%@page import="java.nio.file.Paths"%>
<%@page import="java.nio.file.Path"%>
<%@page import="Clases.BalanceMasa.Consumo.ControladorConsumos"%>
<%@page import="Clases.BalanceMasa.Consumo.Consumo"%>
<%@page import="Clases.BalanceMasa.Consumo.DatosConsumo"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="ModificarConsumo" name="frmModificarConsumo" 
      method="POST" id="frmModificarConsumo" enctype="multipart/form-data">

    <div class="form-title-row">
        <h1>Modificar</h1>
    </div>

    <%
        Consumo Consumo = null;
        try {
            ControladorConsumos controlador = new ControladorConsumos();
            response.setContentType("text/html;charset=UTF-8");
            int Consumo_id = Integer.parseInt(request.getParameter("consumo_id"));
            //System.out.println(nombreConsumo);
            Consumo = controlador.getConsumo(Consumo_id);
        } catch (Exception e) {
            e.printStackTrace();
        }

    %>
    <!--Datos de página-->            


    <input type="hidden" name="id" value="<%=Consumo.getConsumoID()%>"/>

    <br>

    <div class="form-row">
        <label>
            <span>Cantidad:</span>
            <input name="cantidad" id="cantidad" value="<%=Consumo.getCantidad()%>"/>
        </label>
    </div>

    <br>

    <div class="form-row">
        <label>
            <span>Lot:</span>
            <input name="lot" id="lot" value="<%=Consumo.getLot()%>"/>
        </label>
    </div>



    <%

        ResultSet rs = Clases.BalanceMasa.Consumo.ModeloConsumos.obtenerMaterial();
    %>


    <div class="form-row">
        <label>
            <span>Material:</span>
            <select name="bm_material" id="bm_material">


                <%
                    boolean selected = false;
                    while (rs.next()) {

                        if (rs.getInt("bm_material_id") == Consumo.getBm_material()) {
                            selected = true;
                        }
                %>
                <option value="<%= rs.getInt("bm_material_id")%>" <%= selected ? "selected" : ""%>><%= rs.getString("nombre")%></option>
                <%
                        selected = false;
                    }
                %>

            </select>        
        </label>
    </div>



    <div class="form-row">
        <label>
            <span>Orden trabajo:</span>
            <input name="orden" id="orden" value="<%=Consumo.getOrdenTrabajo()%>"/>
        </label>
    </div>


    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnModificarConsumo" title="Aceptar"></button>
        <button class="btnFormCancelar" type="button" id="btnCancelarConsumo" title="Cancelar"></button>
    </div>    

</form>