const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { salvarSeguro, listarSeguros} = require('./seguro-service')
const webpush = require('web-push');

// VAPID keys should be generated only once.
const vapidKeys = {
    publicKey: 'BPQ4mGDryVMLkceVhZlfGgV-l4LYDM3LGVY75Aob7ymAkpTsqNTWUVGn7lJx_zbN0gc7bYxHl6OyjFzzj4BfCzs',
    privateKey: 'J-KUkE3pOC3FyF1G7_UWYJrgDUCClfTOUumqYaxRhGA'
};

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));

app.route('/api/seguros').post(salvarSeguro)
app.route('/api/seguros').get(listarSeguros)

const HOST = "LOCALHOST";
const PORT = "9000";

const httpServer = app.listen(PORT, HOST, () => {
    console.log(`servidor rodando em http://${HOST}:${PORT}`);
});