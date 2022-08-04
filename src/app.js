const express = require ('express');
require("./db/conn");
const app = express();
const port =  process.env.PORT || 3620;
const Student = require("./models/students")

app.use(express.json());

app.post("/students",async (req,res) => {
    console.log(req.body);
    let users =  await Student.find()
    console.log(users);

    const user = await Student.create(req.body);

    await user.save();

    return res.json({user});

});



app.listen(port, () => {
     console.log(`port is ready to start ${port}`);
});