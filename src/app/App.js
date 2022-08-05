import "./App.css";
import { Grid } from "../components/";

function App() {
  return (
    <div className="bg-green-500 h-screen">
      <Grid.Mobile className="bg-red-500 ">
        <div className="bg-blue-500 col-start-1 col-end-4">hola mundo</div>
      </Grid.Mobile>
    </div>
  );
}

export default App;
