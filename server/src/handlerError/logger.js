const fs = require('fs');
const path = require('path')
const devFilePath = path.resolve(__dirname, '../logger');

module.exports = (err, req, res, next) => {
  fs.mkdirSync(devFilePath, {
    recursive: true,
  })
  const pathToFile = path.resolve(devFilePath, 'logger.json')

  const error = {
    message: err.message,
    time: Date.now(),
    code:err.code,
    stackTrace: err.stack,
  }
  const result = JSON.parse(fs.readFileSync(pathToFile))
  if(result){
    fs.writeFileSync(pathToFile, JSON.stringify([...result, error], null,2))
  }else {
    fs.writeFileSync(pathToFile, JSON.stringify([error], null,2))
  }

  next(err)

}