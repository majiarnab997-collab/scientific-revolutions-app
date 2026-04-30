import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
    const loggedIn = Cookies.get("loggedIn");

    if (!loggedIn) {
        return <Navigate to="/login" replace />;
    }
    

    return children;

}
export default ProtectedRoute;