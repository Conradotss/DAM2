/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Recursos;

import Basedatos.OnExceptionBD;
import Clases.Configuracion.ConfTiempoUsable.ConfTiempoUsable;
import Clases.Configuracion.ConfTiempoUsable.ControladorConfTiempoUsables;
import Clases.Configuracion.ConfiguracionGeneral.ConfiguracionGeneral;
import Clases.Configuracion.ConfiguracionGeneral.ControladorConfiguracionGenerals;
import Clases.Configuracion.Empresa.ControladorEmpresas;
import Clases.Configuracion.Empresa.Empresa;
import Clases.Configuracion.EmpresaRespaldo.ControladorEmpresaRespaldos;
import Clases.Configuracion.EmpresaRespaldo.EmpresaRespaldo;
import Clases.Configuracion.GrupoUsuario.ControladorGrupoUsuarios;
import Clases.Configuracion.GrupoUsuario.GrupoUsuario;
import Clases.Configuracion.IVA.ControladorIVAs;
import Clases.Configuracion.IVA.IVA;
import Clases.Configuracion.Modulo.ControladorModulos;
import Clases.Configuracion.Modulo.Modulo;
import Clases.Configuracion.Modulo.Modulos;
import Clases.Configuracion.ModuloHijo.ControladorModuloHijos;
import Clases.Configuracion.ModuloHijo.ModuloHijo;
import Clases.Configuracion.ModuloHijo.ModulosHijos;
import Clases.Configuracion.Permisos.ControladorPermisoss;
import Clases.Configuracion.Permisos.Permisos;
import Clases.Configuracion.TarifaManoObraEmpresa.ControladorTarifaManoObraEmpresas;
import Clases.Configuracion.TarifaManoObraEmpresa.TarifaManoObraEmpresa;
import Clases.Configuracion.TarifaManoObraUsuarioPagos.ControladorTarifaManoObraUsuarioPagoss;
import Clases.Configuracion.TarifaManoObraUsuarioPagos.TarifaManoObraUsuarioPagos;
import Clases.Configuracion.Usuario.ControladorUsuarios;
import Clases.Configuracion.Usuario.Usuario;
import Clases.Existencias.FamiliaArticulo.ControladorFamiliaArticulos;
import Clases.Existencias.FamiliaArticulo.FamiliaArticulo;
import Clases.Maquinaria.FamiliaMaquina.ControladorFamiliaMaquinas;
import Clases.Maquinaria.FamiliaMaquina.FamiliaMaquina;
import Clases.Principal.Main;
import Utilidades.Horario;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

/**
 *
 * @author Onelectric
 */
public class DatosAplicacion {

