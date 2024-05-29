

let credits = document.querySelectorAll(".Credits");
let ttlcredites = 0;
for (let i = 0; i < credits.length; i++) {
  ttlcredites = ttlcredites + parseFloat(credits[i].innerHTML);
}

let Fee = document.querySelectorAll(".Fee");
let ttlfee = 0;
for (let i = 0; i < Fee.length; i++) {
  ttlfee = ttlfee + parseFloat(Fee[i].innerHTML);
}

let NetFee = document.querySelectorAll(".NetFee");
let ttlNetfee = 0;
for (let i = 0; i < NetFee.length; i++) {
  ttlNetfee = ttlNetfee + parseFloat(NetFee[i].innerHTML);
}
let fa = document.querySelector("#fa").innerHTML;

function tt() {
  document.querySelector("#TotalCredits").innerHTML = ttlcredites;
  document.querySelector("#totalFee").innerHTML = ttlfee;
  document.querySelector("#totalNetFee").innerHTML = ttlNetfee;
  document.querySelector("#FA").innerHTML = fa;
}
