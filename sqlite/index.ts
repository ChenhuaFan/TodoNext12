import path from "path";
import { Sequelize } from "sequelize";

const isDev = process.env.NODE_ENV === 'development';

const db_path_rel = isDev ? process.env.DEV_DB_STORAGE_PATH : process.env.DB_STORAGE_PATH;

const basePath = process.cwd();

const db_path = path.join(basePath, db_path_rel);

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: db_path
});

export default sequelize;