
const supabase = require("../config/supabaseAdmin");

//esta funcion devuelve todos los estudiantes
const obtenerTodos = async()   => {
    const {data, error} = await supabase
        .from('estudintes')
        .select("*");
    
    if (error) {
        throw error;
    }
     
    return data;
};

//buscar un estudiante por id. si no lo encuentra devuelve undefined.
const obtenerPorId = async (id) => {
    
    const { data, error } = await supabase
        .from('estudintes')
        .select("*")
        .eq('id', id)   
        .single();

    if (error) {
        throw error;
    }

    return data;
};

/* Nota: 
  El signo = (asignacion) se usa para asignar un valor a una variable.
  El signo == (igualdad debil) se usa para comparar valores, pero no compara el tipo de dato.
  El signo === (comparacion estricta) se usa para comparar valores y tipos de datos.
*/

// crea un estudiante copiando los datos recibido
const crear = async (estudiante) => {
    
    const { data, error } = await supabase
        .from('estudiantes')
        .insert(estudiante)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
};

const actualizar = async (id, estudiantes) => {
    
    const { data, error } = await supabase
        .from('estudiantes')
        .update(estudiantes)
        .eq('id', id)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
};

const eliminar = async (id) => {
    
    const { data, error } = await supabase
        .from('estudiantes')
        .delete()
        .eq('id', id)
        .select()
        .single();

    if (error) {
        throw error;
    }
    
    return data;
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