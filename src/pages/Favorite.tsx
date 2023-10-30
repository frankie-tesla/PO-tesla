import { useState, useRef, useEffect } from "react";
import FileListWrapper from "../components/lists/FileListWrapper.tsx";
import useDriveQuery from "../hooks/useDriveQuery.tsx";
import { Favorite as FavoriteType } from "../apis/type";
import { useSearchStateContext } from "../context/SearchStateContext.tsx";
const Favorite = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const postPerPage = Math.ceil((ref.current?.clientHeight || 500) / 50);
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
      keyword
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, keyword]);

  const { isLoading, data } = getFavoriteList(driveRequestData);

  return (
    <FileListWrapper
      setDriveRequestData={setDriveRequestData}
      driveRequestData={driveRequestData}
      page={page}
      setPage={setPage}
      ref={ref}
      totalPage={Math.ceil((data?.totalCount ?? 10) / postPerPage)}
      isLoading={isLoading}
      datas={data?.list || []}
    />
  );
};

export default Favorite;
