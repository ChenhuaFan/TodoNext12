import db from "../../models";
import todo from "../../models/todo";

const TodoModel = todo(db.sequelize, db.Sequelize.DataTypes)
type Todo = typeof TodoModel

export async function createTodo({
    id,
    name,
    completed,
    parentId,
    todoListId,
}: {
    id: string;
    name: string;
    completed: boolean;
    parentId?: string;
    todoListId: string;
}): Promise<Todo | null> {
    try {
        const newTodo = await TodoModel.create({
            id,
            name,
            completed,
            parentId,
            todoListId,
        });
        return newTodo;
    } catch (error) {
        throw new Error(`Error creating Todo: ${error.message}`);
    }
}

export async function getTodoById(id: string): Promise<Todo | null> {
    try {
        const todo = await TodoModel.findByPk(id);
        return todo;
    } catch (error) {
        throw new Error(`Error fetching Todo by ID ${id}: ${error.message}`);
    }
}
