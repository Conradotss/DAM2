<%-- 
    Document   : BusquedaBot
    Created on : 15-dic-2016, 3:17:39
    Author     : OnAngel
--%>


<%@page import="java.sql.ResultSet"%>
<%@page import="Clases.Telegram.Bot.DatosBot"%>

<form class="formbusqueda" action="BuscarBot" name="frmBuscarBot" 
      method="POST" enctype="multipart/form-data" id="frmBuscarBot" style="height: 100%; width: 100%">



    <div id="tablaBusqueda">


        <div class="formfila">
            <label>
                <span>Token</span>
                <input type="search" name="token" id="token" style="width: 300px">
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
                    <button class="buttonBuscar" type="submit" id="buttonBuscarBot" title="Buscar"></button>                            
                    <!--Boton de limpiar busqueda-->                        
                    <!--Boton de nuevo-->   

                    <button class="buttonCrear" type="button" id="buttonCrearBot" onclick="window.location.href = '../Frame/CrearBot.jsp';" title="Crear"></button>                             

                </div>
            </div>
        </div>
    </div>
</form>


