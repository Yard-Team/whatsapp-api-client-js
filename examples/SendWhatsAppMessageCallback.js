import whatsAppClient from '@basisapi/whatsapp-api-client'

// Send WhatsApp message using callbacks
const restAPI = whatsAppClient.restAPI(({
    host: process.env.API_HOST,
    idInstance: process.env.ID_INSTANCE,
    apiTokenInstance: process.env.API_TOKEN_INSTANCE
}))
restAPI.message.sendMessage(null, 79999999999, "hello world")
.then((data) => {
    console.log(data);
});