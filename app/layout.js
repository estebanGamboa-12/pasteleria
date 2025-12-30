import './globals.css';

export const metadata = {
  title: 'Pastelería Aurora',
  description: 'Pastelería artesanal para celebrar cada momento.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
