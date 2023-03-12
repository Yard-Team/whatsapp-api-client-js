import whatsAppClient from '@basisapi/whatsapp-api-client'

// Send WhatsApp message
(async () => {
    const restAPI = whatsAppClient.restAPI(({
        host: process.env.API_HOST,
        idInstance: process.env.ID_INSTANCE,
        apiTokenInstance: process.env.API_TOKEN_INSTANCE
    }))
    try {
        const response = await restAPI.message.sendMessage("79999999999@c.us", null,"hello world");
        console.log(response.idMessage)
    } catch (ex) {
        console.log(ex.toString());
    }
})();