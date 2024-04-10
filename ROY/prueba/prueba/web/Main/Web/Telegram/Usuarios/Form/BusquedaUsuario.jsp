<%-- 
    Document   : BusquedaUsuario
    Created on : 15-dic-2016, 3:17:39
    Author     : OnAngel
--%>


<%@page import="java.sql.ResultSet"%>
<%@page import="Clases.Telegram.Usuario.DatosUsuario"%>

<form class="formbusqueda" action="BuscarUsuario" name="frmBuscarUsuario" 
      method="POST" enctype="multipart/form-data" id="frmBuscarUsuario" style="height: 100%; width: 100%">



    <div id="tablaBusqueda">


        <div class="formfila">
            <label>
                <span>ID Telegram</span>
                <input type="search" name="telegram" id="telegram" style="width: 300px">
            </label>
        </div>



        <div class="formfila">
            <label>
                <span>Nombre</span>
                <input type="search" name="nombre" id="nombre" style="width: 300px">
            </label>
        </div>






        <div class="divBotonesBusqueda">
            <!--Boton-->
            <div class="formbotonesbuscar">
                <div class="formfila" style="width: 120px; height: 32px">        
                    <!--Boton de busqueda-->                        
                    <button class="buttonBuscar" type="submit" id="buttonBuscarUsuario" title="Buscar"></button>                            
                    <!--Boton de limpiar busqueda-->                        
                    <!--Boton de nuevo-->   

                    <button class="buttonCrear" type="button" id="buttonCrearUsuario" onclick="window.location.href = '../Frame/CrearUsuario.jsp';" title="Crear"></button>                             

                </div>
            </div>
        </div>
    </div>
</form>


