<%-- 
    Document   : CrearRegistro
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="java.sql.ResultSet"%>
<%@page import="java.nio.file.Paths"%>
<%@page import="java.nio.file.Path"%>
<%@page import="Clases.BalanceMasa.Registro.ControladorRegistros"%>
<%@page import="Clases.BalanceMasa.Registro.Registro"%>
<%@page import="Clases.BalanceMasa.Registro.DatosRegistro"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="ModificarRegistro" name="frmModificarRegistro" 
      method="POST" id="frmModificarRegistro" enctype="multipart/form-data">

    <div class="form-title-row">
        <h1>Modificar</h1>
    </div>

    <%
        Registro Registro = null;
        try {
            ControladorRegistros controlador = new ControladorRegistros();
            response.setContentType("text/html;charset=UTF-8");
            int Registro_id = Integer.parseInt(request.getParameter("registro_id"));
            //System.out.println(nombreRegistro);
            Registro = controlador.getRegistro(Registro_id);
        } catch (Exception e) {
            e.printStackTrace();
        }

    %>
    <!--Datos de página-->            


    <input type="hidden" name="id" value="<%=Registro.getRegistroID()%>"/>




    <br>





    <div class="form-row">
        <label>
            <span>Orden trabajo:</span>
            <input name="ordenTrabajo" id="ordenTrabajo" value="<%=Registro.getOrdenTrabajoID()%>"/>
        </label>
    </div>

    <br>

    <div class="form-row">
        <label>
            <span>Dato produccion:</span>
            <input name="datoProduccion" id="datoProduccion" value="<%=Registro.getDatoProduccion()%>"/>
        </label>
    </div>



    <%

        ResultSet rs = Clases.BalanceMasa.Registro.ModeloRegistros.obtenerTips();
        ResultSet rs2 = Clases.BalanceMasa.Registro.ModeloRegistros.obtenerUbi();
        ResultSet rs3 = Clases.BalanceMasa.Registro.ModeloRegistros.obtenerUbi();
    %>

    <!-- Tipo registro -->
    <div class="form-row">
        <label>
            <span>Tipo registro:</span>
            <select name="tipoID" id="tipoID">
                <%
                    boolean selected = false;
                    while (rs.next()) {

                        if (rs.getInt("bm_tipoRegistroProduccion_id") == Registro.getTipoID()) {
                            selected = true;
                        }
                %>
                <option value="<%= rs.getInt("bm_tipoRegistroProduccion_id")%>" <%= selected ? "selected" : ""%>><%= rs.getString("nombre")%></option>
                <%
                        selected = false;
                    }
                %>
            </select>
        </label>
    </div>















    <div class="form-row">
        <label>
            <span>Ubicacion origen:</span>
            <select name="origenID" id="origenID">


                <%
                    boolean selected2 = false;
                    while (rs2.next()) {

                        if (rs2.getInt("bm_ubicacion_id") == Registro.getOrigenID()) {
                            selected2 = true;
                        }
                %>
                <option value="<%= rs2.getInt("bm_ubicacion_id")%>" <%= selected2 ? "selected" : ""%>><%= rs2.getString("nombre")%></option>
                <%
                        selected2 = false;
                    }
                %>

            </select>        
        </label>  
    </div>

    <div class="form-row">
        <label>
            <span>Ubicacion destino:</span>
            <select name="destinoID" id="destinoID">


                <%
                    boolean selected3 = false;
                    while (rs3.next()) {

                        if (rs3.getInt("bm_ubicacion_id") == Registro.getDestinoID()) {
                            selected3 = true;
                        }
                %>
                <option value="<%= rs3.getInt("bm_ubicacion_id")%>" <%= selected3 ? "selected" : ""%>><%= rs3.getString("nombre")%></option>
                <%
                        selected3 = false;
                    }
                %>

            </select>        
        </label>
    </div>

    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnModificarRegistro" title="Aceptar"></button>
        <button class="btnFormCancelar" type="button" id="btnCancelarRegistro" title="Cancelar"></button>
    </div>    

</form>

