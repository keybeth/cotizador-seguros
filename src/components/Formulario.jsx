import React, { useState } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import { getCotizacion } from '../helper';
import Hideable from './Hideable';
import PropTypes from 'prop-types';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

 const Select = styled.select`
   width: 100%;
   display: block;
   padding: 1rem;
   border: 1px solid #E1E1E1;
   -webkit-appearance: none;
 `;

 const InputRadio = styled.input`
   margin: 0 1rem;
 `;
 
 const Button = styled.button`
   background-color: #00838F;
   font-size: 16px;
   width: 100%;
   padding: 1rem;
   color: #FFF;
   text-transform: uppercase;
   border: none;
   font-weight: bold;
   margin-top: 2rem;

   &:hover {
    cursor: pointer;
    background-color: #26C6DA;
   }
 `;
 
 

const Formulario = ({setResumen}) => {
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [error, setError] = useState(false);

    const {marca, year, plan} = datos;

    const handleChange = e => setDatos({
        ...datos,
        [e.target.name]: e.target.value
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        const cotizacion = getCotizacion(marca, year, plan);
        setResumen({
            datos,
            cotizacion
        });
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <Hideable hide={!error}>        
                <Error mensaje="Todos los campos son obligatorios"/>
            </Hideable>
            <Field>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={handleChange}
                >                    
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={handleChange}
                >                    
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio" 
                    name="plan" 
                    value="basico" 
                    checked={plan === 'basico'} 
                    onChange={handleChange}/>Basico
                <InputRadio 
                    type="radio" 
                    name="plan" 
                    value="completo" 
                    checked={plan === 'completo'}
                    onChange={handleChange} />Completo
            </Field>
            <Button type="submit">Cotizar</Button>
        </form>
    );
}

Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired
}
 
export default Formulario;