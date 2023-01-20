import Link from "next/link";
import React from "react";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="flex items-center gap-x-10 font-extralight text-xl">
      <Link href="/">Home</Link>
      <Link href="/about-me">About me</Link>
      {/* <Link href="">Career</Link> */}
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Navigation;
