const { NotFound, BadRequest } = require('http-errors');
const { sendEmail } = require('../../helpers');

const { User } = require('../../models');

const reVerify = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw NotFound('User not found');
  }
  if (user.verify) {
    throw BadRequest('Verification has already been passed');
  }

  const verifyEmail = {
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="http:/localhost:3000/api/users/verify/${user.verificationToken}">Click to verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({
    message: 'Verification email sent',
  });
};

module.exports = reVerify;
