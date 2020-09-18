const jwt = require('jsonwebtoken')

const secret = 'mysecretssshhhh'
const expiration = '2h'

module.exports = {
    authMiddleware: function ({ req }) {
        let token = requestAnimationFrame.body.token || requestAnimationFrame.query.token || requestAnimationFrame.headers.authorization

        if (req.headers.authorization) {
            token = token
            .split(' ')
            .pop()
            .trim()
        }

        if (!token) {
            return req
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration })
            req.user = data
        } catch {
            console.log('Invalid token')
        }

        return req
    },

    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id }

        return jwt.sign({ dataL: payload }, secret, { expiresIn: expiration })
    }
}
