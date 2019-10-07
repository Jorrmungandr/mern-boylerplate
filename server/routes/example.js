const router = require('express').Router();
const Example = require('../models/example.model');

router.route('/').get(async (req, res) => {
  try {
    const examples = await Example.find();
    res.send(examples);
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

router.route('/add').post(async (req, res) => {
  try {
    const { text } = req.body;
    const newExample = new Example({ text });

    await newExample.save();

    res.send('Example added!');
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const example = await Example.findById(req.params.id);
    res.send(example);
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await Example.findByIdAndDelete(req.params.id);
    res.send('Example deleted');
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

router.route('/update/:id').post(async (req, res) => {
  try {
    const example = await Example.findById(req.params.id);

    example.text = req.body.text;

    await example.save();
    res.send('Example updated');
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

module.exports = router;
