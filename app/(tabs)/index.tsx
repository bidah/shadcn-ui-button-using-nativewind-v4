import { vars, useColorScheme } from "nativewind";
import { Pressable, Text, View } from "react-native";

const theme = vars({
  "--theme-fg": "#FFC0CB",
  "--theme-bg": "#00FF00",
});

const App = () => {
  const { setColorScheme, colorScheme } = useColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };
  return (
    <View
      className="flex-1 items-center justify-center bg-red-100 dark:bg-red-500"
      style={theme}
    >
      <Pressable
        onPress={toggleColorScheme}
        className={"bg-red-200 dark:bg-red-400 rounded-full p-2 px-4"}
      >
        <Text className="text-red-400 dark:text-red-200">TOGGLE THEME</Text>
      </Pressable>
    </View>
  );
};

export default App;
