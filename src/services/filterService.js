// File: filterService.js (JavaScript)

// Import necessary packages and models
const axios = require('axios');
const Message = require('../models/Message');

// Function to filter chat messages based on custom filters
const filterMessages = async (messages, filters) => {
    try {
        let filteredMessages = [];
        for (let message of messages) {
            let isFiltered = false;
            for (let filter of filters) {
                if (message.content.includes(filter)) {
                    isFiltered = true;
                    break;
                }
            }
            if (!isFiltered) {
                filteredMessages.push(message);
            }
        }
        return filteredMessages;
    } catch (error) {
        console.error('Error filtering messages:', error);
        throw new Error('Failed to filter messages');
    }
};

// Function to retrieve chat messages from a Discord channel
const getMessagesFromChannel = async (channelId) => {
    try {
        const response = await axios.get(`https://discord.com/api/channels/${channelId}/messages`);
        return response.data.map((message) => new Message(message.id, message.content));
    } catch (error) {
        console.error('Error getting messages from channel:', error);
        throw new Error('Failed to retrieve messages from channel');
    }
};

// Export functions for use in other parts of the application
module.exports = {
    filterMessages,
    getMessagesFromChannel
};