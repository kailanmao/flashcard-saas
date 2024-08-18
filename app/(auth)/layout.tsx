import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Complaint Tracker",
  description: "Created by Andy Li & Sean Lai",
};


export default function RootLayout({ children } : {children: React.ReactNode}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body >
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}