import express from "express"

const app = express();

app.listen(3000, (req,res) => {
    res.send('hi')
    console.log("server is running")
})