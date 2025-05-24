import express from 'express';
const router = express.Router();
import {
    getAllJournalists,
    getJournalistById,
    createJournalist,
    updateJournalist,
    deleteJournalist
} from '../controllers/journalistController.js';

// Categories routes
router.get('/', getAllJournalists);

router.get('/:id', getJournalistById);

router.post('/', createJournalist);

router.put('/:id', updateJournalist);

router.delete('/:id', deleteJournalist);

export default router;