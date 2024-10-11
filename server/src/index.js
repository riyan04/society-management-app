import app from './app.js'
import 'dotenv/config'
import connectDB from './db/index.js'

connectDB()
.then(()=> {
    app.listen(3000, ()=> {
        console.log("App listening on port 3000")
    })
})
.catch((err)=>{
    console.log("Unable to connect to mongoDB", err)
})
