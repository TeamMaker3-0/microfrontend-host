import React, { useState, lazy, Suspense, useEffect } from "react";

// @ts-ignore
const CourseInformation = lazy(() => import("MF_COURSES/CourseInformationView").catch(error => {
    console.error('Error al cargar el microfrontend Courses', error);
    // Proporciona un componente alternativo o manejo de errores
    return { default: () => <div> <h1> Error al cargar el componente, favor consultar con el administrador </h1> </div> };
    })
);


const CourseInformationView = () => {
    return (
        <div>
            <main>
                <div className="micomponentedos-div">
                    <Suspense fallback={<div>Cargando...</div>}>
                        <CourseInformation/>
                    </Suspense>
                </div>
            </main>
        </div>
    );
};

export default CourseInformationView;