    //private static int contador = 0;
//    public static void ruta() {
//        //rutaHttp();
//        String operSys = System.getProperty("os.name").toLowerCase();
//        if (operSys.contains("win")) {
//            //os = OS.WINDOWS;
//            dirAplicacionCarpetaWebappsPadre = dirApp
//                    + System.getProperty("file.separator")
//                    + "webapps" + System.getProperty("file.separator")
//                    + nombreAplicacion
//                    + System.getProperty("file.separator")
//                    + nombreAplicacion
//                    + System.getProperty("file.separator");
//            dirAplicacionCarpetaWebappsImagenes = dirAplicacionCarpetaWebappsPadre + "Imagenes";
//            dirAplicacionCarpetaWebappsDocumento = dirAplicacionCarpetaWebappsPadre + "Documentos";
//        } else if (operSys.contains("nix") || operSys.contains("nux")
//                || operSys.contains("aix")) {
//            //os = OS.LINUX;
//            dirAplicacionCarpetaWebappsPadre = dirApp
//                    + "appservers"
//                    + System.getProperty("file.separator")
//                    + "apache-tomcat-9x"
//                    + System.getProperty("file.separator")
//                    + "webapps"
//                    + System.getProperty("file.separator")
//                    + nombreAplicacion
//                    + System.getProperty("file.separator")
//                    + nombreAplicacion
//                    + System.getProperty("file.separator");
//            dirAplicacionCarpetaWebappsImagenes = dirAplicacionCarpetaWebappsPadre + "Imagenes";
//            dirAplicacionCarpetaWebappsDocumento = dirAplicacionCarpetaWebappsPadre + "Documentos";
//        } else if (operSys.contains("mac")) {
//            //os = OS.MAC;
////            dirAplicacionCarpetaWebappsPadre = dirApp + System.getProperty("file.separator") + "webapps" + System.getProperty("file.separator") + nombreAplicacion + System.getProperty("file.separator") + nombreAplicacion + System.getProperty("file.separator");
////            dirAplicacionCarpetaWebappsImagenes = dirAplicacionCarpetaWebappsPadre + "Imagenes";
////            dirAplicacionCarpetaWebappsDocumento = dirAplicacionCarpetaWebappsPadre + "Documentos";
//        } else if (operSys.contains("sunos")) {
//            //os = OS.SOLARIS;
////            dirAplicacionCarpetaWebappsPadre = dirApp + System.getProperty("file.separator") + "webapps" + System.getProperty("file.separator") + nombreAplicacion + System.getProperty("file.separator") + nombreAplicacion + System.getProperty("file.separator");
////            dirAplicacionCarpetaWebappsImagenes = dirAplicacionCarpetaWebappsPadre + "Imagenes";
////            dirAplicacionCarpetaWebappsDocumento = dirAplicacionCarpetaWebappsPadre + "Documentos";
//        }
//    }
    public static String rutaHttp() throws OnExceptionBD {
        //aqui creamos las carpetas, esto se ha movido aqui para cuando la aplicacion se ejecute por primera vez
        //Crear carpeta Script

        ConfiguracionGeneral ConfiguracionGeneral = null;
        ControladorConfiguracionGenerals ControladorConfiguracionGenerals = null;
        try {
            ControladorConfiguracionGenerals = new ControladorConfiguracionGenerals();
            ConfiguracionGeneral = ControladorConfiguracionGenerals.abrirConfiguracion();
        } catch (Exception e) {
            // e.printStackTrace();
            //OnLog4j.Log().error(e.getMessage());
        }
        String http = "";
        //System.out.println("hola");
        if (ConfiguracionGeneral != null) {
            if (!ConfiguracionGeneral.getPuerto().equals("8080")) {
                http = "https";
            } else {
                http = "http";
            }
        } else {

            ControladorEmpresas ControladorEmpresas = new ControladorEmpresas();
            String llave = DatosAplicacion.dirAplicacionCarpetaPadre + System.getProperty("file.separator") + "config.on";
            //System.out.println(llave);
            File archivo = new File(llave);
            if (archivo.exists() && ControladorEmpresas.getListaEmpresas().size() == 0) { //&& contador == 0) {

                Empresa Empresa = new Empresa(
                        0,
                        "nombre empresa",
                        "nombre comercial",
                        "nif_cif",
                        "dirección",
                        00000,
                        "población",
                        "provincia",
                        "telefono",
                        "movil",
                        "fax",
                        "e_mail",
                        "web",
                        "",
                        "protección de datos",
                        "agradecimiento",
                        "registro mercantil",
                        null,
                        "",
                        "",
                        ""
                );
                if (ControladorEmpresas.crearEmpresa(Empresa)) {
                    ControladorEmpresaRespaldos ControladorEmpresaRespaldos = new ControladorEmpresaRespaldos();

                    int empresaMax = ControladorEmpresas.getEmpresaMax();

                    EmpresaRespaldo EmpresaRespaldo = new EmpresaRespaldo(
                            0,
                            "nombre empresa",
                            "nombre comercial",
                            "nif_cif",
                            "dirección",
                            00000,
                            "población",
                            "provincia",
                            "telefono",
                            "movil",
                            "fax",
                            "e_mail",
                            "web",
                            "",
                            "protección de datos",
                            "agradecimiento",
                            "registro mercantil",
                            null,
                            "",
                            "",
                            "",
                            empresaMax
                    );
                    ControladorEmpresaRespaldos.crearEmpresaRespaldo(EmpresaRespaldo);
                }

                ControladorGrupoUsuarios ControladorGrupoUsuarios = new ControladorGrupoUsuarios();

                GrupoUsuario GrupoUsuario = new GrupoUsuario(
                        0,
                        null,
                        "Programación",
                        "Administradores del sistema."
                );

                ControladorGrupoUsuarios.crearGrupoUsuario(GrupoUsuario);
                GrupoUsuario = new GrupoUsuario(
                        0,
                        ControladorEmpresas.getEmpresaPrimera().getEmpresa_id(),
                        "Administración",
                        "Administradores del sistema."
                );

                ControladorGrupoUsuarios.crearGrupoUsuario(GrupoUsuario);
                ControladorTarifaManoObraEmpresas ControladorTarifaManoObraEmpresas = new ControladorTarifaManoObraEmpresas();
                TarifaManoObraEmpresa TarifaManoObraEmpresa = new TarifaManoObraEmpresa(
                        0,
                        ControladorEmpresas.getEmpresaPrimera().getEmpresa_id(),
                        0,
                        0,
                        0,
                        "Programador",
                        0,
                        0,
                        0,
                        0,
                        null,
                        null,
                        null,
                        22,
                        06,
                        0
                );

                ControladorTarifaManoObraEmpresas.crearTarifaManoObraEmpresa(TarifaManoObraEmpresa);
                TarifaManoObraEmpresa = new TarifaManoObraEmpresa(
                        0,
                        ControladorEmpresas.getEmpresaPrimera().getEmpresa_id(),
                        0,
                        0,
                        0,
                        "Administrador",
                        0,
                        0,
                        0,
                        0,
                        null,
                        null,
                        null,
                        22,
                        06,
                        0
                );

                ControladorTarifaManoObraEmpresas.crearTarifaManoObraEmpresa(TarifaManoObraEmpresa);
                ControladorUsuarios ControladorUsuarios = new ControladorUsuarios();

                Usuario Usuario = new Usuario(
                        0,
                        ControladorEmpresas.getEmpresaPrimera().getEmpresa_id(),
                        "Programador",
                        "5988f04175e9549b84b182130a63fbecc99bbe62",
                        "",
                        //   "",
                        ControladorGrupoUsuarios.getGrupoUsuarioPrimera().getGrupoUsuario_id(),
                        "programador",
                        null,
                        0,
                        ControladorTarifaManoObraEmpresas.getTarifaManoObraEmpresaPrimera().getTarifaManoObraEmpresa_id(),
                        0,
                        1,
                        null,
                        null,
                        "",
                        "",
                        0
                );
                ControladorUsuarios.crearUsuario(Usuario);
                Usuario = new Usuario(
                        0,
                        ControladorEmpresas.getEmpresaPrimera().getEmpresa_id(),
                        "Administrador",
                        "d033e22ae348aeb5660fc2140aec35850c4da997",
                        "",
                        //  "",
                        ControladorGrupoUsuarios.getGrupoUsuarioPrimera().getGrupoUsuario_id() + 1,
                        "admin",
                        null,
                        0,
                        ControladorTarifaManoObraEmpresas.getTarifaManoObraEmpresaPrimera().getTarifaManoObraEmpresa_id() + 1,
                        0,
                        1,
                        null,
                        null,
                        "",
                        "",
                        0
                );
                ControladorUsuarios.crearUsuario(Usuario);
                ControladorTarifaManoObraUsuarioPagoss ControladorTarifaManoObraUsuarioPagoss = new ControladorTarifaManoObraUsuarioPagoss();
                TarifaManoObraUsuarioPagos TarifaManoObraUsuarioPagos = new TarifaManoObraUsuarioPagos(
                        0,
                        ControladorUsuarios.getUsuarioPrimera().getUsuario_id(),
                        0,
                        0,
                        0
                );

                ControladorTarifaManoObraUsuarioPagoss.crearTarifaManoObraUsuarioPagos(TarifaManoObraUsuarioPagos);
                TarifaManoObraUsuarioPagos = new TarifaManoObraUsuarioPagos(
                        0,
                        ControladorUsuarios.getUsuarioPrimera().getUsuario_id() + 1,
                        0,
                        0,
                        0
                );

                ControladorTarifaManoObraUsuarioPagoss.crearTarifaManoObraUsuarioPagos(TarifaManoObraUsuarioPagos);

                //hay que modificar esta objeto en la base de datos y poner el nombre de la empresa que se desee
                ControladorConfTiempoUsables ControladorConfTiempoUsables = new ControladorConfTiempoUsables();
                ConfTiempoUsable ConfTiempoUsable = new ConfTiempoUsable(
                        1,
                        0,
                        4320,
                        "Onelectric"
                );
                ControladorConfTiempoUsables.crearConfTiempoUsable(ConfTiempoUsable);
                try {
                    //System.out.println("holaaaa entro aki");
                    //modulos padre, los creamos si no existen, se crearan con el campo habilitado a 0, 
                    //se debera cambiar en la base de datos a 1 si se quiere que se muestre
                    ControladorModulos ControladorModulos = new ControladorModulos();
                    ArrayList<Modulo> listaModulos = Modulos.getListaModulos();
                    for (int i = 0; i < listaModulos.size(); i++) {
                        Modulo modulo = ControladorModulos.getModulo(listaModulos.get(i).getModulo_id());
                        if (modulo == null) {
                            modulo = listaModulos.get(i);
                            if (modulo.getModulo_id() == 100) {
                                modulo.setHabilitado(1);
                            }
                            ControladorModulos.crearModulo(modulo);
                        } else {
                            int habilitado = modulo.getHabilitado();
                            modulo = listaModulos.get(i);
                            modulo.setHabilitado(habilitado);
                            ControladorModulos.modificarModulo(modulo);
                        }
                    }

                    //modulos hijos, los creamos si no existen
                    ControladorModuloHijos ControladorModuloHijos = new ControladorModuloHijos();
                    ArrayList<ModuloHijo> listaModulosHijos = ModulosHijos.getListaModulosHijos();
                    for (int i = 0; i < listaModulosHijos.size(); i++) {
                        ModuloHijo moduloHijo = ControladorModuloHijos.getModuloHijo(listaModulosHijos.get(i).getModuloHijo_id());
                        if (moduloHijo == null) {
                            moduloHijo = listaModulosHijos.get(i);
                            ControladorModuloHijos.crearModuloHijo(moduloHijo);
                        } else {
                            moduloHijo = listaModulosHijos.get(i);
                            ControladorModuloHijos.modificarModuloHijo(moduloHijo);
                        }
                    }
                    ControladorPermisoss ControladorPermisoss = new ControladorPermisoss();
                    Permisos Permisos = new Permisos(
                            0,
                            ControladorGrupoUsuarios.getGrupoUsuarioPrimera().getGrupoUsuario_id(),
                            109,
                            1,
                            1,
                            1,
                            1
                    );
                    //System.out.println(Permisos);
                    ControladorPermisoss.crearPermisos(Permisos);
                    Permisos = new Permisos(
                            0,
                            ControladorGrupoUsuarios.getGrupoUsuarioPrimera().getGrupoUsuario_id() + 1,
                            109,
                            1,
                            1,
                            1,
                            1
                    );

                    ControladorPermisoss.crearPermisos(Permisos);
                    ControladorIVAs ControladorIVAs = new ControladorIVAs();
                    IVA IVA = new IVA(
                            0,
                            ControladorEmpresas.getEmpresaPrimera().getEmpresa_id(),
                            21,
                            "IVA estandar."
                    );

                    ControladorIVAs.crearIVA(IVA);

                    //familias
                    ControladorFamiliaArticulos ControladorFamiliaArticulos = new ControladorFamiliaArticulos();
                    ControladorFamiliaMaquinas ControladorFamiliaMaquinas = new ControladorFamiliaMaquinas();

                    FamiliaArticulo FamiliaArticulo = new FamiliaArticulo(
                            1,
                            1,
                            "---",
                            "",
                            ""
                    );

                    ControladorFamiliaArticulos.crearFamiliaArticulo(FamiliaArticulo);

                    FamiliaMaquina FamiliaMaquina = new FamiliaMaquina(
                            1,
                            1,
                            "---",
                            "",
                            "",
                            0
                    );

                    ControladorFamiliaMaquinas.crearFamiliaMaquina(FamiliaMaquina);

                    ConfiguracionGeneral = new ConfiguracionGeneral();
                    ControladorConfiguracionGenerals.crearConfiguracionGeneral(ConfiguracionGeneral);
                    http = "https";

                } catch (Exception e) {
                    //e.printStackTrace();
                    //OnLog4j.Log().error(e.getMessage());
                }
                //contador++;
            }
        }
        return http;
    }
    //Recuerda que este orden da posicion de array influye en todo el proyecto
    //public static String http;

