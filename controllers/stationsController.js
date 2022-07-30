const getAllStations = async (req, res) => {
  res.send('All stations');
};

const getSingleStation = async (req, res) => {
  res.send('Get single station');
};

module.exports = { getAllStations, getSingleStation };
