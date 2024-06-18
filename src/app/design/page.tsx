import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DesignPage() {
  return (
    <>
      <section className="py-6">
        <div className="container">
          <div className="grid gap-y-4">
            <h1 className="text-5xl font-montserrat font-bold">
              How to keep clime your work. montserrat
            </h1>
            <h1 className="text-5xl font-lato font-bold">
              How to keep clime your work. lato
            </h1>
            <h1 className="text-5xl font-roboto font-bold">
              How to keep clime your work. roboto
            </h1>
            <h1 className="text-5xl font-dancingScript font-bold">
              How to keep clime your work. dancingScript
            </h1>
            <h1 className="text-5xl font-bold">
              How to keep clime your work. Normal body font
            </h1>
            <div className="flex gap-3">
              <Button>Explore primary</Button>
              <Button variant={"destructive"}>Explore destructive</Button>
              <Button variant={"ghost"}>Explore ghost</Button>
              <Button variant={"link"}>Explore link</Button>
              <Button variant={"outline"}>Explore outline</Button>
              <Button variant={"secondary"}>Explore secondary</Button>
            </div>
            <p className="font-dancingScript">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              totam, sunt consequuntur veniam exercitationem unde corporis
              officiis inventore, reiciendis sed sint sapiente. Rerum, labore!
              Tempora, corrupti optio earum voluptas repellendus laborum, quae
              quo nisi sit libero ratione excepturi cum quaerat atque odit
              delectus itaque. Ut ex omnis ratione sequi! Unde?
            </p>
            <p className="font-lato">
              Lato Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Error totam, sunt consequuntur veniam exercitationem unde corporis
              officiis inventore, reiciendis sed sint sapiente. Rerum, labore!
              Tempora, corrupti optio earum voluptas repellendus laborum, quae
              quo nisi sit libero ratione excepturi cum quaerat atque odit
              delectus itaque. Ut ex omnis ratione sequi! Unde?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