    public static String nombreAplicacion = "OnGestion";
    public static String dirApp = Main.getDirApp();
    public static String dirAplicacionCarpetaPadre = dirApp + System.getProperty("file.separator") + nombreAplicacion;
    public static String dirAplicacionCarpetaTemp = dirAplicacionCarpetaPadre + System.getProperty("file.separator") + "temp";
    public static String dirAplicacionCarpetaImagenes = dirAplicacionCarpetaPadre + System.getProperty("file.separator") + "Imagenes";
    //public static String dirAplicacionCarpetaDocumento = dirAplicacionCarpetaPadre + System.getProperty("file.separator") + "Documentos";

    //
    //
    public static String dirAplicacionCarpetaWebappsPadre = Main.getRealDirApp()
            + System.getProperty("file.separator")
            + nombreAplicacion;
    public static String dirAplicacionCarpetaWebappsImagenes = dirAplicacionCarpetaWebappsPadre + System.getProperty("file.separator") + "Imagenes";
    public static String dirAplicacionCarpetaWebappsDocumento = dirAplicacionCarpetaWebappsPadre + System.getProperty("file.separator") + "Documentos";
    public static String dirAplicacionArchivosTemp = dirAplicacionCarpetaWebappsPadre + System.getProperty("file.separator") + "ArchivosTemp";
    public static String direccionIconos = dirApp
            + System.getProperty("file.separator")
            + "webapps"
            + System.getProperty("file.separator")
            + nombreAplicacion
            + System.getProperty("file.separator")
            + "Main"
            + System.getProperty("file.separator")
            + "images"
            + System.getProperty("file.separator")
            + "20x20"
            + System.getProperty("file.separator");

