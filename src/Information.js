import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Dropdown, Breadcrumb, Badge } from "react-bootstrap";

import React from "react";

function Information() {
  return (
    <div id="back">
      <h1 id="headText">
        Real Estate <Badge>Göteborg</Badge>
      </h1>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Objekt</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Om oss</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Information;
