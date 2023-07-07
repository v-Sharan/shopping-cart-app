import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { urlFor } from "../utils/client";
import { useStore } from "../store/CartProvider";

const CartCard = ({ item }) => {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();
  const { addItem, totalAmount, removeItem } = useStore();

  console.log(totalAmount);
  return (
    <View className="flex-row justify-evenly  rounded-xl self-center w-[98%] gap-3 px-3 py-2">
      <Image
        source={{ uri: urlFor(item.imgUrl[0]).url() }}
        className="w-2/6 h-28 bg-[#fff]/70 rounded-xl"
      />
      <View className="w-[40%]">
        <Text className="text-xl font-semibold">{item.product_name}</Text>
        <Text className="text-gray-700">
          {item.discription.length > 23
            ? item.discription.slice(0, 30) + "..."
            : item.discription}
        </Text>
      </View>
      <View className="flex-row justify-between items-center">
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={() => {
              addItem({ ...item, amount: count });
              setCount((count) => count + 1);
            }}
          >
            <MaterialIcons
              name="add-circle-outline"
              size={27}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </TouchableOpacity>
          <Text className="text-gray-700/80 dark:text-white text-xl">
            {count}
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (count > 0) {
                removeItem(item._id);
                setCount((count) => count - 1);
              }
            }}
          >
            <Feather
              name="minus-circle"
              size={26}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
