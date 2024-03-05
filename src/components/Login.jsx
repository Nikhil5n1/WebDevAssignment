import { useEffect, useState } from "react";
import imageSrc from "../assets/Group3.png";
import { NavLink } from "react-router-dom";

function Login() {
    // styles
    const styles = {
        position: "absolute",
        top: "160px",
        left: "124px",
        width: "90px",
        height: "90px",
        background: "transparent url('assets/Group3.png') 0% 0% no-repeat padding-box",
        mixBlendMode: "normal",
        opacity: "1",
    };

    const einpStyle = {
        /* Layout Properties */
        position: "absolute",
        top: "336px",
        left: "41px",
        width: "238px",
        height: "42px",
        /* UI Properties */
        background: "#1F191966 0% 0% no-repeat padding-box",
        boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
        mixBlendMode: "normal",
        opacity: "1",
        border: "none",
        borderRadius: "20px",
        color: "#ffffff",
        paddingLeft: "15px"
    };

    const pinpStyle = {
        /* Layout Properties */
        position: "absolute",
        top: "403px",
        left: "41px",
        width: "238px",
        height: "42px",
        /* UI Properties */
        background: "#1F191966 0% 0% no-repeat padding-box",
        boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
        mixBlendMode: "normal",
        opacity: "1",
        border: "none",
        borderRadius: "20px",
        color: "#ffffff",
        paddingLeft: "15px"
    };

    const btnStyle = {
        position: "absolute",
        top: "492px",
        left: "41px",
        width: "250px",
        height: "42px",
        background: "transparent linear-gradient(180deg, #00FF2580 0%, #000000 100%, #36A54680 100%) 0% 0% no-repeat padding-box",
        mixBlendMode: "normal",
        border: "2px solid #8CFF0026",
        borderRadius: "20px",
        opacity: "1",
    };

    const fpStyle = {
        position: "absolute",
        top: "560px",
        left: "90px",
        width: "143px",
        height: "19px",
        textAlign: "center",
        font: "normal normal normal 15px/20px Mulish",
        letterSpacing: "0.02px",
        color: "green",
        opacity: "1",
    };

    const titleStyles = {
        position: "absolute",
        top: "267px",
        left: "88px",
        width: "146px",
        height: "20px",
        textAlign: "center",
        font: "normal normal normal 16px/21px Mulish",
        letterSpacing: "0.02px",
        color: "#36A546CC",
        opacity: "1",
    };

    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [error, setError] = useState(""); // State to hold error message
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const users = [
        {
            email: "John@gmail.com",
            password: "123456"
        },
        {
            email: "nikhil.merugu02@gmail.com",
            password: "nikhil"
        },
        {
            email: "arjun@gmail.com",
            password: "arjun123"
        }
    ];

    function handleSubmit(e) {
        e.preventDefault();

        // Find user by email
        const user = users.find(user => user.email === userEmail);
        
        if (user) {
            // Check if password matches
            if (user.password === userPass) {
                // Login successful
                setIsLoggedIn(true);
                window.location = "/dashboard";
            } else {
                setError("Invalid password");
            }
        } else {
            setError("User not found");
        }
    }

    return (
        <div style={{ position: "relative" }}>
            <img style={styles} src={imageSrc} alt="logo" />
            <p style={titleStyles}>We are Electric</p>
            {/* Display error message if there is one */}
            {error && <p style={{color: "red", position: "absolute", top: "290px", left: "100px"}}>{error}</p>}
            {/* Redirect user to dashboard upon successful login */}
            {/* {isLoggedIn && <NavLink to="/dashboard">Dashboard</NavLink>} */}
            {/* Your other JSX */}
            <form onSubmit={handleSubmit}>
                <input
                    style={einpStyle}
                    type="email"
                    placeholder="E-mail"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <input
                    style={pinpStyle}
                    type="password"
                    placeholder="Password"
                    value={userPass}
                    onChange={(e) => setUserPass(e.target.value)}
                />
                <input
                    style={btnStyle}
                    type="submit"
                    value="Login"
                />
                <p style={fpStyle}>Forgot Password?</p>
            </form>
        </div>
    );
}

export default Login;