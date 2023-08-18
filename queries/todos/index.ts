import db from "../../models";
import todolist from "../../models/todolist";

const todoListModel = todolist(db.sequelize, db.Sequelize.DataTypes);

/**
 * Find all Todos
 * @returns 
 */
export async function getTodos() {
    return await todoListModel.findAll();
}

/**
 * Find Todos by User
 * @param {string} userId - The ID of the user whose Todos you want to retrieve.
 * @returns {Promise<Array>} - A Promise that resolves to an array of Todo items.
 */
export async function getTodosByUser(userId) {
    try {
        const userTodos = await todoListModel.findAll({
            where: {
                userId: userId,
            },
        });
        return userTodos;
    } catch (error) {
        // Handle the error, e.g., log it or throw an exception
        throw new Error(`Error fetching Todos for user ${userId}: ${error.message}`);
    }
}

/**
 * Create a new Todo List
 * @param {Object} todoData - An object containing the data for the new Todo List.
 * @param {string} todoData.name - The name of the Todo List.
 * @param {string} todoData.userId - The ID of the user associated with the Todo List.
 * @returns {Promise} - A Promise that resolves to the newly created Todo List.
 */
export async function createTodoList({ name, userId }) {
    try {
        const newTodoList = await todoListModel.create({
            name: name,
            userId: userId,
        });
        return newTodoList;
    } catch (error) {
        // Handle the error, e.g., log it or throw an exception
        throw new Error(`Error creating Todo List: ${error.message}`);
    }
}

/**
 * Delete a Todo List by ID
 * @param {string} id - The ID of the Todo List to delete.
 * @returns {Promise<void>} - A Promise that resolves once the Todo List is deleted.
 */
export async function dropTodoListBy(id) {
    try {
        await todoListModel.destroy({
            where: {
                id: id,
            },
        });
    } catch (error) {
        // Handle the error, e.g., log it or throw an exception
        throw new Error(`Error deleting Todo List with ID ${id}: ${error.message}`);
    }
}
