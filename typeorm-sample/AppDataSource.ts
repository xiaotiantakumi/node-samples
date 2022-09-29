import "reflect-metadata";
import { DataSource } from "typeorm";

export const appDataSource: DataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "db",
  synchronize: true,
  logging: true,
  entities: ["Entity/*.ts"],
  migrations: [],
  subscribers: [],
});

// export const getInitializedAppDataSource = async () => {
//   await setUp();
//   return appDataSource;
// };

// const setUp = async () => {
//   if (appDataSource.isInitialized) return;
//   await appDataSource.initialize().catch((error) => console.log(error));
// };
// export const destroy = async () => {
//   appDataSource.destroy();
// };
