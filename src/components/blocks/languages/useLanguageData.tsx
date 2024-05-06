export const useLanguageData = () => {
  const languageOptions = [
    {
      value: "es",
      label: "Español",
    },
    {
      value: "en",
      label: "Inglés",
    },
    {
      value: "pt",
      label: "Portugués",
    },
    {
      value: "de",
      label: "Alemán",
    },
  ];

  const levelOptions = [
    {
      value: "basico",
      label: "Básico",
    },
    {
      value: "intermedio",
      label: "Intermedio",
    },
    {
      value: "avanzado",
      label: "Avanzado",
    },
  ];

  const getLabel = (
    options: { value: string; label: string }[],
    value: string
  ): string | undefined => {
    const index = options.findIndex((e) => e.value === value);
    if (index === -1) return undefined;
    else return options[index].label;
  };

  const getLanguageLabel = (value: string) => getLabel(languageOptions, value);
  const getLevelLabel = (value: string) => getLabel(levelOptions, value);

  return { languageOptions, levelOptions, getLanguageLabel, getLevelLabel };
};
