module.exports = {
    authenticate: (req, res, next) =>{
        const  {session, method} = req
        if( !session.user ){
            session.user = {
                messages: []
            }
        }
        next()
    }

}