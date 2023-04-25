import { useState } from "react";
import {findAll, findBy, findOne} from "../db/db.js";
import {endopint} from "../db/endopint.js";
import {useEffect} from "react";

export function InscribirEstudiantes() {
    const [selected, setSelected] = useState([]);
    const [programa, setPrograma] = useState(null);
    const [asignatura, setAsignatura] = useState(null);
    const [grupo, setGrupo] = useState(null);
    const [estudiantes, setEstudiantes] = useState([]);

    const [programasAcademicos, setProgramasAcademicos] = useState([]);

    const getEstudiantes = async () => {
        const data = await findAll(endopint.estudiante);
        setEstudiantes(data);
    }

    const getProgramasAcademicos = async () => {
        const data = await findAll(endopint.programaAcademico);
        setProgramasAcademicos(data);
    }

    const getAsignaturas = async () => {
        const data = await findBy(endopint.programaAcademicoAsignatura, {uuidProgramaAcademico: programa});
        console.log('Asignaturas del programa ', data);
        setAsignaturas(data);
    }

    const getGrupos = async () => {
        const data = await findAll(endopint.grupo);
        setGrupos(data);
    }

    useEffect(() => {
        getProgramasAcademicos();
    }, []);

    const handleProgramaChange = async (event) => {
        setPrograma(event.target.value);
        console.log('Programa seleccionado ', programa)
        const dataAsignaturas = await findBy(endopint.programaAcademicoAsignatura, programa);
        console.log('Data ', dataAsignaturas);
        setAsignatura(dataAsignaturas);
        setGrupo(null);
        setEstudiantes([]);
    };

    const handleAsignaturaChange = (event) => {
        setAsignatura(event.target.value);
        setGrupo(null);
        setEstudiantes([]);
    };

    const handleGrupoChange = (event) => {
        setGrupo(event.target.value);
        setEstudiantes([]);
    };

    const data = [
        { id: 1, name: "John", age: 23 },
        { id: 2, name: "Jane", age: 28 },
        { id: 3, name: "Bob", age: 35 },
    ];

    const handleSelect = (id) => {
        if (selected.includes(id)) {
            setSelected(selected.filter((sel) => sel !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const handleSave = () => {
        console.log(selected);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h3 className="text-2xl font-semibold text-white">Inscribir estudiantes</h3>

                </div>



                <form className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="py-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1">
                                <label htmlFor="programa_academico" className="block text-sm font-medium text-gray-700">
                                    Programa académico
                                </label>
                                <select
                                    id="programa_academico"
                                    name="programa_academico"
                                    value={programa}
                                    onChange={handleProgramaChange}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                >
                                    <option value="">Seleccione un programa</option>
                                    {programasAcademicos.map((programa) => (
                                        <option key={programa.uuid} value={programa.uuid}>{programa.nombre}</option>
                                    ))}
                                </select>
                            </div>

                            {programa && (

                                <div className="col-span-1">
                                    <label htmlFor="asignatura" className="block text-sm font-medium text-gray-700">
                                        Asignatura
                                    </label>
                                    <select
                                        id="asignatura"
                                        name="asignatura"
                                        value={asignatura}
                                        onChange={handleAsignaturaChange}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    >
                                        <option value="">Seleccione una asignatura</option>
                                        <option value="1">Asignatura 1</option>
                                        <option value="2">Asignatura 2</option>
                                        <option value="3">Asignatura 3</option>
                                    </select>
                                </div>
                            )}

                            {asignatura && (

                                <div className="col-span-1">
                                    <label htmlFor="grupo" className="block text-sm font-medium text-gray-700">
                                        Grupo
                                    </label>
                                    <select
                                        id="grupo"
                                        name="grupo"
                                        value={grupo}
                                        onChange={handleGrupoChange}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    >
                                        <option value="">Seleccione un grupo</option>
                                        <option value="1">Grupo 1</option>
                                        <option value="2">Grupo 2</option>
                                        <option value="3">Grupo 3</option>
                                    </select>
                                </div>
                            )}
                        </div>
                    </div>
                </form>


                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                            <th scope="col" className="relative px-6 py-3 w-9">Select</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map(({ id, name, age }) => (
                            <tr
                                key={id}
                                className={
                                    selected.includes(id)
                                        ? "bg-gray-200 hover:bg-gray-200 cursor-pointer"
                                        : "hover:bg-gray-100 cursor-pointer"
                                }
                                onClick={() => handleSelect(id)}
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{age}</td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                                    <input type="checkbox" checked={selected.includes(id)} className="form-checkbox h-5 w-5 text-gray-600" />
                                </td>

                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                                <button
                                    className="bg-gradient-to-r from-purple-800 to-purple-500 text-white rounded-lg py-2 px-4 shadow-md hover:shadow-lg mt-4"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
