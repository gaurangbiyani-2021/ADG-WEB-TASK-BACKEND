const mongoose = require('mongoose');
const app = require('express')();

async function connectToMongoDB() {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
        });
        console.log("Successful connection to MongoDB");
      
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}
app.listen(3000, () => {
    console.log("port 3000 started");
});
module.exports = connectToMongoDB;
























// const mongoose = require('mongoose');
// const app = require('express');

// async function connectToMongoDB() {
//     try {
//        mongoose.connect(process.env.MONGO_URL, {
//         useNewUrlParser: true,
//       });
//       console.log("Successful connection to MongoDB");
//     } catch (error) {
//       console.error("Error connecting to MongoDB: ", error);
//     }
//   }
  
// export default connectToMongoDB;
  

// app.listen(3000,() =>{
//     console.log("port 3000 started")
// });
