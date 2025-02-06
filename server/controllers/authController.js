const authController = {
  login: (req, res) => {
    return res.status(200).json({
      success: true,
      data: {},
    });
  },
  register: (req, res) => {
    return res.status(200).json({
      success: true,
      data: {},
    });
  },
};
module.exports = authController;
