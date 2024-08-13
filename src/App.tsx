import { Button } from "@mui/material";
import "./App.css";

export const App = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <h1>
            You Deserved <br /> Better
          </h1>
          <div>lets make this right</div>
        </div>
        <div className="circle">
          <div>Today</div>
          <div>
            <div>Tuesday</div>
            <div>August 11th</div>
          </div>
        </div>
      </div>
      <div className="infoPage">
        <div>
          <h3>Lets run this back</h3>
          <p>
            the ball is completely in your court, but lets experience August
            11th properly.
          </p>
        </div>
        <div className="time">
          <div>
            <h3>Today at 2:00pm</h3>
          </div>
          <div>please select</div>
        </div>
        <div className="buttonGroup">
          <Button variant="text">
            <a href="sms:+7692433180?body:I chose none">None</a>
          </Button>
          <Button variant="contained">
            <a href="sms:+7692433180?body:I want the full experience  and I'll be ready by 2:00">
              Full*
            </a>
          </Button>
          <Button variant="contained">
            <a href="sms:+7692433180?body:No food, just partial and I'll be ready by 2:00">
              Partial**
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
