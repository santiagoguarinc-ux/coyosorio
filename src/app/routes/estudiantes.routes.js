const express = require ("express");

// un router permite agrupar las rutas de un recurso.
const router = express.Router();

const estudiantesController = require("../controllers/estudiantes.routes");

// cuando lleguen un GET a la ruta principal de estudiantes, ejecuta obtenerEstudiantes.
router.get("/", estudiantesController.obtenerEstudiantes);

// el id: es un parametro dianmico
router.get("/:id", estudiantesController.obtenerEstudiantesPorId);

// esta ruta permite crear un estudiante.
router.post("/", estudiantesController.crearEstudiante);

// permite actualizar un estudiante.
router.put("/:id", estudiantesController.actualizarEstudiante);

// permite eliminar un estudiante.
router.delete("/:id", estudiantesController.eliminarEstudiante);


module.exports = router;
