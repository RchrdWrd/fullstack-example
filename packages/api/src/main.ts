import express from "express"
import cors from 'cors'

const port = 666
const app = express()

//type interface for url query (http://......./?name=Adam&Age=17)
interface IUser {
  firstName?: string
  lastName?: string
  age?: number
}

const users: IUser[] = [ // TYPED array of objects. much easier to work with typed variables, arrays, etc. 
  {
    firstName: "Adam",
    lastName: "Wise",
    age: 6,
  },
  {
    firstName: "Peter",
    lastName: "Belfort",
    age: 27,
  },
  {
    firstName: "John",
    lastName: "Ward",
    age: 21,
  },
  {
    firstName: "Benny",
    lastName: "Wise",
    age: 13,
  },
  {
    firstName: "Benny",
    lastName: "Tari",
    age: 9,
  },
  {
    firstName: "Adam",
    lastName: "Roberts",
    age: 6,
  },
  {
    firstName: "John",
    lastName: "Lewis",
    age: 6,
  },
  {
    firstName: "Peter",
    lastName: "Wise",
    age: 14,
  },
]

//middlewares
app.use(cors({origin: '*'}))
//end middlewares

//send users to response (with/without query filters)
app.get("/api/user/get", (req, res) => {    //req=request, res=response. but u can assign any other name to these variables. (if u want)
  const query: IUser = req.query       /*QUERY: the url params sent from the client's request. 
                                        (http://......./user/get?firstName=Adam&lastName=Wise&age=13) <- this will list Users with firstName=Adam, lastName=Wise and age=13
                                        (http://......./user/get?firstName=Adam) <- this will list Users with firstName=Adam*/
  
  res.send(
    users.filter(// this is a 'one line', multiple condition statement. u can do it with 6x if else but js/ts prog. language can do it easier.
      (user) =>  //how to handle 3 url query parameters if the request u sent contains only 1 or 2? (user.firstName ? 'runs when user.firstName is not undefined' : 'runs when user.firstName is undefined )
        (query.firstName ? user.firstName == query.firstName : user.firstName) && //  '==' -> equal with type conversion. IUser interface's variables defined as string or undefined, so if the user.firstName is not undefined, u must pass the variable as string, not as (undefined or string)
        (query.lastName ? user.lastName = (query.lastName as string) : user.lastName) && // There another way to equal with type conversion... but thats not the best way :P
        (query.age ? user.age == query.age : user.age)
    )
  )
  const date = new Date()
  console.log('new request -> ', query)
})

//...every another request which not handled before ↑↑↑
app.get("*", (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log(`API is listening on port: ${port}`)
})
