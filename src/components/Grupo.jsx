import React, { useState } from "react";
import Modal from "react-modal";
import {update, findAll, create} from "../db/db.js";
import {endopint} from "../db/endopint.js";

const Grupo = () => {
    const [nombre, setNombre] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [modalidad, setModalidad] = useState('');
    const [codigo, setCodigo] = useState('');
    const [docente, setDocente] = useState('');
    const [asignatura, setAsignatura] = useState('');
    const [programaAcademico, setProgramaAcademico] = useState('');
    const [uuid, setUuid] = useState('');

    const [modoEdicion, setModoEdicion] = useState(false);
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [grupos, setGrupos] = useState([]);
    const [asignaturas, setAsignaturas] = useState([]);
    const [programasAcademicos, setProgramasAcademicos] = useState([]);
    const [docentes, setDocentes] = useState([]);

    const guardarGrupo = async (e) => {
        e.preventDefault();
        const isSaved = await create(endopint.grupo, {
            nombre,
            periodoAcademico: periodo,
            codigo,
            uuidDocente: docente,
            uuidAsignatura: asignatura,
            uuidProgramaAcademico: programaAcademico,
            modalidad
        });
        if (isSaved) {
            alert("Grupo guardado correctamente");
            await getGrupos();

            setNombre('');
            setModalidad('');
            setPeriodo('');
            setCodigo('');
            setDocente('');
            setAsignatura('');
            setProgramaAcademico('');

            setModalIsOpen(false);
        }
    }


    const getGrupos = async () => {
        const data = await findAll(endopint.grupo);
        setGrupos(data);
        setLoading(false);
        await getProgramasAcademicos();
        await getAsignaturas();
        await getDocentes();

    }

    const getProgramasAcademicos = async () => {
        const data = await findAll(endopint.programaAcademico);
        setProgramasAcademicos(data || []);
    }

    const getAsignaturas = async () => {
        const data = await findAll(endopint.asignatura);
        setAsignaturas(data || []);
    }

    const getDocentes = async () => {
        const data = await findAll(endopint.docente);
        setDocentes(data || []);
    }

    const abrirModoEdicion = (nombre, modalidad, periodo, codigo, docente, asignatura, programaAcademico, uuid) => {
        setNombre(nombre);
        setModalidad(modalidad);
        setPeriodo(periodo);
        setCodigo(codigo);
        setDocente(docente);
        setAsignatura(asignatura);
        setProgramaAcademico(programaAcademico);
        setUuid(uuid);
        setModoEdicion(true);
        setModalIsOpen(true);
    }

    const cerrarModoEdicion = () => {
        setNombre('');
        setModalidad('');
        setPeriodo('');
        setCodigo('');
        setDocente('');
        setAsignatura('');
        setProgramaAcademico('');
        setModoEdicion(false);
        setModalIsOpen(false);
    }

    React.useEffect(() => {
        getGrupos();
    }, []);

    const editarGrupo = async (e) => {
        e.preventDefault();
        const isSaved = await update(endopint.grupo, {
            nombre,
            periodoAcademico: periodo,
            codigo,
            uuidDocente: docente,
            uuidAsignatura: asignatura,
            uuidProgramaAcademico: programaAcademico,
            modalidad,
        }, uuid);
        if (isSaved) {
            alert('Grupo editado correctamente');
            await getGrupos();
            setNombre('');
            setModalidad('');
            setPeriodo('');
            setCodigo('');
            setDocente('');
            setAsignatura('');
            setModalIsOpen(false);
            cerrarModoEdicion();
        }
    }

    return (
        <>
            <div className='relative z-10 flex-shrink-0 flex h-16 shadow items-center justify-center px-4 bg-white dark:bg-gray-800'>
                <div className="flex justify-center items-center h-screen">
                    <button  onClick={() => setModalIsOpen(true)} className="bg-gradient-to-r from-purple-800 to-purple-500 text-white rounded-lg py-6 px-6 shadow-md hover:shadow-lg">
                        <span className="mr-2">Agregar Grupo</span>
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
                            <h1 className="text-2xl font-semibold text-gray-900">{modoEdicion ? 'Editar' : 'Agregar'} Grupo</h1>
                            <form className="flex flex-col w-full mt-6" onSubmit={modoEdicion ? editarGrupo : guardarGrupo}>
                                <label className="text-gray-700 text-sm font-bold mb-2">Nombre</label>
                                <input className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                                <label className="text-gray-700 text-sm font-bold mb-2 mt-4">Modalidad</label>
                                <input className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" type="text" name="modalidad" placeholder="Modalidad" value={modalidad} onChange={(e) => setModalidad(e.target.value)} />

                                <label className="text-gray-700 text-sm font-bold mb-2 mt-4">Periodo</label>
                                <input className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" type="text" name="periodo" placeholder="Periodo" value={periodo} onChange={(e) => setPeriodo(e.target.value)} />

                                <label className="text-gray-700 text-sm font-bold mb-2 mt-4">Código</label>
                                <input className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" type="text" name="codigo" placeholder="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} />

                                <label className="text-gray-700 text-sm font-bold mb-2 mt-4">Docente</label>
                                <select className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" name="docente" value={docente} onChange={(e) => setDocente(e.target.value)}>
                                    <option value="">Seleccione un docente</option>
                                    {docentes.map((docente) => (
                                        <option key={docente.uuid} value={docente.uuid}>{`${docente.nombre} ${docente.apellido}`}</option>
                                    ))}
                                </select>

                                <label className="text-gray-700 text-sm font-bold mb-2 mt-4">Asignatura</label>
                                <select className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" name="asignatura" value={asignatura} onChange={(e) => setAsignatura(e.target.value)}>
                                    <option value="">Seleccione una asignatura</option>
                                    {asignaturas.map((asignatura) => (
                                        <option key={asignatura.uuid} value={asignatura.uuid}>{asignatura.nombre}</option>
                                    ))}
                                </select>

                                <label className="text-gray-700 text-sm font-bold mb-2 mt-4">Programa Académico</label>
                                <select className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-purple-500" name="programaAcademico" value={programaAcademico} onChange={(e) => setProgramaAcademico(e.target.value)}>
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
                    <h1 className="text-2xl font-semibold text-white">Grupos</h1>
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
                                    Modalidad
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Periodo
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Docente
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Asignatura
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Programa Académico
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
                                grupos.map((grupo) => (
                                    <tr key={grupo.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {grupo.codigo}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {grupo.nombre}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {grupo.modalidad}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {grupo.periodoAcademico}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {`${grupo.docente.nombre} ${grupo.docente.apellido}`}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {grupo.asignatura.nombre}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {grupo.programaAcademico.nombre}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <button
                                                onClick={(e) => abrirModoEdicion(
                                                    grupo.nombre,
                                                    grupo.modalidad,
                                                    grupo.periodoAcademico,
                                                    grupo.codigo,
                                                    grupo.docente.uuid,
                                                    grupo.asignatura.uuid,
                                                    grupo.programaAcademico.uuid,
                                                    grupo.uuid
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

export {Grupo};
