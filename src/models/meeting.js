import db from "../db.js"

export default class Meeting {
    constructor(group, start, end, description, room) {
        this.group = group
        this.start = start
        this.end = end
        this.description = description
        this.room = room
    }
    async save() {
        const query = `
            insert into meetings(group_id, meeting_start, meeting_end, meeting_description, meeting_room)
            value('${this.group}','${this.start}','${this.end}','${this.description}','${this.room}');
        `
        return await db.execute(query)
    }
}