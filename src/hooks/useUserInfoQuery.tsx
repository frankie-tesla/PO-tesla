import { useQuery } from "@tanstack/react-query";
import UserService from "../apis/userService";

const useUserInfoQuery = () => {
  const userService = new UserService();

  const getUserInfo = () => {
    return useQuery({
      queryKey: ["users"],
      queryFn: () => userService.getUserInfo(),
      staleTime: 1000 * 30 * 10,
      refetchOnWindowFocus: true,
      retry: false
    });
  };

  const getAIUserInfo = () => {
    return useQuery({
      queryKey: ["aiUsers"],
      queryFn: () => userService.getAIUserInfo(),
      staleTime: 1000 * 30 * 10,
      refetchOnWindowFocus: true,
      retry: false
    });
  };

  return {
    getUserInfo,
    getAIUserInfo
  };
};

export default useUserInfoQuery;
