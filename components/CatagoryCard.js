import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CatagoryCard = ({ setCatagory, item, catagory }) => {
  const currentCatagory = item === catagory;
  return (
    <TouchableOpacity
      className={`${
        currentCatagory ? "bg-teal-400" : "bg-[#fff]"
      } border border-teal-500 px-1.5 dark:border-white rounded-lg`}
      onPress={() => setCatagory(item)}
    >
      <Text
        className={`${
          currentCatagory
            ? "text-white dark:text-gray-700"
            : "dark:text-gray-700"
        } p-1 text-md`}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default CatagoryCard;
