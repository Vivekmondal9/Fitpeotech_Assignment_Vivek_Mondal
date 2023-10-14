import "../dash/index.css";
import myimage from "../dash/myimage.jpg";



function Dashboard() {
    return (
        <div className="main-div">
            <div className="left-div">
                <h2><i class="fa fa-codepen" style={{ fontSize: "30px", marginRight: "5px" }}></i>Dashboard</h2>
                <span className="options">
                    <p><i className="fa fa-dashboard" style={{ fontSize: "20px", marginRight: "5px" }}></i>Dashboard</p>
                    <p><i className="fa fa-codiepie" style={{ fontSize: "20px", marginRight: "5px" }}></i>Product</p>
                    <p><i className="fa fa-user" style={{ fontSize: "20px", marginRight: "5px" }}></i>Customers</p>
                    <p><i className="fa fa-inr" style={{ fontSize: "20px", marginRight: "5px" }}></i>Income</p>
                    <p><i className="fa fa-bullhorn" style={{ fontSize: "20px", marginRight: "5px" }}></i>Promote</p>
                    <p><i className="fa fa-question" style={{ fontSize: "20px", marginRight: "5px" }}></i>Help</p>
                </span>

                {/* <span className="bottom">
                    <img src={myimage} style={{height:"30px", borderRadius:"50%"}}></img>

                    <h3 className="nametag">Vivek Mondal</h3>
                    <i class="arrow down"></i>

                </span> */}

<div className="bottom">
<img src={myimage} style={{height:"30px", borderRadius:"50%"}}></img>
    <a href="#" class="w3-bar-item w3-button">Vivek Mondal</a>
    <div class="w3-dropdown-hover w3-hover-orange">
      <button class="w3-button w3-hover-orange"><i class="fa fa-caret-down"></i></button>
      <div class="w3-dropdown-content w3-bar-block w3-white w3-card-4">
        <a href="#" class="w3-bar-item w3-button">Link 1</a>
        <a href="#" class="w3-bar-item w3-button">Link 2</a>
        <a href="#" class="w3-bar-item w3-button">Link 3</a>
      </div>
    </div>
  </div>
            </div>

            <div className="right-div">

            </div>
        </div>
    )
}

export default Dashboard;