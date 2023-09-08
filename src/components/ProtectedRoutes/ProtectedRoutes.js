import {Navigate} from 'react-router-dom'
import {useAuth} from "../../contexts/AuthContext";


const ProtectedRoutes = ({children}) => {
    const {user} = useAuth()

    if(!user){
        return <Navigate to='/auth' />
    }
    return children
}

export default ProtectedRoutes