import 'dotenv/config'
import router from './routes/index.js'

import express from 'express'
import { sequelize } from './db.js'
//const models = require('./models/models')
import cors from 'cors'

const PORT = process.env.PORT || 7000

const app = express()

//console.log(router);
router.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Hello world' });
});
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server is running'))
    } catch (e) {
        console.log(e)
    }
}

start()
