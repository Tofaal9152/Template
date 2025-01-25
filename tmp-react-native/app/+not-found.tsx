import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold text-black mb-4">
          This screen doesn't exist.
        </Text>
        <Link href="/" asChild>
          <Text className="text-lg font-semibold text-black underline">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </View>
  );
}
