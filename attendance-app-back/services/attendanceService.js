const attendModel = require("../models/attendModel");

const index = async (res) => {
  try {
    const data = await attendModel.find();
    return data;
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
};

const store = async (body, res) => {
  try {
    const data = new attendModel(body);
    await data.save();
    return data;
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
};

module.exports = { store, index };
