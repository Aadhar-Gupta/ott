import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function Services() {
  return (
    <>
      <Separator />

      <div className="flex flex-1 items-center bg-black p-[100px] justify-around gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              dolores dolorum, sit molestiae ab consequuntur facilis? Iusto
              minus expedita, quidem accusamus distinctio, praesentium officiis
              autem labore cum laborum illum totam dicta enim magni cupiditate
              dolores eveniet mollitia hic quasi nostrum. Officia esse veritatis
              sed corporis necessitatibus quos, ad sint facere.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            praesentium nesciunt illum id suscipit nobis. Deleniti perferendis,
            corporis quisquam est beatae alias asperiores ad incidunt sed, quam
            aliquam optio id?
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              dolores dolorum, sit molestiae ab consequuntur facilis? Iusto
              minus expedita, quidem accusamus distinctio, praesentium officiis
              autem labore cum laborum illum totam dicta enim magni cupiditate
              dolores eveniet mollitia hic quasi nostrum. Officia esse veritatis
              sed corporis necessitatibus quos, ad sint facere.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              aut nam repellendus officia, magni voluptate rem ab ratione,
              numquam placeat vel expedita id doloribus quasi laboriosam quos
              reiciendis repudiandae et!
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              dolores dolorum, sit molestiae ab consequuntur facilis? Iusto
              minus expedita, quidem accusamus distinctio, praesentium officiis
              autem labore cum laborum illum totam dicta enim magni cupiditate
              dolores eveniet mollitia hic quasi nostrum. Officia esse veritatis
              sed corporis necessitatibus quos, ad sint facere.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              accusantium alias neque, enim vitae laudantium dignissimos eveniet
              maiores, libero iusto deleniti facere suscipit ex nisi quidem
              fugiat reiciendis architecto blanditiis.
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <Separator />
    </>
  );
}

export default Services;
