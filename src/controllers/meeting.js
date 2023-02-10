import Meeting from "../models/meeting.js"

export const save = async (data) => {
    const {group, start, end, description, room} = data
    const meeting = new Meeting(group, start, end, description, room)
    const res = await meeting.save()
    return res
}