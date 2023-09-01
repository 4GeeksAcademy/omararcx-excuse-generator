/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];

let action = ['ate', 'peed', 'crushed', 'broke'];

let what = ['my homework', 'the keys', 'the car'];

let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

let excuse = document.querySelector("#excuse");

window.onload = function() () {
  let randWho = who[ Math.floor(Math.Random() *who.length)];
  let randAct = action[ Math.floor(Math.Random() *action.length)];
  let randWhat = what[ Math.floor(Math.Random() * what.length)];
  let randWhen = when[ Math.floor(Math.Random() *when.length)];
  
  
  return (`randWho +randAct +randWhat +randWhen`)
}
