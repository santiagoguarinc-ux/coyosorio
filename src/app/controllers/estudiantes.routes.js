// acceso a Estudiantes services
const estudiantesService = require("../services/estudiantes.service");

//
const obtenerEstudiantes = async(req, res) => {
   try {
        const estudiantes =
        await estudiantesService.obtenerTodos();

        res.status(200).json(estudiantes);
    } catch (error){
        res.status(500).json({
            error: "Error al obtener los estudiantes",
        });
    }
};

const obtenerEstudiantesPorId = async (req, res) => {
    try {

        const {id} =req.params;
       
        const estudiante =
            await estudiantesService.obtenerPorId(id);
        
        res.status(200).json(estudiante);
    } catch (error) {

        console.error(error);

        res.status(404).json({
            error: "Estudiante no encontrado"
        });
    }
};

const crearEstudiante = async (req, res) => {
    
    try {

        const estudiantes = 
        await estudiantesService.crear(req.body);

        res.status(201).json(estudiantes);
        } catch (error) {

            console.error(error);

            res.status(500).json({
                error: "Error al crear el estudiante"
            });
        }
    };

const actualizarEstudiante = async (req, res) => {
   
    try {
        
        const {id} = req.params;

        const estudiante =
            await estudiantesService.actualizar(
                id,
                req.body
            );

            res.status(200).json(estudiante);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Error al actualizar el estudiante"
        });
    }
};

const eliminarEstudiante = async(req, res) => {
    try {

        const {id} = req.params;

        const estudiante =
            await estudiantesService.eliminar(id);

            res.status(200).json({
                mensaje: "Estudiante eliminado",
                estudiante
            });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Error al eliminar el estudiante"
        });
    }
};

module.exports = {
    obtenerEstudiantes,
    obtenerEstudiantesPorId,
    crearEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};