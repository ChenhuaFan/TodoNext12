import { DataTypes, Model } from "sequelize";
import sequelize from ".";

class TodoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        TodoList.hasMany(models.Todo, { foreignKey: 'todoListId' });
    }
}
TodoList.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: DataTypes.STRING,
    userId: DataTypes.STRING
}, {
    sequelize,
    modelName: 'TodoList',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
});

export default TodoList;