import { Geist, Geist_Mono, Montserrat, Inter, Roboto_Mono, SUSE, Michroma, Exo_2, M_PLUS_1_Code } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // 🔥 Import client wrapper

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"], variable: '--font-roboto-mono', display: 'swap' });
const suse = SUSE({ subsets: ['latin'], variable: '--font-suse', display: 'swap' });
const michroma = Michroma({ subsets: ['latin'], weight: "400", variable: '--font-michroma', display: 'swap' });
const m_plus = M_PLUS_1_Code({ subsets: ['latin'], weight: "400", variable: '--font-m-plus', display: 'swap' });
const exo_2 = Exo_2({ subsets: ['latin'], variable: "--font-exo-2", display: 'swap' });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  title: "rtardiarta - Portfolio",
  description: "Personal Portfolio Website | rtardiarta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${exo_2.variable} ${inter.variable} ${m_plus.variable} ${roboto_mono.variable} ${suse.variable} ${michroma.variable} ${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {/* Client wrapper untuk animasi & Navbar */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
