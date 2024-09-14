import "./../index.css"

export const metadata = {
  title: {
    default: "NextJs - 14",
    template:"%s | NextJs - 14"
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
