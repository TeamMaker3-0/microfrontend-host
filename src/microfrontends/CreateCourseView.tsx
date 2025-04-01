import React, { useState, lazy, Suspense, useEffect } from "react";

//ESTE NO SE USA OJITO CUIDAO
// @ts-ignore
const CreateCourse = lazy(() => import("MF_COURSES/CreateCourseView").catch(error => {
    console.error('Error al cargar el microfrontend Home', error);
    // Proporciona un componente alternativo o manejo de errores
    return { default: () => <div> <h1> Error al cargar el componente, favor consultar con el administrador </h1> </div> };
    })
);


const CreateCourseView = () => {
    return (
        <div>
            <main>
                <div className="micomponentedos-div">
                    <Suspense fallback={<div>Cargando...</div>}>
                        <CreateCourse/>
                    </Suspense>
                </div>
            </main>
        </div>
    );
};

export default CreateCourseView;