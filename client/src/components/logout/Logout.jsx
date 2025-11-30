import { useContext } from "react"
import UserContext from "../../contexts/UserContext"
import { useNavigate } from "react-router"

export default function Logout() {
    const { logoutHandler } = useContext(UserContext)

    const navigate = useNavigate()

    logoutHandler()
        .then(() => navigate('/'))
        .catch(() => {
            alert(`Login Problem!`)
            navigate('/')
        })

    return (null)
}