<%-- 
    Document   : menuPrincipal
    Created on : 16-dic-2016, 18:54:39
    Author     : OnAngel
--%>

<%@page import="Clases.Mantenimiento.MantEditorPlanos.ControladorMantEditorPlanoss"%>
<%@page import="Clases.Control.Electricidad.TarifaElectrica.TarifaElectrica"%>
<%@page import="Clases.Control.Electricidad.TarifaElectrica.ControladorTarifaElectricas"%>
<%@page import="Clases.Control.Electricidad.CalendarioPeriodosElectricos.CalendarioPeriodosElectricos"%>
<%@page import="Clases.Control.Electricidad.CalendarioPeriodosElectricos.ControladorCalendarioPeriodosElectricos"%>
<%@page import="Clases.Control.Electricidad.PeriodoElectrico.PeriodoElectrico"%>
<%@page import="Clases.Control.Electricidad.PeriodoElectrico.ControladorPeriodoElectricos"%>
<%@page import="Clases.Control.Electricidad.GestorTarifasElectricas.GestorTarifasElectricas"%>
<%@page import="java.util.ArrayList"%>
<%@page import="Clases.Control.Electricidad.GestorTarifasElectricas.ControladorGestorTarifasElectricas"%>
<%@page import="Clases.Configuracion.ModuloHijo.ModulosHijos"%>
<%@page import="Clases.Configuracion.Permisos.Permisos"%>
<%@page import="Clases.Mantenimiento.MantUsuario.ControladorMantUsuarios"%>
<%@page import="Clases.Login.SesionUsuario.SesionUsuario"%>
<%@page import="Clases.Configuracion.Modulo.Modulo"%>
<%@page import="Clases.Configuracion.Modulo.ControladorModulos"%>
<%@page import="Clases.Configuracion.GrupoUsuario.GrupoUsuario"%>
<%@page import="Clases.Configuracion.Usuario.Usuario"%>
<%@page import="Clases.Configuracion.Usuario.ControladorUsuarios"%>
<%@page import="Clases.Configuracion.GrupoUsuario.ControladorGrupoUsuarios"%>
<%@page import="Clases.Configuracion.Permisos.ControladorPermisoss"%>
<%@page import="Clases.Configuracion.Modulo.Modulos"%>
<%@page import="Clases.Recursos.DatosAplicacion"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<%
    //Obtenemos la ruta http
    //String ip = request.getRemoteAddr();
    //int puerto = request.getLocalPort();
    ServletContext sc = this.getServletContext();
    String nombreProyecto = sc.getContextPath();
    //String ruta = DatosAplicacion.rutaHttp() + "://" + ip + ":" + puerto + nombreProyecto;
    String href = nombreProyecto;
    //String hrefImages = href + "/Main/images/20x20/";
    //out.println(ruta);
%>




