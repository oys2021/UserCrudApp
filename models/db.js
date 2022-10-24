const mongoose=require('mongoose');
// this connect app to cloud database
//mongoose.connect('mongodb://localhost:27017/YesDB',{useUnifiedTopology:true});
mongoose.connect('mongodb+srv://OYS2022:yawsarfo2022@cluster0.ey2znee.mongodb.net/EmployeeDB',{useUnifiedTopology:true});

// this connects database model file to database connection to cloud server
require('./personmodel');
