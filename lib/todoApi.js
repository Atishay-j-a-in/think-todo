import api from "./axios";

export const getTodos = async () => {
    try {
        const response = await api.get("/api/todo");

        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch todos");
    }
};

export const createTodo = async (todo) => {
    try {
        const response = await api.post("/api/todo", todo);

        return response.data.id;
    } catch (error) {
        console.error("Error creating todo:", error);
        throw new Error("Failed to create todo");
    }
};

export const updateTodo = async (todo) => {
    try {
        const response = await api.put("/api/todo", todo);
        return response.data.id;
    } catch (error) {
        throw new Error("Failed to update todo");
    }
};

export const deleteTodo = async (id) => {

    try {
        await api.delete(`/api/todo`, {
            data: {
                id,
            },
        });
    } catch (error) {
        console.error("Error deleting todo:", error);
        throw new Error("Failed to delete todo");
    }
};
