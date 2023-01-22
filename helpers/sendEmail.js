const sgMail = require('@sendgrid/mail');

require('dotenv').config();
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const email = { ...data, from: 'prorochenko_os@ukr.net' };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
// const email = {
//   to: 'weyoli6176@ibansko.com',
//   from: 'prorochenko_os@ukr.net',
//   subject: 'new user',
//   html: '<p>Please, press the button to confirm your email</p>',
// };
