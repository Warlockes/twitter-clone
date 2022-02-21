import { Container, Grid } from "@material-ui/core";
import React from "react";
import { RightSide } from "../../components/RightSide";
import { SideMenu } from "../../components/SideMenu";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Container className={styles["wrapper"]} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu />
        </Grid>
        <Grid sm={8} md={6} item>
          {children}
        </Grid>
        <Grid sm={3} md={3} item>
          <RightSide />
        </Grid>
      </Grid>
    </Container>
  );
};
