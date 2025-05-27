import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import styles from "./ContentSection.styles";

export const ContentSection = () => {
  return (
    <Box component="section" sx={styles.wrapper}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={styles.checkoutCard}>
            <CardContent sx={styles.checkoutCardContent}>
              <Typography variant="h4" component="h2">
                Check out our most popular courses!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>Item 2</Grid>
        <Grid size={{ xs: 12, md: 6 }}>Item 3</Grid>
        <Grid size={{ xs: 12, md: 6 }}>Item 4</Grid>
        <Grid size={{ xs: 12, md: 6 }}>Item 5</Grid>
        <Grid size={{ xs: 12, md: 6 }}>Item 6</Grid>
      </Grid>
    </Box>
  );
};

export default ContentSection;
