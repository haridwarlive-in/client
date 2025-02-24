export interface BookingDialogFormTypes {
  name: string,
  email: string,
  phone: string,
  message: string,
  date: string,
  totalDays: number,
  hotelId: string
}

export interface Temple {
  _id: string,
  title: string;
  location: string;
  image: string;
  description: string; 
  locationUrl: string;
  tags: string[];
}

export interface Hotel {
  _id: string,
  title: string;
  address: string;
  locationUrl: string;
  image: string;
  description: string;
  likes: number;
  roomsAvailable: number;
  amenities: string[];
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}

export interface News {
  _id: string,
  title: string;
  content: string;
  date: string;
  status: 'Archived'|'Published';
  category: Category;
  image?: string;
  key?: string;
  tags: string[];
  clicks: number;
  isBreakingNews: boolean;
}

type Category =
  | "Local News"
  | "Events"
  | "Business & Economy"
  | "Health & Wellness"
  | "Education"
  | "Sports"
  | "Entertainment"
  | "Weather"
  | "Lifestyle"
  | "Technology"
  | "Transportation"
  | "Real Estate"
  | "Tourism"
  | "Crime & Safety"
  | "Environment"
  | "Politics"
  | "Human Interest"
  | "Opinion"
  | "Business Directory"
  | "Community";