import { articles } from '../models/data.js';

export const getAllArticles = (req, res) => {
    try {
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getArticleById = (req, res) => {
    try {
        const article = articles.find(a => a.id === parseInt(req.params.id));
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createArticle = (req, res) => {
    try {
        const newArticle = {
            id: articles.length + 1,
            ...req.body,
            createdAt: new Date()

        };
        articles.push(newArticle);
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateArticle = (req, res) => {
    try {
        const index = articles.findIndex(a => a.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: 'Article not found' });
        }
        articles[index] = {
            ...articles[index],
            ...req.body,
            updatedAt: new Date()
        };
        res.json(articles[index]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteArticle = (req, res) => {
    try {
        const index = articles.findIndex(a => a.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: 'Article not found' });
        }
        articles.splice(index, 1);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};