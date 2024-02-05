import { useState, Fragment } from "react";

export function Greeting() {
  return <h1>Hello world!!!</h1>;
}

export function SaySomething() {
  return <h1>Dude, I love React.</h1>;
}

export function DivWrap() {
  return (
    <div>
      <SaySomething />
    </div>
  );
}

function Card({ children }) {
  return <div className="card-container">{children}</div>;
}

export function CityList() {
  const cities = ["Tokyo", "New York", "Shanghai"];
  return (
    <Card>
      <ul>
        {cities.map((city) => {
          return <li key={crypto.randomUUID()}>{city}</li>;
        })}
      </ul>
    </Card>
  );
}

export function Button() {
  const [count, setCount] = useState(0);
  const handleIncreaseCount = () => setCount(count + 1);

  return (
    <Fragment>
      <div>{count}</div>
      <button onClick={handleIncreaseCount}>Increase count</button>
    </Fragment>
  );
}
