import React from "react";
import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "./MainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const NavBar = async () => {
  const categories = await getCategories();
  // console.log(categories);
  return (
    <Container>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </Container>
  );
};

export default NavBar;
