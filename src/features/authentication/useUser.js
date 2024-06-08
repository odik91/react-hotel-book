import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export const useUser = () => {
  const {
    isLoading,
    data: user,
    status,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    status,
    isAuthenticated: user?.role === "authenticated",
  };
};
