import Router from "express"
import db from '../db.js'


const router = Router()

const getGroup = async (group) => {
    const query = `
            select meetings.* 
            from meetings
            inner join dev_groups
                on 
                    dev_groups.group_id = meetings.group_id 
            where dev_groups.group_name = '${group}';
        `
        return await db.execute(query)
}

router.get('/:group', async (req, res) => {
    const group = req.params.group
    if(group == 'close'){
        res.semd({})
    }
    try {
        const response = await getGroup(group)
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

export default router