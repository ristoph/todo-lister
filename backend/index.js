const express = require("express")
const jwt  = require("jwt")
const {todo} = require("./db")
const cors = require("cors")
const {createTodo, updateTodo} = require("./types")
const app = express()

app.use(express.json())

app.post( "/todo", async function(req,res){
    const createPayload = req.body
    const paresedPayload = createTodo.safeparse(createPayload)

    if(!paresedPayload.success){
        res.status(411).json({
            msg: "Inputs invalid",
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos",
)

app.post("/completed",
)