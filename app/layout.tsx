import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FilterProvider } from "@/context/FilterContext";
import ClientLayout from "@/components/layout/ClientLayout";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable}`}>
        <div className="relative">
          <FilterProvider>
            <Header />
            <main className="bg-page">
              <ClientLayout>{children}</ClientLayout>
            </main>
            <Footer />
          </FilterProvider>
        </div>
      </body>
    </html>
  );
}
