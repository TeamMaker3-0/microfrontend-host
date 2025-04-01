import React, { useState, lazy, Suspense, useEffect } from "react";

// @ts-ignore
const Profile = lazy(() => import("MF_USERS/ProfileView").catch(error => {
    console.error('Error al cargar el microfrontend USER', error);
    // Proporciona un componente alternativo o manejo de errores
    return { default: () => <div> <h1> Error al cargar el componente, favor consultar con el administrador </h1> </div> };
    })
);


const ProfileView = () => {
    return (
        <div>
            <main>
                <div className="micomponentedos-div">
                    <Suspense fallback={<div>Cargando...</div>}>
                        <Profile/>
                    </Suspense>
                </div>
            </main>
        </div>
    );
};

export default ProfileView;