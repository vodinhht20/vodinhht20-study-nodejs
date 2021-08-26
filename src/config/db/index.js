const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/hospital_db');
    console.log('Kết Nối DB Thành Công!');
  } catch (error) {
    console.log('Kết Nối DB Fail nhé !');
  }
}
module.exports = { connect };
