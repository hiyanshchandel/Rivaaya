import Section from "./Section";
import ArtisanCard from "./ArtisanCard";
const artisans = [
  {
    name: "Savita Devi",
    craft: "Madhubani Painting",
    story:
      "Third-generation artist from Bihar, blending ancient motifs with modern palettes.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1390&auto=format&fit=crop",
  },
  {
    name: "Rahim Ansari",
    craft: "Bidri Metalwork",
    story:
      "Hand-inlaid silver patterns inspired by Deccan nights and geometric constellations.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1390&auto=format&fit=crop",
  },
  {
    name: "Lalita Bai",
    craft: "Kutch Embroidery",
    story:
      "Mirrorwork that tells desert stories passed down by village elders.",
    avatar:
      "https://images.unsplash.com/photo-1601655781321-9b7e8449387b?q=80&w=1390&auto=format&fit=crop",
  },
];



const ArtisanSpotlight = () => (
  <Section
    id="artisans"
    eyebrow="Artisan Spotlight"
    title="Meet the makers behind the craft"
    description="Every product carries a voice. Learn about the people and places shaping each piece."
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {artisans.map((a) => (
        <ArtisanCard key={a.name} {...a} />
      ))}
    </div>
  </Section>
);

export default ArtisanSpotlight;