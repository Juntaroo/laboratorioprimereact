import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const ButtonLogin = () => {
    const navigate = useNavigate();
    return (
        <Button label="Loguearse" icon="pi pi-search" onClick={() => navigate('/login')}></Button>
    );
};

export default ButtonLogin;