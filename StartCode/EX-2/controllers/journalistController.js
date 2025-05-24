import { journalists, articles } from '../models/data.js';

export const getAllJournalists = (req, res) => {
    try {
        res.json(journalists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getJournalistById = (req, res) => {
    try {
        const journalist = journalists.find(j => j.id === parseInt(req.params.id));
        if (!journalist) {
            return res.status(404).json({ message: 'Journalist not found' });
        }
        res.json(journalist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createJournalist = (req, res) => {
    try {
        const newJournalist = {
            id: journalists.length + 1,
            ...req.body
        };
        journalists.push(newJournalist);
        res.status(201).json(newJournalist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateJournalist = (req, res) => {
    try {
        const index = journalists.findIndex(j => j.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: 'Journalist not found' });
        }
        journalists[index] = { ...journalists[index], ...req.body };
        res.json(journalists[index]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteJournalist = (req, res) => {
    try {
        const index = journalists.findIndex(j => j.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: 'Journalist not found' });
        }
        journalists.splice(index, 1);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getJournalistArticles = (req, res) => {
    try {
        const journalistArticles = articles.filter(article => article.journalistId === parseInt(req.params.id));
        res.json(journalistArticles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};