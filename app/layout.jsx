import "./globals.css";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";

export const metadata = {
  title: "Service Booking Platform",
  description: "Built by Janhavi Doshi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-darkmode text-midnight_text dark:text-white">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
