import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de la conexión
const connection = mysql.createConnection({
    host: 'localhost',       // Servidor de la base de datos
    user: 'root',            // Usuario de MySQL (predeterminado en XAMPP)
    password: '',            // Contraseña de MySQL (vacía por defecto en XAMPP)
    database: 'bañdle_db' // Nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Endpoint para obtener datos
app.get('/canciones', (req, res) => {
    connection.query('SELECT * FROM canciones', (err, results) => {
        if (err) {
            console.error('Error al realizar la consulta:', err);
            res.status(500).send('Error al realizar la consulta');
            return;
        }
        res.json(results);
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});