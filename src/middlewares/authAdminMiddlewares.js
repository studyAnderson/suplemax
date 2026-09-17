async function authAdminMiddleware(req, res, next) {
    if(!req.user || req.user.role != "admin"){
        return res.status(403).json({
            Message: "Acesso negado, usuário deve ser adm!"
        });
    }   
    next();
}
export default authAdminMiddleware;