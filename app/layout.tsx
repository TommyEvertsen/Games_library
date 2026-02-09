import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { ThemeProvider } from "./components/Theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="m-0 p-0 min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
