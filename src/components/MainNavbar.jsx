import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

function MainNavbar() {
  return (
    <>
      <Navbar className="bg-white">
        <NavbarContent justify="start" className="flex gap-0">
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly className="bg-transparent">
                  <i className="bi bi-list text-lg font-medium text-black"></i>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>
                  <Link href="/">Home</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="#newCollections">New Collections</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="#popularCollections">Popular Collections</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/collections">Our Collections</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="#footer">Contact Us</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="#footer">Terms</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Link href="">
              <Button isIconOnly className="bg-transparent">
                <i className="bi bi-search text-lg font-bold text-black"></i>
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarBrand className="flex justify-center items-center">
          <a href="#" className="text-lg font-bold text-black">
            Dreamour
          </a>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly className="bg-black">
                  <i className="bi bi-bell text-md font-medium text-white"></i>
                </Button>
              </DropdownTrigger>
              <DropdownMenu></DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default MainNavbar;
