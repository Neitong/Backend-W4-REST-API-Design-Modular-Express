import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { requestLogger } from './middleware/logger.js';

const app = express();
app.use(express.json());
app.use(requestLogger);
app.use('/users', userRoutes);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


