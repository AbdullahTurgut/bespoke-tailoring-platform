import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
};

const SEO = ({ title, description }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default SEO;
