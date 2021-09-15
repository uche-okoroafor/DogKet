const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

const requestSchema = new mongoose.Schema({
    user_id: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User'
  },
  sitter_id: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User'
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true
  },
  accepted: {
    type: Boolean,
    default: null,
  },  
  paid: {
    type: Boolean,
    default: false,
  },
});

module.exports = Request = mongoose.model("Request", requestSchema);


// async function foo () {
//   const jj = await Request.create({
//     user_id: new mongoose.Types.ObjectId() ,
//     sitter_id: new mongoose.Types.ObjectId(), 
//     start_date: Date.now(),
//     end_date: Date.now()
//   }) 

//   console.log(jj);
// }

// foo();