import express from 'express';
import {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryArticles
} from '../controllers/categoryController.js';
import { validateId } from '../middleware/validateId.js';

const router = express.Router();

router.get('/', getAllCategories);
router.get('/:id', validateId, getCategoryById);
router.post('/', createCategory);
router.put('/:id', validateId, updateCategory);
router.delete('/:id', validateId, deleteCategory);
router.get('/:id/articles', validateId, getCategoryArticles);

export default router;