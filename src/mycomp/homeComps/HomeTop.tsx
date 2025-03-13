import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FlipWords } from "@/components/ui/flip-text";
import Image from "next/image";
import logo from "@/assets/logo.png";

function HomeTop() {
  const words = ["business", "content", "audience", "leades"];
  return (
    <>
      <div className="bg-black pr-[100px] pl-[100px] flex flex-col lg:flex-row">
        <div className="flex items-center ">
          <Card className="w-1/2  max-h-60">
            <CardHeader>
              <CardDescription>WELCOME TO OTT</CardDescription>
              <CardTitle>
                {" "}
                <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                  Build
                  <FlipWords words={words} /> <br />
                  with Us
                </div>{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {" "}
                Using Data & Design to Provide Quick Digitisation Solutions that
                help you convert better
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Know More</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/2 ">
          <Image
            src={logo}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <Separator></Separator>
    </>
  );
}

export default HomeTop;
