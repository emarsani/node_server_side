const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// The code below is connecting our project to mongodb. To find the connect code go to connect > drivers
mongoose.connect('mongodb+srv://emarsariti:eWDi79ZC6d6DoYi6@cluster0.g2veo3i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to Database'));


// app.post('/', (req, res) => {
//     const { name, age, email } = req.body
//     const newUser = new User ({ name: name, age: age, email: email });
//     newUser.save();
//     res.json('Hello api is working');
// });

app.put('/:id', async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndUpdate(id, { $set: { name: "new name", age: 3 }}, {new: true});
    res.json("Updated Successfully");
});


app.listen(port, () => {
    console.log(`server is running on :${port}`);
});

const {Schema, model } = mongoose;
const userSchema = new Schema({
    name: String,
    age: Number,
    email: String
});
const User = model('User', userSchema);
