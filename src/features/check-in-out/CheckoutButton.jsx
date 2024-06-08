import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut, status } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut || status === "pending"}
    >
      {isCheckingOut ||
        (status === "pending" && (
          <>
            <SpinnerMini />{" "}
          </>
        ))}
      Check out
    </Button>
  );
}

export default CheckoutButton;
