import "./Main.scss";
import {data} from "../../helper/data.js"
import "./Card.jsx"
import Card from "./Card.jsx";

const Main = () => {

  return (
    <div className="card-container">
      {data.map((item) => <Card {...item} />
      )}
    </div>
  );
};

export default Main;
