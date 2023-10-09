import HomeHeader from "../../components/Home/Home-header";
import HomeLink from "../../components/Home/Home-link";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-body">
      <HomeHeader />
      <HomeLink />
    </div>
  );
}
