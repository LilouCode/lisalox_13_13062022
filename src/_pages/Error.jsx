import {Link} from 'react-router-dom'
const Error = () =>{
    return(
        <div>
            <h1>404 Error</h1>
            <h3>Sorry, something went wrong</h3>
            <h5>It seems that the link you had does not longer exist, please try something else or contact our client support service</h5>
            <Link to={'/'}>Go back to Home Page</Link>
        </div>
    )
}; export default Error