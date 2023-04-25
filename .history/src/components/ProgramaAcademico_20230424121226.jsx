import React, { useState } from "react";
import Modal from "react-modal";

const ProgramaAcademico = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
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
    )
}

export {ProgramaAcademico};