
import { Barra, ContainerCabecalho } from './styled'

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

export default function Cabecalho() {
    
    const nag = useHistory();

    const logoff = () => {
        Cookies.remove('usuario-logado');
        nag.push('/'); 
    }
    
    return (
        <ContainerCabecalho>
            <img src="/assets/images/logo-monkchat.png" alt="" />
            <Barra />
            <div className="titulo"> MonkChat </div>
            <div onClick={logoff}> Sair </div>
        </ContainerCabecalho>
    )
}
