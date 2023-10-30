import { createContext, useContext, useState, ReactNode } from "react";
type Props = {
  children: ReactNode;
};
type DataLists = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};
const SearchStateContext = createContext<DataLists>({
  keyword: "",
  setKeyword: () => {}
});

export const SearchStateContextProvider = ({ children }: Props) => {
  const [keyword, setKeyword] = useState("");

  return <SearchStateContext.Provider value={{ keyword, setKeyword }}>{children}</SearchStateContext.Provider>;
};

export const useSearchStateContext = () => useContext(SearchStateContext);
