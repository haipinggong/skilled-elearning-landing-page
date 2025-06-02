import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import styles from "./ContentSection.styles";
import Course from "../Course/Course";
import courses from "../../data/courses.json";
import animationIcon from "../../assets/icon-animation.svg";
import designIcon from "../../assets/icon-design.svg";
import photographyIcon from "../../assets/icon-photography.svg";
import cryptoIcon from "../../assets/icon-crypto.svg";
import businessIcon from "../../assets/icon-business.svg";

type CourseIconKey =
  | "src/assets/icon-animation.svg"
  | "src/assets/icon-design.svg"
  | "src/assets/icon-photography.svg"
  | "src/assets/icon-crypto.svg"
  | "src/assets/icon-business.svg";

const courseIcons: Record<CourseIconKey, string> = {
  "src/assets/icon-animation.svg": animationIcon,
  "src/assets/icon-design.svg": designIcon,
  "src/assets/icon-photography.svg": photographyIcon,
  "src/assets/icon-crypto.svg": cryptoIcon,
  "src/assets/icon-business.svg": businessIcon,
};

export const ContentSection = () => {
  return (
    <Box component="section" sx={styles.wrapper}>
      <Grid container rowSpacing={7.5} columnSpacing={4}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={styles.checkoutCard}>
            <CardContent sx={styles.checkoutCardContent}>
              <Typography variant="h4" component="h2">
                Check out our most popular courses!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {courses.map((course) => (
          <Grid key={course.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Course
              img={courseIcons[course.img as CourseIconKey]}
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
