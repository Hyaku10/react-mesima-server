import Dev_group from "../models/dev_groups.js"

export const save = async (data) => {
    const {group_id, group_name} = data
    const dev_group = new Dev_group(group_id, group_name)
    const res = await dev_group.save()
    return res
}