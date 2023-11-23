import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Split from "./split";

export default function Footer() {
  return (
    <>
      <header className="footer_container">
        <Split/>
        <p>&copy; Copyright <a href="/">rikikuurne.be</a> | Alle rechten voorbehouden.</p>
        <p>Een website gemaakt door <a href="https://xndr2.github.io/">Xander</a>.</p>
      </header>
    </>
  )
}