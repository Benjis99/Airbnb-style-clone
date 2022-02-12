import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="Home">
      <Banner />

      <div className="home_section">
        <Card
          src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F140127103345-peninsula-shanghai-deluxe-mock-up.jpg"
          title="Entire Homes"
          description="This is an hotel room, great space"
        />
        <Card
          src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F140127103345-peninsula-shanghai-deluxe-mock-up.jpg"
          title="Entire Homes"
          description="This is an hotel room, great space"
        />
        <Card
          src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F140127103345-peninsula-shanghai-deluxe-mock-up.jpg"
          title="Entire Homes"
          description="This is an hotel room, great space"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://victor-mochere.com/wp-content/uploads/2020/04/Top-10-most-expensive-hotel-rooms-in-the-world-750x375.jpg"
          title="Penthouse"
          description="blabla blaba baba hgdag a sadas das dsadas"
          price="550KR/Natt"
        />
        <Card
          src="https://victor-mochere.com/wp-content/uploads/2020/04/Top-10-most-expensive-hotel-rooms-in-the-world-750x375.jpg"
          title="Penthouse"
          description="blabla blaba baba hgdag a sadas das dsadas"
          price="550KR/Natt"
        />
        <Card
          src="https://victor-mochere.com/wp-content/uploads/2020/04/Top-10-most-expensive-hotel-rooms-in-the-world-750x375.jpg"
          title="Penthouse"
          description="blabla blaba baba hgdag a sadas das dsadas"
          price="550KR/Natt"
        />
      </div>
    </div>
  );
}

export default Home;
