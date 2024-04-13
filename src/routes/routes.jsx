import EventList from "../pages/EventList/EventList"
import FilterEvents from "../pages/FilterEvents/FilterEvents"
import EventDetail from "../pages/EventDetails/EventDetails"
import SignUp from "../components/SignUp/SignUp"
import SignIn from"../components/SignIn/SignIn"
export const routes = [
  {path:'/event-list',element:<EventList/>},
  {path:'/find-events',element:<FilterEvents/>},
  {path:'/events/:id',element:<EventDetail/>},
  {path:'/sign-up',element:<SignUp/>},
  {path:'/sign-in',element:<SignIn/>},
  {path:'/',element:<EventList/>}
]