export const requestLogger = (req, res, next) => {
    console.log(`${new Date()} - ${req.method} ${req.path}`);
    next();
};