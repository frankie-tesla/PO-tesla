import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { SearchFileReq } from "../apis/type";
type Props = {
  children: ReactNode;
};
type DataLists = {
  state: SearchFileReq & { isClick: boolean };
  actions: {
    setState: (datas: SearchFileReq & { isClick: boolean }) => void;
  };
};
const SearchStateContext = createContext<DataLists>({
  state: {
    keyword: "",
    parentId: "",
    fileType: "ALL",
    menuType: "DRIVE",
    page: 1,
    count: 10,
    sort: "TIME",
    desc: true,
    isClick: false
  },
  actions: {
    setState: () => {}
  }
});

export const SearchStateContextProvider = ({ children }: Props) => {
  const [state, setState] = useState<SearchFileReq & { isClick: boolean }>({
    keyword: "",
    parentId: "5",
    fileType: "ALL",
    menuType: "DRIVE",
    page: 1,
    count: 10,
    sort: "TIME",
    desc: true,
    isClick: false
  });

  const actions = useMemo(
    () => ({
      setState: (state: SearchFileReq & { isClick: boolean }) => {
        return setState({ ...state });
      }
    }),
    []
  );

  return <SearchStateContext.Provider value={{ state, actions }}>{children}</SearchStateContext.Provider>;
};

export const useSearchStateContext = () => useContext(SearchStateContext);
