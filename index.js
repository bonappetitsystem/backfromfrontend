const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')
const port = process.env.PORT
app.use(express.json())
app.use(cors())

app.get('/produtos', async (req, res) => {

        const result = await axios.get('http://localhost:8080/produtos')
        return res.send(result.data)

    }
)
app.listen(port, () => {

    console.log(`Executando em http://localhost:${port}`)

})