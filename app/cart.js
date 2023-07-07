import { FlatList, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useStore } from "../store/CartProvider";
import { useRouter } from "expo-router";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import CartCard from "../components/CartCard";
const cart = () => {
  const { items, totalAmount } = useStore();
  const router = useRouter();

  return (
    <SafeAreaView>
      <View className="flex-row justify-between p-3">
        <AntDesign
          name="leftcircleo"
          size={30}
          color="black"
          onPress={() => router.back()}
        />
        <Text className="text-black text-2xl">Shoping Bag</Text>
        <Ionicons name="cart" size={24} color="black" />
      </View>
      {items.length > 0 && (
        <FlatList
          data={items}
          renderItem={({ item }) => <CartCard item={item} />}
        />
      )}
      {items.length === 0 && (
        <View className="bg-[#fff] p-3 w-72 self-center rounded-lg shadow-lg">
          <Text className="text-center">No Item in Cart</Text>
        </View>
      )}
      <TouchableOpacity
        className="bg-teal-600 p-3 rounded-lg my-2 mx-4"
        disabled={items.length > 0 ? false : true}
      >
        <Text className="text-white text-center">Proceed to Pay</Text>
      </TouchableOpacity>
      <StatusBar style="dark" backgroundColor="#ccc" />
    </SafeAreaView>
  );
};

export default cart;
