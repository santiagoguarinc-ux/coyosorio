//Este archivo tendrá la configuración principal de Express.

//Importamos Express
const express = require("express");

const estudiantesRoutes = require("./routes/estudiantes.routes");

//Creamos la aplicación
const app = express();
//Permite que Express pueda recibir datos enviados en formato JSON
app.use (express.json());


app.get("/", (req, res) => {
 res.send("API funcionando correctamente");
});

app.use("/estudiantes", estudiantesRoutes);

//Esta línea permite que server.js pueda utilizar la aplicación
module.exports = app;










/*



app.get("/estudiantes", (req, res) => {
    res.json([
        {   
            id: 1, 
            nombre: "Ana" 
        },
        {   
            id: 2, 
            nombre: "Carlos" 
        },
        {   
            id: 3,
            nombre: "Laura" 
        }
    ]);
});

app.post("/estudiantes", (req, res) =>{

    const { id, nombre, edad, correo } = req.body;

    if (!id) {
        return res.status(400).json({
            error:" El id es obligatorio"
        });
    }

    if (!nombre) {
        return res.status(400).json({
            error: "El nombre es obligatorio"
        });
    }

    if (!edad) {
        return res.status(400).json({
            error: "La edad es obligatoria"
        });
    }

    if (!correo) {
        return res.status(400).json({
            error: "El correo es obligatorio"
        });
    }

    res.status(201).json({
        mensaje: "Estudiantes recibidos",
        estudiantes: req.body
    });
});

app.put("/estudiantes/:id", (req, res) =>{

const id = req.params.id;
const nombre = req.body.nombre;

    console.log(req.params);

    res.json({
        mensaje: "Estudiantes actualizados",
        id: id,
        nombre: nombre
    });
});

app.delete("/estudiantes/:id", (req, res) => {
    
    const id = req.params.id;

    res.json({
        mensaje: "Estudiantes eliminados",
        id: id
    });
});

app.get("/buscar", (req, res) => {

    console.log(req.query);

    res.json({
        mensaje: "Busqueda realizada",
        query: req.query
    });
});

app.get("/contacto", (req, res) => {
    res.send("Mi informacion de contacto es: ana@example.com");
});

app.get("/nosotros", (req, res) => {
    res.send("Somos un equipo de desarrolladores apasionados por crear soluciones innovadoras.");
});


*/