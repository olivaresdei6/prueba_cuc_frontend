import React, { useState } from "react";
import Modal from "react-modal";
import {update, findAll, create} from "../db/db.js";
import {endopint} from "../db/endopint.js";
import {InscribirEstudiantes} from "./InscribirEstudiantes.jsx";

const Calificacion = () => {
    const [incribirCurso, setIncribirCurso] = useState(false);
    return (
        <>
            <div className='relative z-10 flex-shrink-0 flex h-16 shadow items-center justify-center px-4 bg-white dark:bg-gray-800'>
                <button  onClick={() => setModalIsOpen(true)} className="bg-gradient-to-r from-purple-800 to-purple-500 text-white rounded-lg py-4 px-6 shadow-md hover:shadow-lg mr-8">
                    <span className="mr-2">Ver Calificaciones</span>
                </button>

                {/* Cada boton utiliza un color diferente */}
                <button  onClick={() => setModalIsOpen(true)} className="text-white rounded-lg py-4 px-6 shadow-md hover:shadow-lg mr-8 bg-blue-500">
                    <span className="mr-2">Ver las calificaciones de un curso</span>
                </button>

                <button  onClick={() => setModalIsOpen(true)} className="text-white rounded-lg py-4 px-6 shadow-md hover:shadow-lg mr-8 bg-green-900">
                    <span className="mr-2">Ver las calificaciones de un estudiante</span>
                </button>

                <button  onClick={() => setIncribirCurso(true)} className="text-white rounded-lg py-4 px-6 shadow-md hover:shadow-lg mr-8 bg-yellow-900">
                    <span className="mr-2">Inscribir a un curso</span>
                </button>
            </div>

            <div className="py-6">
                    { incribirCurso && <InscribirEstudiantes /> }
            </div>
        </>
        
    )
}

export {Calificacion};
