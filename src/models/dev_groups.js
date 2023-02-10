import db from "../db.js"

export default class Dev_group {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    async save() {
        const query = `
            insert into dev_groups(id, name)
            value('${this.id}','${this.name}')
        `
        return await db.execute(query)
    }
}