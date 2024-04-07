package ExamenAD.ExamenADRoy.dominio;

public class Informe {

    private final Tecnico tecnico;
    private final int numDias;

    public Informe(Tecnico tecnico, int diasComoEntrenadorPrincipal) {
        this.tecnico = tecnico;
        this.numDias = diasComoEntrenadorPrincipal;
    }

    public Tecnico getTecnico() {
        return tecnico;
    }

    public int getDiasComoEntrenadorPrincipal() {
        return numDias;
    }
}
