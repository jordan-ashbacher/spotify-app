const cookieSession = require('cookie-session')
const warnings = require('../constants/warnings')

const serverSessionSecret = () => {
    if (
        !process.env.SERVER_SESSION_SECRET ||
        process.env.SERVER_SESSION_SECRET.length < 8 ||
        process.env.SERVER_SESSION_SECRET === warnings.badSecret
    ) {
        console.log(warnings.badSecret)
    }
    return process.env.SERVER_SESSION_SECRET
}

module.exports = cookieSession({
    secret: serverSessionSecret() || 'secret',
    key: 'user',
    resave: 'false',
    saveUninitialized: false,
    maxAge: 60 * 60 * 1000,
    secure: false
})
