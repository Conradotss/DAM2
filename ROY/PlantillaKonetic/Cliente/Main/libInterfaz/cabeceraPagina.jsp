<%@page import="Clases.Recursos.DatosAplicacion"%>
<%@page import="Clases.Configuracion.Empresa.Empresa"%>
<%@page import="Clases.Configuracion.Empresa.ControladorEmpresas"%>
<%@page import="Utilidades.Conversor_formato"%>
<%@page import="java.io.File"%>
<%@page import="Clases.Recursos.Ejercicio"%>
<%@page import="Clases.Configuracion.Usuario.ControladorUsuarios"%>
<%@page import="Clases.Configuracion.GrupoUsuario.GrupoUsuario"%>
<%@page import="Clases.Configuracion.GrupoUsuario.ControladorGrupoUsuarios"%>
<%@page import="Clases.Login.SesionUsuario.SesionUsuario"%>
<%@page import="Clases.Configuracion.Usuario.Usuario"%>
                  <%-- 
Document   : cabeceraPagina
Created on : 23-nov-2016, 0:49:36
Author     : Angel
--%>



<%
    //Obtenemos la ruta http
    //String ip = request.getRemoteAddr();
   // int puerto = request.getLocalPort();
    ServletContext sc = this.getServletContext();
    String nombreProyecto = sc.getContextPath();

    //String ruta = DatosAplicacion.rutaHttp() + "://" + ip + ":" + puerto + nombreProyecto;
    String href = nombreProyecto;
   // String src = request.getContextPath();
    //out.println(ruta);
%>


