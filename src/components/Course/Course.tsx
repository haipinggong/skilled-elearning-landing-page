import {
  CardMedia,
  CardContent,
  Typography,
  Card,
  Button,
} from "@mui/material";
import styles from "./Course.styles";
export interface Props {
  img: string;
  title: string;
  description: string;
}

export const Course = ({ img, title, description }: Props) => {
  return (
    <Card sx={styles.card}>
      <CardMedia component="img" src={img} alt={title} sx={styles.icon} />
      <CardContent sx={styles.content}>
        <Typography variant="h4" component="h3" sx={styles.title}>
          {title}
        </Typography>
        <Typography variant="body2" sx={styles.description}>
          {description}
        </Typography>
        <Button sx={styles.button}>Get Started</Button>
      </CardContent>
    </Card>
  );
};

export default Course;
