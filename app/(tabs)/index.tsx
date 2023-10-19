import { vars, useColorScheme } from "nativewind";
import { Pressable, Text, View, PressableProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import React from "react";

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
      <Button variant={"destructive"}>hello world</Button>
    </View>
  );
};

const buttonVariants = cva(
  "flex-row items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        //what if default is an array and we grab frist item for wrapper and second for text?
        default: "bg-primary hover:bg-primary/90",
        defaultText: "text-primary-foreground",
        destructive: "bg-destructive hover:bg-destructive/90",
        destructiveText: "text-destructive-foreground",
        outline:
          "text-primary-foreground border border-input hover:bg-accent hover:text-accent-foreground",
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
    {/* <Text className="text-destructive-foreground">{props.children}</Text> */}
    {/* {React.Children.toArray(props.children).map((child, index) => {
      typeof child === "string" ? ( */}
    {/* // so "data-disable-theme" is a hack to fix themeInverse, don't ask me why */}
    <Text
      // key={index}
      // {...props}
      // className={cn(buttonVariants({ variant, size, className }))}
      className="text-destructive-foreground"
    >
      {props.children}
    </Text>
    {/* ) : (
        child
      );
    })} */}
  </Pressable>
);

export default App;
