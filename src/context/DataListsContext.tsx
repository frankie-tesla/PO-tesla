import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { ListData } from "../apis/type";
type Props = {
  children: ReactNode;
};
type DataLists = {
  lists: ListData[];
  actions: {
    setList: (lists: ListData[]) => void;
  };
};
const DataListsContext = createContext<DataLists>({
  lists: [],
  actions: {
    setList: () => {}
  }
});

export const DataListsContextProvider = ({ children }: Props) => {
  const [lists, setLists] = useState<ListData[]>([]);

  const actions = useMemo(
    () => ({
      lists: lists,
      setList: (lists: ListData[]) => {
        return setLists([...lists]);
      }
    }),
    [lists]
  );

  return <DataListsContext.Provider value={{ lists, actions }}>{children}</DataListsContext.Provider>;
};

export const useDataListsContext = () => useContext(DataListsContext);
