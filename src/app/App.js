import "./App.css";
import { Grid, RestInfo } from "../components/";
import { Table } from "../pages/Table/Table";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { GlobalProvider, useGlobal } from "../store/Global.context";
import { LoadingProvider, useLoading } from "../store/Loading.context";

import { Loading } from "../components/ui/Loading";
import { useState } from "react";

function App({ children }) {
  const [loading, setLoading] = useState(false);

  const handleLoading = (state) => {
    setLoading(state);
  };

  //TODO useeffect que actualice el total del Context
  return (
    <div className="h-screen">
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Grid>
            <Table />

            <Outlet />
          </Grid>
        </>
      )}
    </div>
  );
}

export default App;
