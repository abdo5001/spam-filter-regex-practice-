const text = document.getElementById("text-to-check");
const checkBtn = document.getElementById("check-button");
const result = document.getElementById("result-text");

const freeRegex = /(?:\s|^)fr[3e][3e] m[0o]n[3e]y(?:\s|$)/i;
const dollarRegex = /(?:\s|^)[0-9]+ (hundred|thousand|million|billion)d[0o]ll[@4ar](?:\s|$)/i;

const denyList = [freeRegex, dollarRegex];

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkBtn.addEventListener('click', () => {
  if(text.value === ""){
    alert("enter a text");
  }
  else {
    result.textContent = isSpam(text.value) ? "spam" : "not a spam";

  text.value = "";}
});
