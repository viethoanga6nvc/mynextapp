import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

export default function Layout({children}) {
  return (
    <>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  );
}
