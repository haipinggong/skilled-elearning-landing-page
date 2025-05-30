import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import styles from "./ContentSection.styles";
import Course from "../Course/Course";
import courses from "../../data/courses.json";

export const ContentSection = () => {
  return (
    <Box component="section" sx={styles.wrapper}>
      <Grid container spacing={4}>
        <Grid size={{ sm: 12, md: 6, lg: 4 }}>
          <Card sx={styles.checkoutCard}>
            <CardContent sx={styles.checkoutCardContent}>
              <Typography variant="h4" component="h2">
                Check out our most popular courses!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {courses.map((course) => (
          <Grid size={{ sm: 12, md: 6, lg: 4 }}>
            <Course
              key={course.id}
              img={course.img}
              title={course.title}
              description={course.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentSection;
