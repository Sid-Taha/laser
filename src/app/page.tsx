// src\app\page.tsx
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Insta from "@/components/Insta";
import Onepic from "@/components/Onepic";
import Ourbloge from "@/components/Ourbloge";
import Pro from "@/components/Pro";
import Sb from "@/components/Sb";

import SmallGallery from "@/components/SmallGallery";
// import Board from "./board/page";


export default function Home() {
  return (
   <div className="mt-24">
    <Hero/>
    <Pro/>
    <Gallery/>
    <Ourbloge/>
    <SmallGallery/>
    <Insta/>
    <Onepic/>
    
    <Sb/>
   
   </div>
  );
}
