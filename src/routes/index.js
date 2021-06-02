import express from 'express'

const route = express.Router()

route.get('/', (req, res) => {
    res.json({ status: 'UP' })
})

export default route
