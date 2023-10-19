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
      <Button>hey</Button>
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

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => (
  <Pressable className={buttonVariants({ intent, size, className })} {...props}>
    <Text className="text-primary">{props.children}</Text>
  </Pressable>
);

export default App;
