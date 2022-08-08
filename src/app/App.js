import "./App.css";
import { Grid, RestInfo } from "../components/";
import { Table } from "../pages/Table/Table";

function App({ children }) {
  return (
    <div className="h-screen">
      <Grid>
        <div className="col-start-1 col-end-5 text-2xl">Header</div>
        <div>Info / Men</div>
        {children}
      </Grid>
    </div>
  );
}

export default App;
