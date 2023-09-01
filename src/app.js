/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];

let action = ["ate", "peed", "crushed", "broke"];

let what = ["my homework", "the keys", "the car"];

let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let randWho = Math.floor(Math.random() * who.length);
  let randAct = Math.floor(Math.random() * action.length);
  let randWhat = Math.floor(Math.random() * what.length);
  let randWhen = Math.floor(Math.random() * when.length);
  let excuse = document.querySelector("#excuse");

  excuse.innerHTML = `${who[randWho]} ${action[randAct]} ${what[randWhat]} ${when[randWhen]}`;
};
