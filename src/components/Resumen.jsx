import React, { useRef } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import styled from '@emotion/styled';
import { capitalize } from '../helper';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const ContenedorMensaje = styled.div`
    padding: .5rem;
    text-align: center;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    position: relative;
    margin-top: 1rem;
`;

const Mensaje = styled.p`
    padding: 1rem;
    color: #00838F;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;


const Resumen = ({resumen}) => {
    const {datos, cotizacion} = resumen;
    const refMensaje = useRef(null);

    if(!datos) {
        return null;
    }

    const {marca, year, plan} = datos;

    return (
        <Fragment>
            <ContenedorResumen>
                <h2>Resumen de Cotizacion</h2>
                <ul>
                    <li>Marca: {capitalize(marca)}</li>
                    <li>Plan: {capitalize(plan)}</li>
                    <li>Año del Auto: {year}</li>
                </ul>
            </ContenedorResumen>
            <ContenedorMensaje>
                <TransitionGroup
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={500}
                        nodeRef={refMensaje}
                    >   
                        <Mensaje ref={refMensaje}>
                            El total es: $ {parseFloat(cotizacion).toFixed(2)}
                        </Mensaje>
                    </CSSTransition>
                </TransitionGroup>
            </ContenedorMensaje>
        </Fragment>
     );
}

Resumen.propTypes = {
    resumen: PropTypes.object.isRequired
}
 
export default Resumen;