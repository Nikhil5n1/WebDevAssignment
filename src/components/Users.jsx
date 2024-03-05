import { useState } from "react";
import { NavLink } from "react-router-dom";

import imgSrc1 from "../assets/Group46.png";
import imgSrc2 from "../assets/moptrologo.png";
import homeImg from "../assets/home.png";
import usersImg from "../assets/users.png";

function Users() {
    // CSS
    const img1Style = {
        position: "absolute",
        top: "9px",
        left: "278px",
        // width: "28px",
        // height: "28px",
        background: "transparent url('img/cta 2 1.png') 0% 0% no-repeat padding-box",
        mixBlendMode: "normal",
        opacity: "1",
    };

    const img2Style = {
        position: "absolute",
        top: '104px',
        left: '140px',
        width: '71px',
        height: '70px',
        background: 'transparent url(\'img/moptro logo.png\') 0% 0% no-repeat padding-box',
        mixBlendMode: 'normal',
        opacity: 1
    };
    
    const digit = {
        /* Layout Properties */
        top: '90px',
        left: '200px',
        width: '27px',
        height: '27px',
        /* UI Properties */
        // border: "1px solid white",
        borderRadius: "50%",
        background: "#5E5E5EB5 0% 0% no-repeat padding-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        color: "#36A546",
    };

    const inpStyle = {
        /* Layout Properties */
        position: "absolute",
        top: '191px',
        left: '27px',
        width: '298px',
        height: '55px',
        /* UI Properties */
        background: "#212121",
        color: "#ffffff",
        fontSize: "25px",
        textAlign: "center",
        fontFamily: "Mulish",
        fontWeight: "bold",
        borderRadius: "20px",
        border: "none"
    };
    
    const users = [
        {
            empId: 1,
            name: "Arjun",
            dob: "16-11-2000",
            role: "Software Engineer"
        },
        {
            empId: 2,
            name: "Nikhil",
            dob: "16-11-2000",
            role: "General Manager"
        },
        {
            empId: 3,
            name: "John",
            dob: "16-11-2000",
            role: "Associate Engineer"
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return (
        <div style={{position: "relative"}}>
            <img style={img1Style} src={imgSrc1} alt="img1" />
            <span style={digit}><span style={{color: "#36A546"}}>4</span></span>
            <img style={img2Style} src={imgSrc2} alt="logo" />
            <form action="#">
                <input type="text" placeholder="Search with name" style={inpStyle}
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </form>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div style={{height: "490px", overflowY: "scroll"}}>
                {
                    filteredUsers.map((user) => {
                        return <div key={user.empId} style={{display: "flex", flexDirection: "column"}}>
                                    <br /><br />
                                    <div style={{backgroundColor: "#212121", color: "#ffffff", borderRadius: "20px", padding: "20px"}}>
                                        EMP ID : {user.empId} <br /><br />
                                        Name : {user.name} <br /><br />
                                        DOB : <span style={{color: "orange"}}>{user.dob}</span> <br /><br />
                                        Role : <span style={{color: "green"}}>{user.role}</span> <br /><br />
                                    </div>
                            </div>
                    })
                }
            </div>
            <br />
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <button style={{display: "inline-block", backgroundColor: "rgba(15, 35, 35, 1)", paddingLeft: "8px"}}>
                        <NavLink to="/dashboard">
                            <img src={homeImg} style={{float: "left",marginRight: "0.5em",height: "40px",weight: "40px"}} />
                        </NavLink>
                    </button>
                    <button style={{display: "inline-block", backgroundColor: "rgba(15, 35, 35, 1)", paddingLeft: "8px"}}>
                        <NavLink to="/users">
                            <img src={usersImg} style={{float: "left",marginRight: "0.5em",height: "40px",weight: "40px"}} />
                        </NavLink>
                    </button>
                </div>
        </div>
    );
}

export default Users;