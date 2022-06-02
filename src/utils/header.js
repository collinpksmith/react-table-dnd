import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export default function Header() {
  return (
    <Grid container direction="column">
      {/* for user info */}
      <Grid item>
        <Grid
          container
          style={{ padding: '0 2em' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <InsertInvitationIcon style={{ fontSize: '3.5rem' }} />
              </Grid>
              <Grid item>
                <AccountCircleIcon style={{ fontSize: '5rem' }} />
              </Grid>
              <Grid item>
                <Typography
                  style={{ fontWeight: 'normal' }}
                  variant="h4"
                  align="center"
                >
                  NOM <br /> PRENOM
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  style={{
                    borderRadius: 0,
                    color: '#C82506',
                    borderColor: '#C82506',
                    padding: '5px 20px',
                  }}
                  variant="outlined"
                >
                  precaution medicale
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Button
                  style={{
                    borderRadius: 0,
                    background: '#E1E1E1',
                    padding: '5px 20px',
                  }}
                  variant="outlined"
                >
                  Dr x(selectionner)
                </Button>
              </Grid>
              <Grid item>
                <AccountCircleIcon style={{ fontSize: '3.5rem' }} />
              </Grid>
              <Grid item>
                <ExitToAppIcon style={{ fontSize: '3.5rem' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* for tabs */}
      <Grid item style={{ marginTop: '15px' }}>
        <Grid container>
          <Grid item xs style={{ flex: 1 }}>
            <div
              style={{
                width: '100%',
                padding: '10px 0px',
                backgroundColor: '#53585F',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: 'bold', color: '#fff' }}
              >
                fiche patient
              </Typography>
            </div>
          </Grid>
          <Grid item xs style={{ flex: 1, marginLeft: '20px' }}>
            <div
              style={{
                width: '100%',
                padding: '10px 0px',
                backgroundColor: '#53585F',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: 'bold', color: '#fff' }}
              >
                Dashboard
              </Typography>
            </div>
          </Grid>
          <Grid item xs style={{ flex: 1, marginLeft: '20px' }}>
            <div
              style={{
                width: '100%',
                padding: '10px 0px',
                backgroundColor: '#53585F',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: 'bold', color: '#fff' }}
              >
                RX
              </Typography>
            </div>
          </Grid>
          <Grid item xs style={{ flex: 1, marginLeft: '20px' }}>
            <div
              style={{
                width: '100%',
                padding: '10px 0px',
                backgroundColor: '#53585F',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: 'bold', color: '#fff' }}
              >
                imagerie
              </Typography>
            </div>
          </Grid>
          <Grid item style={{ flex: 1, marginLeft: '20px' }}>
            <div
              style={{
                width: '100%',
                padding: '10px 0px',
                backgroundColor: '#C82506',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: 'bold', color: '#fff' }}
              >
                plans traitement
              </Typography>
            </div>
          </Grid>
          <Grid item style={{ flex: 1, marginLeft: '20px' }}>
            <div
              style={{
                width: '100%',
                padding: '10px 0px',
                backgroundColor: '#53585F',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: 'bold', color: '#fff' }}
              >
                historque
              </Typography>
            </div>
          </Grid>
          <Grid item style={{ flex: 1, marginLeft: '20px' }}>
            <div
              style={{
                width: '100%',
                padding: '10px 0px',
                backgroundColor: '#53585F',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: 'bold', color: '#fff' }}
              >
                devis
              </Typography>
            </div>
          </Grid>
          <Grid item style={{ flex: 1, marginLeft: '20px' }}>
            <div
              style={{
                width: '100%',
                padding: '10px 0px',
                backgroundColor: '#53585F',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: 'bold', color: '#fff' }}
              >
                ordonnances
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
