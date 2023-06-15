import { Container, TextField, Typography } from "@mui/material";
import React from "react";
import "./Petrol.css"

const Petrol = () => {
  return (
    <div className="petrolMain">
      <div>
        <h1>Petrol</h1>
      </div>
      <form>
        <div className="oldReading">
          <Container>
            <Typography variant="h6">Old Reading</Typography>
          </Container>
          <Container>
            {["Pump1", "Pump2", "Pump 3", "Pump 4"].map((text, index) => (
              <TextField id="outlined-number" label={text} type="number" />
            ))}
          </Container>
        </div>
        <div className="newReading">
          <Container>
            <Typography variant="h6">New Reading</Typography>
          </Container>
          <Container>
            {["Pump1", "Pump2", "Pump 3", "Pump 4"].map((text, index) => (
              <TextField id="outlined-number" label={text} type="number" />
            ))}
          </Container>
        </div>
        <div className="testReading">
          <Container>
            <Typography variant="h6">Testing</Typography>
          </Container>
          <Container>
            {["Pump1", "Pump2", "Pump 3", "Pump 4"].map((text, index) => (
              <TextField id="outlined-number" label={text} type="number" />
            ))}
          </Container>
        </div>
        <div className="totalReading">
          <Container>
            <Typography variant="h6">Total Reading</Typography>
          </Container>
          <Container>
            {["Pump1", "Pump2", "Pump 3", "Pump 4"].map((text, index) => (
              <TextField id="outlined-number" label={text} type="number" />
            ))}
          </Container>
        </div>
        <Container>
        <div className="bottomPetrol">
        <div className="salesDiv">
          <div className="grandSales">
            <Typography variant="h5">Grand sales</Typography>
            <TextField id="outlined-number" label={""} type="number" />
          </div>
          <div className="netSales">
            <Typography variant="h5">Net sales</Typography>
            <TextField id="outlined-number" label={""} type="number" />
          </div>
        </div>
        <div className="amt-tstDiv">
          <div className="amount">
            <Typography variant="h5">Amount</Typography>
            <TextField id="outlined-number" label={""} type="number" />
          </div>
          <div className="testing">
            <Typography variant="h5">Testing</Typography>
            <TextField id="outlined-number" label={""} type="number" />
          </div>
        </div>
        </div>
        </Container>
      </form>
    </div>
  );
};

export default Petrol;
