import DashboardLayout from "../components/DashboardLayout";
import InspirationCard from "../components/InspirationCard";

import ModernLivingRoom from "../assets/images/ModernLivingRoom.jpg";
import LuxuryLivingRoom from "../assets/images/LuxuryLivingRoom.jpg";
import CozyBedroom from "../assets/images/CozyBedroom.jpg";
import ModernKitchen from "../assets/images/ModernKitchen.jpg";
import WhiteMinimalKitchen from "../assets/images/WhiteMinimalKitchen.jpg";
import OpenDiningKitchen from "../assets/images/OpenDiningKitchen.jpg";
import LuxuryBathroom from "../assets/images/LuxuryBathroom.jpg";
import ModernHomeOffice from "../assets/images/ModernHomeOffice.jpg";
import OutdoorLounge from "../assets/images/OutdoorLounge.jpg";
import TVUnit from "../assets/images/TVUnit.jpg";
import Balcony from "../assets/images/Balcony.jpg";
import KidsBedroom from "../assets/images/KidsBedroom.jpg";

const inspirations = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Living Room",
    image: ModernLivingRoom,
  },
  {
    id: 2,
    title: "Luxury Living Room",
    category: "Living Room",
    image: LuxuryLivingRoom,
  },
  {
    id: 3,
    title: "Cozy Bedroom",
    category: "Bedroom",
    image: CozyBedroom,
  },
  {
    id: 4,
    title: "Modern Kitchen",
    category: "Kitchen",
    image: ModernKitchen,
  },
  {
    id: 5,
    title: "White Minimal Kitchen",
    category: "Kitchen",
    image: WhiteMinimalKitchen,
  },
  {
    id: 6,
    title: "Open Dining Kitchen",
    category: "Dining",
    image: OpenDiningKitchen,
  },
  {
    id: 7,
    title: "Luxury Bathroom",
    category: "Bathroom",
    image: LuxuryBathroom,
  },
  {
    id: 8,
    title: "Modern Home Office",
    category: "Office",
    image: ModernHomeOffice,
  },
  {
    id: 9,
    title: "Outdoor Lounge",
    category: "Outdoor",
    image: OutdoorLounge,
  },
  {
    id: 10,
    title: "TV Unit",
    category: "Living Room",
    image: TVUnit,
  },
  {
    id: 11,
    title: "Balcony",
    category: "Outdoor",
    image: Balcony,
  },
  {
    id: 12,
    title: "Kids Bedroom",
    category: "Bedroom",
    image: KidsBedroom,
  },
];

export default function Inspiration() {
  return (
    <DashboardLayout>
      <div className="p-2">

        <h1 className="text-4xl font-bold">
          Inspiration Gallery
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Discover beautiful interiors for your dream home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {inspirations.map((item) => (
            <InspirationCard
              key={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}