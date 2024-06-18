export interface BlogData {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  createdAt: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
}

export const blogData: BlogData[] = [
  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    slug: "classic-spaghetti-carbonara",
    description:
      "This classic Italian pasta dish combines eggs, cheese, pancetta, and pepper to create a creamy, flavorful sauce that coats the spaghetti perfectly.",
    shortDescription:
      "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    image: "/images/recipe_1.jpg",
    createdAt: "April 23, 2024",
    author: {
      name: "Giovanni Rossi",
      avatar: "/images/recipe_1.jpg",
      bio: "Giovanni Rossi is an Italian chef with over 20 years of experience in traditional Italian cuisine.",
    },
  },
  {
    id: 2,
    title: "Vegan Avocado Toast",
    slug: "vegan-avocado-toast",
    description:
      "A simple yet delicious vegan avocado toast, topped with cherry tomatoes, radishes, and a sprinkle of sea salt and chili flakes for an extra kick.",
    shortDescription:
      "A vegan avocado toast with cherry tomatoes and radishes.",
    image: "/images/recipe_2.jpg",
    createdAt: "May 12, 2024",
    author: {
      name: "Emily Green",
      avatar: "/images/recipe_1.jpg",
      bio: "Emily Green is a food blogger and nutritionist specializing in healthy and plant-based recipes.",
    },
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    slug: "chocolate-lava-cake",
    description:
      "This rich and decadent chocolate lava cake has a gooey, molten center that flows out when you cut into it. Perfect for chocolate lovers and special occasions.",
    shortDescription:
      "A rich and decadent chocolate lava cake with a molten center.",
    image: "/images/recipe_3.jpg",
    createdAt: "June 5, 2024",
    author: {
      name: "Carlos Ramirez",
      avatar: "/images/recipe_1.jpg",
      bio: "Carlos Ramirez is a pastry chef known for his indulgent and creative dessert recipes.",
    },
  },
  {
    id: 4,
    title: "Grilled Chicken Caesar Salad",
    slug: "grilled-chicken-caesar-salad",
    description:
      "A fresh and flavorful grilled chicken Caesar salad, featuring crisp romaine lettuce, homemade croutons, and a creamy Caesar dressing.",
    shortDescription:
      "A fresh grilled chicken Caesar salad with homemade croutons.",
    image: "/images/recipe_1.jpg",
    createdAt: "July 14, 2024",
    author: {
      name: "Laura Bennett",
      avatar: "/images/recipe_1.jpg",
      bio: "Laura Bennett is a chef and cookbook author who loves creating easy and delicious meals for home cooks.",
    },
  },
  {
    id: 5,
    title: "Blueberry Muffins",
    slug: "blueberry-muffins",
    description:
      "These homemade blueberry muffins are soft, fluffy, and packed with fresh blueberries. Perfect for breakfast or a snack.",
    shortDescription: "Soft and fluffy homemade blueberry muffins.",
    image: "/images/recipe_3.jpg",
    createdAt: "August 21, 2024",
    author: {
      name: "Sophia Martinez",
      avatar: "/images/recipe_1.jpg",
      bio: "Sophia Martinez is a home baker and food photographer who shares her love for baking through her beautiful and delicious recipes.",
    },
  },
];
