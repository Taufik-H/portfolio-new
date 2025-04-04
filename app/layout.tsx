import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import ClickEffect from "@/components/ui/click-effect";
import { ThemeProvider } from "@/components/theme-provider";
import "easymde/dist/easymde.min.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar";
export const fredoka = Fredoka({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "OPIT",
  description: "Portfolio of Opit | Taufik Hidayatulloh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${fredoka.className} antialiased`}>
        <ClickEffect
          sparkColor="oklch(0.705 0.213 47.604)"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          extraScale={1}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </ClickEffect>
      </body>
    </html>
  );
}
