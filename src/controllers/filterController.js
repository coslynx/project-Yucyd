// filterController.js

const axios = require('axios');
const { Message } = require('../models/Message');
const logger = require('../utils/logger');

// Function to filter chat messages based on custom filters
const filterMessages = async (message) => {
  try {
    const filters = await getCustomFilters(); // Assume function to get custom filters from database
    let filtered = false;

    filters.forEach((filter) => {
      if (message.content.includes(filter)) {
        // Remove message if it contains filter keyword
        Message.findOneAndDelete({ _id: message._id }, (err) => {
          if (err) {
            logger.error('Error deleting message: ', err);
          } else {
            logger.info('Message filtered and deleted successfully');
          }
        });
        filtered = true;
      }
    });

    return filtered;
  } catch (error) {
    logger.error('Error filtering message: ', error);
    return false;
  }
};

module.exports = { filterMessages };