<%-- 
    Document   : Consumos
    Created on : 26-nov-2016, 17:57:32
    Author     : Angel
--%>

<%@page import="Clases.BalanceMasa.Consumo.DatosConsumo"%>
<%@page import="Clases.Recursos.DatosAplicacion"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html>
    <head>

        <title>Seleccionar materiales</title>        
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/BusquedaConsumo3.js"></script> 
        <script type="text/javascript" src="../js/BusquedaConsumo2.js"></script> 
        <script type="text/javascript" src="../js/AdminConsumo2.js"></script> 
        <link rel="stylesheet" href="../../../../../dist/output.css" type="text/css"/>

    </head>
    <body class="bg-white" >

          
        
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
        

            <div class="form-basic">
                <div class="form-title-row">
                    <h1>Seleccionar materiales</h1>
                </div>



                <ul style="text-align: center;">
                    <div class="divTablaDatos" id="divTablaDatos" onload="actualizarTabla()">


                    </div>
                </ul>
                <div class="divBusqueda">
                <jsp:include page="../Form/SeleccionarConsumo.jsp"></jsp:include>
                </div>
            </div>
          

                
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
                
                

    </body>
</html>



