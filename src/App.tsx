import { useState } from "react";
import { Stack } from "@mui/material";
import { Footer } from "./components/blocks/Footer";
import { Navbar } from "./components/blocks/Navbar";
import { WorkWithUs } from "./components/blocks/WorkWithUs";
import { PersonalDataBlock } from "./components/blocks/personalData/PersonalDataBlock";
import { WorkExperienceBlock } from "./components/blocks/workExperience/WorkExperienceBlock";
import { LanguagesBlock } from "./components/blocks/languages/LanguagesBlock";
import { AttachResumeBlock } from "./components/blocks/AttachResumeBlock";
import { SubmitBlock } from "./components/blocks/SubmitBlock";
import { SuccessSubmition } from "./components/popup/SuccessSubmition";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  return (
    <Stack maxWidth={339}>
      <SuccessSubmition open={submitted} onAccept={() => setSubmitted(false)} />
      <Navbar />
      <WorkWithUs />
      <Stack px={1}>
        <PersonalDataBlock />
        <WorkExperienceBlock />
        <LanguagesBlock />
        <AttachResumeBlock />
        <SubmitBlock onSubmit={() => setSubmitted(true)} />
      </Stack>
      <Footer />
    </Stack>
  );
}

export default App;
