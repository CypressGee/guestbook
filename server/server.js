import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"

const app = express();
app.use(cors());
app.use (express.json());
dotenv.config();


const db = new pg.Pool({
    connectionString: process.env.DATABASE_CONNECTION
})

app.get('/', (req, res) => {
    res.send(`You've reached the route route - please leave a message`)
})

app.get('/games_reviews',(req, res) => {
    res.send('This is the games endpoint')
})
app.get ('/games', async function (request, response) {
    const result = await db.query (`SELECT * FROM games`)
})

app.listen('8080', () => {
    console.log('Server running...on port 8080')
})

