import { categories, articles } from '../models/data.js';

export const getAllCategories = (req, res) => {
    try {
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCategoryById = (req, res) => {
    try {
        const category = categories.find(c => c.id === parseInt(req.params.id));
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCategory = (req, res) => {
    try {
        const newCategory = {
            id: categories.length + 1,
            ...req.body
        };
        categories.push(newCategory);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateCategory = (req, res) => {
    try {
        const index = categories.findIndex(c => c.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: 'Category not found' });
        }
        categories[index] = { ...categories[index], ...req.body };
        res.json(categories[index]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteCategory = (req, res) => {
    try {
        const index = categories.findIndex(c => c.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: 'Category not found' });
        }
        categories.splice(index, 1);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCategoryArticles = (req, res) => {
    try {
        const categoryArticles = articles.filter(article => article.categoryId === parseInt(req.params.id));
        res.json(categoryArticles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};