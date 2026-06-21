const fs = require('fs');

fs.writeFile('file.txt', 'abcdefg', (err) => {
    if (err) {
        console.log("error occured")
    } else {
        console.log("file created successfully")
    }

})

