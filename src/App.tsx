import React, { memo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

let username: string = "Hello";

let dummyNum: number = 2;
let bool: boolean = true;

let array1 = [true, false, true];
let array2 = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = {
  first: "Yamada",
  last: null,
};

const func1 = (x: number, y: number): number => {
  return x + y;
};

//Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 1,
  city: "himeji",
  username: "yamada tarou",
  password: "himejitarou",
};

//Union Types
let value: boolean | number;
value = true;
value = 2;

let arrayUni: (number | string)[];
arrayUni = [2, "2"];

let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";

let memory: 256 | 512 | 1024;
memory = 256;

//typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "msg2";

let animal = { cat: "small cat" };
let newAnimal: typeof animal;
newAnimal = {
  cat: "big cat",
};

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};

let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySport: keyof typeof SPORTS;
keySport = "soccer";

// enum
enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 型の互換性

const comp1 = "test";
let comp2: string = comp1;

let funccomp1 = (x: number) => {};
let funccomp2 = (x: string) => {};

// NG funccomp1 = funccomp2
// NG funccomp2 = funccomp1

//Generics
interface GEN<T> {
  item: T;
}

const gen0: GEN<string> = { item: "hello" };

const gen1: GEN<number> = { item: 2 };

interface GEN1<T = string> {
  item: T;
}

const gen3: GEN1 = { item: "hello" };

interface GEN2<T extends string | number> {
  item: T;
}

const gen4: GEN2<number> = { item: 2 };

function funcGen<T>(props: T) {
  return { item: props };
}

const gen6 = funcGen<string>("test");
const gen7 = funcGen<string | null>(null);

function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}

const gen8 = funcGen1("hello");
const gen9 = funcGen1(null);

interface Props {
  price: number;
}

function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}

const gen10 = funcGen3({ price: 10 });

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
