import Image from "next/image";
import Link from "next/link";
import { BlogData } from "../blogData";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui";

export default function RecipeCard({ blog }: { blog: BlogData | undefined }) {
  const { title, image, shortDescription, createdAt, author } = blog || {};
  return (
    <Card className="rounded-md overflow-hidden">
      <CardContent className="p-0 flex flex-col sm:flex-row">
        <figure>
          <Link href="#" className="h-full flex">
            <Image
              src={image ? image : ""}
              width={450}
              height={400}
              alt="Recipe"
              className="w-full sm:max-h-full sm:w-[250px] max-h-[200px] object-cover"
              priority
            />
          </Link>
        </figure>
        <div className="p-3 space-y-2 grow">
          <span className="text-xs uppercase tracking-wide font-dancingScript">
            {createdAt}
          </span>
          <CardTitle className="text-xl ">
            <Link href="#" className="hover:underline">
              {title}
            </Link>
          </CardTitle>
          <CardDescription className="text-base">
            {shortDescription}
          </CardDescription>
          <div aria-label="Categories">
            <span className="text-sm inline-block leading-none mb-2 font-medium text-black/80">
              Categorys:{" "}
            </span>
            <ul className="flex items-center flex-wrap gap-1.5">
              {Array.from({ length: 3 }).map((_, index) => (
                <li key={index}>
                  <Link href="#" className="inline-block">
                    <Badge variant={"secondary"} className="font-medium">
                      Fast food {index + 1}
                    </Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Author  */}
          <Author author={author} />
          <div aria-label="Cta">
            <Link href="#">
              <Button
                variant={"link"}
                className="uppercase pl-0 font-semibold tracking-wide text-primary"
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

function Author({
  author,
}: {
  author: { name: string; bio: string; avatar: string } | undefined;
}) {
  return (
    <div aria-label="Author" className="!mt-5">
      <div className="flex flex-nowrap items-start gap-2">
        <figure className="inline-flex w-10 h-10 rounded-full overflow-hidden mb-0 shrink-0">
          <Image
            src={author?.avatar ?? ""}
            width={40}
            height={40}
            alt="Author"
            priority
          />
        </figure>
        <div>
          <h4 className="text-sm text-accent-fg font-medium">
            <Link href="#">{author?.name}</Link>
          </h4>
          <p className="text-xs text-accent-fg leading-tight">
            {author?.bio && author?.bio?.length > 40
              ? author?.bio.slice(0, 40) + "..."
              : author?.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
