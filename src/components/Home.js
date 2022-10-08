import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "./Layout";
import testData from "./sampleData.json";
const Home = () => {
  const [CounterNumber, SetCounterNumber] = useState(0);
  let arr = [];
  testData.map((item) => arr.push(item.image));

  useEffect(() => {
    let num = CounterNumber;
    if (num === 2) num = 0;
    else num++;

    setTimeout(() => SetCounterNumber(num), 4000);
  }, [CounterNumber]);
  return (
    <Layout>
      <img
        style={{
          width: "100%",
          height: 800,
          transition: "width 2s, height 2s, background-color 2s, transform 2s;",
        }}
        key={"shownImage"}
        src={arr[CounterNumber]}
      />
      <p>Hello World of React and Webpack!</p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;
