import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
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

type WorkExperienceFields = {
  companyName: string;
  position: string;
  from: string;
  to: string;
};

type LanguageFields = {
  language: string;
  level: string;
};

type FormFields = {
  fullname: string;
  birthday: string;
  cellphone: string;
  workExperience: WorkExperienceFields[];
  language: LanguageFields[];
};

const useFormatter = () => {
  const formatPersonalData = (data: FormFields): string => {
    let result = "";
    result += `Nombre Completo: ${data.fullname}.\n`;
    result += `Fecha de Cumpleaños: ${data.birthday}.\n`;
    result += `Número de Celular: ${data.cellphone}\n`;
    return result;
  };

  const formatWorkExperience = (data: FormFields): string => {
    let result = "";
    data.workExperience.forEach((experience) => {
      result += `Compañia: ${experience.companyName}.\n`;
      result += `Puesto: ${experience.position}.\n`;
      result += `Desde: ${experience.from}.\n`;
      result += `Hasta: ${experience.to}.\n`;
    });
    return result;
  };

  const formatLanguages = (data: FormFields): string => {
    let result = "";
    data.language.forEach((language) => {
      result += `Idioma: ${language.language}.\n`;
      result += `Nivel: ${language.level}.\n`;
    });
    return result;
  };

  return { formatPersonalData, formatWorkExperience, formatLanguages };
};

function App() {
  const methods = useForm<FormFields>();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { formatPersonalData, formatWorkExperience, formatLanguages } =
    useFormatter();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    console.log(formatPersonalData(data));
    console.log(formatWorkExperience(data));
    console.log(formatLanguages(data));
    setSubmitted(true);
  };

  return (
    <FormProvider {...methods}>
      <Stack maxWidth={376}>
        <SuccessSubmition
          open={submitted}
          onAccept={() => setSubmitted(false)}
        />
        <Navbar />
        <WorkWithUs />
        <Stack px={1}>
          <PersonalDataBlock />
          <WorkExperienceBlock />
          <LanguagesBlock />
          <AttachResumeBlock />
          <SubmitBlock onSubmit={methods.handleSubmit(onSubmit)} />
        </Stack>
        <Footer />
      </Stack>
    </FormProvider>
  );
}

export default App;
