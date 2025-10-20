require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const experienceRoutes = require('./routes/experienceRoutes');
const setupSwagger = require('./swagger/swagger');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => res.json({ message: 'API Hoja de Vida - Experiencias' }));
app.use('/api/experiences', experienceRoutes);

// Swagger
setupSwagger(app);

// Conectar DB y arrancar
connectDB(process.env.MONGODB_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📚 Swagger: http://localhost:${PORT}/api-docs`);
  });
});

