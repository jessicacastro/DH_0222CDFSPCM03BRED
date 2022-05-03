const fs = require('fs')
const path = require('path')

function getInfoDatabase(filename) {
  const filePath = path.join(__dirname, '..', 'database', `${filename}.json`)
  const readFromFile = fs.readFileSync(filePath, 'utf-8')
  const infos = JSON.parse(readFromFile)
  
  return infos
}

module.exports = getInfoDatabase
