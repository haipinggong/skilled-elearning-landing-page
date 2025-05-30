import Box from "@mui/material/Box";
import styles from "./Hero.styles";
import { Typography, Button } from "@mui/material";
import imageHeroMobile from "../../assets/image-hero-mobile.png";
import imageHeroTablet from "../../assets/image-hero-tablet.png";
import imageHeroDesktop from "../../assets/image-hero-desktop.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const image = isMobile
    ? imageHeroMobile
    : isTablet
    ? imageHeroTablet
    : imageHeroDesktop;

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
      <Box component="img" src={image} alt="Hero" sx={styles.image} />
    </Box>
  );
};

export default Hero;
