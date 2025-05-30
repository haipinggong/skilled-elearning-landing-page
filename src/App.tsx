import Box from "@mui/material/Box";
import styles from "./App.styles";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { ContentSection } from "./components/ContentSection/ContentSection";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Box component="main" sx={styles.main}>
        <Hero />
        <ContentSection />
      </Box>
      <Footer />
    </>
  );
}

export default App;