    public static String getDirDocumentosApp(int ejercicio, String carpeta, String nombreFichero) {
        String coletilla = Utilidades.Horario.get_fecha_hora_realSinEspacios();
        String dir = System.getProperty("file.separator")
                + "Documentos"
                + System.getProperty("file.separator")
                + ejercicio
                + System.getProperty("file.separator")
                + carpeta
                + System.getProperty("file.separator")
                + coletilla
                + System.getProperty("file.separator")
                + nombreFichero;
        return dir;
    }

    public static String getDirImagenesApp(String carpeta, String nombreFichero) {
        String coletilla = Utilidades.Horario.get_fecha_hora_realSinEspacios();
        String dir = System.getProperty("file.separator")
                + "Imagenes"
                + System.getProperty("file.separator")
                + carpeta
                + System.getProperty("file.separator")
                + coletilla
                + System.getProperty("file.separator")
                + nombreFichero;
        return dir;
    }

    public static String getDirDocumentosAppMapeoPlano(int ejercicio, String carpeta, int plano_id) {
        String coletilla = Utilidades.Horario.get_fecha_hora_realSinEspacios();
        String dir = System.getProperty("file.separator")
                + "Documentos"
                + System.getProperty("file.separator")
                + ejercicio
                + System.getProperty("file.separator")
                + carpeta
                + System.getProperty("file.separator")
                + "plano_id_"
                + plano_id
                + System.getProperty("file.separator")
                + "mapeo.txt";
        return dir;
    }

