import {of} from 'rxjs';
import ConstantesDatosPrueba from '../ConstantesMockito';



export class HeaderServiceStub{

    empresa = ConstantesDatosPrueba.ResponseWrapperListaEmpresas;
    ano = ConstantesDatosPrueba.ResponseWrapperListaAĆ±oEmpresa2;
    mes = ConstantesDatosPrueba.ResponseWrapperListaMeses;

    listarEmpresa(){
        return of(this.empresa);
    }

    listarAno(){
        return of(this.ano)
    }

    listarMeses(){
        return of(this.mes)
    }

}