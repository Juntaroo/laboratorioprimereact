import React from 'react';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import ButtonSend from '../../components/ButtonSend/ButtonSend';
import './Registro.css'

const RegistroPage = () => {
  return (
    <div>
      <form action="/submit" method="post" id="formulario">
            <h1>Inicie sesión</h1>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ej. Pablo, Santiago" />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Ej. pablo@gmail.com" />
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" />
            <label for="rol">Rol</label>
            <select id="rol" name="rol">
                <option value="">Seleccione un rol</option>
                <option value="admin">Admin</option>
                <option value="informatica">Informatica</option>
                <option value="secretaria">Secretaria</option>
                <option value="transporte">Transporte</option>
                <option value="recursos">Recursos Humanos</option>
            </select>
            <ButtonSend />
            <ButtonHome />
        </form>
    </div>
  );
};

export default RegistroPage;