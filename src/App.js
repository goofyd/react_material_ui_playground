import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import AudioComp from './Components/AudioComponent';
import SamplePage from './pages/SamplePage';

const App = () => {

  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sample">Sample</Link>
          </li>
          <li>
            <Link to="/piano-sample">Music Instrument</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/sample">
            <SamplePage />
          </Route>
          <Route path="/piano-sample">
            <AudioComp />
          </Route>
        </Switch>
      </Router>
    </>
  )

}

export default App;
