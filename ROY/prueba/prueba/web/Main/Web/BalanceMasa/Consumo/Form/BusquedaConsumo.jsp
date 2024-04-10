<%-- 
    Document   : BusquedaConsumo
    Created on : 15-dic-2016, 3:17:39
    Author     : OnAngel
--%>


<%@page import="java.sql.ResultSet"%>
<%@page import="Clases.BalanceMasa.Consumo.DatosConsumo"%>

<form class="formbusqueda" action="BuscarConsumo" name="frmBuscarConsumo" 
      method="POST" enctype="multipart/form-data" id="frmBuscarConsumo" style="height: 100%; width: 100%">

    <div id="tablaBusqueda">

        <div class="formfila">
            <label>
                <span>Buscar cantidad</span>
                <input type="search" name="cantidad" id="cantidad" style="width: 300px">
            </label>
        </div>

        <div class="formfila">
            <label>
                <span>Buscar lot</span>
                <input type="search" name="lot" id="lot" style="width: 300px">
            </label>
        </div>

        <div class="formfila">
            <label>
                <span>Buscar material</span>
                <input type="search" name="material" id="material" style="width: 300px">
            </label>
        </div>

        <div class="formfila">
            <label>
                <span>Orden trabajo</span>
                <input type="search" name="orden" id="orden" style="width: 300px">
            </label>
        </div>

        <div class="divBotonesBusqueda">
            <!--Boton-->
            <div class="formbotonesbuscar">
                <div class="formfila" style="width: 120px; height: 32px">        
                    <!--Boton de busqueda-->                        
                    <button class="buttonBuscar" type="submit" id="buttonBuscarConsumo" title="Buscar"></button>                            
                    <!--Boton de limpiar busqueda-->                        
                    <!--Boton de nuevo-->   

                    <button class="buttonCrear" type="button" id="buttonCrearConsumo" onclick="window.location.href = '../Frame/CrearConsumo.jsp';" title="Crear"></button>                             

                </div>
            </div>
        </div>
    </div>
</form>  