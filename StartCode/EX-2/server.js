import express from 'express';
import { articles } from './models/data.js';
import  articlesRoute from './routes/articleRoute.js';
import journalistsRoute from './routes/journalistRoute.js';
import categoriesRoute from './routes/categoryRoute.js';
import { errorHandler } from './middleware/errorHandling.js';
import { validateId } from './middleware/validateId.js';
import { requestLogger } from './middleware/logger.js';

const app = express();


app.use(express.json());
app.use(requestLogger);


app.use('/articles', articlesRoute);
app.use('/journalists', journalistsRoute);
app.use('/categories', categoriesRoute);

app.use(validateId);
app.use(errorHandler);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});