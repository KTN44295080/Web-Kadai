import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  outputFileTracingRoot: projectRoot,
  devIndicators: false,
  trailingSlash: true,
  basePath: isGithubPages ? "/Web-Kadai" : undefined,
  assetPrefix: isGithubPages ? "/Web-Kadai/" : undefined,
};

export default nextConfig;
