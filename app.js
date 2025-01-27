const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const hubChallenge = req.query['hub.challenge'];
    res.send(hubChallenge);
    // res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})