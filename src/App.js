import Header from "./Components/Header";
import {useState} from 'react'
import MenuCard from "./Components/MenuCard";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Description from "./Components/Description";
import Image from "./Components/Images";
import Footer from "./Components/Footer";
function App() {
  const [Click, setClick] = useState(false);
  console.log(Click)
  return (
    <div>
      <Header Click={Click} setClick={setClick} />
      {Click && <MenuCard />}
      <Hero />
      <Info />
      <Description />
      <Image />
      <Footer />
    </div>
  );
}

export default App;
