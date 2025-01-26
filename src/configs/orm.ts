import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "bere6363",
    database: "server_00",
    synchronize: false,
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
    extra: {
        timezone: "Asia/Seoul",
        dateStrings: true
    },
    entities: [__dirname + "/src/entities/**/*.js"],
    subscribers: [],
    migrations: []
});