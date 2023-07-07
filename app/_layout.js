import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import CartProviser from "../store/CartProvider";

export default () => {
  return (
    <CartProviser>
      <PaperProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </PaperProvider>
    </CartProviser>
  );
};
