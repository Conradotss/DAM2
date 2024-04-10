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
%>
<html>
    <head>
        <link rel="stylesheet" href="dist/output.css" type="text/css"/>
        <script src="node_modules/flowbite/dist/flowbite.min.js"></script>

        <title>Inicio</title>


    </head>
    <body class="bg-gray-200">




        <div class="mt-20 lg:ml-64 lg:mr-64  flex justify-center p-20 rounded-3xl">


            <div class="flex registrar flex-nowrap">


                <button class="hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 hover:text-white duration-300 pl-3 pr-3 flex bg-blue-300 rounded-lg font-bold border-2 border-gray-500 flex-wrap">
                    <a class="leading-10 text-dark" href="register/frame/Registro.jsp">
                        REGISTER
                    </a>
                </button>

            </div>



                <button class="ml-10 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 hover:text-gray-200 duration-300 pl-3 pr-3 flex bg-green-300 rounded-lg font-bold border-2 border-gray-500 flex-wrap">
                <a class="leading-10 pb-3" href="login/frame/Login.jsp">
                    LOGIN
                </a> 
            </button>


        </div>

        <div class="mt-20 lg:ml-20 lg:mr-20  flex justify-center p-10 ">

            <img class="w-96" src="https://konetic.es/wp-content/uploads/2022/09/konetic-logo-positivo-bicolor@3x.png">


        </div>

    </body>
</html>
