import React from 'react'

const ProgramaAcademico = () => {
  return (
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
  )
}

export default ProgramaAcademico