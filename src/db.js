import { createPool } from "mysql2"

export default createPool({
    host: 3007,
    user: 'root',
    password: 'root',
    database: 'project_db384'
}).promise()

