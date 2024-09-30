import React from 'react';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
import ButtonRegister from '../../components/ButtonRegister/ButtonRegister';

const HomePage = () => {
  return (
    <div className='container'>
        <h2>Bienvenido a nuestra página</h2>
        <p>En este sitio puede loguearse para poder acceder a tus incidencias</p>
        <ButtonLogin />
        <ButtonRegister />
    </div>
  );
};

export default HomePage;