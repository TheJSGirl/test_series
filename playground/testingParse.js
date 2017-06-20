const csv = require('csvtojson');

function callback(path) {
    csv()
        .fromFile(path)
        .on('json',(jsonObj)=>{
            console.log('got json');
            data = jsonObj
            console.log(data);
        })
        .on('done',(error)=>{
            console.log(error);
            console.log('end');
        })
}

module.exports = {
    Parser: (path, callback) => {
        const filePath = __dirname + '/../src/csvfiles/' + path;  
        callback(filePath);
    }

};

    