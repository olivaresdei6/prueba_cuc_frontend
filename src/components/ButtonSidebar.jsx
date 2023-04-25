const ButtonSidebar = ({nombre, handleClick, classButton}) => {
    return (
        <a href="#" onClick={handleClick} className={`${classButton} text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md`}>
            {nombre}
        </a>
    );
};

export {ButtonSidebar};
