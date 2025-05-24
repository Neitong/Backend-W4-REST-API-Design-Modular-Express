import express from 'express';
const router = express.Router();
import {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
} from '../controllers/articleController.js';

// Articles routes
router.get('/', getAllArticles);

router.get('/:id', getArticleById);

router.post('/', createArticle);

router.put('/:id', updateArticle);

router.delete('/:id', deleteArticle);

export default router;