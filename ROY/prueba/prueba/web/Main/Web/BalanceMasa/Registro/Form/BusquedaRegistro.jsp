<%-- 
    Document   : BusquedaRegistro
    Created on : 15-dic-2016, 3:17:39
    Author     : OnAngel
--%>


<%@page import="java.sql.ResultSet"%>
<%@page import="Clases.BalanceMasa.Registro.DatosRegistro"%>

<form class="formbusqueda" action="BuscarRegistro" name="frmBuscarRegistro" 
      method="POST" enctype="multipart/form-data" id="frmBuscarRegistro" style="height: 100%; width: 100%">



    <div id="tablaBusqueda">


        <div class="formfila">
            <label>
                <span>Nombre</span>
                <input type="search" name="nombre" id="nombre" style="width: 300px">
            </label>
        </div>

        <%

            ResultSet rs2 = Clases.BalanceMasa.Registro.ModeloRegistros.obtenerUbi();
            ResultSet rs3 = Clases.BalanceMasa.Registro.ModeloRegistros.obtenerUbi();


        %>


        <div class="formfila">
            <label>                            
                <span>Tipo</span>
                <input type="search" name="tipoid" id="tipoid" style="width: 300px">
            </label>
        </div>
        
        
         <div class="formfila">
            <label>                            
                <span>Origen</span>
                <input type="search" name="ubiorigen" id="ubiorigen" style="width: 300px">
            </label>
        </div>
        
        
        <div class="formfila">
            <label>                            
                <span>Destino</span>
                <input type="search" name="ubidestino" id="ubidestino" style="width: 300px">
            </label>
        </div>




        <div class="divBotonesBusqueda">
            <!--Boton-->
            <div class="formbotonesbuscar">
                <div class="formfila" style="width: 120px; height: 32px">        
                    <!--Boton de busqueda-->                        
                    <button class="buttonBuscar" type="submit" id="buttonBuscarRegistro" title="Buscar"></button>                            
                    <!--Boton de limpiar busqueda-->                        
                    <!--Boton de nuevo-->   

                    <button class="buttonCrear" type="button" id="buttonCrearRegistro" onclick="window.location.href = '../Frame/CrearRegistro.jsp';" title="Crear"></button>                             

                </div>
            </div>
        </div>
    </div>
</form>


