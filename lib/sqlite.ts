import path from "path";
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database.db')
})

export async function testConnection(): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export async function closeConnection(): Promise<void> {
    try {
        await sequelize.close();
    } catch (error) {
        console.error('unable to disconnect from db')
    }
}

export default sequelize;