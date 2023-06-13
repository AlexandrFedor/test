const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000
const path = require('path')
const app = express()
const corsMiddleware = require('./middleware/cors.middleware')

const start = async () => {

app.use(corsMiddleware)
app.use(express.json())
app.use("/auth", authRouter)

    try {
        await mongoose.connect('mongodb+srv://Silence:lostart18@cluster0.b5emxzo.mongodb.net/')
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
    }

    catch (e) {
        console.log(e)
    }
}

start()






app.use(express.static(path.resolve(__dirname,'../diplom_2')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../diplom_2/public', 'index.html'))
  })
  

