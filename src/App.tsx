import { Stack } from "@mui/material";
import { Footer } from "./components/blocks/Footer";
import { Navbar } from "./components/blocks/Navbar";
import { WorkWithUs } from "./components/blocks/WorkWithUs";
import { PersonalDataBlock } from "./components/blocks/personalData/PersonalDataBlock";
import { WorkExperienceBlock } from "./components/blocks/workExperience/WorkExperienceBlock";
import { LanguagesBlock } from "./components/blocks/languages/LanguagesBlock";
import { AttachResumeBlock } from "./components/blocks/AttachResumeBlock";
import { SubmitBlock } from "./components/blocks/SubmitBlock";
import "./App.css";

function App() {
  return (
    <Stack maxWidth={339}>
      <Navbar />
      <WorkWithUs />
      <Stack px={1}>
        <PersonalDataBlock />
        <WorkExperienceBlock />
        <LanguagesBlock />
        <AttachResumeBlock />
        <SubmitBlock />
      </Stack>
      <Footer />
    </Stack>
  );
}

export default App;
