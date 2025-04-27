import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const categories = [
  { name: "General", category: "general", active: true },
  { name: "Business", category: "business", active: false },
  { name: "Entertainment", category: "entertainment", active: false },
  { name: "Health", category: "health", active: false },
  { name: "Science", category: "science", active: false },
  { name: "Sports", category: "sports", active: false },
  { name: "Technology", category: "technology", active: false },
];

interface CategoriesProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="w-full">
      <ScrollArea className="w-[calc(100vw-2rem)] lg:w-full pb-2">
        <div className="flex flex-row items-center space-x-2">
          {categories?.map(({ name, category }, i) => (
            <Button
              key={i}
              onClick={() => onCategoryChange?.(category)}
              variant={selectedCategory === category ? "default" : "filled"}
              className="rounded-full h-[49px] px-6"
            >
              {name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="mt-2" />
      </ScrollArea>
    </div>
  );
};

export default Categories;
