import { useState, useRef, useEffect } from "react";
import FileListWrapper from "../components/lists/FileListWrapper.tsx";
import useDriveQuery from "../hooks/useDriveQuery.tsx";
import { Favorite } from "../apis/type";
import { useSearchStateContext } from "../context/SearchStateContext.tsx";
const Share = () => {
  const ref = useRef<HTMLDivElement>(null);
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
  const postPerPage = Math.ceil((ref.current?.clientHeight || 500) / 50);
  const { keyword } = useSearchStateContext();
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
      keyword
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, keyword]);

  const { isLoading, data, isSuccess } = getShareList(driveRequestData);

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
      totalPage={Math.ceil((data?.totalCount ?? 10) / postPerPage)}
      isLoading={isLoading}
      datas={first}
    />
  );
};

export default Share;
