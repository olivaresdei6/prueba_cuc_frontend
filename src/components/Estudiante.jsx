import React, { useState } from "react";
import Modal from "react-modal";
import {update, findAll, create} from "../db/db.js";
import {endopint} from "../db/endopint.js";

const Estudiante = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [correo, setCorreo] = useState('');
    const [programaAcademico, setProgramaAcademico] = useState('');
    const [uuid, setUuid] = useState('');

    const [modoEdicion, setModoEdicion] = useState(false);
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [estudiantes, setEstudiantes] = useState([]);
    const [programasAcademicos, setProgramasAcademicos] = useState([]);

    const guardarEstudiante = async (e) => {
        e.preventDefault();
        const isSaved = await create(endopint.estudiante, {
            nombre,
            apellido,
            tipoDocumento,
            numeroDocumento,
            correo,
            uuidProgramaAcademico: programaAcademico
        });
        if (isSaved) {
            alert("Estudiante guardado correctamente");
            await getEstudiantes();
            setNombre('');
            setModalIsOpen(false);
        }
    }


    const getEstudiantes = async () => {
        const data = await findAll(endopint.estudiante);
        setEstudiantes(data);
        setLoading(false);
        await getProgramasAcademicos();
    }

    const getProgramasAcademicos = async () => {
        const data = await findAll(endopint.programaAcademico);
        setProgramasAcademicos(data || []);
    }

    const abrirModoEdicion = (nombre, uuid, programaAcademico, apellido, tipoDocumento, numeroDocumento, correo) => {
        setNombre(nombre);
        setApellido(apellido);
        setTipoDocumento(tipoDocumento);
        setNumeroDocumento(numeroDocumento);
        setCorreo(correo);
        setUuid(uuid);
        setProgramaAcademico(programaAcademico)
        setModoEdicion(true);
        setModalIsOpen(true);
    }

    const cerrarModoEdicion = () => {
        setNombre('');
        setUuid('');
        setProgramaAcademico('');
        setNumeroDocumento('');
        setTipoDocumento('');
        setApellido('');
        setCorreo('');

        setModoEdicion(false);
        setModalIsOpen(false);
    }

    React.useEffect(() => {
        getEstudiantes();
    }, []);

    const editarEstudiante = async (e) => {
        e.preventDefault();
        const isSaved = await update(endopint.docente, {
            nombre,
            apellido,
            tipoDocumento,
            numeroDocumento,
            correo,
            uuidProgramaAcademico: programaAcademico
        }, uuid);
        if (isSaved) {
            alert('Estudiante editado correctamente');
            await getEstudiantes();
            setNombre('');
            setApellido('');
            setTipoDocumento('');
            setNumeroDocumento('');
            setCorreo('');
            setUuid('');
            setModalIsOpen(false);
            cerrarModoEdicion();
        }
    }


    return (
        <>
            <div className='relative z-10 flex-shrink-0 flex h-16 shadow items-center justify-center px-4 bg-white dark:bg-gray-800'>
                <div className="flex justify-center items-center h-screen">
                    <button  onClick={() => setModalIsOpen(true)} className="bg-gradient-to-r from-purple-800 to-purple-500 text-white rounded-lg py-6 px-6 shadow-md hover:shadow-lg">
                        <span className="mr-2">Agregar Estudiante</span>
                        <i className="fas fa-plus ml-2"></i>
                    </button>

                    { modalIsOpen &&
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => {
                                setModalIsOpen(false)
                                cerrarModoEdicion();
                            }}
                            contentLabel="Agregar nuevo elemento"
                            style={{
                                overlay: {
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                },
                                content: {
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "500px",
                                    height: "850px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                },
                            }}
                        >
                            <h1 className="text-2xl font-semibold text-gray-900">{modoEdicion ? 'Editar' : 'Agregar'} Estudiante</h1>
                            <form className="flex flex-col w-full mt-6" onSubmit={modoEdicion ? editarEstudiante : guardarEstudiante}>
                                <label className="text-gray-700 text-sm font-bold mb-2">Nombre</label>
                                <input className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                                <label className="text-gray-700 text-sm font-bold mb-2 mt-5">Apellido</label>
                                <input className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" type="text" name="apellido" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                                <label className="text-gray-700 text-sm font-bold mb-2 mt-5">Tipo de documento</label>
                                <select className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" name="tipoDocumento" id="tipoDocumento" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
                                    <option value="">Seleccione una opción</option>
                                    <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                                    <option value="Cédula de extranjería">Cédula de extranjería</option>
                                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                    <option value="Registro civil">Registro civil</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                </select>

                                <label className="text-gray-700 text-sm font-bold mb-2 mt-5">Número de documento</label>
                                <input className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" type="text" name="numeroDocumento" placeholder="Número de documento" value={numeroDocumento} onChange={(e) => setNumeroDocumento(e.target.value)} />

                                <label className="text-gray-700 text-sm font-bold mb-2 mt-5">Correo</label>
                                <input className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" type="email" name="correo" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />


                                <label className="text-gray-700 text-sm font-bold mb-2 mt-5">Programa académico</label>
                                <select className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" name="programaAcademico" id="programaAcademico" value={programaAcademico} onChange={(e) => setProgramaAcademico(e.target.value)}>
                                    <option value="">Seleccione un programa académico</option>
                                    {programasAcademicos.map((programaAcademico) => (
                                        <option key={programaAcademico.uuid} value={programaAcademico.uuid}>{programaAcademico.nombre}</option>
                                    ))}
                                </select>
                                <button className="bg-gradient-to-r from-purple-800 to-purple-500 text-white rounded-lg py-2 px-4 shadow-md hover:shadow-lg mt-4">
                                    {modoEdicion ? 'Editar' : 'Agregar'}
                                </button>
                            </form>

                        </Modal>
                    }

                </div>
            </div>
            <div className="py-6">
            { /* Se muestra la tabla de programas académicos */ }
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-white">Estudiantes</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="py-4">
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Código
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nombre
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Apelllido
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tipo de documento
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Número de documento
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Correo
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Programa académico
                                </th>

                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Editar</span>
                                </th>

                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {loading ? (
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Cargando...
                                    </td>
                                </tr>
                            ) : (
                                estudiantes.map((estudiante) => (
                                    <tr key={estudiante.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {estudiante.uuid}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {estudiante.nombre}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {estudiante.apellido}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {estudiante.tipoDocumento}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {estudiante.numeroDocumento}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {estudiante.correo}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {estudiante.programaAcademico.nombre}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <button
                                                onClick={(e) => abrirModoEdicion(
                                                    estudiante.nombre, estudiante.uuid, estudiante.programaAcademico.uuid, estudiante.apellido,
                                                    estudiante.tipoDocumento, estudiante.numeroDocumento, estudiante.correo
                                                )}
                                                className="bg-gradient-to-r from-purple-800 to-purple-500 text-white rounded-lg py-2 px-4 shadow-md hover:shadow-lg mt-4"
                                            >
                                                <i className="fas fa-edit"></i>
                                                <span className="ml-2">Editar</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export {Estudiante};
