import Todo, { TodoAttributes } from "../../sqlite/todo";

export async function getAllTodos(): Promise<TodoAttributes[]> {
    try {
        return await Todo.findAll({ raw: true });
    } catch (error) {
        throw new Error(`Error get all todos`);
    }
}

export async function createTodo({
    name,
    parentId,
    todoListId,
}: {
    name: string;
    parentId?: string;
    todoListId: string;
}) {
    try {
        const newTodo = await Todo.create({
            name,
            completed: false,
            parentId,
            todoListId,
        });
        return newTodo.id;
    } catch (error) {
        throw new Error(`Error creating Todo: ${error.message}`);
    }
}

export async function getTodoById(id: string) {
    try {
        const todo = await Todo.findByPk(id);
        return todo;
    } catch (error) {
        throw new Error(`Error fetching Todo by ID ${id}: ${error.message}`);
    }
}


export async function dropTodoById(id: string) {
    try {
        const todo = await getTodoById(id);
        if (todo) {
            await todo.destroy();
            return todo;
        } else {
            return null;
        }
    } catch (error) {
        throw new Error(`Error deleting Todo by ID ${id}: ${error.message}`);
    }
}
