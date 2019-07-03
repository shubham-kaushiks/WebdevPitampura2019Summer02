const express = require('express')
const app = express()
 
app.get('/blah', function (req, res) {
    console.log("yes")
    res.sendFile('./index.html', (err) => {
        if(err) console.log("Error");
        console.log("done")
    })
    // use back ticks for sending html in result
})
 
app.listen(3000)

// get-params post-body
// server ports
// status codes