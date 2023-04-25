import './App.css'
import ButtonSidebar from "./components/ButtonSidebar.jsx";
import ProgramaAcademico from './components/ProgramaAcademico';

function App() {
  // Use State para guardar el nombre del boton que se presiono
  const [buttonName, setButtonName] = useState("btn_programas");
  const handleClick = (e) => {
    // Se extrae la primera clase del boton
    const classButton = e.target.classList[0];
    if (classButton !== buttonName) {
      setButtonName(classButton);
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
          </div> {/* Fin del div que contiene los botones de la sidebar */}
        </div> {/* Fin del div que contiene la sidebar */}
      </div> {/* Fin del div que contiene la sidebar */}
      { /* Dependiendo del valor de buttonName se muestra el componente correspondiente */ }
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className='relative z-10 flex-shrink-0 flex h-16 shadow items-center justify-center px-4 bg-white dark:bg-gray-800'>
          { /* El boton de agregar debe aparacer centrado y tenr un estilo como los que se muestran en la siguiente web: https://blog.stackfindover.com/tailwind-css-buttons/*/ }
          
          <div className="flex justify-center items-center h-screen">
            <button className="bg-gradient-to-r from-purple-800 to-purple-500 text-white rounded-lg py-6 px-6 shadow-md hover:shadow-lg">
              <span className="mr-2">Agregar Programa Academico</span>
              <i className="fas fa-plus ml-2"></i>
            </button>
          </div>
          
          
          
        </div>
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
            { /* Se muestra el componente correspondiente  dependiendo del valor de buttonName */ }
            { buttonName === "btn_programas" && <ProgramaAcademico /> }
        </main>
      </div>
    </div> /* Fin del div que contiene la sidebar */
  )
}

export default App
