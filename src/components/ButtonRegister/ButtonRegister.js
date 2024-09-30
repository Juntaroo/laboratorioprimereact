import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const ButtonRegister = () => {
    const navigate = useNavigate();
    return (
        <Button label="Registrarse" icon="pi pi-send" onClick={() => navigate('/registro')}></Button>
    );
};

export default ButtonRegister;