
// import { Login} from "./ui-components"

// export default function Home() {
//     return (
//         <div>
//         <Login/>
//         </div>
//     )
// }

const express = require('express')
const path = require("path");

const app = express()
const port = 3000;



// path.join(__dirname,'./ui-components')

app.use(express.static(path.join(__dirname,'./public')));



app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})