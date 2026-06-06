import BaseDto from "../utils/validation";
import Joi from "joi";


class CreateTodoDto extends BaseDto {
    static schema =Joi.object({
        text : Joi.string().required(),
        completed : Joi.boolean().default(false)
    })
}
class UpdateTodoDto extends BaseDto {
    static schema =Joi.object({
        todoId : Joi.string().required(),
        text : Joi.string().optional(),
        completed : Joi.boolean().optional()
    })
}
class DeleteTodoDto extends BaseDto {
    static schema =Joi.object({
        id : Joi.string().required()
    })
}
export {CreateTodoDto, UpdateTodoDto, DeleteTodoDto}