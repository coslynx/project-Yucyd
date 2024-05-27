// File: moderationRoutes.js

// Import required packages
const express = require('express');
const router = express.Router();
const moderationController = require('../controllers/moderationController');

// Define routes for moderation functionality
router.post('/automatedModeration', moderationController.automatedModeration);
router.post('/customPunishment', moderationController.customPunishment);
router.post('/customFilters', moderationController.customFilters);
router.post('/manageRoles', moderationController.manageRoles);
router.post('/antiSpam', moderationController.antiSpam);
router.post('/logging', moderationController.logging);
router.post('/scheduledTasks', moderationController.scheduledTasks);
router.post('/interactiveCommands', moderationController.interactiveCommands);
router.get('/dashboard', moderationController.dashboard);
router.post('/updateBotSettings', moderationController.updateBotSettings);
router.post('/machineLearning', moderationController.machineLearning);
router.post('/thirdPartyIntegration', moderationController.thirdPartyIntegration);
router.post('/interactiveTutorials', moderationController.interactiveTutorials);
router.post('/analytics', moderationController.analytics);
router.post('/premiumFeatures', moderationController.premiumFeatures);

module.exports = router;