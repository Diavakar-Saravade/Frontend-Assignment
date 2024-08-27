import { Grid, Typography } from '@mui/material';
import Card from '../UI/Card';
import { titles, titleassestment ,widget } from '../../mocks/commonmocks';
const CspmDashboard = () => {
  return (
    <Grid container direction='column' spacing={2} sx={{ p: 2 }}>
      {/* CSPM Dashboard Title Row */}
      <Grid item xs={12}>
        <Typography variant='h6' sx={{ color: 'black', fontWeight: 'bold' }}>
          CSPM Dashboard
        </Typography>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card title={titles} />
      </Grid>
      <Grid item xs={4}>
        <Card title={titleassestment} />       
      </Grid>
      <Grid item xs={4}>
        <Card title={widget} />
      </Grid>
    </Grid>
    </Grid>
  );
};

export default CspmDashboard;
