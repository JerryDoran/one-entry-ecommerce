export default function EcommerceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>Navbar</div>
      {children}
      <div>Footer</div>
    </div>
  );
}
