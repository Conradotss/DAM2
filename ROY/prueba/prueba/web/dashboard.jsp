<%-- 
    Document   : CrearTarea
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="Clases.Recursos.DatosAplicacion"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
//empresa
    //permisos
    //session.setAttribute("SesionUsuario", SesionUsuario);

    if (session.getAttribute("login") == null) {
        response.sendRedirect("login/frame/Login.jsp");
    }


%>
<html>
    <head>

        <title>Inicio</title>
        <%=DatosAplicacion.importjs%>
        <link rel="stylesheet" href="dist/output.css" type="text/css"/>


    </head>
    <body class="bg-gray-50">


        <!-- sidebar -->

        <div id="mySidebar" class="sidebar bg-gray-800 min-h-full z-10 ">

            <div class="flex items-center mb-8 ml-6 mt-6">
                <a class="  flex-none mr-auto text-3xl font-bold leading-none" href="#">
                    <img class="imglogoCabecera" src="Main/images/On/logo-Cabecera-32.png" />

                </a>


                <button class="navbar-close mr-6 " onclick="closeNav()">
                    <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>


            <div class="ml-6 mr-6 block hover:bg-gray-500 pt-2 pb-2 rounded group/main">
                <button class=" flex  items-center w-full   focus:outline-none text-white focus:text-indigo-400 rounded ">
                    <svg class="flex-none fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p class="ml-3 mr-3 text-base leading-4 ">Maquinaria</p>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                    </svg>
                </button>
                <ul class="flex relative hidden text-gray-700  group-hover/main:block">
                    <li class="group/item">
                        <a class="rounded-t text-center text-white py-2 px-4 block" href="#">Tarea</a>

                    </li>

                </ul>



            </div>     

            <div class="mt-5 ml-6 mr-6 block hover:bg-gray-500 pt-2 pb-2 rounded group/main">
                <button class=" flex  items-center w-full   focus:outline-none text-white focus:text-indigo-400 rounded ">
                    <svg class="flex-none fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p class="ml-3 mr-3 text-base leading-4">Balance</p>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                    </svg>
                </button>
                <ul class="flex relative hidden text-gray-700  group-hover/main:block">
                    <li class="group/item">
                        <a class="rounded-t text-center text-white py-2 px-4 block" href="#">Tipos P.R.</a>

                    </li>
                    <li class="group/item">
                        <a class="rounded-t text-center text-white py-2 px-4 block" href="#">Ubicación</a>

                    </li>
                    <li class="group/item">
                        <a class="rounded-t text-center text-white py-2 px-4 block" href="#">Registro Producción</a>

                    </li>
                    <li class="group/item">
                        <a class="rounded-t text-center text-white py-2 px-4 block" href="#">Material</a>

                    </li>
                    <li class="group/item">
                        <a class="rounded-t text-center text-white py-2 px-4 block" href="#">Consumo</a>

                    </li>

                </ul>



            </div>  


            <div class="mt-5 ml-6 mr-6 block hover:bg-gray-500 pt-2 pb-2 rounded group/main">
                <button class=" flex  items-center w-full   focus:outline-none text-white focus:text-indigo-400 rounded ">
                    <svg class="flex-none fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p class="ml-3 mr-3 text-base leading-4">Bot</p>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                    </svg>
                </button>
                <ul class="flex relative hidden text-gray-700  group-hover/main:block">
                    <li class="group/item">
                        <a class="rounded-t text-center text-white py-2 px-4 block" href="#">Mensajería</a>

                    </li>
                    <li class="group/item">
                        <a class="rounded-t text-center text-white py-2 px-4 block" href="#">Usuarios</a>

                    </li>
                    <li class="group/item">
                        <a class="rounded-t text-center text-white py-2 px-4 block" href="#">Bots</a>

                    </li>


                </ul>



            </div>  


        </div>


        <div class="border-2 border-green-400 ">
            <nav class=" relative px-4 py-4 flex justify-between items-center bg-gray-200 z-4">

                <div class=" flex " id="main">
                    <!-- botón sidebar -->
                    <button class="openbtn navbar-burger  ml-1 text-blue-600" onclick="openNav()">
                        <svg class="block h-6 w-6 " stroke="green" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>

                    <div class="flex items-center ml-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input class="flex items-start ml-2 outline-none border-none bg-transparent focus:ring-0 border-0 text-black" type="text" name="search" id="search" placeholder="Buscar"/>
                    </div>
                </div>

                <div class=" flex ">
                    <form class="mt-2 LogoutFormClass block w-20 py-3 text-xs text-center font-semibold bg-blue-200 hover:bg-blue-400 border-5 border-black rounded-xl items-center mr-10" action="Logout" name="LogoutName" 
                          method="POST" enctype="multipart/form-data" id="LogoutFormID">

                        <button class="LogoutClass font-bold text-black" type="submit" id="LogoutID">Logout   </button>     

                    </form>

                    <a class="text-3xl font-bold leading-none mr-5  " href="#">
                        <img class="imglogoCabecera" src="Main/images/On/onelectric.png" alt="" style="max-width: 137px; max-height: 48px;"/>

                    </a>

                </div>



            </nav>
        </div>





        <div class="lg:flex z-20">


            <div class="divMedidasDashboard">

                <div class="divColorDashboard ">

                    <a href="#">
                        <h5 class="divTituloDashboard">MAQUINARIA</h5>
                    </a>


                    <button class="botonAzulDashboard">
                        <a href="Main/Web/Maquinaria/Tarea/Frame/AdminTarea.jsp">
                            TAREA
                        </a>
                    </button>


                </div>

            </div>



            <div class="divMedidasDashboard2">

                <div class="divColorDashboard">

                    <a href="#">
                        <h5 class="divTituloDashboard">BALANCE MASA</h5>
                    </a>


                    <button class="botonAzulDashboard">
                        <a href="Main/Web/BalanceMasa/Tipo/Frame/AdminTipo.jsp">
                            TIPOS P.R.
                        </a>
                    </button>

                    <button class="botonAzulDashboard">
                        <a href="Main/Web/BalanceMasa/Ubicacion/Frame/AdminUbicacion.jsp">
                            UBICACION
                        </a>
                    </button>
                    <button class="botonAzulDashboard">
                        <a href="Main/Web/BalanceMasa/Registro/Frame/AdminRegistro.jsp">
                            REGISTRO PRODUCCION
                        </a>
                    </button>


                    <button class="botonAzulDashboard">
                        <a href="Main/Web/BalanceMasa/Material/Frame/AdminMaterial.jsp">
                            MATERIAL
                        </a>
                    </button>

                    <button class="botonAzulDashboard">
                        <a href="Main/Web/BalanceMasa/Consumo/Frame/AdminConsumo.jsp">
                            CONSUMO
                        </a>
                    </button>


                </div>

            </div>


            <div class="mb-16 divMedidasDashboard2">

                <div class="divColorDashboard  ">

                    <a href="#">
                        <h5 class="divTituloDashboard">BOT KONETIC</h5>
                    </a>


                    <button class="botonAzulDashboard">
                        <a href="Main/Web/Telegram/Mensaje/Frame/Mensaje.jsp">
                            MENSAJERÍA
                        </a>
                    </button>

                    <button class="botonAzulDashboard">
                        <a href="Main/Web/Telegram/Usuarios/Frame/AdminUsuario.jsp">
                            CRUD USUARIOS
                        </a>
                    </button>

                    <button class="botonAzulDashboard">
                        <a href="Main/Web/Telegram/Bots/Frame/AdminBot.jsp">
                            CRUD BOTS
                        </a>
                    </button>


                </div>

            </div>

        </div>





        <div class="footer1">
            <nav class="footer2">
                <div class="footer3"> 

                    <div class="">
                        Todos los derechos reservados 
                        |

                        <a href="https://konetic.es/" class="hover:text-red-700">
                            Política de privacidad 
                        </a>



                    </div>

                    <div class="ml-20">
                        <a href="https://konetic.es/" class="hover:text-red-700">
                            www.konetic.es 
                        </a>

                        | 

                        <a href="https://konetic.es/" class="hover:text-red-700">
                            info@konetic.es
                        </a>
                    </div>

                </div>
            </nav>
        </div>



    </body>
</html>

<script>
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";


    }



</script>


<style>

    .sidebar {
        width: 0;
        position: fixed;
        top: 0;
        left: 0;
        overflow-x: hidden;
        transition: 0.5s;
    }




    #main {
        transition: margin-left .5s;
    }


</style>