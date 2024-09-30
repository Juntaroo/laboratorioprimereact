import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const ButtonSend = () => {
    const navigate = useNavigate();
    return (
        <Button label="Enviar" icon="pi pi-check" onClick={() => navigate('/checked')}></Button>
    );
};

export default ButtonSend;