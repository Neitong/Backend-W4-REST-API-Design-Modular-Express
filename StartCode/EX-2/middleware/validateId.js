export const validateId = (req, res, next) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }
    req.params.id = id;
    next();
};