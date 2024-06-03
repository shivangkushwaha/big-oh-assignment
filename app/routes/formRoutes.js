const express = require('express');
const { createForm, fillData, getAllData } = require('../controllers/formController');
const validate = require('../middleware/validate');
const { createFormSchema, fillDataSchema } = require('../validations/formValidation');

const router = express.Router();

router.post('/', validate(createFormSchema), createForm);
router.post('/fill_data', validate(fillDataSchema), fillData);
router.get('/fill_data', getAllData);

module.exports = router;
