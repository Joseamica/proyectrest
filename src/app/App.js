import "./App.css";
import { Grid, RestInfo } from "../components/";
import { Table } from "../pages/Table/Table";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { GlobalProvider } from "../store/Global.context";

function App({ children }) {
  return (
    <div className="h-screen">
      <GlobalProvider>
        <Grid>
          <Header />
          <Table />

          <Outlet />
        </Grid>
      </GlobalProvider>
    </div>
  );
}

export default App;
