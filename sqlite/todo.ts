import { DataTypes, Model, Optional, Sequelize, UUIDV4 } from "sequelize";
import sequelize from ".";

// todo definition.
export interface TodoAttributes {
    id: string;
    name: string;
    completed: boolean;
    parentId?: string;
    todoListId: string;
}

interface TodoCreationAttributes extends Optional<TodoAttributes, "id"> { }

class Todo extends Model<TodoAttributes, TodoCreationAttributes> implements TodoAttributes {
    public id!: string;
    public name!: string;
    public completed!: boolean;
    public parentId?: string;
    public todoListId!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Todo.belongsTo(models.TodoList, { foreignKey: 'todoListId' });
        Todo.belongsTo(models.Todo, { as: 'parent', foreignKey: 'parentId' });
    }
}
Todo.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    parentId: DataTypes.STRING,
    todoListId: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Todo',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
});

export default Todo;