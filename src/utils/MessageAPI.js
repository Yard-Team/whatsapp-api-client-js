'use strict'
import axios from 'axios';
import CommonUtils from './CommonUtils.js'

class MessageAPI {

    constructor(restAPI) {
        this._restAPI = restAPI;
    }
    /** Send text message to chat or phone. Method call adds message to sending queue
     * 
     * @param {String} chatId - chat id using Whatsapp format (17633123456@c.us - for private messages). 
     *  Mandatory if phoneNumber is empty
     * @param {Number} phoneNumber - receiver phone number using international format whithout + sign.
     * Mandatory if chatId is empty
     * @param {String} message - text message
     */
    async sendMessage (chatId, phoneNumber, message) {
        CommonUtils.validateChatIdPhoneNumber(chatId, phoneNumber);
        CommonUtils.validateString('message', message);

        const method = 'sendMessage';
        
        const postData = {
            'message': message,
        }

        this.addChadIdParam(postData, chatId)
        this.addPhoneParam(postData, phoneNumber)

        const response = await axios.post(CommonUtils.generateMethodURL(this._restAPI.params, method), postData);
        return response.data
    }

    /** Send buttons message to chat. Method call adds message to sending queue
     * 
     * @param {String} chatId - chat id using Whatsapp format (17633123456@c.us - for private messages). 
     *  Mandatory if phoneNumber is empty
     * @param {String} message - text message
     * @param {footer} footer - footer message
     * @param {array} buttons - buttons, for example  [{"buttonId": "1", "buttonText": "green"}, {"buttonId": "2", "buttonText": "red"}, {"buttonId": "3", "buttonText": "blue"}]
     */
    async sendButtons(chatId, message, footer, buttons) {
        CommonUtils.validateChatIdPhoneNumber(chatId, undefined);
        CommonUtils.validateString('message', message);

        const method = 'sendMessage';
        
        const postData = {
            'message': message,
            'footer': footer,
            'buttons': buttons
        }

        this.addChadIdParam(postData, chatId)

        const response = await axios.post(CommonUtils.generateMethodURL(this._restAPI.params, method), postData);
        return response.data
    }

    /** Send buttons message to chat. Method call adds message to sending queue
     * 
     * @param {String} chatId - chat id using Whatsapp format (17633123456@c.us - for private messages). 
     * @param {String} message - text message
     * @param {footer} footer - footer message
     * @param {array} templateButtons - buttons, for example [
            {"index": 1, "urlButton": {"displayText": "⭐ Star us on GitHub!", "url": "https://github.com/Yard-Team/docs"}},
            {"index": 2, "callButton": {"displayText": "Call us", "phoneNumber": "+1 (234) 5678-901"}},
            {"index": 3, "quickReplyButton": {"displayText": "Plain button", "id": "plainButtonId"}}
        ]
     */
    async sendTemplateButtons(chatId, message, footer, templateButtons) {
        CommonUtils.validateChatIdPhoneNumber(chatId, undefined);
        CommonUtils.validateString('message', message);

        const method = 'sendTemplateButtons';
        
        const postData = {
            'message': message,
            'footer': footer,
            'templateButtons': templateButtons
        }

        this.addChadIdParam(postData, chatId)

        const response = await axios.post(CommonUtils.generateMethodURL(this._restAPI.params, method), postData);
        return response.data
    }

    /** Send buttons message to chat. Method call adds message to sending queue
     * 
     * @param {String} chatId - chat id using Whatsapp format (17633123456@c.us - for private messages). 
     * @param {String} message - text message
     * @param {String} buttonText - action list
     * @param {String} title - title
     * @param {array} sections - sections, for example  [
        {
            "title": "Секция 1",
            "rows": [
                {
                    "title": "Вариант 1",
                    "rowId": "option1"
                },
                {
                    "title": "Вариант 2",
                    "rowId": "option2",
                    "description": "Пояснение"
                }
            ]
        }
     */
    async sendListMessage(chatId, message, buttonText, title, footer, sections) {
        CommonUtils.validateChatIdPhoneNumber(chatId, undefined);
        CommonUtils.validateString('message', message);

        const method = 'sendListMessage';
        
        const postData = {
            'message': message,
            'buttonText': buttonText,
            'title': title,
            'footer': footer,
            'sections': sections,
        }

        this.addChadIdParam(postData, chatId)

        const response = await axios.post(CommonUtils.generateMethodURL(this._restAPI.params, method), postData);
        return response.data
    }

    /**
     * 
     * @param {String} chatId 
     * @param {Number} phoneNumber 
     * @param {String} nameLocation 
     * @param {String} address 
     * @param {Number} latitude 
     * @param {Number} longitude 
     */
    async sendLocation (chatId, phoneNumber, nameLocation, address, latitude, longitude) {
        CommonUtils.validateChatIdPhoneNumber(chatId, phoneNumber);
        CommonUtils.validateString('nameLocation', nameLocation);
        CommonUtils.validateString('address', address);
        CommonUtils.validateNumber('latitude', latitude);
        CommonUtils.validateNumber('longitude', longitude);

        const method = 'sendLocation';

        const postData = {
            'nameLocation': nameLocation,
            'address': address,
            'latitude': latitude,
            'longitude': longitude,
        }

        this.addChadIdParam(postData, chatId)
        this.addPhoneParam(postData, phoneNumber)

        const response = await axios.post(CommonUtils.generateMethodURL(this._restAPI.params, method), postData);
        return response.data
    }

