import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Rutas básicas
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello World from TypeScript (Service 2)!',
    service: 'Backend Service 2'
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app; 