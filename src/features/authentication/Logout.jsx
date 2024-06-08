import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

const Logout = () => {
  const { logout, isLoading, status } = useLogout();

  return (
    <ButtonIcon disabled={isLoading || status === "pending"} onClick={logout}>
      {isLoading || status !== "pending" ? (
        <HiArrowRightOnRectangle />
      ) : (
        <SpinnerMini />
      )}
    </ButtonIcon>
  );
};
export default Logout;
