import {  Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import ConnectWallet from "@/components/ConnectWallet";
import Link from "next/link";

export default function Header() {
    return (
        <Navbar isBordered isBlurred={false}>
      <NavbarBrand>
        <Link href="/" className="font-bold text-2xl text-primary ">Tickets Inc.</Link>
      </NavbarBrand>
      <NavbarContent className="" justify="center">
      <NavbarItem>
        </NavbarItem>
        <NavbarItem>
         <Link className=" text-primary" href="/createticket">Create Event</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
            <ConnectWallet/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    )
}