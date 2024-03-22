<%-- 
    Document   : BusquedaTarea
    Created on : 15-dic-2016, 3:17:39
    Author     : OnAngel
--%>


<%@page import="Clases.Maquinaria.Tarea.DatosTarea"%>
<%@page import="Clases.Configuracion.Permisos.Permisos"%>
<%@page import="Clases.Configuracion.GrupoUsuario.GrupoUsuario"%>
<%@page import="Clases.Configuracion.Usuario.Usuario"%>
<%@page import="Clases.Configuracion.Usuario.ControladorUsuarios"%>
<%@page import="Clases.Configuracion.GrupoUsuario.ControladorGrupoUsuarios"%>
<%@page import="Clases.Configuracion.Permisos.ControladorPermisoss"%>
<%@page import="Clases.Login.SesionUsuario.SesionUsuario"%>
<%@page import="Clases.Configuracion.ModuloHijo.ModulosHijos"%>
<form class="formbusqueda" action="BuscarTarea" name="frmBuscarTarea" 
      method="POST" enctype="multipart/form-data" id="frmBuscarTarea" style="height: 100%; width: 100%">

    <%
        
        Permisos Permisos2 = (Permisos) session.getAttribute("Permisos2");
    %>

    <div id="tablaBusqueda">


        <div class="formfila">
            <label>
                <span>Nombre</span>
                <input type="search" name="nombre" id="nombre" style="width: 300px">
            </label>
        </div>

        <div class="formfila">
            <label>                            
                <span>Tipo</span>
                <select name="tipo" id="tipo" style="width: 300px">
                    <option value="-1">Todos</option>
                    <%
                        for (int i = 0; i < DatosTarea.tipo.length; i++) {
                    %>
                    <option value="<%=i%>"><%=DatosTarea.tipo[i]%></option>
                    <%
                        }
                    %>
                </select>
            </label>
        </div>

        <div class="divBotonesBusqueda">
            <!--Boton-->
            <div class="formbotonesbuscar">
                <div class="formfila" style="width: 120px; height: 32px">        
                    <!--Boton de busqueda-->                        
                    <button class="buttonBuscar" type="submit" id="buttonBuscarTarea" title="Buscar"></button>                            
                    <!--Boton de limpiar busqueda-->                        
                    <!--Boton de nuevo-->   
                    <%
                        if (Permisos2.getCrear() == 1) {
                    %>
                    <button class="buttonCrear" type="button" id="buttonCrearTarea" title="Crear"></button>                             
                    <%}%>
                </div>
            </div>
        </div>
    </div>
</form>

