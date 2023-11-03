// tab one screen
import { vars, useColorScheme } from "nativewind";
import { Pressable, Text, View, PressableProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants = [
  "flex-row items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    defaultText: "text-primary-foreground",
    destructiveText: "text-destructive-foreground",
    outlineText: "text-primary",
    ghostText: "text-primary",
    linkText: "text-primary",
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/90",
        destructive: "bg-destructive hover:bg-destructive/90",
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
  },
];

const buttonVariants = cva(...variants);

interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Pressable>
      <Text>hey hey hey</Text>
    </Pressable>
  );
};

export default Button;
