import Box from "@mui/material/Box";
import styles from "./Hero.styles";
import { Typography, Button } from "@mui/material";
import imageHeroMobile from "../../assets/image-hero-mobile.png";

export const Hero = () => {
  return (
    <Box component="section" sx={styles.contentWrapper}>
      <Box sx={styles.content}>
        <Box sx={styles.text}>
          <Typography variant="h1">Maximize skills, minimize budget</Typography>
          <Typography sx={styles.description}>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </Typography>
        </Box>
        <Button variant="contained" sx={styles.button}>
          Get Started
        </Button>
      </Box>
      <Box component="img" src={imageHeroMobile} alt="Hero" />
    </Box>
  );
};

export default Hero;
