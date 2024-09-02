
export const roleMiddleware = (roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            next();
        } else {
            res.status(403).send('You are not allowed to access this route');
        }
    }
}