import Header from "./components/Header";
import "./globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 min-h-0">{children}</main>
      </body>
    </html>
  );
}
