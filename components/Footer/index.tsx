import  Link  from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen bg-gray-100">
      <div className="w-full p-4 flex gap-5 m-auto max-w-[1200px]">
        <p>
          Copyright &copy; <Link href="/">Libcoffee</Link>
        </p>{" "}
        2024. All rights reserved
      </div>
    </footer>
  );
}
