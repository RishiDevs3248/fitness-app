const connection = require("./Database/DB-Connection")
const cookieparser = require("cookie-parser")
var cors = require('cors')
const bcrypt = require('bcrypt');
const saltRounds = 10;


const express = require ("express");
const studentModel = require("./models/studentModel");
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    secure : false,
  credentials: true,
}))
app.use(express.json());
app.use(cookieparser())

function CreateJwtToken(email){
    try {
        var token = jwt.sign({ email:email }, process.env.JWT_SECRET_KEY);
        return token;
    } catch (error) {
        console.log("error occured during Create Jwt Token : " , error)
    }
}

app.post("/register",async (req, res) => {
    try {
        const { email, password } = req.body;
        const Student = await studentModel.findOne({ email }); 
        if (Student) {
            return res.json({ "msg": `email (${email}) already in use ` });
        }
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                await studentModel.create({ email, password: hash })
                res.cookie("token", CreateJwtToken(email))
                return res.json({"msg": "new Student Created" });
            });
        });
    } catch (error) {
        console.log("Some error occured during Registering a new Student : ", error)
    }
})


app.post("/Login",async (req, res) => {
    try {
        const { email, password } = req.body;
        const student = await studentModel.findOne({ email })
        if (student) {
            bcrypt.compare(password, student.password, function (err, result) {
                if (result) {
                    res.cookie("token", CreateJwtToken(email))
                    //redirect to the dashboard ----------------------
                    return res.json({ redirect: "http://localhost:5173/profile", "msg": "Logged in successfully" });
                    // return res.json({"msg":"Logged in successfully"})
                }
                else {
                    return res.json({ "error": "Wrong password , please try again" });
                }
            });
        } else {
            return res.json({ "error": "No student with this email" });
        }
    } catch (error) {
        console.log("Some error occured during Logging in Student : ", error)
    }
})



app.listen(3000,connection())