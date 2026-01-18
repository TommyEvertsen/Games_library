import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import SideBar from "./components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 min-h-screen flex flex-col">
        <Header />
        <SideBar />

        <main className="relative">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
