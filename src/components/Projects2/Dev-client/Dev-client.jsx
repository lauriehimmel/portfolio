import "./Dev-client.css";
import wireframe1 from "./Assets/Client-Wireframes-01.svg";
import wireframe2 from "./Assets/Client-Wireframes-02.svg";
import wireframe3 from "./Assets/Client-Wireframes-03.svg";
import Navbar from "../../Navbar/Navbar";

export default function DevClient() {
  return (
    <>
      {/* <Navbar location={"projects"} /> */}
      <h1 className="dev-header">Client Design</h1>
      <div className="dev-info">
        <div className="dev-imgs">
          <img className="client-wireframes" src={wireframe1} />
          <img className="client-wireframes" src={wireframe2} />
          <img className="client-wireframes" src={wireframe3} />
        </div>
        <div className="dev-copy">
          Duis at justo turpis. Mauris non consectetur purus. Sed in volutpat
          sem, sit amet ornare est. Maecenas eget est sit amet orci venenatis
          finibus. Donec pellentesque auctor nibh, et cursus nisl imperdiet vel.
          Vestibulum molestie leo suscipit, aliquet arcu ut, egestas enim.
          Curabitur facilisis ut dolor sit amet imperdiet. Fusce augue mauris,
          consequat placerat tempus et, egestas id nisi. Ut aliquet nisl quis
          fringilla sodales. Maecenas sit amet nisl mauris. Nullam consequat
          eros elit, nec hendrerit lectus lacinia ut. Phasellus eget lectus ut
          elit dignissim aliquet vel sed dui. Nullam pretium quam vitae est
          fringilla consectetur. Suspendisse finibus suscipit dapibus.
        </div>
      </div>
    </>
  );
}
