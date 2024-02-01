export function Greeting() {
  return <h1>Hello world!!!</h1>;
}

export function SaySomething() {
  return <h1>Dude, I love React.</h1>
}

export function DivWrap() {
  return <div>
    <SaySomething />
  </div>
}