type Theme = "dark" | "light" | "system";
export declare function useTheme(): {
    theme: Theme;
    setTheme: import('react').Dispatch<import('react').SetStateAction<Theme>>;
};
export {};
