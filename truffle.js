// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 7545,
            // Match any network id
            network_id: '*',
            gas: 470000
        }
    }
}
