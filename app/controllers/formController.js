const { Form, Response } = require('../models');
const { v4: uuidv4 } = require('uuid');

// Create a form
const createForm = async (req, res) => {
  try {
    const { title } = req.body;
    const newForm = await Form.create({
      uniqueId: uuidv4(),
      title
    });
    res.success(newForm, 'Form created successfully', 201);
  } catch (error) {
    res.error(error.message);
  }
};

// Fill data
const fillData = async (req, res) => {
  try {
    const { form_title } = req.query;
    const { name, email, phoneNumber, isGraduate } = req.body;

    const form = await Form.findOne({ where: { title: form_title } });
    if (!form) {
      res.error('Form not found');
    }

    const newResponse = await Response.create({
      uniqueId: uuidv4(),
      name,
      email,
      phoneNumber,
      isGraduate: isGraduate,
      FormUniqueId: form.uniqueId
    });

    res.success(newResponse, 'Data filled successfully', 201);
  } catch (error) {
    res.error(error.message);
  }
};

// Get all data
const getAllData = async (req, res) => {
  try {
    const { form_title } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const form = await Form.findOne({
      where: { title: form_title },
      include: [{ model: Response, as: 'responses', limit, offset }]
    });

    if (!form) {
      res.error('Form not found');
    }

    const totalResponses = await Response.count({ where: { FormUniqueId: form.uniqueId } });
    const totalPages = Math.ceil(totalResponses / limit);

    const responses = {
      currentPage: page,
      totalPages,
      totalResponses,
      responses: form
    };
    res.success(responses, 'Data retrieved successfully');
  } catch (error) {
    res.error(error.message);
  }
};

module.exports = {
  createForm,
  fillData,
  getAllData
};
