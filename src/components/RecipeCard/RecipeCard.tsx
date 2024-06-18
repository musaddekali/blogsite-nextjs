import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { BlogData } from "../blogData";

export default function RecipeCard({ blog }: { blog: BlogData | undefined }) {
  const { title, image, shortDescription, createdAt } = blog || {};
  return (
    <Card className="rounded-md overflow-hidden">
      <CardContent className="p-0 flex flex-col sm:flex-row">
        <Image
          src={image ? image : ""}
          width={200}
          height={150}
          alt="Recipe"
          className="w-full sm:max-h-full sm:w-[200px] max-h-[200px] object-cover"
          priority
        />
        <div className="p-3 space-y-2">
          <span className="text-xs uppercase tracking-wide font-mono">
            {createdAt}
          </span>
          <CardTitle className="text-xl hover:underline">
            <Link href="#">{title}</Link>
          </CardTitle>
          <CardDescription className="text-base">
            {shortDescription}
          </CardDescription>
          <div>
            <Link href="#">
              <Button
                variant={"link"}
                className="uppercase pl-0 font-semibold tracking-wide text-orange-500"
              >
                Continue Reading
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
