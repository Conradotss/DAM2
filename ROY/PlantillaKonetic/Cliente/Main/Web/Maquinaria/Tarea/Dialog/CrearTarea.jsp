<%-- 
    Document   : CrearTarea
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="Clases.Maquinaria.Tarea.DatosTarea"%>
<%@page import="Clases.Recursos.DatosAplicacion"%>
<%@page import="Clases.Configuracion.Permisos.Permisos"%>
<%@page import="Clases.Configuracion.GrupoUsuario.GrupoUsuario"%>
<%@page import="Clases.Configuracion.Usuario.Usuario"%>
<%@page import="Clases.Configuracion.Usuario.ControladorUsuarios"%>
<%@page import="Clases.Configuracion.GrupoUsuario.ControladorGrupoUsuarios"%>
<%@page import="Clases.Configuracion.Permisos.ControladorPermisoss"%>
<%@page import="Clases.Login.SesionUsuario.SesionUsuario"%>
<%@page import="Clases.Configuracion.ModuloHijo.ModulosHijos"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
    int tarea = ModulosHijos.listaModuloHijos_id[90];
//empresa
    HttpSession sesion = request.getSession(true);
    Object objSesionUsuario = sesion.getAttribute("SesionUsuario");
    SesionUsuario SesionUsuario = null;
    int empresa_id = 0;
    int usuario_id = 0;
    if (objSesionUsuario != null) {
        SesionUsuario = (SesionUsuario) objSesionUsuario;
        empresa_id = SesionUsuario.getEmpresa_id();
        usuario_id = SesionUsuario.getUsuario_id();

        //permisos
        ControladorPermisoss ControladorPermisoss = new ControladorPermisoss();
        ControladorGrupoUsuarios ControladorGrupoUsuarios = new ControladorGrupoUsuarios();
        ControladorUsuarios ControladorUsuarios = new ControladorUsuarios();
        Usuario Usuario = ControladorUsuarios.getUsuario(usuario_id);
        GrupoUsuario GrupoUsuario = ControladorGrupoUsuarios.getGrupoUsuario(Usuario.getGrupoUsuario_id());
        int grupoUsuario_id = GrupoUsuario.getGrupoUsuario_id();

        Permisos Permisos2 = SesionUsuario.getPermiso( tarea);

        //session.setAttribute("SesionUsuario", SesionUsuario);
        if (Permisos2.getCrear() == 1) {
%>
<html>
    <head>

        <title><%=DatosTarea.tituloCrear%></title>
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/CrearTarea.js"></script> 

        <script src="../../../../js/onLibJs/iban.js" type="text/javascript"></script>


    </head>
    <body hidden>

        <jsp:include page="../Form/CrearTarea.jsp"></jsp:include>

        </body>
    </html>
<%
} else {
%>
<script>
    window.location.href = '/<%=DatosAplicacion.nombreAplicacion%>/main.jsp';
</script>
<%
    }
} else {
%>
<script>
    window.location.href = '/<%=DatosAplicacion.nombreAplicacion%>/main.jsp';
</script>
<%
    }
%>