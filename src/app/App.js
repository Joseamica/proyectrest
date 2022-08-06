import "./App.css";
import { Grid } from "../components/";

function App() {
  return (
    <div className="bg-green-500 h-screen">
      <Grid className="bg-red-500 ">
        <div className="col-start-1 col-end-4">hola mundo</div>
      </Grid>
    </div>
  );
}

export default App;
