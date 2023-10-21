import { useState, useRef, useEffect } from "react";
import FileListWrapper from "../components/lists/FileListWrapper.tsx";
import useDriveQuery from "../hooks/useDriveQuery.tsx";
import { Favorite as FavoriteType } from "../apis/type";
import { useSearchStateContext } from "../context/SearchStateContext.tsx";
import { useDataListsContext } from "../context/DataListsContext.tsx";

const Search = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const postPerPage = Math.ceil((ref.current?.clientHeight || 500) / 50);
  const {
    state,
    actions: { setState }
  } = useSearchStateContext();
  const { lists } = useDataListsContext();
  const { getSearchFile } = useDriveQuery();
  const [driveRequestData, setDriveRequestData] = useState<FavoriteType>({
    page: state.page,
    count: postPerPage,
    sort: state.sort,
    desc: state.desc
  });

  const { isLoading, data, refetch } = getSearchFile(state);

  useEffect(() => {
    setDriveRequestData({
      ...driveRequestData,
      page: state.page,
      sort: state.sort,
      desc: state.desc
    });
    console.log("값 바뀜", state);

    if (state.isClick) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <FileListWrapper
      setDriveRequestData={setDriveRequestData}
      driveRequestData={driveRequestData}
      page={page}
      setPage={setPage}
      ref={ref}
      totalPage={Math.ceil(10 / postPerPage)}
      isLoading={isLoading}
      datas={data?.list ?? lists}
    />
  );
};

export default Search;
