"use client";
import Accordion from "@/component/accordion";
import Tombol_1, { Tombol_2, Tombol_3 } from"@/component/button";
import Form from "@/component/form";
import Gallery from "@/component/gallery";

export default function Home(){
  return(
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol_1 />
        <hr></hr>
        <Tombol_2 isiPesan="ini Pesanku" namaTombol="Pesan" />
        </div>
        <br></br>
        <div className="bg-red-300" onClick={() => alert('Parent Element : Div')}>
        <Tombol_3 message="Child Element : Button_01" buttonName="Button_01" />
        <Tombol_3 message="Child Element : Button_02" buttonName="Button_02" />
      </div>
      <br></br>
      <Gallery />
      <br></br>
      <Form />
      <br></br>
      <Accordion />
    </>
  );
}