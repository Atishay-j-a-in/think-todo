import { NextResponse } from "next/server";
import { currentUser } from '@clerk/nextjs/server'

import { getAllTodos, createTodo, updateTodo, deleteTodo } from "./controller";
import {UpdateTodoDto, CreateTodoDto, DeleteTodoDto} from "./dto"


const getUserId = async () => {
    const user = await currentUser();
    return user ? user.id : null;
}

export async function GET(request){ //get all todo 
   
    const userId = await getUserId();
    const todos = await getAllTodos(userId);
    return NextResponse.json(todos)
}

export async function POST(request){ //create a todo
    const userId = await getUserId();
    const data = await request.json();
 
    const {errors, value} = CreateTodoDto.validate(data);
   
    if(errors){
        return NextResponse.json({errors}, {status : 400})
    }
    const newTodoId = await createTodo(userId,value);
    return NextResponse.json({id : newTodoId}, {status : 201}) 
}

export async function PUT(request){ //update a todo
    const data = await request.json();
    const {errors, value} = UpdateTodoDto.validate({todoId:data._id,text:data.text,completed:data.completed});
    
    if(errors){
        return NextResponse.json({errors}, {status : 400})
    }
    const updatedTodoId = await updateTodo(value.todoId, value);
    return NextResponse.json({id : updatedTodoId}, {status : 200}) 
}

export async function DELETE(request){ //delete a todo
    const data = await request.json();
  
    const {errors, value} = DeleteTodoDto.validate({id:data.id});

    if(errors){
        return NextResponse.json({errors}, {status : 400})
    }
    await deleteTodo(value.id);
    return NextResponse.json({message : "Todo deleted successfully"}, {status : 200})
}

