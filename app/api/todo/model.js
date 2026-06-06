import {Schema  ,model , } from "mongoose"
import mongoose from "mongoose"

const todoSchema = new Schema({
    text : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    createdBy : {
        type : String,
        required : true
    }
},{ timestamps : true})

const Todo = mongoose.models.Todo || model('Todo', todoSchema)
export default Todo