import { defineConfig } from "tsup";
import fs from "fs";
import path from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "@react-three/fiber", "three"],
  onSuccess: async () => {
    // Copy the CSS file to dist so it can be imported
    fs.copyFileSync(
      path.join(__dirname, "src/medusae.css"),
      path.join(__dirname, "dist/medusae.css")
    );
  },
});
