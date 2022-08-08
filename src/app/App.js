import "./App.css";
import { Grid, RestInfo } from "../components/";
import { Table } from "../pages/Table/Table";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

function App({ children }) {
  return (
    <div className="h-screen">
      <Grid>
        <Header />
        <Table />

        <Outlet />
      </Grid>
    </div>
  );
}

export default App;
