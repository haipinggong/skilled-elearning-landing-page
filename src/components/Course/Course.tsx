import {
  CardMedia,
  CardContent,
  Typography,
  Card,
  CardActions,
  Button,
} from "@mui/material";

export interface Props {
  img: string;
  title: string;
  description: string;
}

export const Course = ({ img, title, description }: Props) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={img} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get Started</Button>
      </CardActions>
    </Card>
  );
};

export default Course;
