import "./globals.css";
export const metadata = {
  title: "Jyoti Baraskar | Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, and modern web performance.",

  openGraph: {
    title: "Jyoti Baraskar | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern UI.",
    url: "https://jyotibaraskar-portfolio.vercel.app/",
    siteName: "Jyoti Baraskar Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jyoti Baraskar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
