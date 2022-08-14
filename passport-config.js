const LocalStrategy= require('passport-local').Strategy 
const bycrypt = require('bcryptjs')
async function initialize(passport,getUserByEmail) {
    const authenticatedUser=(email,password,done)=>{
        const user = getUserByEmail(email)
        if (user==null) 
        return done(null,false,{massage:'no user with that eamil'})
    }
    try{
        if (await bycrypt.compare(passport, user.password)){
            return done(null,user)

        }else{
            return done(null,false,{massage:'Password incorrect'})

        }
    }catch(e){
        return (e)

    }
    passport.use(new LocalStrategy({usernameField: 'email'}, authenticatedUser))
    passport.serializeUser((user,done)=>{})
    passport.deserializerUser((id,done)=>{})
}
module.exports =initialize 