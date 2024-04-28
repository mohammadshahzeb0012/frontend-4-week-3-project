import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// profile={'profile'}
const Redirect = ({ profile }) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/profile");
    }, [])

    return null
}

export default Redirect