<div class="container" id="menuCabecera" style="min-width: 100%; margin: 0 auto; ">
    <div class="wrapper" style="background-color: #ffffff">


        <!--Boton-->
        <div class="btnMenu">    

            <div id="menuHome">

                <button type="button" class="btnAtras" id="btnAtras" title="Atrás" onclick="atras()"></button>            
                <!--button type="button" class="btnAdelante" id="btnAdelante" title="Adelante" onclick="adelante()"></button-->
                <button type="button" class="btnActualizar" id="btnActualizar" title="Actualizar" onclick="actualizar()"></button>
                <button type="button" class="btnHome" id="btnHome" title="Home" onclick="window.location.href = '<%=href%>/main.jsp'"></button>


                <div class= "vl"></div>


            </div>


            <%
                if (!request.getServletPath().equals("/index.jsp") && 
                        //!request.getServletPath().equals("/main.jsp") && 
                        !request.getServletPath().equals("/restaurarContraseña.jsp") && 
                        !request.getServletPath().equals("/modificarContraseña.jsp")) {
                    //Usuario
                    HttpSession sesion = request.getSession(true);
                    Object objSesionUsuario = sesion.getAttribute("SesionUsuario");
                    int usuario_id = 0;
                    SesionUsuario SesionUsuario = null;
                    boolean existe = false;
                    ControladorMantUsuarios ControladorMantUsuarios = new ControladorMantUsuarios();
                    // int empresa_id = 0;
                    if (objSesionUsuario != null) {
                        SesionUsuario = (SesionUsuario) objSesionUsuario;
                        usuario_id = SesionUsuario.getUsuario_id();
                        existe = ControladorMantUsuarios.existeMantUsuario(usuario_id);
                        // empresa_id = SesionUsuario.getEmpresa_id();
                    }
                    //System.out.println(SesionUsuario.toString());
                    //permisos
                    int configuracion = Modulos.listaModulos_id[0];
                    int compras = Modulos.listaModulos_id[1];
                    int ventas = Modulos.listaModulos_id[2];
                    int existencias = Modulos.listaModulos_id[3];
                    int trabajos = Modulos.listaModulos_id[4];
                    int contabilidad = Modulos.listaModulos_id[5];
                    int estados = Modulos.listaModulos_id[6];
                    int log = Modulos.listaModulos_id[7];
                    int maquinaria = Modulos.listaModulos_id[8];
                    int comunicacion = Modulos.listaModulos_id[10];
                    int control = Modulos.listaModulos_id[11];
                    int produccion = Modulos.listaModulos_id[12];
                    int electricidad = Modulos.listaModulos_id[13];
                    int alertas = Modulos.listaModulos_id[14];

                    //  ControladorPermisoss ControladorPermisoss = new ControladorPermisoss();
                    //ControladorGrupoUsuarios ControladorGrupoUsuarios = new ControladorGrupoUsuarios();
                    //ControladorUsuarios ControladorUsuarios = new ControladorUsuarios();
                    //Usuario Usuario = ControladorUsuarios.getUsuario(usuario_id);
                    GrupoUsuario GrupoUsuario = SesionUsuario.getGrupoUsuario();
                    //int grupoUsuario_id = GrupoUsuario.getGrupoUsuario_id();

                    ControladorModulos ControladorModulos = new ControladorModulos();

                    Modulo Modulo = ControladorModulos.getModulo(configuracion);
                    Modulo Modulo2 = ControladorModulos.getModulo(compras);
                    Modulo Modulo3 = ControladorModulos.getModulo(ventas);
                    Modulo Modulo4 = ControladorModulos.getModulo(existencias);
                    Modulo Modulo5 = ControladorModulos.getModulo(trabajos);
                    Modulo Modulo6 = ControladorModulos.getModulo(contabilidad);
                    Modulo Modulo7 = ControladorModulos.getModulo(estados);
                    Modulo Modulo8 = ControladorModulos.getModulo(log);
                    Modulo Modulo9 = ControladorModulos.getModulo(maquinaria);
                    Modulo Modulo11 = ControladorModulos.getModulo(comunicacion);
                    Modulo Modulo12 = ControladorModulos.getModulo(control);
                    Modulo Modulo13 = ControladorModulos.getModulo(produccion);
                    Modulo Modulo14 = ControladorModulos.getModulo(electricidad);
                    Modulo Modulo15 = ControladorModulos.getModulo(alertas);

            %>

            <div class="menuAccesosPrincipales">
                <%                    if (Modulo.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {
                        if (Modulos.moduloActivado(Modulo.getModulo_id(), SesionUsuario)) {
                %>
                <div style="display: inline-block;">                            

                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnConfiguracion32" id="btnConfiguracion" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Configuracion.jsp'" 
                            title="Configuración"></button>
                    <div id="btnConfiguracion32">
                        <%
                            //permisos
                            //int modulo_id = Modulos.listaModulos_id[0];
                            int general = ModulosHijos.listaModuloHijos_id[0];
                            int empresa = ModulosHijos.listaModuloHijos_id[1];
                            int usuarios = ModulosHijos.listaModuloHijos_id[2];
                            int grupoUsuarios = ModulosHijos.listaModuloHijos_id[3];
                            int iva = ModulosHijos.listaModuloHijos_id[4];
                            int diasFestivos = ModulosHijos.listaModuloHijos_id[5];
                            int tipoDocumento = ModulosHijos.listaModuloHijos_id[6];
                            int copiasSeguridad = ModulosHijos.listaModuloHijos_id[7];
                            int permisos = ModulosHijos.listaModuloHijos_id[8];
                            int tarifasEmpresa = ModulosHijos.listaModuloHijos_id[66];
                            int permisosUsuario = ModulosHijos.listaModuloHijos_id[41];

                            Permisos Permisos = SesionUsuario.getPermiso(general);
                            Permisos Permisos2 = SesionUsuario.getPermiso(empresa);
                            Permisos Permisos3 = SesionUsuario.getPermiso(usuarios);
                            Permisos Permisos4 = SesionUsuario.getPermiso(grupoUsuarios);
                            Permisos Permisos5 = SesionUsuario.getPermiso(iva);
                            Permisos Permisos6 = SesionUsuario.getPermiso(diasFestivos);
                            Permisos Permisos7 = SesionUsuario.getPermiso(tipoDocumento);
                            Permisos Permisos8 = SesionUsuario.getPermiso(copiasSeguridad);
                            Permisos Permisos9 = SesionUsuario.getPermiso(permisos);
                            Permisos Permisos10 = SesionUsuario.getPermiso(tarifasEmpresa);
                            Permisos Permisos11 = SesionUsuario.getPermiso(permisosUsuario);

                        %>

                        <!--Boton-->


                        <%                    if (Permisos.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnGrupoRegistro" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/ConfiguracionGeneral/Frame/CrearConfiguracionGeneral.jsp'" 
                                title="Administrar Parámetros Generales"></button>


                        <%
                            }

                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnEmpresa" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/Empresa/Frame/AdminEmpresa.jsp'" 
                                title="Administrar Empresa"></button>


                        <%
                            }
                            if (Permisos10.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnTarifaCliente" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/TarifaManoObraEmpresa/Frame/AdminTarifaManoObraEmpresa.jsp'" 
                                title="Administrar Tarifas De Empresa"></button>


                        <%}
                            if (Permisos3.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnUsuario" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/Usuario/Frame/AdminUsuarios.jsp'" 
                                title="Administrar Usuarios"></button>


                        <%
                            }
                            if (Permisos4.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnGrupoUsuario" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/GrupoUsuario/Frame/AdminGrupoUsuario.jsp'" 
                                title="Administrar Grupo Usuarios"></button>
                        <%
                            }
                            if (Permisos9.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnPermisos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/Permisos/Frame/AdminPermisos.jsp'" 
                                title="Administrar Permisos"></button>


                        <%
                            }
                            if (Permisos11.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantUsuario" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantUsuario/Frame/AdminMantUsuario.jsp'" 
                                title="Administrar Visualizacion De Elementos"></button>

                        <%}
                            if (Permisos5.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnIva" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/Iva/Frame/AdminIVA.jsp'" 
                                title="Administrar IVA"></button>


                        <%
                            }
                            if (Permisos6.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnDiaFestivo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/DiaFestivo/Frame/AdminDiaFestivo.jsp'" 
                                title="Administrar Días Festivos"></button>


                        <%
                            }
                            if (Permisos7.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnDocumento" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/TipoDocumento/Frame/AdminTipoDocumento.jsp'" 
                                title="Administrar tipo de documentos"></button>

                        <%
                            }
                            if (Permisos8.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnCopiaSeguridad" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/CopiasSeguridad/Frame/CopiasSeguridad.jsp'" 
                                title="Copias de Seguridad"></button>
                                
                        <%
                            }
                        %>
                    </div>
                </div>
                <%                    }
                    }
                    if (Modulo15.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {
                        if (Modulos.moduloActivado(Modulo15.getModulo_id(), SesionUsuario)) {
                %>
                <div style="display: inline-block;">                            

                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnAlertas32" id="btnAlertas" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Alertas.jsp'" 
                            title="Alertas"></button>
                    <div id="btnAlertas32">
                        <%
                            int alertasPersonalizables = ModulosHijos.listaModuloHijos_id[158];
                            Permisos Permisos = SesionUsuario.getPermiso(alertasPersonalizables);
                            if (Permisos.getLectura() == 1) {
                        %>

                        <button style="display: none;" type="button"  class="btnAlertasPersonalizables" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Alertas/Alertas/Frame/AdminAlertas.jsp'" 
                                title="Alertas personalizables"></button>

                        <%                    }

                        %>
                    </div>
                </div>
                <%                    }
                    }

                %>
                <div style="display: inline-block;">                            
                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnConfiguracionUsuario32" id="btnConfiguracionUsuario" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/ConfiguracionUsuario.jsp'" 
                            title="Acceso a configuración de usuario."></button>  
                    <div id="btnConfiguracionUsuario32">
                        <%
                            if (true) {

                                //permisos
                                int registroHorario = ModulosHijos.listaModuloHijos_id[104];
                                int controlVacaciones = ModulosHijos.listaModuloHijos_id[34];
                                int controlBajas = ModulosHijos.listaModuloHijos_id[35];
                                int controlGeneral = ModulosHijos.listaModuloHijos_id[36];
                                int nomina = ModulosHijos.listaModuloHijos_id[98];
                                int contratoUsuario = ModulosHijos.listaModuloHijos_id[93];

                        %>
                        <!--Boton-->
                        <button style="display: none;" type="button"  class="btnConfiguracionUsuario" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/Usuario/Frame/ModificarUsuarioConfiguracion.jsp?usuario_id=<%=usuario_id%>'" 
                                title="Acceso a la configuración personal de usuario"></button>

                        <%                    Permisos Permisos13 = SesionUsuario.getPermiso(registroHorario);
                            if (Permisos13.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnRegistroHorario" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/RegistroHorario/Frame/RegistroHorario.jsp'" 
                                title="Ver informe con las horas que se ha hecho cada dia del mes"></button>

                        <%                    }
                            Permisos Permisos5 = SesionUsuario.getPermiso(controlVacaciones);
                            if (Permisos5.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnControlVacaciones" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/ControlVacaciones/Frame/AdminControlVacaciones.jsp'" 
                                title="Administrar control de vacaciones"></button>

                        <%}
                            Permisos Permisos6 = SesionUsuario.getPermiso(controlBajas);
                            if (Permisos6.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnControlBajas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/ControlBajas/Frame/AdminControlBajas.jsp'" 
                                title="Administrar control de bajas"></button>


                        <%}
                            Permisos Permisos7 = SesionUsuario.getPermiso(controlGeneral);
                            if (Permisos7.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnControlGeneral" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/ControlGeneral/Frame/AdminControlGeneral.jsp?usuario_id=<%=usuario_id%>'" 
                                title="Administrar control General"></button>


                        <%}
                            Permisos Permisos = SesionUsuario.getPermiso(nomina);
                            if (Permisos.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnNominas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Contabilidad/Nomina/Frame/AdminNomina.jsp'" 
                                title="Administrar Nóminas"></button>

                        <%
                            }

                            Permisos Permisos8 = SesionUsuario.getPermiso(contratoUsuario);
                            if (Permisos8.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnUsuario" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Configuracion/ContratoUsuario/Frame/AdminContratoUsuario.jsp?usuario_id=<%=usuario_id%>'" 
                                title="Administrar contrato usuario"></button>


                        <%
                                }

                            }
                        %>
                    </div>
                </div>
                <%
                    if (Modulo2.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {
                        if (Modulos.moduloActivado(Modulo2.getModulo_id(), SesionUsuario)) {
                %>
                <div style="display: inline-block;">                            

                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnCompras32" id="btnCompras" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Compras.jsp'" 
                            title="Compras"></button>   
                    <div id="btnCompras32">
                        <%
                            //permisos
                            int cestaCompras = ModulosHijos.listaModuloHijos_id[9];
                            int pedidos = ModulosHijos.listaModuloHijos_id[10];
                            int albaranesCompra = ModulosHijos.listaModuloHijos_id[11];
                            int facturasCompra = ModulosHijos.listaModuloHijos_id[12];
                            int documentoCompras = ModulosHijos.listaModuloHijos_id[13];
                            int proveedores = ModulosHijos.listaModuloHijos_id[14];
                            int tarifasProveedores = ModulosHijos.listaModuloHijos_id[67];
                            int graficasCompras = ModulosHijos.listaModuloHijos_id[150];

                            Permisos Permisos = SesionUsuario.getPermiso(cestaCompras);
                            Permisos Permisos2 = SesionUsuario.getPermiso(pedidos);
                            Permisos Permisos3 = SesionUsuario.getPermiso(albaranesCompra);
                            Permisos Permisos4 = SesionUsuario.getPermiso(facturasCompra);
                            Permisos Permisos5 = SesionUsuario.getPermiso(documentoCompras);
                            Permisos Permisos6 = SesionUsuario.getPermiso(proveedores);
                            Permisos Permisos7 = SesionUsuario.getPermiso(tarifasProveedores);
                            Permisos Permisos13 = SesionUsuario.getPermiso(graficasCompras);

                        %>

                        <!--Boton-->
                        <%                    if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnRecepcionGeneral" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Compras/Pedido/Frame/AdminRecepcionPedidoGeneral.jsp'" 
                                title="Administrar Pedidos"></button>
                        <%
                            }
                            if (Permisos.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnCesta" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Compras/Cesta/Frame/AdminCesta.jsp'" 
                                title="Administrar Cesta"></button>


                        <%
                            }
                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnPedido" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Compras/Pedido/Frame/AdminPedido.jsp'" 
                                title="Administrar Pedidos"></button>


                        <%
                            }

                            if (Permisos3.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnAlbaranes" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Compras/AlbaranCompra/Frame/AdminAlbaranCompra.jsp'" 
                                title="Administrar Albaranes"></button>                
                        <%
                            }
                            if (Permisos4.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnFacturas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Compras/FacturaCompra/Frame/AdminFacturaCompra.jsp'" 
                                title="Administrar Facturas"></button> 

                        <%
                            }
                            if (Permisos5.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnCrearDocumentoVentas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Compras/DocumentoFacturaAlbaranCompra/Frame/CrearDocumentoFacturaAlbaranCompra.jsp?origen=0'" 
                                title="Documento Compras"></button> 


                        <%
                            }
                            if (Permisos6.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnProveedor" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Compras/Proveedor/Frame/AdminProveedor.jsp'" 
                                title="Administrar Proveedores"></button> 


                        <%
                            }
                            if (Permisos7.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnTarifaCliente" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Compras/TarifaManoObraProveedor/Frame/AdminTarifaManoObraProveedor.jsp'" 
                                title="Administrar Tarifas de Proveedores"></button> 

                        <%}
                            if (Permisos13.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnControlEmpresaVenta" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Menus/InformesCompras.jsp'" 
                                title="Ver graficas"></button> 

                        <%}%>
                    </div>
                </div>
                <%
                        }
                    }
                    if (Modulo3.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {
                        if (Modulos.moduloActivado(Modulo3.getModulo_id(), SesionUsuario)) {
                %>
                <div style="display: inline-block;">                            

                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnVentas32" id="btnProduccion" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Ventas.jsp'" 
                            title="Ventas"></button>
                    <div id="btnVentas32">
                        <%
                            //permisos
                            int tarifasClientes = ModulosHijos.listaModuloHijos_id[15];
                            int clientes = ModulosHijos.listaModuloHijos_id[16];
                            int proyectos = ModulosHijos.listaModuloHijos_id[17];
                            int presupuestos = ModulosHijos.listaModuloHijos_id[18];
                            int albaranes = ModulosHijos.listaModuloHijos_id[19];
                            int facturas = ModulosHijos.listaModuloHijos_id[20];
                            int documentoVentas = ModulosHijos.listaModuloHijos_id[21];

                            int facturasProforma = ModulosHijos.listaModuloHijos_id[81];
                            int albaranesRectificativos = ModulosHijos.listaModuloHijos_id[82];
                            int facturasRectificativas = ModulosHijos.listaModuloHijos_id[83];

                            //int pedido = ModulosHijos.listaModuloHijos_id[99];
                            int graficasVenta = ModulosHijos.listaModuloHijos_id[105];

                            Permisos Permisos = SesionUsuario.getPermiso(tarifasClientes);
                            Permisos Permisos2 = SesionUsuario.getPermiso(clientes);
                            Permisos Permisos3 = SesionUsuario.getPermiso(proyectos);
                            Permisos Permisos4 = SesionUsuario.getPermiso(presupuestos);
                            Permisos Permisos5 = SesionUsuario.getPermiso(albaranes);
                            Permisos Permisos6 = SesionUsuario.getPermiso(facturas);
                            Permisos Permisos7 = SesionUsuario.getPermiso(documentoVentas);

                            Permisos Permisos9 = SesionUsuario.getPermiso(facturasProforma);
                            Permisos Permisos10 = SesionUsuario.getPermiso(albaranesRectificativos);
                            Permisos Permisos11 = SesionUsuario.getPermiso(facturasRectificativas);

                            //Permisos Permisos12 = SesionUsuario.getPermiso( pedido);
                            Permisos Permisos13 = SesionUsuario.getPermiso(graficasVenta);

                        %>
                        <!--Boton-->

                        <%                    if (Permisos.getLectura() == 1) {
                        %>

                        <button style="display: none;" type="button"  class="btnTarifaCliente" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Ventas/TarifaManoObraCliente/Frame/AdminTarifaManoObraCliente.jsp'" 
                                title="Administrar Tarifas Clientes"></button>

                        <%
                            }
                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnCliente" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Ventas/Cliente/Frame/AdminCliente.jsp'" 
                                title="Administrar clientes"></button>

                        <%
                            }

                            if (Permisos3.getLectura() == 1) {
                        %>

                        <button style="display: none;" type="button"  class="btnProyectos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Ventas/ProyectoVenta/Frame/AdminProyectoVenta.jsp'" 
                                title="Administrar proyectos"></button>


                        <%
                            }
                            if (Permisos4.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnPresupuestos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Ventas/PresupuestoVenta/Frame/AdminPresupuestoVenta.jsp'" 
                                title="Administrar presupuestos"></button>

                        <%
                            }
                            if (Permisos5.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnAlbaranes" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Ventas/AlbaranVenta/Frame/AdminAlbaranVenta.jsp'" 
                                title="Administrar albaranes"></button>


                        <%
                            }
                            if (Permisos6.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnFacturas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Ventas/FacturaVenta/Frame/AdminFacturaVenta.jsp'" 
                                title="Administrar facturas"></button>

                        <%
                            }
                            if (Permisos10.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnAlbaranRectificativo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Ventas/AlbaranVentaRectificativo/Frame/AdminAlbaranVentaRectificativo.jsp'" 
                                title="Administrar albaranes rectificativos"></button>


                        <%
                            }
                            if (Permisos11.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnFacturaRectificativa" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Ventas/FacturaVentaRectificativo/Frame/AdminFacturaVentaRectificativo.jsp'" 
                                title="Administrar facturas rectificativas"></button> 

                        <%
                            }
                            if (Permisos9.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnFacturaProforma" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Ventas/FacturaProforma/Frame/AdminFacturaProforma.jsp'" 
                                title="Administrar facturas proforma"></button>  
                        <%
                            }
                            if (Permisos7.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnCrearDocumentoVentas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Ventas/DocumentoFacturaAlbaran/Frame/CrearDocumentoFacturaAlbaran.jsp?origen=-1'" 
                                title="Documento Ventas"></button>  


                        <%
                            }
                            if (Permisos13.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnControlEmpresaVenta" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Menus/InformesVentas.jsp'" 
                                title="Ver graficas"></button>    


                        <%}%>
                    </div>
                </div>
                <%
                        }
                    }

                    if (Modulo6.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {
                        if (Modulos.moduloActivado(Modulo6.getModulo_id(), SesionUsuario)) {
                            if (!existe) {
                %>
                <div style="display: inline-block;">                            

                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnContabilidad32" id="btnAdministracion" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Contabilidad.jsp'" 
                            title="Contabilidad"></button> 
                    <div id="btnContabilidad32">
                        <%
                            //permisos
                            int controlEmpresaVentas = ModulosHijos.listaModuloHijos_id[23];
                            int nomina = ModulosHijos.listaModuloHijos_id[98];
                            int IRPF = ModulosHijos.listaModuloHijos_id[100];
                            int RLC = ModulosHijos.listaModuloHijos_id[102];
                            int IVAC = ModulosHijos.listaModuloHijos_id[107];
                            int subvencion = ModulosHijos.listaModuloHijos_id[117];
                            int retencion = ModulosHijos.listaModuloHijos_id[119];

                            Permisos Permisos = SesionUsuario.getPermiso(nomina);
                            Permisos Permisos9 = SesionUsuario.getPermiso(controlEmpresaVentas);
                            Permisos Permisos2 = SesionUsuario.getPermiso(IRPF);
                            Permisos Permisos3 = SesionUsuario.getPermiso(RLC);
                            Permisos Permisos4 = SesionUsuario.getPermiso(IVAC);
                            Permisos Permisos5 = SesionUsuario.getPermiso(subvencion);
                            Permisos Permisos6 = SesionUsuario.getPermiso(retencion);
                        %>
                        <!--Boton-->
                        <%                    if (Permisos9.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnControlEmpresaVenta" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Contabilidad/ControlEmpresa/Frame/AdminControlEmpresa.jsp'" 
                                title="Estado Empresa"></button>               
                        <%
                            }

                            if (Permisos.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnNominas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Contabilidad/Nomina/Frame/AdminNomina.jsp'" 
                                title="Nóminas"></button>

                        <%
                            }
                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnIrpf" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Contabilidad/IRPF/Frame/AdminIRPF.jsp'" 
                                title="IRPF"></button>
                        <%
                            }
                            if (Permisos3.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnRlc" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Contabilidad/RLC/Frame/AdminRLC.jsp'" 
                                title="RLC"></button>
                        <%
                            }
                            if (Permisos4.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnIva" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Contabilidad/IVAC/Frame/AdminIVAC.jsp'" 
                                title="IVA"></button>
                        <%
                            }
                            if (Permisos5.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnSubvencion" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Contabilidad/Subvencion/Frame/AdminSubvencion.jsp'" 
                                title="Subvención"></button>


                        <%
                            }
                            if (Permisos6.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnRetencion" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Contabilidad/Retencion/Frame/AdminRetencion.jsp'" 
                                title="Retención"></button>

                        <%
                            }
                        %>
                    </div>
                </div>
                <% }
                        }
                    }

                    if (Modulo4.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {
                        if (Modulos.moduloActivado(Modulo4.getModulo_id(), SesionUsuario)) {
                %>
                <div style="display: inline-block;">                            

                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnExistencias32" id="btnControl" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Existencias.jsp'" 
                            title="Existencias"></button>  
                    <div id="btnExistencias32">
                        <%
                            //permisos
                            int devolucionArticulos = ModulosHijos.listaModuloHijos_id[24];
                            int familiasArticulos = ModulosHijos.listaModuloHijos_id[25];
                            int articulos = ModulosHijos.listaModuloHijos_id[26];
                            int marcas = ModulosHijos.listaModuloHijos_id[27];
                            int almacenes = ModulosHijos.listaModuloHijos_id[28];
                            int grupoArticulos = ModulosHijos.listaModuloHijos_id[60];
                            int detMovStock = ModulosHijos.listaModuloHijos_id[110];

                            Permisos Permisos = SesionUsuario.getPermiso(devolucionArticulos);
                            Permisos Permisos2 = SesionUsuario.getPermiso(familiasArticulos);
                            Permisos Permisos3 = SesionUsuario.getPermiso(articulos);
                            Permisos Permisos4 = SesionUsuario.getPermiso(marcas);
                            Permisos Permisos5 = SesionUsuario.getPermiso(almacenes);
                            Permisos Permisos6 = SesionUsuario.getPermiso(grupoArticulos);
                            Permisos Permisos7 = SesionUsuario.getPermiso(detMovStock);


                        %>
                        <!--Boton-->
                        <button style="display: none;" type="button"  class="btnSalidaArticulos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Existencias/Articulo/Dialog/BuscarAdminArticuloPresupuesto.jsp?salidaArticulos=1'" 
                                title="Administrar Salida de Artículos"></button>

                        <%                    if (Permisos.getLectura() == 1) {
                        %>

                        <button style="display: none;" type="button"  class="btnDevolucionArticulos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Existencias/DetMovStockArticulo/Frame/AdminDetMovStockArticulo.jsp'" 
                                title="Administrar Devolución de Artículos"></button>

                        <%
                            }
                            if (Permisos7.getLectura() == 1) {
                        %>

                        <button style="display: none;" type="button"  class="btnHistoricoDevolucion" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Existencias/DetMovStockArticuloHistorico/Frame/AdminDetMovStockArticuloHistorico.jsp'" 
                                title="Administrar Histórico de movimientos de stock"></button>

                        <%
                            }
                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnFamArticulo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Existencias/FamiliaArticulo/Frame/AdminFamiliaArticulo.jsp'" 
                                title="Administrar Familias de Artículos"></button>

                        <%
                            }
                            if (Permisos6.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnGrupoArticulos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Existencias/GrupoArticulos/Frame/AdminGrupoArticulos.jsp'" 
                                title="Administrar Grupo de Artículos"></button>

                        <%}
                            if (Permisos3.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnArticulo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Existencias/Articulo/Frame/AdminArticulo.jsp'" 
                                title="Administrar Artículos"></button>

                        <%
                            }
                            if (Permisos4.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMarcas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Existencias/Marca/Frame/AdminMarca.jsp'" 
                                title="Administrar Marcas"></button>

                        <%
                            }
                            if (Permisos5.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnAlmacen" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Existencias/Almacen/Frame/AdminAlmacen.jsp'" 
                                title="Administrar Almacenes"></button>
                        <%
                            }%>
                    </div>   
                </div>
                <%
                        }
                    }
                    if (Modulo5.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {
                        if (Modulos.moduloActivado(Modulo5.getModulo_id(), SesionUsuario)) {
                %>
                <div style="display: inline-block;">                            

                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnMantenimiento32" id="btnMantenimiento" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Mantenimiento.jsp'" 
                            title="Trabajos"></button> 
                    <div id="btnMantenimiento32">
                        <%
                            //permisos
                            //int modulo_id = Modulos.listaModulos_id[4];
                            //modulos hijo
                            int permisosUsuarioOT = ModulosHijos.listaModuloHijos_id[29];
                            int ordenTrabajo = ModulosHijos.listaModuloHijos_id[30];
                            int actuacion = ModulosHijos.listaModuloHijos_id[31];
                            int controlUsuario = ModulosHijos.listaModuloHijos_id[32];
                            int controlEmpresa = ModulosHijos.listaModuloHijos_id[33];

                            int gastos = ModulosHijos.listaModuloHijos_id[37];
                            int parteDiario = ModulosHijos.listaModuloHijos_id[69];
                            int preventivo = ModulosHijos.listaModuloHijos_id[80];
                            int editorPlanos = ModulosHijos.listaModuloHijos_id[92];
                            int planos = ModulosHijos.listaModuloHijos_id[97];
                            //int planificacion = ModulosHijos.listaModuloHijos_id[22];
                            int actuacion_TiempoReal = ModulosHijos.listaModuloHijos_id[113];
                            int incidencia = ModulosHijos.listaModuloHijos_id[116];

                            Permisos Permisos12 = SesionUsuario.getPermiso(editorPlanos);
                            if (Permisos12.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantEdicionPlanos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantEditorPlanos/Frame/AdminMantEditorPlanos.jsp'" 
                                title="Editor de planos"></button>


                        <%                    }
                            ControladorMantEditorPlanoss ControladorMantEditorPlanoss = new ControladorMantEditorPlanoss();
                            int mantEditorPlanos_id = ControladorMantEditorPlanoss.getPlanoPrincipal();
                            if (mantEditorPlanos_id != 0) {
                                Permisos Permisos13 = SesionUsuario.getPermiso(planos);
                                if (Permisos13.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantPlano" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantEditorPlanos/Frame/MantEditorPlanosVista.jsp?principal=1'" 
                                title="Acceso a planos"></button>


                        <%}
                            }
                            if (existe) {

                                Permisos Permisos = SesionUsuario.getPermiso(permisosUsuarioOT);
                                if (Permisos.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantUsuarioOT" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantOrdenTrabajoAsociado/Frame/AdminMantOrdenTrabajoAsociado.jsp'" 
                                title="Administrar Usuarios OT"></button>


                        <%}
                            Permisos Permisos14 = SesionUsuario.getPermiso(incidencia);
                            if (Permisos14.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantIncidencia" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantIncidencia/Frame/AdminMantIncidencia.jsp'" 
                                title="Administrar incidencias"></button>


                        <%}
                            Permisos Permisos1 = SesionUsuario.getPermiso(ordenTrabajo);
                            if (Permisos1.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantOrdenTrabajo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantOrdenTrabajo/Frame/AdminMantOrdenTrabajo.jsp'" 
                                title="Administrar ordenes de trabajos"></button>


                        <%}

                            Permisos Permisos2 = SesionUsuario.getPermiso(actuacion);
                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantActuacion" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantActuacion/Frame/AdminMantActuacion.jsp?usuario_id=<%=usuario_id%>'" 
                                title="Administrar actuaciones de OTs"></button>


                        <%}
                            Permisos Permisos13 = SesionUsuario.getPermiso(actuacion_TiempoReal);
                            if (Permisos13.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantActuacionTiempoReal" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantActuacion/Frame/AdminMantActuacionTiempoReal.jsp?usuario_id=<%=usuario_id%>'" 
                                title="Administrar actuaciones en tiempo real"></button>

                        <%}
                            Permisos Permisos10 = SesionUsuario.getPermiso(parteDiario);
                            if (Permisos10.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnParteDiario" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/ParteDiario/Frame/ControlMantOrdenTrabajo.jsp'" 
                                title="Ver informe con lo que se ha hecho cada dia"></button>

                        <%                    }

                            Permisos Permisos9 = SesionUsuario.getPermiso(gastos);
                            if (Permisos9.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnGastos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantGastos/Frame/AdminMantGastosFecha.jsp?usuario_id=<%=usuario_id%>'" 
                                title="Administrar de gastos"></button>

                        <%}
                            Permisos Permisos11 = SesionUsuario.getPermiso(preventivo);
                            if (Permisos11.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnPreventivo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantPreventivo/Frame/AdminMantPreventivo.jsp?tipo=1'" 
                                title="Administrar de Preventivos"></button>


                        <%}
                            Permisos Permisos3 = SesionUsuario.getPermiso(controlUsuario);
                            if (Permisos3.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnControlUsuario" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/ControlUsuario/Frame/AdminControlUsuario.jsp'" 
                                title="Administrar control de usuarios"></button>

                        <%}
                            Permisos Permisos4 = SesionUsuario.getPermiso(controlEmpresa);
                            if (Permisos4.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnControlEmpresa" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/ControlEmpresa/Frame/AdminControlEmpresa.jsp'" 
                                title="Administrar control de empresa"></button>


                        <%}

                        %>

                        <%              } else {
                        %>
                        <!--Boton-->


                        <%
                            Permisos Permisos = SesionUsuario.getPermiso(permisosUsuarioOT);
                            if (Permisos.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantUsuarioOT" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantOrdenTrabajoAsociado/Frame/AdminMantOrdenTrabajoAsociado.jsp'" 
                                title="Administrar Usuarios OT"></button>


                        <%}
                            Permisos Permisos14 = SesionUsuario.getPermiso(incidencia);
                            if (Permisos14.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantIncidencia" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantIncidencia/Frame/AdminMantIncidencia.jsp'" 
                                title="Administrar incidencias"></button>


                        <%}
                            Permisos Permisos1 = SesionUsuario.getPermiso(ordenTrabajo);
                            if (Permisos1.getLectura() == 1) {
                        %>

                        <button style="display: none;" type="button"  class="btnMantOrdenTrabajo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantOrdenTrabajo/Frame/AdminMantOrdenTrabajo.jsp'" 
                                title="Administrar ordenes de trabajos"></button>


                        <%}
                            Permisos Permisos2 = SesionUsuario.getPermiso(actuacion);
                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantActuacion" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantActuacion/Frame/AdminMantActuacion.jsp'" 
                                title="Administrar actuaciones de OTs"></button>


                        <%}
                            Permisos Permisos13 = SesionUsuario.getPermiso(actuacion_TiempoReal);
                            if (Permisos13.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMantActuacionTiempoReal" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantActuacion/Frame/AdminMantActuacionTiempoReal.jsp?usuario_id=<%=usuario_id%>'" 
                                title="Administrar actuaciones en tiempo real"></button>


                        <%}
                            Permisos Permisos10 = SesionUsuario.getPermiso(parteDiario);
                            if (Permisos10.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnParteDiario" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/ParteDiario/Frame/ControlMantOrdenTrabajo.jsp'" 
                                title="Ver informe con lo que se ha hecho cada dia"></button>


                        <%                    }

                            Permisos Permisos9 = SesionUsuario.getPermiso(gastos);
                            if (Permisos9.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnGastos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantGastos/Frame/AdminMantGastosFecha.jsp'" 
                                title="Administrar de gastos"></button>


                        <%}
                            Permisos Permisos11 = SesionUsuario.getPermiso(preventivo);
                            if (Permisos11.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnPreventivo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantPreventivo/Frame/AdminMantPreventivo.jsp?tipo=1'" 
                                title="Administrar de Preventivos"></button>

                        <%}
                            Permisos Permisos3 = SesionUsuario.getPermiso(controlUsuario);
                            if (Permisos3.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnControlUsuario" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/ControlUsuario/Frame/AdminControlUsuario.jsp'" 
                                title="Administrar control de usuarios"></button>


                        <%}
                            Permisos Permisos4 = SesionUsuario.getPermiso(controlEmpresa);
                            if (Permisos4.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnControlEmpresa" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/ControlEmpresa/Frame/AdminControlEmpresa.jsp'" 
                                title="Administrar control de empresa"></button>
                        <%}
                            }
                        %>
                    </div>
                </div>

                <%
                        }
                    }
                    if (Modulo9.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {
                        if (Modulos.moduloActivado(Modulo9.getModulo_id(), SesionUsuario)) {

                %>
                <div style="display: inline-block;">                            

                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnMaquinaria32" id="btnConexion" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Maquinaria.jsp'" 
                            title="Maquinaria"></button>  
                    <div id="btnMaquinaria32">
                        <%
                            //permisos
                            int zona = ModulosHijos.listaModuloHijos_id[56];
                            int maquina = ModulosHijos.listaModuloHijos_id[57];
                            int familiaMaquina = ModulosHijos.listaModuloHijos_id[58];
                            int propiedad = ModulosHijos.listaModuloHijos_id[59];
                            int tarea = ModulosHijos.listaModuloHijos_id[90];
                            int preventivo = ModulosHijos.listaModuloHijos_id[106];
                            int costes = ModulosHijos.listaModuloHijos_id[109];

                            Permisos Permisos = SesionUsuario.getPermiso(zona);
                            Permisos Permisos2 = SesionUsuario.getPermiso(maquina);
                            Permisos Permisos3 = SesionUsuario.getPermiso(familiaMaquina);
                            Permisos Permisos4 = SesionUsuario.getPermiso(propiedad);
                            Permisos Permisos5 = SesionUsuario.getPermiso(tarea);
                            Permisos Permisos6 = SesionUsuario.getPermiso(preventivo);
                            Permisos Permisos7 = SesionUsuario.getPermiso(costes);          %>
                        <!--Boton-->

                        <%                    if (Permisos.getLectura() == 1) {
                        %>

                        <button style="display: none;" type="button"  class="btnZona" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Maquinaria/Zona/Frame/AdminZona.jsp'" 
                                title="Administrar Zonas"></button>


                        <%
                            }
                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMaquinaria" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Maquinaria/Maquina/Frame/AdminMaquina.jsp'" 
                                title="Administrar Máquinas"></button>


                        <button style="display: none;" type="button"  class="btnAsociarMaquina" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Maquinaria/Maquina/Frame/AdminMaquinaAsociarLineaTrabajo.jsp'" 
                                title="Administrar Asociar Máquinas"></button>


                        <%
                            }
                            if (Permisos3.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnFamiliaMaquina" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Maquinaria/FamiliaMaquina/Frame/AdminFamiliaMaquina.jsp'" 
                                title="Administrar Familia Máquinas"></button>

                        <%
                            }
                            if (Permisos4.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnPropieadades" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Maquinaria/Propiedad/Frame/AdminPropiedad.jsp'" 
                                title="Administrar Propiedades"></button>

                        <%
                            }
                            if (Permisos5.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnTareas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Maquinaria/Tarea/Frame/AdminTarea.jsp'" 
                                title="Administrar Tareas"></button>


                        <%
                            }
                            if (Permisos6.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnPreventivo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Mantenimiento/MantPreventivo/Frame/AdminMantPreventivo.jsp?tipo=0'" 
                                title="Administrar de Preventivos."></button>

                        <%}
                            if (Permisos7.getLectura() == 1) {
                        %>

                        <button style="display: none;" type="button"  class="btnContabilidad" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Maquinaria/Costes/Frame/AdminCostes.jsp'" 
                                title="Administrar costes de maquinaria"></button>

                        <%}
                        %>

                    </div>
                </div>

                <%                        }
                    }

                    if (Modulo12.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {

                        if (Modulos.moduloActivado(Modulo12.getModulo_id(), SesionUsuario)) {

                %>
                <div style="display: inline-block;">                            
                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnControl32" id="btnControl" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Control.jsp'" 
                            title="Acceso a consumos de electricidad"></button>   
                    <div id="btnControl32">

                        <%
                            int controlGeneralVariables = ModulosHijos.listaModuloHijos_id[130];
                            int datosElectricos = ModulosHijos.listaModuloHijos_id[131];
                            Permisos Permisos12 = SesionUsuario.getPermiso(controlGeneralVariables);
                            if (Permisos12.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnControlGeneralMain" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Control/Control/FiltroDatos/Frame/AdminFiltroDatos.jsp'" 
                                title="Administrar módulo control general"></button>

                        <%}%>
                        <%    Permisos Permisos13 = SesionUsuario.getPermiso(datosElectricos);
                            if (Permisos13.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnGrupoVarControlElectricidad" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Control/Electricidad/FiltroDatos/Frame/AdminFiltroDatos.jsp'" 
                                title="Administrar módulo control eléctrico"></button>

                        <%}%>
                    </div>
                </div>

                <%                        }
                    }
                    if (Modulo13.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {

                        if (Modulos.moduloActivado(Modulo13.getModulo_id(), SesionUsuario)) {
                %>
                <div style="display: inline-block;">                            
                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnProduccion32" id="btnProduccion" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Produccion.jsp'" 
                            title="Acceso a producción"></button>   
                    <div id="btnProduccion32">
                        <%
                            int grupoEscritura = ModulosHijos.listaModuloHijos_id[128];
                            int grupoVarOt = ModulosHijos.listaModuloHijos_id[129];
                            int planificacion = ModulosHijos.listaModuloHijos_id[132];
                            int lotes = ModulosHijos.listaModuloHijos_id[133];
                            int ots = ModulosHijos.listaModuloHijos_id[134];
                            int acts = ModulosHijos.listaModuloHijos_id[135];
                            int asociarActsMover = ModulosHijos.listaModuloHijos_id[136];
                            int asociarActsCopiar = ModulosHijos.listaModuloHijos_id[137];
                            int lineasTrabajo = ModulosHijos.listaModuloHijos_id[125];
                            //int rutaTrabajo = ModulosHijos.listaModuloHijos_id[138];
                            int grupoResponsableLinea = ModulosHijos.listaModuloHijos_id[139];
                            int responsableLinea = ModulosHijos.listaModuloHijos_id[140];
                            int familiaProducto = ModulosHijos.listaModuloHijos_id[141];
                            int producto = ModulosHijos.listaModuloHijos_id[142];
                            int conservaciones = ModulosHijos.listaModuloHijos_id[143];
                            int envases = ModulosHijos.listaModuloHijos_id[144];
                            int responsablesOts = ModulosHijos.listaModuloHijos_id[145];

                            Permisos Permisos1 = SesionUsuario.getPermiso(grupoEscritura);
                            Permisos Permisos2 = SesionUsuario.getPermiso(grupoVarOt);
                            Permisos Permisos3 = SesionUsuario.getPermiso(planificacion);
                            Permisos Permisos4 = SesionUsuario.getPermiso(lotes);
                            Permisos Permisos5 = SesionUsuario.getPermiso(ots);
                            Permisos Permisos6 = SesionUsuario.getPermiso(acts);
                            Permisos Permisos7 = SesionUsuario.getPermiso(asociarActsMover);
                            Permisos Permisos8 = SesionUsuario.getPermiso(asociarActsCopiar);
                            Permisos Permisos9 = SesionUsuario.getPermiso(lineasTrabajo);
                            //Permisos Permisos10 = SesionUsuario.getPermiso( rutaTrabajo);
                            Permisos Permisos11 = SesionUsuario.getPermiso(grupoResponsableLinea);
                            Permisos Permisos12 = SesionUsuario.getPermiso(responsableLinea);
                            Permisos Permisos13 = SesionUsuario.getPermiso(familiaProducto);
                            Permisos Permisos14 = SesionUsuario.getPermiso(producto);
                            Permisos Permisos15 = SesionUsuario.getPermiso(conservaciones);
                            Permisos Permisos16 = SesionUsuario.getPermiso(envases);
                            Permisos Permisos17 = SesionUsuario.getPermiso(responsablesOts);


                        %>


                        <%                    if (Permisos1.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnGrupoEscritura" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Comunicacion/GrupoEscritura/Frame/AdminGrupoEscritura.jsp'" 
                                title="Administrar Grupos de escritura de datos"></button>
                        <% }%>

                        <!--Boton-->
                        <%
                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnGrupoVarOTs" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/GrupoVariablesOT/Frame/AdminGrupoVariablesOT.jsp'" 
                                title="Administrar grupos de variables para ódenes de trabajo"></button>


                        <% }%>
                        <%
                            if (Permisos3.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnPlaning" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/PlaningProduccion/Frame/AdminPlaningProduccion.jsp'" 
                                title="Planificación de producción"></button>

                        <% }%>
                        <%
                            if (Permisos4.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnLotes" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/Lote/Frame/AdminLote.jsp'" 
                                title="Administrar Lotes"></button>
                        <% }%>
                        <%
                            if (Permisos5.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnOTs" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/OrdenTrabajo/Frame/AdminOrdenTrabajo.jsp'" 
                                title="Administrar órdenes de trabajo"></button>
                        <% }%>
                        <%
                            if (Permisos6.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnActuacion" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/ActuacionOT/Frame/AdminActuacionOT.jsp'" 
                                title="Administrar Actuaciones"></button>                

                        <% }%>
                        <%
                            if (Permisos7.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnMoverDatos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/AsociarDatosActuacion/Frame/AsociarDatosActuacion.jsp'" 
                                title="Asociar Actuación"></button>


                        <% }%>
                        <%
                            if (Permisos8.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnCopiarDatos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/AsociarDatosActuacionCopiar/Frame/AsociarDatosActuacionCopiar.jsp'" 
                                title="Asociar Actuación Copiar"></button>


                        <% }%>
                        <%
                            if (Permisos9.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnLineaTrabajo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Comunicacion/LineaTrabajo/Frame/AdminLineaTrabajo.jsp'" 
                                title="Administrar Líneas de Trabajo"></button>


                        <button style="display: none;" type="button"  class="btnAsociarMaquinaria" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Maquinaria/Maquina/Frame/AdminMaquinaAsociarLineaTrabajo.jsp'" 
                                title="Administrar Asociar Máquinas"></button>


                        <button style="display: none;" type="button"  class="btnAsociarFamilia" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Comunicacion/LineaTrabajo/Frame/AdminFamiliaProductoAsociarLineaTrabajo.jsp'" 
                                title="Administrar Asociar Máquinas"></button>


                        <% }%>


                        <%
                            if (Permisos11.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnGrupoRespLineas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/GrupoResponsableLineaTrabajo/Frame/AdminGrupoResponsableLineaTrabajo.jsp'" 
                                title="Administrar responsables de Líneas de trabajo"></button>


                        <% }%>
                        <%
                            if (Permisos12.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnLinea" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/ResponsableLineaTrabajo/Frame/AdminResponsableLineaTrabajo.jsp'" 
                                title="Administrar responsables de Líneas de trabajo"></button>

                        <% }%>
                        <%
                            if (Permisos13.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnFamProducto" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/FamiliaProducto/Frame/AdminFamiliaProducto.jsp'" 
                                title="Administrar Familias de Productos"></button>

                        <% }%>
                        <%
                            if (Permisos14.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnProducto" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/Producto/Frame/AdminProducto.jsp'" 
                                title="Administrar Productos"></button>


                        <% }%>
                        <%
                            if (Permisos15.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnConservacion" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/Conservacion/Frame/AdminConservacion.jsp'" 
                                title="Administrar Conservaciones"></button> 


                        <% }%>
                        <%
                            if (Permisos16.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnEnvase" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/Envase/Frame/AdminEnvase.jsp'" 
                                title="Administrar Envases"></button> 

                        <% }%>
                        <%
                            if (Permisos17.getLectura() == 1) {
                        %>

                        <button style="display: none;" type="button"  class="btnRespOT" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Produccion/ResponsableOrdenTrabajo/Frame/AdminResponsableOrdenTrabajo.jsp'" 
                                title="Administrar responsables de órdenes de trabajo"></button> 



                        <% }%>
                    </div>
                </div>

                <%                        }
                    }
                    if (Modulo14.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {

                        if (Modulos.moduloActivado(Modulo14.getModulo_id(), SesionUsuario)) {
                %>
                <div style="display: inline-block;">                            
                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnElectricidad32" id="btnElectricidad" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Electricidad.jsp'" 
                            title="Acceso a electricidad"></button>   
                    <div id="btnElectricidad32">
                        <%
                            int tarifa = ModulosHijos.listaModuloHijos_id[146];
                            int periodo = ModulosHijos.listaModuloHijos_id[147];
                            int calendario = ModulosHijos.listaModuloHijos_id[148];
                            int factura = ModulosHijos.listaModuloHijos_id[149];
                            //int gestorTarifas = ModulosHijos.listaModuloHijos_id[149];
                            //int gruposVariablesElectricas = ModulosHijos.listaModuloHijos_id[149];

                            Permisos Permisos1 = SesionUsuario.getPermiso(tarifa);
                            Permisos Permisos2 = SesionUsuario.getPermiso(periodo);
                            Permisos Permisos3 = SesionUsuario.getPermiso(calendario);
                            Permisos Permisos4 = SesionUsuario.getPermiso(factura);
                            //Permisos Permisos5 = SesionUsuario.getPermiso( calendario);
                            Permisos Permisos6 = SesionUsuario.getPermiso(factura);

                            ControladorGestorTarifasElectricas ControladorGestorTarifasElectricas = new ControladorGestorTarifasElectricas();
                            ArrayList<GestorTarifasElectricas> lista = ControladorGestorTarifasElectricas.buscarGestorTarifasElectricas();
                            int tarifaElectrica_id = 0;
                            //System.out.println(lista.size());
                            if (lista.size() == 1) {
                                tarifaElectrica_id = lista.get(0).getTarifaElectrica_id();

                                if (Permisos1.getModificar() == 1) {


                        %>
                        <button style="display: none;" type="button"  class="btnTarifas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Control/Electricidad/TarifaElectrica/Frame/ModificarTarifaElectrica.jsp?tarifaElectrica_id=<%=tarifaElectrica_id%>'" 
                                title="Administrar Tarifa"></button> 

                        <%
                            }
                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnPeriodos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Control/Electricidad/PeriodoElectrico/Frame/AdminPeriodoElectricoUsuario.jsp?tarifaElectrica_id=<%=tarifaElectrica_id%>&usuario=true'" 
                                title="Administrar calendario Períodos"></button> 
                        <%
                            }
                            if (Permisos6.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnPeriodos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Control/Electricidad/GVControlElectrico/Frame/AdminGVControlElectrico.jsp'" 
                                title="Administrar grupos de variables"></button> 
                        <%
                            }

                            ControladorPeriodoElectricos ControladorPeriodoElectricos = new ControladorPeriodoElectricos();
                            ArrayList<PeriodoElectrico> listaPeriodos = ControladorPeriodoElectricos.getPeriodoElectricoTarifa(tarifaElectrica_id);
                            ControladorCalendarioPeriodosElectricos ControladorCalendarioPeriodosElectricos = new ControladorCalendarioPeriodosElectricos();
                            if (listaPeriodos.size() > 5 && Permisos3.getModificar() == 1) {
                                boolean calendarios = true;
                                for (int i = 0; i < listaPeriodos.size(); i++) {
                                    ArrayList<CalendarioPeriodosElectricos> listaCalendarioPeriodosElectricos = ControladorCalendarioPeriodosElectricos.getListaCalendarioPeriodosElectricos(listaPeriodos.get(i).getPeriodoElectrico_id());
                                    if (listaCalendarioPeriodosElectricos.size() > 1) {
                                        calendarios = false;
                                        break;
                                    }
                                }

                                if (calendarios == true) {
                        %>
                        <button style="display: none;" type="button"  class="btnPlaning" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Control/Electricidad/CalendarioPeriodosElectricos/Frame/CrearCalendarioPeriodosElectricos.jsp?tarifaElectrica_id=<%=tarifaElectrica_id%>'" 
                                title="Administrar calendario Períodos"></button> 
                        <%} else {
                        %>
                        <button style="display: none;" type="button"  class="btnPlaning" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Control/Electricidad/CalendarioPeriodosElectricos/Frame/ModificarCalendarioPeriodosElectricos.jsp'" 
                                title="Administrar calendario Períodos"></button> 
                        <%
                                }
                            }
                            if (Permisos4.getLectura() == 1) {
                        %>

                        <button style="display: none;" type="button"  class="btnCostes" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Administracion/Electricidad/FiltroDatos/Frame/AdminFiltroDatos.jsp'" 
                                title="Acceso a costes"></button> 
                        <%
                            }
                        } else {
                            ControladorTarifaElectricas ControladorTarifaElectricas = new ControladorTarifaElectricas();
                            ArrayList<TarifaElectrica> listaTarifas = ControladorTarifaElectricas.getListaTarifaElectricas();
                            if (listaTarifas.size() < 1 && Permisos1.getCrear() == 1) {


                        %>
                        <button style="display: none;" type="button"  class="btnTarifas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Control/Electricidad/TarifaElectrica/Frame/CrearTarifaElectrica.jsp'" 
                                title="Administrar Tarifa"></button> 

                        <%                        }
                        %>
                        <button style="display: none;" type="button"  class="btnTarifas" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Control/Electricidad/GestorTarifasElectricas/Frame/AdminGestorTarifasElectricas.jsp'" 
                                title="Administrar Gestor de Tarifas"></button> 
                        <%
                            }
                        %>
                    </div>
                </div>

                <%}
                    }

                    if (Modulo11.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {
                        if (Modulos.moduloActivado(Modulo11.getModulo_id(), SesionUsuario)) {
                %>
                <div style="display: inline-block;">                            
                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnComunicacion32"
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Comunicacion.jsp'" 
                            title="Acceso al modulo de comunicación"></button>   
                    <div id="btnComunicacion32">
                        <%
                            int equipos = ModulosHijos.listaModuloHijos_id[122];
                            int comSerial = ModulosHijos.listaModuloHijos_id[123];
                            int comBaseDatos = ModulosHijos.listaModuloHijos_id[124];
                            int gruposRegistro = ModulosHijos.listaModuloHijos_id[126];
                            int variable = ModulosHijos.listaModuloHijos_id[127];
                            //int turno = ModulosHijos.listaModuloHijos_id[128];
                            Permisos Permisos = SesionUsuario.getPermiso(equipos);
                            Permisos Permisos2 = SesionUsuario.getPermiso(comSerial);
                            Permisos Permisos3 = SesionUsuario.getPermiso(comBaseDatos);
                            Permisos Permisos5 = SesionUsuario.getPermiso(gruposRegistro);
                            Permisos Permisos6 = SesionUsuario.getPermiso(variable);

                            if (Permisos.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnEquipo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Comunicacion/Equipo/Frame/AdminEquipo.jsp'" 
                                title="Administrar Equipos"></button> 

                        <%}
                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnComSerial" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Comunicacion/ComEquipos/ComSerial/Frame/AdminComSerials.jsp'" 
                                title="Administrar comunicación puertos serie"></button> 
                        <%}
                            if (Permisos3.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnComBaseDatos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Comunicacion/ComEquipos/ComBaseDatos/Frame/AdminComBaseDatos.jsp'" 
                                title="Administrar comunicación con bases de datos"></button> 

                        <% }

                            if (Permisos5.getLectura() == 1) {
                        %>

                        <button style="display: none;" type="button" class="btnGrupoRegistro" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Comunicacion/GrupoRegistro/Frame/AdminGrupoRegistro.jsp'" 
                                title="Administrar comunicación con bases de datos"></button>     

                        <% }

                            if (Permisos6.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button" class="btnVariable" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Comunicacion/ComVariable/Frame/AdminComVariable.jsp'" 
                                title="Administrar variables"></button>    


                        <button style="display: none;" type="button" class="btnVariablesGrupo" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Comunicacion/ComVariable/Frame/AdminVisibilidadComVariableGrupoUsuario.jsp'" 
                                title="Administrar variables de grupos de usuario"></button>    

                        <%
                            }
                        %> 
                    </div>
                </div>
                <%  }
                    }

                    if (Modulo7.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {
                        if (Modulos.moduloActivado(Modulo7.getModulo_id(), SesionUsuario)) {

                %>
                <div style="display: inline-block;">                            

                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnConexion32" id="btnConexion" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Estados.jsp'" 
                            title="Estados"></button> 
                    <div id="btnConexion32">
                        <%
                            int conexionEquipos = ModulosHijos.listaModuloHijos_id[42];
                            int conexionUsuarios = ModulosHijos.listaModuloHijos_id[43];
                            int Sesiones = ModulosHijos.listaModuloHijos_id[44];
                            Permisos Permisos = SesionUsuario.getPermiso(conexionEquipos);
                            Permisos Permisos2 = SesionUsuario.getPermiso(conexionUsuarios);
                            Permisos Permisos3 = SesionUsuario.getPermiso(Sesiones);
                            if (Permisos.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button"  class="btnConexEquipos" 
                                onclick="window.location.href = '<%=href%>/Main/Web/Comunicacion/Equipo/Frame/ConexionEquipo.jsp'" 
                                title="Conexiones y estados de equipos"></button> 
                        <%     }
                            if (Permisos2.getLectura() == 1) {
                        %>
                        <button style="display: none;"type="button"  class="btnSesionUsuario"
                                onclick="window.location.href = '<%=href%>/Main/Web/login/Sesion/Frame/ConexionSesionUsuario.jsp'" 
                                title="Ver todas las sesiones de usuarios"></button> 
                        <%     }
                            if (Permisos3.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button" class="btnConexionesSesionUsuario" 
                                onclick="window.location.href = '<%=href%>/Main/Web/login/Sesion/Frame/AdminSesionUsuario.jsp'" 
                                title="Administrador de sesiones de usuarios"></button> 
                        <%
                            }
                        %>
                    </div>
                </div>
                <%                        }
                    }
                    if (Modulo8.getHabilitado() == 1 || GrupoUsuario.getNombre().equals("Programación")) {
                        if (Modulos.moduloActivado(Modulo8.getModulo_id(), SesionUsuario)) {

                %>
                <div style="display: inline-block;">                            

                    <button type="button" onmouseover="menuON(this)" onmouseout="menuOFF(this)" class="btnLog32" id="btnConexion" 
                            onclick="window.location.href = '<%=href%>/Main/Web/Menus/Log.jsp'" 
                            title="Log"></button>
                    <div id="btnLog32">
                        <%

                            int log2 = ModulosHijos.listaModuloHijos_id[45];
                            Permisos Permisos = SesionUsuario.getPermiso(log2);

                        %>
                        <!--Boton-->

                        <%                            if (Permisos.getLectura() == 1) {
                        %>
                        <button style="display: none;" type="button" class="btnLog" 
                                onclick="window.location.href = '<%=href%>/Main/Web/log/Frame/Log.jsp'" 
                                title="Visualizar archivo LOG"></button> 


                        <%}%>
                    </div>

                </div>

                <%                        }
                    }%>
<!--
                <div class= "vl"></div>
                
                <button type="button" class="btnLog32" id="btnConexion" 
                            onclick="window.location.href = '<%=href%>/dist/form-element-input.html'" 
                            title="Log"></button>
                    <div id="btnLog32">
                
            </div>-->

            <%                    }
            %>

            <!--Boton de menu responsive-->
            <!--button type="button" class="btnMenuResponsive" id="btnMenuResponsive" title="Menú" onClick="salir()"></button>
            <script>

                function salir() {
                    navigator.app.exitApp();

                }

            </script-->
        </div>    
    </div>   
</div>