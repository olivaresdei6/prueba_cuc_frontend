import './App.css'
import ButtonSidebar from "./components/ButtonSidebar.jsx";

function App() {

  const handleClick = (e) => {
    // Se extrae la primera clase del boton
    const classButton = e.target.classList[0];
    if (classButton === "btn_programas") {
      console.log("Programas");
    } else if (classButton === "btn_asignaturas") {
        console.log("Asignaturas");
    }else if (classButton === "btn_docentes") {
      console.log("Docentes");
    }else if (classButton === "btn_grupos") {
        console.log("Grupos");
    } else if (classButton === "btn_estudiantes") {
        console.log("Estudiantes");
    }else if (classButton === "btn_calificaciones") {
        console.log("Calificaciones");
    }
  }

  return (
  <div className="flex h-screen bg-gray-50 dark:bg-gray-900 font-roboto">
    <div className="flex flex-col w-64">
      { /* Sidebar */ }
      <div className="flex flex-col h-0 flex-1 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-indigo-600 dark:bg-indigo-900">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg" alt="Workflow" />
          <span className="ml-2 text-white text-lg font-semibold">Prueba Tecnica</span>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-white dark:bg-gray-800 space-y-1">
            <ButtonSidebar nombre={"Programa academico"} handleClick={handleClick} classButton={"btn_programas"}/>
            <ButtonSidebar nombre={"Asignaturas"} handleClick={handleClick} classButton={"btn_asignaturas"}/>
            <ButtonSidebar nombre={"Docentes"} handleClick={handleClick} classButton={"btn_docentes"}/>
            <ButtonSidebar nombre={"Grupos"} handleClick={handleClick} classButton={"btn_grupos"}/>
            <ButtonSidebar nombre={"Estudiantes"} handleClick={handleClick} classButton={"btn_estudiantes"}/>
            <ButtonSidebar nombre={"Calificaciones"} handleClick={handleClick} classButton={"btn_calificaciones"}/>
          </nav>
        </div>
      </div>
    </div>
    { /* Main content. Se muestran 4 botones para probar el funcionamiento en la parte superior y central de la pantalla */ }
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className='relative z-10 flex-shrink-0 flex h-16 shadow'>
          {/* Boton n grande que diga agregar */}
          <button className="btn btn-primary btn-lg btn-block m-2 w-1/4">Agregar</button>
        </div>
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
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
        </main>
    </div>
    </div>

  )
}

export default App
