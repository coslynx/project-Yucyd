// File: src/routes/filterRoutes.js

const express = require('express');
const router = express.Router();
const filterController = require('../controllers/filterController');

// Define routes for filter functionalities
router.get('/filters', filterController.getAllFilters);
router.get('/filters/:id', filterController.getFilterById);
router.post('/filters', filterController.createFilter);
router.put('/filters/:id', filterController.updateFilter);
router.delete('/filters/:id', filterController.deleteFilter);

module.exports = router;