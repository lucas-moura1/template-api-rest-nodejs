import app from './config/express.js'

const port = 3333

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
