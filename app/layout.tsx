import type { Metadata } from "next";
import '@/styles/globals.scss';
import ClientNavigation from "@/components/ClientNavigation";


export const metadata: Metadata = {
  title: "Maestro"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="navigation">
          <ClientNavigation />
        </div>
        {children}
      </body>
    </html>
  );
}
