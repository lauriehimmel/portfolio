import "./Sydney-client.css";
import wireframe from "./Assets/0-mobile.jpg";
import wireframe1 from "./Assets/1-mobile.jpg";
import wireframe2 from "./Assets/2-mobile.jpg";
import wireframe3 from "./Assets/3-mobile.jpg";
import wireframe4 from "./Assets/4-mobile.jpg";
import wireframe2a from "./Assets/2a-mobile.jpg";
import Navbar from "../../Navbar/Navbar";

export default function SydneyClient() {
  return (
    <>
      <Navbar location={"projects"} />

      <h1 className="syd-header">Shine With Sydney</h1>
      <div className="syd-info">
        <div className="syd-imgs">
          <img className="client-wireframes" src={wireframe} />
          {/* <img className="client-wireframes" src={wireframe1} /> */}
          <img className="client-wireframes" src={wireframe2} />
          <img className="client-wireframes" src={wireframe3} />
          <img className="client-wireframes" src={wireframe4} />
        </div>
        <div className="syd-copy">
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
