
//* Las validaciones son funciones que se pueden reutilizar en diferentes partes de la aplicación, por lo que se pueden agrupar en un namespace para tenerlas disponibles en cualquier parte de la aplicación por medio de exportarlas.

//* Los namespaces son una forma de agrupar código relacionado, como las validaciones, para que estén disponibles en cualquier parte de la aplicación.
namespace Validations{
    //* Es necesario exportar cada función para que estén disponibles en cualquier parte de la aplicación.
    export const validateText = (text: string): boolean => {
        return (text.length > 3) ? true : false;
    }

    export const validateDate = (date: Date): boolean => {
        return isNaN(date.valueOf()) ? false : true;
    }
}

console.log(Validations.validateText('Hello'));
