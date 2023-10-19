import { vars, useColorScheme } from "nativewind";
import { Pressable, Text, View, PressableProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

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
      <Button variant={"default"}>hello</Button>
      <Text className="text-destructive-foreground text-4xl">second </Text>
    </View>
  );
};

const buttonVariants = cva(
  "flex-row items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
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
  variant,
  intent,
  size,
  ...props
}) => (
  <Pressable
    className={cn(buttonVariants({ variant, size, className }))}
    {...props}
  >
    <Text className="text-primary-foreground">{props.children}</Text>
  </Pressable>
);

export default App;
