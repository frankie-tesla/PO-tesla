import { useState, useRef, useEffect } from "react";
import FileListWrapper from "../components/lists/FileListWrapper.tsx";
import useDriveQuery from "../hooks/useDriveQuery.tsx";
import { Favorite as FavoriteType } from "../apis/type";
import { useDataListsContext } from "../context/DataListsContext.tsx";
const Favorite = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const postPerPage = Math.ceil((ref.current?.clientHeight || 500) / 50);
  const {
    actions: { setList }
  } = useDataListsContext();
  useDataListsContext();
  const { getFavoriteList } = useDriveQuery();
  const [driveRequestData, setDriveRequestData] = useState<FavoriteType>({
    page: page,
    count: postPerPage,
    sort: "TIME",
    desc: true
  });

  useEffect(() => {
    setDriveRequestData({
      ...driveRequestData,
      page: page
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const { isLoading, data, isSuccess } = getFavoriteList(driveRequestData);
  useEffect(() => {
    console.log("Inside useEffect", isSuccess, data?.list);
    if (isSuccess) {
      setList(data.list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data?.list]);
  return (
    <FileListWrapper
      setDriveRequestData={setDriveRequestData}
      driveRequestData={driveRequestData}
      page={page}
      setPage={setPage}
      ref={ref}
      totalPage={Math.ceil((data?.totalCount ?? 10) / postPerPage)}
      isLoading={isLoading}
      datas={data?.list}
    />
  );
};

export default Favorite;
