import express from "express"
import dev_groups from "./routers/dev_groups.js"
import get_group_id from "./routers/get_group_id.js"
import select from "./routers/select.js"
import meeting from "./routers/meeting.js"
import cors from "cors"

//GENERAL
const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))

//ROUTERS
app.use('/dev_groups', dev_groups)
app.use('/get_group_id', get_group_id)
app.use('/select', select)
app.use('/meeting', meeting)
app.get('/', (req, res) => {
    try {
    } catch (error) {
        console.error('endpoint not found')
    }
})

//LISTEN
app.listen(3003, () => console.log(`server is listening on port 3003`))