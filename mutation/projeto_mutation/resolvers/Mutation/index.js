const user = require('./user')
const profile = require('./profile')

module.export = {
    ...user,//operador Spread
    ...profile,
}