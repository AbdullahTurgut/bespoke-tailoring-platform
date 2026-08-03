import { Helmet } from "react-helmet-async";

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Tailor",
    name: "Terzi Murat",
    description:
      "Kişiye özel damatlık, nişan takımı ve özel dikim takım elbise hizmetleri.",
    url: "https://terzimurat.com",
    telephone: "+90 XXX XXX XX XX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "",
      addressRegion: "",
      postalCode: "",
      addressCountry: "TR",
    },
    image: "https://terzimurat.com/images/luxury-suit.png",
    priceRange: "$$$",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
