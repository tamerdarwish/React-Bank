const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema  = new Schema({
    amount: Number,
    category : String,
    vendor: String,
})



const TransactionModel = mongoose.model("expense", transactionSchema)
module.exports = TransactionModel