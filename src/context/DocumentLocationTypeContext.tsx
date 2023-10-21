import { createContext, useContext, useState, ReactNode, useMemo } from "react";
type Props = {
  children: ReactNode;
};
type DocumentLocationType = {
  type: string;
  actions: {
    setType: (text: string) => void;
  };
};
const DocumentLocationTypeContext = createContext<DocumentLocationType>({
  type: "My Polaris Drive",
  actions: {
    setType: () => {}
  }
});

export const DocumentLocationTypeContextProvider = ({ children }: Props) => {
  const [type, setType] = useState("My Polaris Drive");

  const actions = useMemo(
    () => ({
      setType: (text: string) => {
        return setType(text);
      }
    }),
    []
  );

  return (
    <DocumentLocationTypeContext.Provider value={{ type, actions }}>{children}</DocumentLocationTypeContext.Provider>
  );
};

export const useDocumentLocationTypeContext = () => useContext(DocumentLocationTypeContext);
