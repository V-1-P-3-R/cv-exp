const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/experienceCtrl');

router.get('/', ctrl.getExperiences);
router.post('/', ctrl.createExperience);
router.get('/:id', ctrl.getExperienceById);
router.put('/:id', ctrl.updateExperience);
router.delete('/:id', ctrl.deleteExperience);

module.exports = router;

