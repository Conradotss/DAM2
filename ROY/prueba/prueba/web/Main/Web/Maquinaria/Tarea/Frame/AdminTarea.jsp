<%-- 
    Document   : Tareas
    Created on : 26-nov-2016, 17:57:32
    Author     : Angel
--%>


<%@page import="Clases.Maquinaria.Tarea.DatosTarea"%>
<%@page import="Clases.Recursos.DatosAplicacion"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true" %>

<!DOCTYPE html>

<html>
    <head>

        <title><%=DatosTarea.tituloAdmin%></title>        
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/BusquedaTarea.js"></script> 
        <script type="text/javascript" src="../js/AdminTarea.js"></script> 
        <link rel="stylesheet" href="../../../../../dist/output.css" type="text/css"/>

    </head>
    <body class="">

        <div class="border-2 border-green-400">
            <nav class=" relative px-4 py-4 flex justify-between items-center bg-gray-200 ">

                <div class=" flex ">
                    <button class="navbar-burger  ml-1 text-blue-600">
                        <svg class="block h-6 w-6 " stroke="green" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>

                    <div class="flex items-center ml-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <form class="" action="BuscarTarea" name="frmBuscarTarea" 
      method="POST" enctype="multipart/form-data" id="frmBuscarTarea">
                        <input class="flex items-start ml-2 outline-none border-none bg-transparent focus:ring-0 border-0 text-black" type="text" name="nombre" id="nombre" placeholder="Buscar"/>
                        </form>
                    </div>
                </div>

                <div class=" flex ">
                    <form class="mt-2 LogoutFormClass block w-20 py-3 text-xs text-center font-semibold bg-blue-200 hover:bg-blue-400 border-5 border-black rounded-xl items-center mr-10" action="Logout" name="LogoutName" 
                          method="POST" enctype="multipart/form-data" id="LogoutFormID">

                        <button class="LogoutClass font-bold text-black" type="submit" id="LogoutID">Logout   </button>     

                    </form>

                    <a class="text-3xl font-bold leading-none mr-5  " href="#">
                        <img class="imglogoCabecera" src="../../../../images/On/onelectric.png" alt="" style="max-width: 137px; max-height: 48px;"/>

                    </a>

                </div>



            </nav>
        </div>


        <div class="navbar-menu relative z-50 hidden">
            <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-gray-800 border-r overflow-y-auto">
                <div class="flex items-center mb-8">
                    <a class="mr-auto text-3xl font-bold leading-none" href="#">
                        <img class="imglogoCabecera" src="../../../../images/On/logo-Cabecera-32.png" alt="" style="max-width: 137px; max-height: 48px;"/>

                    </a>


                    <button class="navbar-close">
                        <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div>

                </div>
                <div class="hover:bg-gray-500 pt-2 pb-2 rounded">
                    <button class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded ">
                        <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-base leading-4 ">Maquinaria</p>
                    </button>



                </div>

                <div class="hover:bg-gray-500 pt-2 pb-2 rounded">
                    <button class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded ">
                        <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-base leading-4 ">Balance Masa</p>
                    </button>



                </div>

                <div class="hover:bg-gray-500 pt-2 pb-2 rounded">
                    <button class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400 rounded ">
                        <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-base leading-4 ">Bot Konetic</p>
                    </button>



                </div>
            </nav>
        </div>



        <div class="form-basic">
            <div class="form-title-row">
                <h1><%=DatosTarea.tituloAdmin%></h1>
            </div>

            <div class="divBusqueda" style="none">
                <jsp:include page="../Form/BusquedaTarea.jsp"></jsp:include>
                </div>

                <ul style="text-align: center;">
                    <div class="divTablaDatos" id="divTablaDatos" onload="actualizarTabla()">


                    </div>
                </ul>
            </div>

            <nav class="footer2b">
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

    </body>
</html>


<script>
// Burger menus
    document.addEventListener('DOMContentLoaded', function () {
        // open
        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function () {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        // close
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function () {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        if (backdrop.length) {
            for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function () {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    });
</script>
