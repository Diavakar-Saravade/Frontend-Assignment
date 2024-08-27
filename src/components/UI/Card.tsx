import { Box, Grid, Card as MuiCard } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PieChart from './PieChart';
import {
  cloudColor,
} from '../../mocks/commonmocks';
type Props = {
  title: string;
};

export default function Card({ title }: Props) {
  return (
    <MuiCard sx={{ width: '100%', height: '70%', borderRadius: '12px' }}>
      <CardContent>
        <Grid container>
          <Grid item>
            <Typography
              sx={{ fontSize: 14, fontWeight: 'bold' }}
              color='text.secondary'
              gutterBottom
            >
              {title}
            </Typography>
          </Grid>

          <Grid item sx={{ marginTop: '-10px' }}>
            <PieChart color={cloudColor} />
          </Grid>
        </Grid>
      </CardContent>
    </MuiCard>
  );
}
