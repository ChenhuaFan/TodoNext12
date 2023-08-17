import sequelize from "../sqlite";
import { DataTypes } from "sequelize";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const TodoList = sequelize.define('TodoList', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

const Todo = sequelize.define('Todo', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    parentId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    todoListId: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


User.hasMany(TodoList, { foreignKey: 'userId' });
TodoList.hasMany(Todo, { foreignKey: 'todoListId' });
Todo.belongsTo(TodoList, { foreignKey: 'todoListId' });
Todo.hasMany(Todo, { foreignKey: 'parentId' });

export { User, TodoList, Todo };
