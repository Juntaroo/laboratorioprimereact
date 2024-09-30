import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const ButtonHomeChecked = () => {
    const navigate = useNavigate();
    return (
        <Button label="Ir a Home" icon="pi pi-user" onClick={() => navigate('/')}></Button>
    );
};

export default ButtonHomeChecked;