import { useState, useRef, useEffect } from "react";
import FileListWrapper from "../components/lists/FileListWrapper.tsx";
import useDriveQuery from "../hooks/useDriveQuery.tsx";
import { Favorite } from "../apis/type";
import { useDataListsContext } from "../context/DataListsContext.tsx";
const Share = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const postPerPage = Math.ceil((ref.current?.clientHeight || 500) / 50);
  const {
    actions: { setList }
  } = useDataListsContext();
  const { getShareList } = useDriveQuery();
  const [driveRequestData, setDriveRequestData] = useState<Favorite>({
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

  const { isLoading, data, isSuccess } = getShareList(driveRequestData);
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

  useEffect(() => {
    if (isSuccess) {
      setList(list ?? []);
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
      datas={list}
    />
  );
};

export default Share;
