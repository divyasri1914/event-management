import {Link} from "react-router-dom"
import "./Navigation.css"
const Navigation = ()=>{
  return (
    <nav>
        <ul>
            <li>
              <Link to="/event-list">Home</Link>
            </li>
            <li>
              <Link to="/find-events">Find Events</Link>
            </li>
            <li>
              <Link to="/sign-up">SignUp</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navigation;