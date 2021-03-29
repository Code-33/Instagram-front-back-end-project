import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}))

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Grid container
        justify="center">
            <Main/>
        </Grid>
      </div>
    </div>
  );
}

export default App;
