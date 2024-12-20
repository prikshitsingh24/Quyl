
import "./globals.css";



export const metadata = {
  title: "Quyl",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" 
            rel="stylesheet" 
          />
        </head>
      <body
        className={`font-noto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
