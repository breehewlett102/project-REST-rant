const res = require('express/lib/response')

const router =  require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://as1.ftcdn.net/v2/jpg/00/94/61/92/1000_F_94619271_LwlfXwWpAW4Hknuba5OABpJ9voXVBIFN.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://as1.ftcdn.net/v2/jpg/02/50/35/12/1000_F_250351248_CX51XrhDNJREgyrX8wKwdpXiu9YOhJmk.jpg'
      }]      
    res.render('places/new', {places})
    
})

module.exports = router