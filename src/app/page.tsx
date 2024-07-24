'use client'
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="p-10 mx-auto">
     <Link className="font-bold" href="/addSchool" > Add School  </Link>
     <br />
     <h1 className="text-center m-10 text-3xl" >School list</h1>
     
    </div>
    </>
  );
}
