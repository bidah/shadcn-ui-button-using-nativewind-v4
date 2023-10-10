import { vars, useColorScheme } from "nativewind";
import { Text, View } from "react-native";

const theme = vars({
  "--theme-fg": "#FFC0CB",
  "--theme-bg": "#00FF00",
});

const App = () => {
  const { setColorScheme } = useColorScheme();

  setColorScheme("dark");
  return (
    <View
      className="flex-1 items-center justify-center bg-red-100 dark:bg-red-500"
      style={theme}
    >
      <Text className="text-red-400 dark:text-red-200">hey baby girl</Text>
    </View>
  );
};

export default App;
