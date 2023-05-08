import React from 'react'
import Cabecalho from './Cabecalho'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Pagina = (props) => {

    return (
        <>
            <Cabecalho partidos={props.partidos}/>
            <div className='bg-secondary text-align py-3 mb-3 text-center text-white'>
                <h1> {props.titulo} </h1>
            </div>

            <Container>
                  {props.children}
            </Container>
          

            
        </>
    )
}

export default Pagina