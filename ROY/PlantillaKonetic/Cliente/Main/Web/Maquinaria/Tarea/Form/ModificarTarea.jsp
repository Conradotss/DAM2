<%-- 
    Document   : CrearTarea
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>


<%@page import="java.nio.file.Paths"%>
<%@page import="java.nio.file.Path"%>
<%@page import="Clases.Maquinaria.Tarea.ControladorTareas"%>
<%@page import="Clases.Maquinaria.Tarea.Tarea"%>
<%@page import="Clases.Maquinaria.Tarea.DatosTarea"%>
<%@page import="Clases.Recursos.Ejercicio"%>
<%@page import="Clases.Configuracion.Usuario.ControladorUsuarios"%>
<%@page import="Clases.Configuracion.Usuario.Usuario"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<form class="form-basic" action="ModificarTarea" name="frmModificarTarea" 
      method="POST" id="frmModificarTarea" enctype="multipart/form-data">

    <div class="form-title-row">
        <h1><%=DatosTarea.tituloModificar%></h1>
    </div>

    <%
        Tarea Tarea = null;
        try {
            ControladorTareas controlador = new ControladorTareas();
            response.setContentType("text/html;charset=UTF-8");
            int tarea_id = Integer.parseInt(request.getParameter("tarea_id"));
            //System.out.println(nombreTarea);
            Tarea = controlador.getTarea(tarea_id);
        } catch (Exception e) {
            e.printStackTrace();
        }

    %>
    <!--Datos de página-->            


    <input type="hidden" name="tarea_id" value="<%=Tarea.getTarea_id()%>"/>

    <div class="form-row">
        <label>
            <span>Nombre</span>
            <input name="nombre" id="nombre"  value="<%=Tarea.getNombre()%>"/>
        </label>
    </div>

    <div class="form-row">
        <label>
            <span>Tipo</span>
            <select name="tipo" id="tipo" >
                    <option value="">Seleccione:</option>
                    <%
                        for (int i = 0; i < DatosTarea.tipo.length; i++) {
                    %>
                    <option value="<%=i%>"><%=DatosTarea.tipo[i]%></option>
                    <%
                        }
                    %>
                </select>
                <script>selectInCombo('tipo', '<%=Tarea.getTipo()%>');</script>
        </label>
    </div>
    <br>

    <div class="form-row">
        <label>
            <span>Descripción</span>
            <textarea name="descripcion" id="descripcion" style="width: 380px"/><%=Tarea.getdescripcion()%></textarea>
        </label>
    </div>

    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnModificarTarea" title="Aceptar"></button>
        <button class="btnFormCancelar" type="button" id="btnCancelarTarea" title="Cancelar"></button>
    </div>    

</form>