    //Recuerda que este orden da posicion de array influye en todo el proyecto
    public static String directorioFondoPrincipal = "Clases/Recursos/Iconos/OnfondoAplicacion4.png";
    public static String directorioFondoVentanas = "/" + directorioFondoPrincipal;

    //Directorios Imagenes e iconos
    public static String dirIcono = "Clases/Recursos/Iconos/";

    public static String[] diasSemana = {"Lunes", "Martes", "Miercoles", "Jueves", "Vienes", "Sábado", "Domingo"};
    public static String[] diasSemanaCalendar = {"Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Vienes", "Sábado"};

    public static String[] meses = {"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"};
    public static String[] formaPago = {"Contado", "Transferencia", "Giro", "Pagaré", "Cheque", "Tarjeta", "Confirming"};
    public static String[] carpetaEstadoLote = {"Lotes Verificados", "Lotes No Conformes"};
    public static String[] activo = {"No activo", "Activo"};

    public static String version = "v=" + Horario.getfecharealConPuntos() + "." + Horario.gethorareal();

    public static String importjsInforme = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            // + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain  by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain by Konetic D.F\">\n"
            + "\n"
            //+ "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            //+ "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            //+ "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/main.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";

    public static String importjs = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain  by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            + "                 <link href=\"/" + nombreAplicacion + "/Main/css/home.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"/>\n"
            // + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/main.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js?" + version + "\"></script>\n"

            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js.map?" + version + "\"></script>\n"
            //            
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Notificaciones/js/Notificacion.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Mantenimiento/Geolocalizacion/js/Geolocalizacion.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.ui.datepicker.validation.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";

