import { useEffect } from "react";
import Toast from "react-native-toast-message";

const useErrorToast = (error) => {
  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: "Es ist ein Fehler aufgetreten...",
        text2: `${error}`,
      });
    }
  }, [error]);
};

export default useErrorToast;
