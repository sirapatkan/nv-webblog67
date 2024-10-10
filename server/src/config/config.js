module.exports = {
    port: 8081,
    db: {
<<<<<<< HEAD
        database: process.env.DB_NAME || 'nvwebblogDb',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './nvwebblog-db.sqlite'
        },
    },
    authentication:{
        jwtSecret: "test"
    }
}
=======
    database: process.env.DB_NAME || 'nvWebblogDb',
    user: process.env.DB_User || 'root',
    password: process.env.DB_PASS || '',
    options: {
        dialect: process.env.DIALECT || 'sqlite',
        storage: './nvwebblog-db.sqlite'
    },
    }
    }
>>>>>>> 76469648f2680bb426e4a0b261136eb9b29f0d95
