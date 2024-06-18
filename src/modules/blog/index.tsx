import RecipeCard from "@/components/RecipeCard";
import { BlogData, blogData } from "@/components/blogData";

export default function Blog() {
  return (
    <section className="py-6">
      <div className="container">
        <h1 className="text-sm mb-3 font-semibold uppercase">
          The Latest and greatest
        </h1>
        <div className="grid space-y-4">
          {blogData.length > 0 ? (
            blogData.map(function renderBlogs(blog: BlogData, index) {
              return <RecipeCard blog={blog} key={index} />;
            })
          ) : (
            <h3>Data not found :(</h3>
          )}
        </div>
      </div>
    </section>
  );
}
