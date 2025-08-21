import Section from "./Section";         // assuming Section.jsx is in components/
import CategoryCard from "./CategoryCard";

const categories = [
  { name: "Handloom", img: "https://images.unsplash.com/photo-1541577141970-eebc83ebe30a?q=80&w=1887&auto=format&fit=crop" },
  { name: "Terracotta", img: "https://images.unsplash.com/photo-1593254442444-9c7a5c9988f3?q=80&w=1887&auto=format&fit=crop" },
  { name: "Woodwork", img: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?q=80&w=1887&auto=format&fit=crop" },
  { name: "Metalwork", img: "https://images.unsplash.com/photo-1579762593131-c0d3cde9ef10?q=80&w=1887&auto=format&fit=crop" },
  { name: "Embroidery", img: "https://images.unsplash.com/photo-1548709113-33f59da6b848?q=80&w=1887&auto=format&fit=crop" },
  { name: "Jewellery", img: "https://images.unsplash.com/photo-1516632664305-eda5bb3bd0d4?q=80&w=1887&auto=format&fit=crop" },
];

const ShopByCraft = () => (
  <Section
    id="shop"
    eyebrow="Shop by Craft"
    title="Explore heritage across categories"
    description="From handloom to metalwork, discover pieces crafted with soul and story."
  >
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => (
        <CategoryCard key={c.name} {...c} />
      ))}
    </div>
  </Section>
);

export default ShopByCraft;