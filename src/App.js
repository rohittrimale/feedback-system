import logo from "./logo.svg";
import "./App.css";
import OverallRating from "./component/OverallRating";
import FeedbackForm from "./component/FeedbackForm";
import AllFeedback from "./component/AllFeedback";

function App() {
  return (
    <div style={{ alignContent: "center" }}>
      <h1 style={{ textAlign: "center" }}>FeedBack App</h1>
      <OverallRating />
      <FeedbackForm />
      <AllFeedback />
    </div>
  );
}

export default App;
