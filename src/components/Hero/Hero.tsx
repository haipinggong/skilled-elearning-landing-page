import Box from "@mui/material/Box";
import styles from "./Hero.styles";
import { Typography, Button } from "@mui/material";
import imageHeroMobile from "../../assets/image-hero-mobile.png";

export const Hero = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="section" sx={styles.contentWrapper}>
        <Box sx={styles.content}>
          <Typography variant="h1">Maximize skills, minimize budget</Typography>
          <Typography>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </Typography>
          <Button variant="contained">Get Started</Button>
        </Box>
        <Box component="img" src={imageHeroMobile} alt="Hero" />
      </Box>
    </Box>
  );
};

export default Hero;
