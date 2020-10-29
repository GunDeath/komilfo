const bcrypt = require('bcryptjs')

const users = [
    {
        name: 'Philipp',
        email: 'phillbleck@gmail.com',
        password: bcrypt.hashSync('Jocker2357', 10),
        isAdmin: true
    },
    {
        name: 'Jhon Doe',
        email: 'jhon@example.com',
        password: bcrypt.hashSync('Jocker2357', 10)
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('Jocker2357', 10)
    },
]

module.exports = users;