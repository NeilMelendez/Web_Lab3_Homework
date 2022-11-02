import React from "react";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
const index = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Profile</h1>
        <p>Vo Nguyen Dang Khoa - 19521704</p>{" "}
        <Paper
          style={{
            width: "100px",
            marginLeft: "70%",
            backgroundColor: "white",
          }}
        >
          <MenuList style={{ color: "black", cursor: "pointer" }}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>
      </div>
      <br></br>

      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "10%" }}>
          <h2>Quote</h2>
          <p>You have good taste, my friend</p>
        </div>
        <div style={{ marginLeft: "15%" }}>
          <img src="https://www.purina.co.uk/sites/default/files/styles/ttt_image_510/public/2022-02/GettyImages-1073093932.jpg?itok=bTzsMMA1"></img>
        </div>
        <div style={{ marginLeft: "10%" }}>
          <h2>Detail</h2>
          <div style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold", marginRight: "10px" }}>Name: </p>
            <p>Khoa</p>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold", marginRight: "10px" }}>Age: </p>
            <p>21</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
