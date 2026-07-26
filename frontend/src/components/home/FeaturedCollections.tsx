import CollectionSection from "./CollectionSection";
import { collections } from "../../data/collections";

const FeaturedCollections = () => {
  return (
    <section>
      {collections.map((collection) => (
        <CollectionSection
          key={collection.category}
          title={collection.title}
          description={collection.description}
          category={collection.category}
        />
      ))}
    </section>
  );
};

export default FeaturedCollections;
