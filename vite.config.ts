// Librarys
import path from "path";
import svgr from "vite-plugin-svgr";
import reactPlugin from "@vitejs/plugin-react";
import usePluginImport from "vite-plugin-importer";
import { defineConfig, AliasOptions } from "vite";
// Config
import * as tsconfigbase from "./tsconfig.base.json";

/**
 * Resolver paths del archivo 'tsconfig.base.json'
 * @param defaultPath Recibe un path por defecto donde se crean las rutas absolutas
 * @param paths Paths que se definen en un archivo de configuración de Typescript
 * @return {AliasOptions} Objeto con cada path absoluto
 */
function resolvePaths(
  defaultPath = "src",
  paths: Record<string, string[]>
): AliasOptions {
  return Object.entries(paths).reduce((acc, [key, value]) => {
    const field = key.replace("/*", "");
    const fieldValue = "/" + value[0].replace("/*", "");
    const absolutePath = path.resolve(__dirname, defaultPath + fieldValue);

    acc[field] = absolutePath;
    return acc;
  }, {});
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), reactPlugin()],
  // Rutas absolutas en Vite
  resolve: {
    alias: resolvePaths("src", tsconfigbase.compilerOptions.paths),
  },
});
