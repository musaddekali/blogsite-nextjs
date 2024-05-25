import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 20 }).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>Hello Dashboard {index + 1}</CardTitle>
            <CardDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              consequatur.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              iusto nobis doloremque error ad dolor illum incidunt, fugiat
              impedit quaerat?
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
