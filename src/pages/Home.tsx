import { useState, useRef, useEffect } from "react";
import FileListWrapper from "../components/lists/FileListWrapper.tsx";
import useDriveQuery from "../hooks/useDriveQuery.tsx";
import { BaseRequest } from "../apis/type";
import CarService from "../apis/carListService";
import { SHA256 } from "crypto-js";
import { useDataListsContext } from "../context/DataListsContext.tsx";
const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const postPerPage = Math.ceil((ref.current?.clientHeight || 500) / 50);

  const { getDriveList } = useDriveQuery();
  const [driveRequestData, setDriveRequestData] = useState<BaseRequest>({
    page: page,
    path: "PATH://drive/",
    fileStatus: "NORMAL",
    count: postPerPage,
    sort: "TIME",
    desc: true
  });

  const {
    actions: { setList }
  } = useDataListsContext();

  useEffect(() => {
    const login = async () => {
      const car = new CarService();
      const password = "fhrhxla12!";
      const hash = SHA256(password).toString();

      const res = await car.Login({
        autoLogin: true,
        email: "frankie.j.kim@polarisoffice.com",
        password: hash
      });
      console.log(res);
    };
    login();
  }, []);

  useEffect(() => {
    setDriveRequestData({
      ...driveRequestData,
      page: page
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const { isLoading, data, isSuccess } = getDriveList(driveRequestData);

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

export default Home;
