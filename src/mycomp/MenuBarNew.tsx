"use client";
import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { redirect } from "next/navigation";

export default function BasicDemo() {
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-palette",
      command: () => {
        redirect("/");
      },
    },
    {
      label: "Showcase",
      icon: "pi pi-link",
      command: () => {
        redirect("/showcase");
      },
    },
  ];

  const start = (
    <Image
      alt="logo"
      src={logo}
      height="40"
      width="40"
      className="mr-2"
    ></Image>
  );
  return (
    <div className="card">
      <Menubar
        pt={{
          root: {
            className: " text-white shadow-lg rounded-md !bg-black text-white",
          },
          menu: { className: "flex space-x-4 !bg-black" },
          action: {
            className: "!bg-black px-4 py-2  transition",
          },
          submenu: { className: "!bg-black text-white" },
        }}
        model={items}
        start={start}
      />
    </div>
  );
}
