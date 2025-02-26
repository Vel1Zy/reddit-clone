import AboutUsNavBar from "@/components/aboutus/AboutUsNavbar";

export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className="bg-gray-100">
          <AboutUsNavBar />
          <main className="container mx-auto p-4">{children}</main>
        </body>
      </html>
    );
  }