<header class="cabecera">
    <nav>
        <div class="containerCabecera">

            <div class="wrapper">
                
                <div class="divlogoCabecera">
                    <a href="<%=href%>/main.jsp"><img class="imglogoCabecera" src="<%=href%>/Main/images/On/onlogo.png" alt="" style="max-width: 137px; max-height: 48px;"/></a>
                </div>
                
                
                <%
                    //Sesi�n
                    HttpSession sesionCabecera = request.getSession(true);
                    Object objSesionUsuarioCabecera = sesionCabecera.getAttribute("SesionUsuario");

                    if (objSesionUsuarioCabecera != null) {
                        SesionUsuario SesionUsuario = (SesionUsuario) objSesionUsuarioCabecera;
                        int empresa_id = SesionUsuario.getEmpresa_id();
                        ControladorGrupoUsuarios ControladorGrupoUsuarios = new ControladorGrupoUsuarios();
                        GrupoUsuario GrupoUsuario = ControladorGrupoUsuarios.getGrupoUsuario_Usuario(SesionUsuario.getUsuario_id());

                        ControladorUsuarios ControladorUsuariosCabecera = new ControladorUsuarios();
                        Usuario UsuarioCabecera = ControladorUsuariosCabecera.getUsuario(SesionUsuario.getUsuario_id());

                        int ejercicio = Utilidades.Horario.geta�oint();
                        Object objEjercicio = sesionCabecera.getAttribute("Ejercicio");
                        if (objEjercicio != null) {
                            Ejercicio Ejercicio = (Ejercicio) objEjercicio;
                            ejercicio = Ejercicio.getEjercicio();
                        }
                        String codeFicheroCabecera = "";
                        //Convertimos la img del servidor
                        if (UsuarioCabecera.getImagen() != null) {
                            if (!UsuarioCabecera.getImagen().equals("")) {
                                File f = new File(UsuarioCabecera.getImagen());

                                codeFicheroCabecera = Conversor_formato.encodeFileToBase64Binary(f);
                                //String[] split = UsuarioCabecera.getImagen().split(""+DatosAplicacion.nombreAplicacion+"");
                                //codeFicheroCabecera = "../../../../../"+DatosAplicacion.nombreAplicacion+"" + split[1].replace("\\", "/");
                            }
                        }
                        ControladorEmpresas controlador = new ControladorEmpresas();
                        Empresa Empresa = controlador.getEmpresa(empresa_id);

                        String codeFichero = "../../../../../" + DatosAplicacion.nombreAplicacion;
                        //Convertimos la img del servidor
                        if (Empresa.getLogoCabecera() != null) {
                            if (!Empresa.getLogoCabecera().equals("")) {
                                String[] split = Empresa.getLogoCabecera().split(""+DatosAplicacion.nombreAplicacion+"");
                                String[] split2 = split[1].split("Empresas");
                                codeFichero = "\\"+DatosAplicacion.nombreAplicacion+"\\"+DatosAplicacion.nombreAplicacion+"\\Imagenes\\Empresas".replace("\\", "/") + split2[1].replace("\\", "/");
                            }
                        } else if (Empresa.getLogo() != null) {
                            if (!Empresa.getLogo().equals("")) {
                                String[] split = Empresa.getLogo().split(""+DatosAplicacion.nombreAplicacion+"");
                                String[] split2 = split[1].split("Empresas");
                                codeFichero = "\\"+DatosAplicacion.nombreAplicacion+"\\"+DatosAplicacion.nombreAplicacion+"\\Imagenes\\Empresas".replace("\\", "/") + split2[1].replace("\\", "/");
                            }
                        }

                %>

                <div class="divlogoCabecera" >
                    <img class="imglogoCabecera" src="<%=codeFichero%>" alt="" style="max-width: 137px; max-height: 48px;"/>
                </div>
                
                <div class="divInicioSesion" >

                    <!--Datos de p�gina y usuario-->
                    <input type="hidden" id="usuarioid" value="<%=SesionUsuario.getUsuario_id()%>"> 
                    <input type="hidden" id="sesion_id" value="<%=SesionUsuario.getSesion_id()%>">
                    <ul>
                        <li style="display:inline-block;">
                            <div class="img-contenedorCabecera" id="imagenCabecera" title="imagen" style="width: auto; height: 48px;">
                                <%
                                    if (!codeFicheroCabecera.equals("")) {
                                %>
                                
                                <img src="<%=codeFicheroCabecera%>" name="imgimgCabecera" id="imgimgCabecera" style="width: auto; height: 48px;-moz-border-radius: 7px; -webkit-border-radius: 7px;">
                                
                                <%
                                         }%>
                            </div>
                        </li>

                        <li style="display:inline-block;"><div id="grupoUsuarioCabecera" title="Grupo Usuario"><%=GrupoUsuario.getNombre()%></div></li>
                        <%--<li style="display:inline-block;"><div id="grupoUsuarioTipoUsuario" title="Tipo de usuario"><%=UsuarioCabecera.getTipoUsuario()%></div></li>--%>
                        <li style="display:inline-block;"><div id="usuarioCabecera" title="Usuario"><%=SesionUsuario.getUsuario_nombre()%></div></li>
                        <li style="display:inline-block;"><div id="ejercicioCabecera" title="Ejercicio"><%=ejercicio%></div>
                            <%--<input type="hidden" id="ejercicioCambio" value="<%=ejercicio%>" />--%>
                        </li>
                        <li style="display:inline-block;"><a href="#" id="btnCerrarSesion" title="Cerrar sesi�n de usuario">Cerrar Sesi�n</a></li>                    

                    </ul>
                    <%
                    } else {
                    %>
                    
                    <%
                        }
                    %>
                
                </div>
            </div>
        </div>
    </nav>

</header>


<jsp:include page="menuPrincipal.jsp"></jsp:include>


<div class="OnPopupCabecera">                    
    <img id="imgOnPopupCabecera" style="height: 100%;">                    
</div>

<script>
    var imgimg = ".img-contenedorCabecera";
    var OnPopup = ".OnPopupCabecera";
    var imgOnPopup = "#imgOnPopupCabecera";

    imgPopup(imgimg, imgOnPopup, OnPopup, 200, 100);
</script>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         