    public static String importjsCalendar = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain  by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            + "                 <link href=\"/" + nombreAplicacion + "/Main/css/home.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/mainMinimo.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            //                        + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js?" + version + "\"></script>\n"
            //                        + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js?" + version + "\"></script>\n"

            //                        + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js.map?" + version + "\"></script>\n"
            //                        + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js.map?" + version + "\"></script>\n"
            //                        + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js.map?" + version + "\"></script>\n"
            //            
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Notificaciones/js/Notificacion.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Mantenimiento/Geolocalizacion/js/Geolocalizacion.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            //+ "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            //+ "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            //+ "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";

    public static String importjsInformeScada = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            //+ "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/cssInformesScada/main.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js?" + version + "\"></script>\n"

            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js.map?" + version + "\"></script>\n"
            //            
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Notificaciones/js/Notificacion.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Mantenimiento/Geolocalizacion/js/Geolocalizacion.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";
    public static String importjsInicioSesion = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            //+ "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/main.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js?" + version + "\"></script>\n"

            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js.map?" + version + "\"></script>\n"
            //            
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Notificaciones/js/Notificacion.js?" + version + "\"></script>\n"
            //+ "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Mantenimiento/Geolocalizacion/js/Geolocalizacion.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            // + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";
    public static String importjsRegistroHorario = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            //+ "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/mainRegistroHorario.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js?" + version + "\"></script>\n"

            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js.map?" + version + "\"></script>\n"
            //            
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Notificaciones/js/Notificacion.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";
    public static String importjsFirma = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            //+ "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/main.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            // + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";

    public static String importDashboardCss = "<link href=\"/" + nombreAplicacion + "/Main/css/home.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"/>\n"
            + "\n"
            + "         <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n"
            + "         <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap\" rel=\"stylesheet\">"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/dist/assets/css/bootstrap.css\">\n"
            + "\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/dist/assets/vendors/chartjs/Chart.min.css\">\n"
            + "\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/dist/assets/vendors/perfect-scrollbar/perfect-scrollbar.css\">\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/dist/assets/vendors/bootstrap-icons/bootstrap-icons.css\">\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/dist/assets/css/app.css\">\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/dist/assets/images/favicon.svg\" type=\"image/x-icon\">"
            + ""
            + "";

