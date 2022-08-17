import React from "react";
import { Grid } from "../../components";
import { Header } from "../../components/Header/Header";
import { MenuHeader } from "../../components/Header/MenuHeader";
import { Loading } from "../../components/ui/Loading";
import { BlockSkeleton } from "../../components/ui/Skeleton/BlockSkeleton";

export const Menu = () => {
  return (
    <>
      <MenuHeader />
      <Grid>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus ex
        deserunt nisi dignissimos consequatur eum atque, amet at perferendis
        nesciunt odio assumenda inventore laboriosam, illum corporis asperiores
        quam eius.
        {/* <BlockSkeleton /> */}
        <Loading />
      </Grid>
    </>
  );
};
