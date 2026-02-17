// TODO: Replace with actual art pieces and images

export type ArtCategory = "all" | "paintings" | "photography" | "videos";

export type ArtItem = {
  id: string;
  title: string;
  category: ArtCategory;
  imageSrc?: string;
  imageAlt: string;
  caption?: string;
};

export const ART_ITEMS: ArtItem[] = [
  {
    id: "1",
    title: "Study in Lavender",
    category: "paintings",
    imageAlt: "Abstract painting in lavender and blush tones",
    caption: "Acrylic on canvas",
  },
  {
    id: "2",
    title: "Morning Mist",
    category: "photography",
    imageAlt: "Landscape photograph with morning mist",
    caption: "Digital photography",
  },
  {
    id: "3",
    title: "Sage Fields",
    category: "paintings",
    imageAlt: "Painting of sage green fields and sky",
    caption: "Oil on canvas",
  },
  {
    id: "4",
    title: "Urban Layers",
    category: "photography",
    imageAlt: "Urban architecture with layered composition",
    caption: "Digital photography",
  },
  {
    id: "5",
    title: "Flow",
    category: "paintings",
    imageAlt: "Fluid abstract composition in blues and whites",
    caption: "Mixed media",
  },
  {
    id: "6",
    title: "Light & Shadow",
    category: "photography",
    imageAlt: "Play of light and shadow in natural setting",
    caption: "Digital photography",
  },
  {
    id: "7",
    title: "Motion Study",
    category: "videos",
    imageAlt: "Still from motion study video",
    caption: "Short film",
  },
  {
    id: "8",
    title: "Warm Sand",
    category: "paintings",
    imageAlt: "Warm-toned abstract with sand and cream",
    caption: "Acrylic on paper",
  },
];

export const ART_CATEGORIES: { value: ArtCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "paintings", label: "Paintings" },
  { value: "photography", label: "Photography" },
  { value: "videos", label: "Videos" },
];
