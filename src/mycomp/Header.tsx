import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

function Header() {
  return (
    <div className="flex bg-black px-10">
      <div>
        <Image
          src={logo}
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <nav className="flex pl-15">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/showcase"
                className={navigationMenuTriggerStyle()}
              >
                Showcase
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/aboutUs"
                className={navigationMenuTriggerStyle()}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent className="w-full">
                <NavigationMenuLink
                  href="/services/ecommerceContent"
                  className={navigationMenuTriggerStyle()}
                >
                  ecommerce content
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/services/ecommerceStrategy"
                  className={navigationMenuTriggerStyle()}
                >
                  ecommerce strategy
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/services/marketingServices"
                  className={navigationMenuTriggerStyle()}
                >
                  marketing services
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}

export default Header;
