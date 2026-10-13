import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abu Sufian Rubel — Software Engineer",
    short_name: "Abu Sufian Rubel",
    description:
      "Portfolio of Abu Sufian Rubel, a full-stack software engineer specializing in Laravel, PHP, Golang, Vue.js, REST APIs, ERP, and payment systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/fabicon.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}
