import {Link} from "react-router-dom"

function NotFound() {
    return (
        <div>
            <p className="text-warning"> Page not found! Please contact your local agency's administrator</p>
            <br></br>
            <Link to="/">return to home page</Link>
        </div>
    )
} export default NotFound;