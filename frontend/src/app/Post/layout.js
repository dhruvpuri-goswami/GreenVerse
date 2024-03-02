import { Inter } from "next/font/google";
import PostHome from "./page";
import { PostProvider } from "@/context/PostState";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "This is Post page",
  description: "Here you can add post and view all posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <PostProvider>
                <PostHome />
            </PostProvider>
        </body>
    </html>
  );
}