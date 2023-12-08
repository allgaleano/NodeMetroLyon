import './globals.css'

export const metadata = {
  title: 'Metro de Lyon',
  description: 'Algoritmo A* aplicado para búsqueda de rutas óptimas de estaciones del metro de Lyon. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
