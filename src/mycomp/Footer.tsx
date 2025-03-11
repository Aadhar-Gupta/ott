import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

function Footer() {
  return (
    <div className=" bg-black flex w-full">
      <div className="flex w-full lg:w-[25%] items-center flex-col">
        <Image
          src={logo}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div>
          <p className="text-white p-5">for all your online media needs</p>
        </div>
      </div>
      <div className="flex w-full lg:w-[25%] items-center">
        <Separator orientation="vertical" />
        <div className="flex  flex-col text-white">
          <div>
            <p>Quick Links</p>
            <ul>
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>{" "}
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>{" "}
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>{" "}
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>{" "}
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>Quick Links</p>
            <ul>
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>{" "}
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>{" "}
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>{" "}
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>{" "}
              <li>
                <Link href="/"> heyeyeyey</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-[25%]  text-white items-center">
        <Separator orientation="vertical" />

        <p>Address</p>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio natus
          incidunt minima blanditiis minus cupiditate ipsum consequatur
          laudantium repellat non.
        </span>
      </div>
      <div className="flex w-full lg:w-[25%] text-white  items-center">
        <Separator orientation="vertical" />
        <div className="flex-col">
          <p>Our socials</p>
          <ul>
            <li>opsdvsdv</li>
            <li>sdvsdv</li>
            <li>svsvs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
