import { useState, useEffect } from "react";
import FileListWrapper from "../components/lists/FileListWrapper.tsx";
import useDriveQuery from "../hooks/useDriveQuery.tsx";
import { Favorite as FavoriteType } from "../apis/type";
import { useSearchStateContext } from "../context/SearchStateContext.tsx";
import storage from "../utils/localstorage.ts";
import usePagenation from "../hooks/usePagenation.tsx";
const Favorite = () => {
  const [page, setPage] = useState(1);
  const { ref, postPerPage, totalPage } = usePagenation();
  const { keyword } = useSearchStateContext();
  const { getFavoriteList } = useDriveQuery();

  const [driveRequestData, setDriveRequestData] = useState<FavoriteType>({
    page: page,
    count: postPerPage,
    sort: "TIME",
    desc: true,
    keyword: keyword
  });

  useEffect(() => {
    setDriveRequestData({
      ...driveRequestData,
      page,
      keyword,
      count: postPerPage
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, keyword, postPerPage]);

  useEffect(() => {
    return () => {
      storage.set("page", 10);
    };
  }, []);

  const { isLoading, data, isSuccess } = getFavoriteList(driveRequestData);

  if (isSuccess) {
    storage.set("page", data.totalCount);
  }

  return (
    <FileListWrapper
      setDriveRequestData={setDriveRequestData}
      driveRequestData={driveRequestData}
      page={page}
      setPage={setPage}
      ref={ref}
      totalPage={totalPage}
      isLoading={isLoading}
      datas={data?.list || []}
    />
  );
};

export default Favorite;
