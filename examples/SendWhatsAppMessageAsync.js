import whatsAppClient from '@basisapi/whatsapp-api-client'

// Send WhatsApp message
(async () => {
    const restAPI = whatsAppClient.restAPI(({
        idInstance: '1101000001',
        apiTokenInstance: '8e331e3ff82ded9091c1a35a72bddef1320ed9ab80b08667'
    }))
    try {
        const response = await restAPI.message.sendMessage("79999999999@c.us", null,"hello world");
        console.log(response.idMessage)
    } catch (ex) {
        console.log(ex.toString());
    }
})();