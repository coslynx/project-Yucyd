// Filename: src/controllers/moderationController.js

const { ModerationService } = require('../services/moderationService');

class ModerationController {
  constructor() {
    this.moderationService = new ModerationService();
  }

  async detectAndRemoveInappropriateContent(message) {
    try {
      const result = await this.moderationService.detectAndRemoveInappropriateContent(message);
      return result;
    } catch (error) {
      console.error(`Error detecting and removing inappropriate content: ${error.message}`);
    }
  }

  async applyCustomWarning(userId, reason) {
    try {
      const result = await this.moderationService.applyCustomWarning(userId, reason);
      return result;
    } catch (error) {
      console.error(`Error applying custom warning: ${error.message}`);
    }
  }

  async applyCustomPunishment(userId, punishmentType) {
    try {
      const result = await this.moderationService.applyCustomPunishment(userId, punishmentType);
      return result;
    } catch (error) {
      console.error(`Error applying custom punishment: ${error.message}`);
    }
  }

  async setCustomFilters(filters) {
    try {
      const result = await this.moderationService.setCustomFilters(filters);
      return result;
    } catch (error) {
      console.error(`Error setting custom filters: ${error.message}`);
    }
  }

  async manageServerRoles(roleId, permissions) {
    try {
      const result = await this.moderationService.manageServerRoles(roleId, permissions);
      return result;
    } catch (error) {
      console.error(`Error managing server roles: ${error.message}`);
    }
  }

  async scheduleModerationTask(task) {
    try {
      const result = await this.moderationService.scheduleModerationTask(task);
      return result;
    } catch (error) {
      console.error(`Error scheduling moderation task: ${error.message}`);
    }
  }
}

module.exports = ModerationController;