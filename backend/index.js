const express = require("express");
const jwt = require("jsonwebtoken");
const { todo } = require("./db");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const paresedPayload = createTodo.safeParse(createPayload);

  if (!paresedPayload.success) {
    res.status(411).json({
      msg: "Inputs invalid",
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res){
    const todos = await todo.find({})

    res.json({todos})
});


app.put("/completed", async function(req, res) {
    const updatePayload = req.body
    const paresedPayload = updateTodo.safeParse(updatePayload)

    if(!paresedPayload.success){
        res.status(411).json({
            msg: "Inputs invalid"
        })
        return;
    }

    await todo.updateOne({
        _id: updatePayload.id
    },{
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
});

app.listen(3000,()=>{
    console.log("Server running at port: 3000")
})
