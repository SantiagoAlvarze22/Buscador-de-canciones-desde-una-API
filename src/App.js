import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios'


function App() {

  //definir el state 
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const { artista, cancion } = busquedaLetra;

    const consultarApiLetra = async () => {
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado = await axios.get(url);

      setLetra(resultado.data.lyrics);
    }
    consultarApiLetra();
  }, [busquedaLetra])

  return (
    <Fragment>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
