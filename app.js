const WebSoket = require('ws')
const path = require('path')
const WebSoketServer = WebSoket.Server
const wss = new WebSoketServer({port: 3000})
const clients = []
wss.brodcast = function() {
    clients.forEach(client => {
        client.send('Hello WebSoket !!!')
    })
}
wss.on('connection', ws => {
    console.log(`[SERVER] connection()`)
    ws.on('message',msg => {
        console.log(`[SERVER] Received: ${msg}`);
        ws.send(`ECHO: ${msg}`, err => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        })
    })
})

console.log(path.resolve(''));