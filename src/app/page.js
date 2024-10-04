import Navbar from "@/components/Navbar";
import MiniNavbar from "@/components/MiniNavbar";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <MiniNavbar />
      <Header />
      <Products />
      <Footer />
    </div>
  );
}
