import Card from "./Card/Card";
import Content from "./Content/Content";
import Header from "./Header/Header";
import "./Home.css";
import Ide from "./Ide/Ide";
import Webeditor from "./WebEditor/Webeditor";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <div className="mainOutside">
      <div>
        <Header></Header>
        <Content></Content>
        {/* <div>hello</div> */}
        <Webeditor></Webeditor>
        <Ide></Ide>
        <Card></Card>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Home;
