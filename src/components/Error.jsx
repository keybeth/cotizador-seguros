import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorError = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;


const Error = ({mensaje}) => ( 
    <ContenedorError>{mensaje}</ContenedorError>
);

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
};
 
export default Error;