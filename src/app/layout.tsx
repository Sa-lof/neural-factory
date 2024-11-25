import "./globals.css";

export const metadata = {
  title: "Neural Factory - Soluciones de Inteligencia Artificial y Machine Learning",
  description: "Neural Factory empodera a empresas de diversas industrias para aprovechar el poder de la Inteligencia Artificial. Ofrecemos soluciones en Machine Learning, Aprendizaje Profundo y Visión por Computadora, optimizando operaciones y mejorando la toma de decisiones.",
  keywords: [
    "Neural Factory", 
    "Inteligencia Artificial", 
    "Machine Learning", 
    "IA", 
    "Aprendizaje Automático", 
    "Aprendizaje Profundo", 
    "Visión por Computadora", 
    "soluciones de IA", 
    "automatización", 
    "transformación digital", 
    "eficiencia empresarial",
    "optimización de operaciones", 
    "tomar decisiones", 
    "crecimiento empresarial"
  ],
  openGraph: {
    title: "Neural Factory - Transformando Empresas con Inteligencia Artificial",
    description: "Empoderamos a empresas con soluciones avanzadas de Inteligencia Artificial, desde Machine Learning hasta Visión por Computadora. Contáctenos para descubrir cómo optimizar sus operaciones.",
    type: "website",
    url: "https://neuralfactory.com",
    images: [
      {
        url: "https://neuralfactory.com/images/logo-og.jpg",
        width: 1200,
        height: 630,
        alt: "Neural Factory Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NeuralFactory",
    title: "Neural Factory - Soluciones de IA para Empresas",
    description: "Descubra cómo nuestras soluciones de IA y Machine Learning pueden optimizar sus operaciones e impulsar su crecimiento empresarial.",
    image: "https://neuralfactory.com/images/logo-twitter.jpg",
  },
  robots: "index, follow",
  canonical: "https://neuralfactory.com",
  author: "Neural Factory",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> 
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.canonical} />
      </head>
      <body>{children}</body>
    </html>
  );
}
