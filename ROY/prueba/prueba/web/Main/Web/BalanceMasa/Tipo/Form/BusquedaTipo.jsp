<%-- 
    Document   : BusquedaTipo
    Created on : 15-dic-2016, 3:17:39
    Author     : OnAngel
--%>


<%@page import="Clases.BalanceMasa.Tipo.DatosTipo"%>

<form class="formbusqueda" action="BuscarTipo" name="frmBuscarTipo" 
      method="POST" enctype="multipart/form-data" id="frmBuscarTipo" style="height: 100%; width: 100%">



    <div id="tablaBusqueda">


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
                    <button class="buttonBuscar" type="submit" id="buttonBuscarTipo" title="Buscar"></button>                            
                    <!--Boton de limpiar busqueda-->                        
                    <!--Boton de nuevo-->   

                    <button class="buttonCrear" type="button" id="buttonCrearTipo" onclick="window.location.href = '../Frame/CrearTipo.jsp';" title="Crear"></button>                             

                </div>
            </div>
        </div>
    </div>
</form>


