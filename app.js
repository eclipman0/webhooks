const express = require('express')
const app = express()
const port = 3000

app.use(express.json({ type: ['application/json', 'application/csp-report'] }));

app.get('/webhooks', (req, res) => {
    const hubChallenge = req.query['hub.challenge'];
    res.send(hubChallenge);
    // res.send('Hello World!')
});

app.post('/webhooks', (req, res) => {
    res.status(200).send(req.body.object);
    console.log('post request')
    console.log(JSON.stringify(req.body));
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
