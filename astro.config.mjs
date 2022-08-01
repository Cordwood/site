import uno from "astro-uno";
import config from "./uno.config.mjs";
import { presetUno } from "unocss";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://cordwood.dev",
    integrations: [
        uno({
            presets: [presetUno()],
            ...config,
        }),
    ],
});
