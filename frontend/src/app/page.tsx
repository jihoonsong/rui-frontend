import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Here is Main page</p>
      <p className="text-xl">Here is Main page(xl)</p>
      <p className="text-2xl">Here is Main page(2xl)</p>
      <p className="text-3xl">Here is Main page(3xl)</p>
      <p className="text-4xl">Here is Main page(4xl)</p>
      <a className="text-blue-600" href="https://tailwindcss.com/docs/font-size">Tailwind Docs Link</a>
      <div>
        <Link className="text-yellow-700 font-bold" href={'/bankok'}>Go To Bankok Page</Link>
      </div>
    </div>
  );
}
