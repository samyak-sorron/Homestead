const DataModel = require('./models/DataModel');

exports.getData = async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createData = async (req, res) => {
  const { name, age } = req.body;
  const newData = new DataModel({ name, age });
  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};