    /**
     * 
     * @param {String} chatId 
     * @param {Number} phoneNumber 
     * @param {Object} contact - object with one or more fields
     */
    async sendContact (chatId, phoneNumber, contact) {
        CommonUtils.validateChatIdPhoneNumber(chatId, phoneNumber);
        CommonUtils.validateObject('contact', contact);

        const method = 'sendContact';

        const postData = {
            'contact': contact,
        }

        this.addChadIdParam(postData, chatId)
        this.addPhoneParam(postData, phoneNumber)

        const response = await axios.post(CommonUtils.generateMethodURL(this._restAPI.params, method), postData);
        return response.data
    }

    /**
     * 
     * @param {String} chatId 
     * @param {Number} phoneNumber 
     * @param {String} urlLink
     */
    async sendLink (chatId, phoneNumber, urlLink) {
        CommonUtils.validateChatIdPhoneNumber(chatId, phoneNumber);
        CommonUtils.validateString('urlLink', urlLink);

        const method = 'sendLink';

        const postData = {
            'urlLink': urlLink,
        }

        this.addChadIdParam(postData, chatId)
        this.addPhoneParam(postData, phoneNumber)

        const response = await axios.post(CommonUtils.generateMethodURL(this._restAPI.params, method), postData);
        return response.data
    }

    /**
     * 
     * @param {String} chatId 
     * @param {Number} phoneNumber 
     * @param {String} idMessage 
     */
    async readChat (chatId, phoneNumber, idMessage = null) {
        CommonUtils.validateChatIdPhoneNumber(chatId, phoneNumber);

        const method = 'readChat';

        const postData = {
            'idMessage': idMessage ,
        }

        this.addChadIdParam(postData, chatId)
        this.addPhoneParam(postData, phoneNumber)

        const response = await axios.post(CommonUtils.generateMethodURL(this._restAPI.params, method), postData);
        return response.data
    }

      /**
     * Returns array of QueueMessage objects
     */
    async showMessagesQueue() {
        const method = 'showMessagesQueue';
        const response = await axios.get(CommonUtils.generateMethodURL(this._restAPI.params, method));
        return response.data.map((msg) => new QueueMessage(msg))
    }

    async clearMessagesQueue() {
        const method = 'clearMessagesQueue';
        const response = await axios.get(CommonUtils.generateMethodURL(this._restAPI.params, method));
        return response.data
    }

    /**
     * Returns array of Message objects
     */
    async lastIncomingMessages() {
        const method = 'lastIncomingMessages';
        const response = await axios.get(CommonUtils.generateMethodURL(this._restAPI.params, method));
        return response.data.map((msg) => new Message(msg))
    }

    /**
     * Returns array of Message objects
     */
    async lastOutgoingMessages() {
        const method = 'lastOutgoingMessages';
        const response = await axios.get(CommonUtils.generateMethodURL(this._restAPI.params, method));
        return response.data.map((msg) => new Message(msg))
    }

    /**
     * Returns history of chat
     */
    async getChatHistory(chatId) {
        CommonUtils.validateChatIdPhoneNumber(chatId, undefined);

        const method = 'getChatHistory';

        const postData = {
            'chatId': chatId,
        }

        this.addChadIdParam(postData, chatId)

        const response = await axios.post(CommonUtils.generateMethodURL(this._restAPI.params, method), postData);
        return response.data
    }

    /**
     * The method is intended for forwarding messages to a personal or group chat
     * @param {String} chatId
     * @param {String} chatIdFrom
     * @param {Array} messages
     */
    async forwardMessages (chatId, chatIdFrom, messages) {
        CommonUtils.validateString('chatId', chatId)
        CommonUtils.validateString('chatIdFrom', chatIdFrom)
        CommonUtils.validateArray('messages', messages);

        const method = 'ForwardMessages';

        const postData = {
            'chatId': chatId,
            'chatIdFrom': chatIdFrom,
            'messages': messages,
        }

        const response = await axios.post(CommonUtils.generateMethodURL(this._restAPI.params, method), postData);
        return response.data
    }

    addChadIdParam(postData, chatId) {
        if (chatId) {
            postData.chatId = chatId
        } 
    }

    addPhoneParam(postData, phoneNumber) {
        if (phoneNumber) {
            postData.chatId = `${phoneNumber}@c.us`
        }
    }
}

class Message {
    constructor(data) {
        this.chatId = data.chatId;
        this.idMessage = data.idMessage;
        this.statusMessage = data.statusMessage;
        this.textMessage = data.textMessage;
        this.timestamp = data.timestamp;
        this.typeMessage = data.typeMessage;
    }
}

class QueueMessage {
    constructor(data) {
        this.chatId = data.chatId;
        this.fileName = data.fileName;
        this.typeMessage = data.typeMessage;
    }
}

export default MessageAPI;