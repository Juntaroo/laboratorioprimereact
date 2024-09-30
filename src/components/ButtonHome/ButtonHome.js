import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const ButtonHome = () => {
    const navigate = useNavigate();
    return (
        <Button label="Ir a Home" icon="pi pi-arrow-left" onClick={() => navigate('/')}></Button>
    );
};

export default ButtonHome;