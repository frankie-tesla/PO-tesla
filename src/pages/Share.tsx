import { useState, useEffect } from "react";
import FileListWrapper from "../components/lists/FileListWrapper.tsx";
import useDriveQuery from "../hooks/useDriveQuery.tsx";
import { Favorite } from "../apis/type";
import { useSearchStateContext } from "../context/SearchStateContext.tsx";
import storage from "../utils/localstorage.ts";
import usePagenation from "../hooks/usePagenation.tsx";
const Share = () => {
  const [page, setPage] = useState(1);
  const [first, setfirst] = useState<
    {
      fileId: string;
      fileName: string;
      lastModified: number;
      fileType: string;
      parentId: string;
      size: number;
      referenceId: null;
    }[]
  >([]);
  const { keyword } = useSearchStateContext();
  const { ref, postPerPage, totalPage } = usePagenation();
  const { getShareList } = useDriveQuery();
  const [driveRequestData, setDriveRequestData] = useState<Favorite>({
    page: page,
    count: postPerPage,
    sort: "TIME",
    desc: true,
    keyword
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

  const { isLoading, data, isSuccess } = getShareList(driveRequestData);

  if (isSuccess) {
    storage.set("page", data.totalCount);
  }

  useEffect(() => {
    if (isSuccess) {
      const list = data?.workList.map((item) => {
        const { id, name, lastModified, fileType, parentId, size } = item.fileInfo;
        return {
          fileId: id,
          fileName: name,
          lastModified,
          fileType,
          parentId,
          size,
          referenceId: null
        };
      });
      setfirst([...list] || []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  return (
    <FileListWrapper
      setDriveRequestData={setDriveRequestData}
      driveRequestData={driveRequestData}
      page={page}
      setPage={setPage}
      ref={ref}
      totalPage={totalPage}
      isLoading={isLoading}
      datas={first}
    />
  );
};

export default Share;
