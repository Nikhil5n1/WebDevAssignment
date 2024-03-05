import imgSrc1 from "../assets/Group46.png";
import imgSrc2 from "../assets/moptrologo.png";
import homeImg from "../assets/home.png";
import usersImg from "../assets/users.png";
import { NavLink } from "react-router-dom";

function EmployeeDashboard() {
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
        top: "200px",
        left: "15px",
        paddingLeft: "5px",
        width: '298px',
        height: '55px',
        /* UI Properties */
        background: "#212121",
        color: "#ffffff",
        fontSize: "20px",
        textAlign: "center",
        fontFamily: "Mulish",
        borderRadius: "20px",
        border: "none",
        backgroundColor: "rgba(26, 44, 44, 0.6)"
    };

    const dashStyle = {
        position: "absolute",
        top: "250px",
        left: "5px",
        backgroundColor: "#212121",
        height: "465px",
        width: "328px",
        justifyContent : "space-around",
        color :"white",
        paddingTop : "40px",
        borderRadius: "10px"
    };
    

    return (
        <div style={{position: "relative"}}>
            <img style={img1Style} src={imgSrc1} alt="img1" />
            <span style={digit}><span style={{color: "#36A546"}}>4</span></span>
            <img style={img2Style} src={imgSrc2} alt="logo" />
            <div style={{position:"relative"}} >
 
            <input type="text" placeholder="Employee Productivity Dashboard" style={inpStyle} disabled />
            <div style={dashStyle}>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div>Productivity on Monday</div>
                    <div style={{color: "rgba(54, 165, 70, 1)"}}>4%</div>
                </div>
                <div style={{height: "15px", width: "7px", backgroundColor: "rgba(54, 165, 70, 1)", borderRadius: "10px", position: "absolute", left: "20px", marginTop: "5px"}}></div>
                <br /><br /><br />
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div>Productivity on Tuesday</div>
                    <div style={{color: "rgba(54, 165, 70, 1)"}}>92%</div>
                </div>
                <div style={{height: "15px", width: "170px", backgroundColor: "rgba(54, 165, 70, 1)", borderRadius: "10px", position: "absolute", left: "20px", marginTop: "5px"}}></div>
                <br /><br /><br />
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div>Productivity on Wednesday</div>
                    <div style={{color: "rgba(54, 165, 70, 1)"}}>122%</div>
                </div>
                <div style={{height: "15px", width: "210px", backgroundColor: "rgba(54, 165, 70, 1)", borderRadius: "10px", position: "absolute", left: "20px", marginTop: "5px"}}></div>
                <br /><br /><br />
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div>Productivity on Thursday</div>
                    <div style={{color: "rgba(54, 165, 70, 1)"}}>93%</div>
                </div>
                <div style={{height: "15px", width: "165px", backgroundColor: "#36A546", borderRadius: "10px", position: "absolute", left: "20px", marginTop: "5px"}}></div>
                <br /><br /><br />
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div>Productivity on Friday</div>
                    <div style={{color: "rgba(54, 165, 70, 1)"}}>89%</div>
                </div>
                <div style={{height: "15px", width: "160px", backgroundColor: "rgba(54, 165, 70, 1)", borderRadius: "10px", position: "absolute", left: "20px", marginTop: "5px"}}></div>
                <br /><br /><br />
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div>Productivity on Saturday</div>
                    <div style={{color: "rgba(54, 165, 70, 1)"}}>98%</div>
                </div>
                <div style={{height: "15px", width: "170px", backgroundColor: "rgba(54, 165, 70, 1)", borderRadius: "10px", position: "absolute", left: "20px", marginTop: "5px"}}></div>
            </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly", position: "relative"}}>
                    <button style={{display: "inline-block", position: "absolute", top: "790px", left: "50px", backgroundColor: "rgba(15, 35, 35, 1)", paddingLeft: "8px"}}>
                        <NavLink to="/dashboard">
                            <img src={homeImg} style={{float: "left",marginRight: "0.5em",height: "40px",weight: "40px"}} />
                        </NavLink>
                    </button>
                    <button style={{display: "inline-block", position: "absolute", top: "790px", left: "200px", backgroundColor: "rgba(15, 35, 35, 1)", paddingLeft: "8px"}}>
                        <NavLink to="/users">
                        <img src={usersImg} style={{float: "left",marginRight: "0.5em",height: "40px",weight: "40px"}} />
                        </NavLink>
                    </button>
            </div>
        </div>
    );
}

export default EmployeeDashboard;