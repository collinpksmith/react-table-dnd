import React from 'react';
import { Grid, Container } from '@material-ui/core';
import TreatmentPlan from '../component/TreatmentPlan'
import Footer from '../component/Footer'
import Header from '../utils/header';

export default function Dasboard() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item style={{ flex: 1 }}>
          <Grid container direction="column">
            <Grid item>
              <Header />
            </Grid>

            <Grid item>
              <TreatmentPlan />
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
