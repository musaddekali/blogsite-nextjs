import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Recurtion() {
  return (
    <section className="py-16">
      <div className="container">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Recurtion</CardTitle>
            <CardDescription>
              Recursion is a programming method that solves a problem by using
              solutions to smaller instances of the same problem. A function
              calls itself until the problem is solved, either directly or
              indirectly.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
