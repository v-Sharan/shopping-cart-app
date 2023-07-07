import {
  Text,
  FlatList,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CatagoryCard from "../components/CatagoryCard";
import { catagory as cata } from "../utils/constants";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Avatar, Badge } from "react-native-paper";
import { useState, useEffect } from "react";
import { client } from "../utils/client";
import { getAllProducts } from "../utils/queries";
import { useStore } from "../store/CartProvider";

import { useColorScheme } from "nativewind";
import Card from "../components/Card";

export default function Page() {
  const { colorScheme } = useColorScheme();

  const [searchItem, setSearchItem] = useState("");

  const [catagory, setCatagory] = useState("All");

  const [data, setData] = useState([]);

  const { items } = useStore();

  useEffect(() => {
    client
      .fetch(getAllProducts())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const router = useRouter();

  return (
    <>
      <SafeAreaView className="h-20 bg-black/70">
        <View className="flex-row justify-around items-center p-2">
          <Avatar.Image
            size={34}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo9bEaPjDYew1Q_lV3g21YFVaFWIzwgIUFazIWftCh&s",
            }}
          />
          <View className="flex-row bg-white dark:bg-white w-[75%] p-1 rounded-2xl">
            <View className="flex-row">
              <Ionicons name="ios-search-outline" size={24} color="black" />
              <TextInput
                className="px-1 w-4/5"
                value={searchItem}
                onChangeText={(text) => setSearchItem(text)}
              />
            </View>
            {searchItem && (
              <AntDesign name="arrowright" size={24} color="black" />
            )}
          </View>
          <TouchableOpacity
            className="flex-row mr-2"
            onPress={() => router.push("/cart")}
            // onPress={toggleColorScheme}
          >
            <Ionicons
              name="cart"
              size={24}
              color={colorScheme === "dark" ? "black" : "white"}
            />
            <Badge className="absolute left-4 bottom-3">{items.length}</Badge>
          </TouchableOpacity>
        </View>
        <StatusBar style={"light"} />
      </SafeAreaView>
      <View className="flex-1 dark:bg-gray-900 ">
        <Text className="dark:text-white text-3xl mt-2 mx-4 items-center">
          Catagory
        </Text>
        <View>
          {data.length > 0 && (
            <FlatList
              data={cata}
              horizontal
              contentContainerStyle={{
                paddingHorizontal: 10,
                gap: 10,
                marginTop: 10,
              }}
              renderItem={({ item }) => (
                <CatagoryCard
                  item={item}
                  catagory={catagory}
                  setCatagory={setCatagory}
                />
              )}
            />
          )}
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Card item={item} />}
          contentContainerStyle={{ paddingVertical: 8, paddingHorizontal: 15 }}
        />
      </View>
    </>
  );
}
