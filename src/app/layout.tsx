import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paula Suárez Costa | Portfolio',
  description:
    'Portfolio personal de Paula Suárez Costa, desarrolladora frontend en crecimiento hacia full stack.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
