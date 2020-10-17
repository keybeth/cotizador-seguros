import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Spinner from './components/Spinner';
import Hideable from './components/Hideable';


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;  
`;
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {    
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    }, 3000);
  }, [resumen]);
  return (
    <Contenedor>
      <Header 
        titulo='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario 
          setResumen={setResumen}
        />
        <Hideable hide={!loading}>  
          <Spinner/>
        </Hideable>
        <Hideable hide={loading}>
          <Resumen 
            resumen={resumen}
          />
        </Hideable>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
