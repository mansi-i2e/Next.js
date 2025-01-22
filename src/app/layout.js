export const metadata = {
  title: 'My App',
  description: 'This is my Next.js app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem"
          }}>
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "lightgreen",
            padding: "1rem"
          }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}