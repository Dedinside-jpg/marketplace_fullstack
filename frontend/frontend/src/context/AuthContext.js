import {createContext, useState, useEffect} from "react"
import jwt_code from "jwt-decode"
import {useHistory} from "react-router-dom"

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => {
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    })

    const [user, setUser] = useState(() => {
        localStorage.getItem("authTokens")
            ? jwt_decode(localStorage.getItem("authTokens"))
            : null
    })

    const [loading, setLoading] = useState(true)

    const history = useHistory()



}


