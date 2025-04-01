import React, { useState, lazy, Suspense, useEffect } from "react";

// @ts-ignore
const Register = lazy(() => import("MF_LOGIN/RegisterForm").catch(error => {
    console.error('Error al cargar el microfrontend Register', error);
    // Proporciona un componente alternativo o manejo de errores
    return { default: () => <div> <h1> Error al cargar el componente, favor consultar con el administrador </h1> </div> };
    })
);


const RegisterView = () => {
    return (
        <div>
            <main>
                <div className="micomponentedos-div">
                    <Suspense fallback={<div>Cargando...</div>}>
                        <Register/>
                    </Suspense>
                </div>
            </main>
        </div>
    );
};

export default RegisterView;