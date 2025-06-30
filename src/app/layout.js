import "./globals.css";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";

export const metadata = {
  title: "Fitness Site",
  description: "Fitness Tracking System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  );
}
