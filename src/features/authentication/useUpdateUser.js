import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const {
    mutate: updateUser,
    isLoading: isUpdating,
    status,
  } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");

      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isUpdating, status };
};
