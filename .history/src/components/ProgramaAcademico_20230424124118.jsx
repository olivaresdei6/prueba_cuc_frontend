import React, { useState } from "react";
import Modal from "react-modal";

const ProgramaAcademico = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    
    return (
        <>
            <div className='relative z-10 flex-shrink-0 flex h-16 shadow items-center justify-center px-4 bg-white dark:bg-gray-800'>
                <div className="flex justify-center items-center h-screen">
                    <button  onClick={() => setModalIsOpen(true)} className="bg-gradient-to-r from-purple-800 to-purple-500 text-white rounded-lg py-6 px-6 shadow-md hover:shadow-lg">
                        <span className="mr-2">Agregar Programa Academico</span>
                        <i className="fas fa-plus ml-2"></i>
                    </button>
                    { /* Se muestra el modal para agregar un programa académico */ }
                    { modalIsOpen &&
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            contentLabel="Agregar nuevo elemento"
                            style={{
                                overlay: {
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                },
                                content: {
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "400px",
                                    height: "650px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                },
                            }}
                        >
                            <h1 className="text-2xl font-semibold text-gray-900">Agregar programa académico</h1>
                            <form className="flex flex-col w-full mt-6">
                                <label className="text-gray-700 text-sm font-bold mb-2">Nombre</label>
                                <input className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" type="text" />
                                <button className="bg-gradient-to-r from-purple-800 to-purple-500 text-white rounded-lg py-2 px-4 shadow-md hover:shadow-lg mt-4">Agregar</button>
                            </form>
                        </Modal>
                    }

                    {/* Si se presiona el botón de agregar programa académico, se muestra el modal */}

                </div>
            </div>
            <div className="py-6">
            { /* Se muestra la tabla de programas académicos */ }
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Programas académicos</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="py-4">
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nombre
                                </td>
                                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Código
                                </td>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        { /* Se muestra el nombre del programa académico */ }
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                Ingeniería de Sistemas
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">IS</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        { /* Se muestra el nombre del programa académico */ }
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                Ingeniería de Software
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">ISW</div>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export {ProgramaAcademico};
