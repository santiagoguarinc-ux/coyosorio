//arreglo en memoria. esto significa que todavia no estamos usando base de datos.
let estudiantes = [
    {
     id: 1,
     nombre: "federico",
     correo: "federico676767@gmail.com",
     edad: 18
    }
];

//esta funcion devuelve todos los estudiantes
const obtenerTodos = ()  => {
    return estudiantes;
};

//buscar un estudiante por id. si no lo encuentra devuelve undefined.
const obtenerPorId = (id) => {
    return estudiantes.find ((estudiante) => estudiante.id === id);
};

/* Nota: 
  El signo = (asignacion) se usa para asignar un valor a una variable.
  El signo == (igualdad debil) se usa para comparar valores, pero no compara el tipo de dato.
  El signo === (comparacion estricta) se usa para comparar valores y tipos de datos.
*/

// crea un estudiante copiando los datos recibido
const crear = (datos) => {
    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        ...datos

    };

    estudiantes.push (nuevoEstudiante);

    return nuevoEstudiante;
};

const actualizar = (id, datos) => {
    const indice = estudiantes.findIndex (
        (estudiante) => estudiante.id === id
    );

    if (indice === -1) {
        return null;
    }

    estudiantes[indice] = {
        ...estudiantes[indice],
        ...datos,
        id
    };

    return estudiantes[indice];
};

const eliminar = (id) => {
    const indice = estudiantes.findIndex(
        (estudiante) => estudiante.id === id
    );

    if (indice === -1) {
        return null;
    }

    const estudianteEliminado = estudiantes[indice];

    //Eliminar un elemento del arreglo comenzando 
    //Desde determinada posicion.
    estudiantes.splice(indice, 1);

    return estudianteEliminado
};

//si crean una funcion pero se olvida exportarla,
// despues el controller no podra utilizarla.
module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};