<%-- 
    Document   : CrearRegistro
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<!--<%//@page import="java.util.ArrayList"%>-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>



<div class="form-basic flex min-h-full flex-col justify-center px-1 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-20 w-auto" src="https://konetic.es/wp-content/uploads/2022/09/konetic-logo-positivo-bicolor@3x.png" alt="Your Company">
        <h2 class="bg-green-300 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Crear usuario</h2>
    </div>

    <div class="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6  " action="CrearUsuarioRegistro" name="frmNuevoRegistro2" method="POST" 
              enctype="multipart/form-data" id="frmNuevoRegistro2">
            <div class="pruebaVerde">
            </div>

            <div>
                <label for="Nombre" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                <div class="mt-2">
                    <input id="nombre" name="nombre" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>

                </div>
                <div class="mt-2">
                    <input id="password" name="password" type="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="flex">
                <div >
                    <button type="submit" id="btnCrearRegistro" class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Crear cuenta</button>
                </div>
                <div class="ml-2">
                    <button type="submit" id="btnCancelarRegistro" class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancelar</button>
                </div>
            </div>

        </form>


    </div>
</div>