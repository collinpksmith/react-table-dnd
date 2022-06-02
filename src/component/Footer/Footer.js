import React from 'react'
import {
  Box,
  Grid,
  Button,
} from '@material-ui/core'
import LocalPrintshopOutlinedIcon from '@material-ui/icons/LocalPrintshopOutlined'
import AddIcon from '@material-ui/icons/Add'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const Footer = () => {
  return (
    <Box
      style={{
        height: '250px',
        backgroundColor: '#f0f1f2'
      }}
    >
      <Grid container style={{ height: '100%' }}>
        <Grid item xs={1} style={{ display: 'flex' }}>
          <Box style={{ padding: '20px', display: 'flex', alignItems: 'flex-end' }}>
            <LocalPrintshopOutlinedIcon style={{ fontSize: '50px' }} />
          </Box>
        </Grid>

        <Grid item xs={8} style={{ display: 'flex', justifyContent: 'center' }}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant='contained'
              style={{
                color: 'white',
                backgroundColor: '#53585f'
              }}
              startIcon={<AddIcon />}
            >
              SEANCES INTERMEDIAIRES
            </Button>
          </Box>
        </Grid>

        <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <Box style={{ padding: '20px', display: 'flex', alignItems: 'flex-end' }}>
            <AddCircleIcon style={{ fontSize: '40px', paddingRight: '10px' }} />
            <Button
              variant='contained'
              style={{
                color: 'white',
                backgroundColor: '#85bef5',
                width: '200px'
              }}
            >
              DEVIS
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
