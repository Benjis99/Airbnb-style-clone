import React from "react";
import "./SearchPage.css";
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p> 62 stays | 26 august to 30 august | 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place </Button>
        <Button variant="outlined">Price </Button>
        <Button variant="outlined">Rooms and beds </Button>
        <Button variant="outlined">More filters </Button>
      </div>
      <SearchResult
        img="https://www.theshelbourne.com/resourcefiles/roomssmallimages/heritage-parkview-guestroom.jpg"
        location="Private room in center of Dubai"
        title="Stay at this wonderful hotel "
        description="1 guest | 1 bedroom | 1 bed | Kitchen | Free parking"
        star={4.2}
        price="570KR/Natt"
        total="5700KR/Totalt"
      />
      <SearchResult
        img="https://www.theshelbourne.com/resourcefiles/roomssmallimages/heritage-parkview-guestroom.jpg"
        location="Private room in center of Dubai"
        title="Stay at this wonderful hotel "
        description="1 guest | 1 bedroom | 1 bed | Kitchen | Free parking"
        star={4.2}
        price="570KR/Natt"
        total="5700KR/Totalt"
      />
    </div>
  );
}

export default SearchPage;
