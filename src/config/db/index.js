const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/hospital_db');
        console.log("Kết Nối DB thành Công!");
    } catch (error) {
        console.log("Fail nhé !");
    }
}
module.exports = { connect };