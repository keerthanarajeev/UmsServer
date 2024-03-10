const json_server= require('json-server')
const cors=require('cors')

// create json server
const umsApp=json_server.create()

//create a middleware for json0js data conversion
const middleware=json_server.defaults()

// create a route for connect json filw with main file (index.js)
const route=json_server.router('user.json')

// apply cors
umsApp.use(cors())

// apply middleware as aplication specific middleware
umsApp.use(middleware)

// apply route
umsApp.use(route)


const PORT=8000
umsApp.listen(PORT,()=>{
    console.log(`____UMS Server Started at ${PORT}____`);
})