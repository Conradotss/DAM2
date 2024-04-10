<%-- 
    Document   : BusquedaTarea
    Created on : 15-dic-2016, 3:17:39
    Author     : OnAngel
--%>


<%@page import="Clases.Maquinaria.Tarea.DatosTarea"%>

<form class="formbusqueda" action="BuscarTarea" name="frmBuscarTarea" 
      method="POST" enctype="multipart/form-data" id="frmBuscarTarea" style="height: 100%; width: 100%">

    <div id="flex">

        <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5  text-gray-600 leading-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>             
            <input style="outline:none; border:none" class="flex items-start ml-2 outline-none border-none bg-transparent focus:ring-0 border-0 text-black border-gray-700 focus:border-0 " type="text" name="nombre" id="nombre" placeholder="Escribir nombre a buscar..."/>

        </div>
        
        
        

        <div class="flex justify-center mt-5">
            <label>                            
                <span class="leading-10">Tipo</span>
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

        <div class="flex justify-center mt-5">
            <!--Boton-->
            <div class="   ">
                <div class="formfila" style="width: 120px; height: 32px">        
                    <!--Boton de busqueda-->                        
                    <button class="buttonBuscar" type="submit" id="buttonBuscarTarea" onclick="buscarTareas()" title="Buscar"></button>                            
                    <!--Boton de limpiar busqueda-->                        
                    <!--Boton de nuevo-->   

                    <button class="buttonCrear" type="button" id="buttonCrearTarea" onclick="window.location.href = '../Frame/CrearTarea.jsp';" title="Crear"></button>                             

                </div>
            </div>
        </div>
    </div>
</form>