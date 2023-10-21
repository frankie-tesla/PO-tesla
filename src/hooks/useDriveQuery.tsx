import CarService from "../apis/carListService";
import { useQuery } from "@tanstack/react-query";
import { BaseRequest, Favorite, SearchFileReq } from "../apis/type";

const useDriveQuery = () => {
  const car = new CarService();

  const getDriveList = (data: BaseRequest) => {
    return useQuery({
      queryKey: ["myDrives", data.page, data.parentId, data.path, data.sort, data.desc],
      queryFn: () => car.getDriveList(data),
      staleTime: 1000 * 30,
      refetchOnWindowFocus: true,
      retry: false
    });
  };

  const getFavoriteList = (data: Favorite) => {
    return useQuery({
      queryKey: ["favorites", data.page, data.count, data.sort, data.desc],
      queryFn: () => car.getFavoriteList(data),
      staleTime: 1000 * 30,
      refetchOnWindowFocus: true,
      retry: false
    });
  };

  const getShareList = (data: Favorite) => {
    return useQuery({
      queryKey: ["shares", data.page, data.count, data.sort, data.desc],
      queryFn: () => car.getShareList(data),
      staleTime: 1000 * 30,
      refetchOnWindowFocus: true,
      retry: false
    });
  };

  const getSearchFile = (data: SearchFileReq) => {
    return useQuery({
      queryKey: ["search", data.keyword, data.page, data.count, data.sort, data.desc],
      queryFn: () => car.searchFile(data),
      staleTime: 1000 * 120,
      refetchOnWindowFocus: true,
      retry: false,
      enabled: false
    });
  };

  return { getDriveList, getFavoriteList, getShareList, getSearchFile };
};

export default useDriveQuery;
