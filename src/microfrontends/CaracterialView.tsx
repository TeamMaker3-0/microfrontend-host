import React, { useState, lazy, Suspense, useEffect } from "react";

// @ts-ignore
const Caracterial = lazy(() => import("MF_SURVEYS/CaracterialView").catch(error => {
    console.error('Error al cargar el microfrontend Surveys', error);
    // Proporciona un componente alternativo o manejo de errores
    return { default: () => <div> <h1> Error al cargar el componente, favor consultar con el administrador </h1> </div> };
    })
);


const CaracterialView = () => {
    return (
        <div>
            <main>
                <div className="micomponentedos-div">
                    <Suspense fallback={<div>Cargando...</div>}>
                        <Caracterial/>
                    </Suspense>
                </div>
            </main>
        </div>
    );
};

export default CaracterialView;