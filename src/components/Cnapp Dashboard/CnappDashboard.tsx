import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Select,
  MenuItem,
  Box,
  Divider,
  Grid,
} from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { Add as AddIcon } from '@mui/icons-material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SyncIcon from '@mui/icons-material/Sync';
const CnappDashboard = () => {
  return (
    <Grid container alignItems='center'>
      <Typography
        variant='h6'
        sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold' }}
      >
        CNAPP Dashboard
      </Typography>

      <Button variant='outlined' sx={{ marginRight: 2 }}>
        Add Widget
        <AddIcon />
      </Button>

      <Button
        variant='outlined'
        sx={{
          width: '10px',
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 1,
          marginRight: 2,
        }}
      >
        <SyncIcon />
      </Button>

      <Button
        variant='outlined'
        sx={{
          width: '10px',
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 1,
          marginRight: 2,
        }}
      >
        <MoreVertIcon />
      </Button>

      <Button
        variant='outlined'
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderColor: 'blue',
          color: 'blue',
          padding: '6px 16px',
          borderRadius: '8px',
          textTransform: 'none',
          '&:hover': {
            borderColor: 'lightblue',
            backgroundColor: 'aliceblue',
          },
        }}
      >
        <WatchLaterIcon />
        <Divider
          orientation='vertical'
          flexItem
          sx={{
            height: '30px',
            borderColor: 'lightblue',
            borderWidth: '1px',
            marginX: '5px',
          }}
        />
        <Typography
          sx={{ marginLeft: '8px', color: 'blue', fontWeight: '500' }}
        >
          Last 2 days
        </Typography>
        <ExpandMoreIcon />
      </Button>
    </Grid>
  );
};
export default CnappDashboard;
