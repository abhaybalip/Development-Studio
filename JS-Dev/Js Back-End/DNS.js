const print = (data) => console.log(data);

// Node js - dns
const dns = require('dns')

print('dns servers: \n' + dns.getServers())

print('')

dns.lookup('google.com', 4, function (err, address) {
    if (err) print('error: ' + err)
    else print('Address: ' + address)
})

print('')

dns.lookupService('8.8.8.8', 53, (err, hostname, service) => {
    if (err) {
        print('error: ', err)
    } else {
        print('hostname: ' + hostname + '\nservice: ' + service)
    }
})