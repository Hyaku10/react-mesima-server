import Router from "express"
import { save } from "../controllers/meeting.js"

const router = Router()

router.post('/', async (req, res) => {
    try {
        const response = await save(req.body)
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

export default router