    public static String importDashboardJs = ""
            + ""
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js\"></script>\n"
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/js/bootstrap.bundle.min.js\"></script>\n"
            + "\n"
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/vendors/chartjs/Chart.min.js\"></script>\n"
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/js/pages/ui-chartjs.js\"></script>\n"
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/vendors/apexcharts/apexcharts.min.js\"></script>\n"
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/js/pages/ui-apexchart.js\"></script>\n"
            + "\n"
            + "";

    public static String getCodeHtmlDirWebApps(String dir) {

        String code = "/" + DatosAplicacion.nombreAplicacion + "/" + DatosAplicacion.nombreAplicacion;
        //Adaptamos la ruta al directorio del Servidor
        if (dir != null) {
            if (!dir.equals("")) {
                System.out.println(dir);
                code = code + dir.replaceAll("\\\\", "/");
                System.out.println(code);
            }
        }
        return code;
    }

    public static String getCodeDirAppFichero(String dir) {

        String dirApp = Main.getDirApp() + System.getProperty("file.separator") + DatosAplicacion.nombreAplicacion;

        //Adaptamos la ruta al directorio del Servidor
        dir = dirApp + dir;
        dir = dir.replaceAll("\\\\", "/");

        return dir;
    }

    public static String getCodeHtmlTablaFichero(int i, int id, String dir) throws IOException {

        String documento = DatosAplicacion.getCodeDirAppFichero(dir);

        String extensionBarra[] = documento.split("\\\\");
        String extensionSplit[] = extensionBarra[extensionBarra.length - 1].split("\\.");
        String extension = extensionSplit[extensionSplit.length - 1];

        //String ruta = documento;
        //String[] split = ruta.split(""+DatosAplicacion.nombreAplicacion+"");
        //System.out.println(split[1]);
        File file = new File(documento);
        String codeFichero = Utilidades.Conversor_formato.encodeFileToBase64Binary(file);
        String Nombre = file.getName();
        //System.out.println(codeFichero);
        String htmlcode = "";
        extension = extension.toLowerCase();

        if (documento != null && !documento.equals("")) {

            //**********************************//pdf
            if (extension.equals("pdf") || extension.equals("epub") || extension.equals("azw") || extension.equals("ibook")) {

                htmlcode += "<td>"
                        + "<div class=\"img-contenedor\">"
                        //+ "<input type=\"text\" value=\"" + Nombre + "\" style=\"visibility: hidden;\">"
                        + "<input type=\"hidden\" id=\"ruta" + i + "_" + id + "\" value=\"" + documento + "\"/>"
                        + "<button onclick=\"verFicheroExtension(" + i + "," + id + ",'" + Nombre + "');\""
                        + "style=\"width: auto; max-height: 20px;\">" + Nombre + "</button>"
                        + "</div>"
                        + "</td>"
                        + "";

                //************************************************************//audio
            } else if (extension.equals("mp3") || extension.equals("wav") || extension.equals("wma") || extension.equals("3gpp") || extension.equals("aac") || extension.equals("ogg") || extension.equals("opus") || extension.equals("flac") || extension.equals("m4a")) {

                htmlcode += "<td>"
                        + "<div class=\"img-contenedor\">"
                        //+ "<input type=\"text\" value=\"" + Nombre + "\" style=\"visibility: hidden;\">"
                        + "<input type=\"hidden\" id=\"ruta" + i + "_" + id + "\" value=\"" + documento + "\"/>"
                        + "<button onclick=\"verFicheroExtension(" + i + "," + id + ",'" + Nombre + "');\""
                        + "style=\"width: auto; max-height: 20px;\">" + Nombre + "</button>"
                        + "</div>"
                        + "</td>"
                        + "";

                //************************************************************//imagenes
            } else if (extension.equals("jpg") || extension.equals("gif") || extension.equals("bmp") || extension.equals("png") || extension.equals("jpeg")) {
                htmlcode += "<td>"
                        + "<div class=\"img-contenedor\">"
                        //+ "<input type=\"text\" value=\"" + Nombre + "\" style=\"visibility: hidden;\">"
                        + "<input type=\"hidden\" id=\"ruta" + i + "_" + id + "\" value=\"" + documento + "\"/>"
                        + "<button onclick=\"verFicheroExtension(" + i + "," + id + ",'" + Nombre + "');\""
                        + "style=\"width: auto; max-height: 20px;\">" + Nombre + "</button>"
                        + "</div>"
                        + "</td>"
                        + "";

                //************************************************************//video
            } else if (extension.equals("mp4") || extension.equals("mpeg") || extension.equals("mwv")) {
                htmlcode += "<td>"
                        + "<div class=\"img-contenedor\">"
                        //+ "<input type=\"text\" value=\"" + Nombre + "\" style=\"visibility: hidden;\">"
                        + "<input type=\"hidden\" id=\"ruta" + i + "_" + id + "\" value=\"" + documento + "\"/>"
                        + "<button onclick=\"verFicheroExtension(" + i + "," + id + ",'" + Nombre + "');\""
                        + "style=\"width: auto; max-height: 20px;\">" + Nombre + "</button>"
                        + "</div>"
                        + "</td>"
                        + "";

                //************************************************************//texto
            } else if (extension.equals("txt") || extension.equals("doc") || extension.equals("docx")) {
                htmlcode += "<td>"
                        + "<div class=\"img-contenedor\">"
                        //+ "<input type=\"text\" value=\"" + Nombre + "\" style=\"visibility: hidden;\">"
                        + "<input type=\"hidden\" id=\"ruta" + i + "_" + id + "\" value=\"" + documento + "\"/>"
                        + "<button onclick=\"verFicheroExtension(" + i + "," + id + ",'" + Nombre + "');\""
                        + "style=\"width: auto; max-height: 20px;\">" + Nombre + "</button>"
                        + "</div>"
                        + "</td>"
                        + "";

                //************************************************************//comprimidos
            } else if (extension.equals("zip") || extension.equals("rar") || extension.equals("tar")) {
                htmlcode += "<td>"
                        + "<div class=\"img-contenedor\">"
                        //+ "<input type=\"text\" value=\"" + Nombre + "\" style=\"visibility: hidden;\">"
                        + "<input type=\"hidden\" id=\"ruta" + i + "_" + id + "\" value=\"" + documento + "\"/>"
                        + "<button onclick=\"verFicheroExtension(" + i + "," + id + ",'" + Nombre + "');\""
                        + "style=\"width: auto; max-height: 20px;\">" + Nombre + "</button>"
                        + "</div>"
                        + "</td>"
                        + "";

                //************************************************************//si no sabemos lo que es
            } else {
                htmlcode += "<td>"
                        + "<div class=\"img-contenedor\">"
                        //+ "<input type=\"text\" value=\"" + Nombre + "\" style=\"visibility: hidden;\">"
                        + "<input type=\"hidden\" id=\"ruta" + i + "_" + id + "\" value=\"" + documento + "\"/>"
                        + "<button onclick=\"verFicheroExtension(" + i + "," + id + ",'" + Nombre + "');\""
                        + "style=\"width: auto; max-height: 20px;\">" + Nombre + "</button>"
                        + "</div>"
                        + "</td>"
                        + "";
            }

            htmlcode += "</div>";
            htmlcode += "</label>";

            htmlcode += "</div>";

        }

        return htmlcode;

    }

    public static void main(String[] args) {
        String dirImagen = "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.0\\bin\\OnGestion\\Imagenes\\Articulos\\0.50MMROJO.jpg";
        getCodeHtmlDirWebApps(dirImagen);
    }

}
