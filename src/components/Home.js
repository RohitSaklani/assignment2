import { useState } from "react";
import { CompanyInfo } from "./CompanyInfo";

export function Home() {
  const [info, setInfo] = useState(false);

  function callApi() {
    fetch(
      "https://hoblist.com/api/movieList?category=movies&language=kannada&genre=all&sort=voting",
      { method: "POST" }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <div className="menu">
        <button onClick={() => setInfo(!info)}>CompanyInfo</button>
        <button onClick={callApi}>call Api </button>
      </div>

      {info ? <CompanyInfo /> : null}
    </div>
  );
}
