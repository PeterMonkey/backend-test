import jwt from "jsonwebtoken"

export function verifyToken(req, res, next) {
    const token = req.header('access_token');

    if (!token) {
        return res.status(401).json({ mensaje: 'No se ha proporcionado un token' });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({ mensaje: 'Token inválido' });
    }
}