import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.remplace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ error: "Acceso denegado" });
    }
    try{
        const verificar = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verificar;
        next();
    } catch (error) {
        res.status(400).json({error: "Token no valido"});
    }
}