import Image from "next/image";
import Nav from './components/Nav';
import Header from './components/Header';
import Form from './components/Form';
import Services from './components/Services';
import Description from "./components/Description";

export default function Home() {
  return (
    <main className="bg-white">
      <Nav />
      <Header />
      <Description />
      <Form />
      <Services />
    </main>
  );
}
