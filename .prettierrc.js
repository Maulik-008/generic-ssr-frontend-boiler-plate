/** @type {import("prettier").Config} */
module.exports = {
  // Core formatting options
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "avoid",
  endOfLine: "lf",

  // Plugin configurations
  plugins: ["prettier-plugin-tailwindcss"],

  // File-specific overrides
  overrides: [
    {
      files: ["*.json", "*.jsonc"],
      options: {
        printWidth: 120,
        tabWidth: 2,
      },
    },
    {
      files: ["*.md", "*.mdx"],
      options: {
        printWidth: 100,
        proseWrap: "always",
      },
    },
    {
      files: ["*.yml", "*.yaml"],
      options: {
        tabWidth: 2,
        singleQuote: false,
      },
    },
    {
      files: ["*.css", "*.scss", "*.less"],
      options: {
        singleQuote: false,
      },
    },
  ],

  // Tailwind CSS plugin configuration
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["clsx", "cn", "cva"],
};
