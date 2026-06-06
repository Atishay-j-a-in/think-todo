'use server'
import Todo from './model';
import {connectDB} from "../db/db"



const getAllTodos = async (userId) => {
    try {
        await connectDB();
        const todos = await Todo.find({ createdBy: userId });
        return todos;
    } catch (error) {
        throw new Error(error.message);
    }
};

const createTodo = async (userId,data) => {
    try {
        await connectDB();
       
        const newTodo = new Todo({ ...data, createdBy: userId });
        await newTodo.save();
        return newTodo._id;
    } catch (error) {
        throw new Error(error.message);
    }
};
const updateTodo = async (id, data) => {
    try {
        await connectDB();
        const updatedTodo = await Todo.findByIdAndUpdate(id, { ...data }, { new: true });
        return updatedTodo._id;
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteTodo = async (id) => {

    try {
        await connectDB();
        await Todo.findByIdAndDelete(id);

    } catch (error) {
        throw new Error(error.message);
    }
};


export {getAllTodos , createTodo , updateTodo, deleteTodo}