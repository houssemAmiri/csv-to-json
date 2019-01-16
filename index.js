const csvFilePath = './customer-data.csv'
const csv = require('csvtojson')
const fs = require('fs')

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{    
fs.writeFile('customer-data.json',JSON.stringify(jsonObj, null, 2), (error)=>{
if (error) return console.log(error)
console.log('writing is done correctly')
})
})
