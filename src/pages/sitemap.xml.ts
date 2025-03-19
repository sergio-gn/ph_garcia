import fg from "fast-glob";

export async function GET() {
  const baseURL = "https://phgarcia.com.br";

  const staticPages = await fg("src/pages/**/*.astro");

  const pageURLs = staticPages
    .map((path) => path.replace(/^src\/pages|\.astro$/g, ""))
    .map((path) => (path === "/index" ? "/" : path)) 
    .filter((path) => !/^\/(en|fr|dr|ja|es)\//.test(path))
    .filter((path) => !/\[.*\]/.test(path))
    .map((path) => `<url><loc>${baseURL}${path}</loc></url>`); 

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url><loc>${baseURL}/</loc></url>
       ${pageURLs.join("")} <!-- Include static pages -->
     </urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}