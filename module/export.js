exports.showMyMessage = (msg) => {
  console.log(msg);
}

exports.newExport = () => {
  console.log('new export');
}

const showMyMessage = (msg) => {
  console.log(msg);
}

const newExport = () => {
  console.log('new export');
}

module.exports = {
  showMyMessage,
  newExport
}


//ES6
//export default {}