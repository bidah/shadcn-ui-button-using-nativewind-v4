import { vars, useColorScheme } from "nativewind";
import { Pressable, Text, View, PressableProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";

const theme = vars({
  "--theme-fg": "#FFC0CB",
  "--theme-bg": "#00FF00",
  "--color-primary": "black",
  "--color-secondary": "white",
});

const App = () => {
  const { setColorScheme, colorScheme } = useColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };
  return (
    <View className="bg-background flex-1 p-5">
      <Text className="text-primary text-5xl">hello</Text>
    </View>
    // <View
    //   className="flex-1 items-center justify-center bg-red-100 dark:bg-red-500"
    //   style={theme}
    // >
    //   <Pressable
    //     onPress={toggleColorScheme}
    //     className={"bg-red-200 dark:bg-red-400 rounded-full p-2 px-4"}
    //   >
    //     <Text className="text-red-400 dark:text-red-200">TOGGLE THEME</Text>
    //   </Pressable>

    //   <View className="mt-4" />

    //   <Button intent="secondary" size="small">
    //     <Text>small</Text>
    //   </Button>

    //   <View className="mt-4" />

    //   <Button>
    //     <Text>smallish</Text>
    //   </Button>

    //   <View className="mt-4" />

    //   <Text className="text-4xl font-bold text-[--theme-fg] transition duration-[5s] ">
    //     Variables
    //   </Text>
    //   <Text className="text-4xl font-bold active:scale-150 active:text-red-500 transition duration-[500ms]">
    //     Transitions
    //   </Text>
    //   <Text className="text-4xl font-bold animate-none active:animate-bounce">
    //     Animations
    //   </Text>
    // </View>
  );
};

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "small", className: "px-8" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

interface ButtonProps extends PressableProps, VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <Pressable className={button({ intent, size, className })} {...props} />;

export default App;
