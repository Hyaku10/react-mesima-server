import Router from "express"
import db from '../db.js'

const router = Router()

const get_group_id = async (group) => {
    const query = `
            select group_id from dev_groups where group_name = ? 
        `
        const answer = await db.execute(query, [group])
        const [{ group_id }] = answer[0]
        return group_id
}

function toLowerCase(str) {
    return str.replace(/[A-Z]/g, function(char) {
      return char.toLowerCase()
    })
  }

router.get('/:group', async (req, res) => {
    const group = toLowerCase(req.params.group.replace('%20',' '))
    try {
        const response = await get_group_id(group)
        res.send(response.toString())
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

export default router