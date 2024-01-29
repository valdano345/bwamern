import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import Example from "./pages/Example";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"component={LandingPage} />
          <Route exact path="/properties/:id" component={DetailsPage} />
          <Route path="/example" component={Example} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
