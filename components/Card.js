import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../utils/client";
import { useColorScheme } from "nativewind";
import { Link } from "expo-router";
import { useStore } from "../store/CartProvider";

const Card = ({ item }) => {
  const { colorScheme } = useColorScheme();

  const { addItem } = useStore();

  return (
    <View
      className={`mt-5 bg-[#fff] dark:bg-neutral-800/50 px-3 py-1.5 rounded-md shadow-md  ${
        colorScheme === "dark" ? "shadow-[#fff]/20" : "shadow-black"
      }`}
    >
      <Image
        source={{ uri: urlFor(item.imgUrl[0]).url() }}
        resizeMode="contain"
        className="dark:bg-[#fff] w-[50%] self-center h-36 rounded-md my-1"
      />
      <Link href={`/product?id=${item._id}`} asChild>
        <Text className="text-black/90 dark:text-gray-100 font-bold text-2xl my-2">
          {item.product_name}
        </Text>
      </Link>
      <Text className="self-end py-1 px-1.5 bg-teal-100 rounded-lg font-semibold">
        Catagory: {item.categories.category_name}
      </Text>
      <Text className=" text-gray-700/80 dark:text-gray-100/80 text-sm">
        {item.discription.length > 23
          ? item.discription.slice(0, 300) + "..."
          : item.discription}
      </Text>
      <Text className="flex-row justify-between py-1.5 px-3 items-center mt-2 text-black dark:text-gray-100 text-2xl font-bold">
        ₨ {item.price}
      </Text>
      <TouchableOpacity
        className="bg-teal-600 p-3 rounded-lg my-2 mx-4"
        onPress={() => addItem({ ...item, amount: 1 })}
      >
        <Text className="text-white text-center">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
