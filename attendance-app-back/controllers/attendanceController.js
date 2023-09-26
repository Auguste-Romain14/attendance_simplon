const attendanceService = require("../services/attendanceService");

const index = async (req, res) => {
  try {
    const data = await attendanceService.index(res);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
};

const store = async (req, res) => {
  try {
    const data = await attendanceService.store(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
};

module.exports = { index, store };
