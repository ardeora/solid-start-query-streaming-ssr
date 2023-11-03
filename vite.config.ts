import solid from "solid-start/vite";
import vercel from "solid-start-vercel";
import myAdapter from "@adeora/solid-start-node";
import { defineConfig } from "vite";

// @ts-expect-error
const PORT = process.env.PORT || 3000;

export default defineConfig({
  // plugins: [solid({ adapter: myAdapter() })],
  // server: {
  //   host: "0.0.0.0",
  //   port: PORT,
  // },
  plugins: [
    solid({
      adapter: vercel({
        edge: true,
      }),
    }),
  ],
});
