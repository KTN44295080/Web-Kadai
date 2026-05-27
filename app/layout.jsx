import "./globals.css";
import ScrollEffects from "./ScrollEffects";

export const metadata = {
  title: "DHU Web Design / Development Renewal Concept",
  description: "Digital Hollywood University Web design and development renewal concept.",
};

export default function RootLayout({ children }) {
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <html lang="ja">
      <body>
        <ScrollEffects />
        {children}
        {isDevelopment && (
          <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
        )}
      </body>
    </html>
  );
}
