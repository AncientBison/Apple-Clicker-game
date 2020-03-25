function tutorial() {
	load = 1
	do {x = 0} while (load = 0)
	text = ["Click on the apple to start earning money","Click \"Upgrade Click\" to earn more for each click."]
	document.getElementById("tutorial").innerHTML = text[x]
	while (money != 0) {
		x++;
		document.getElementById("tutorial").innerHTML = text[x]
	}
}

function click() {
	alert("Hi!");
	money = 0;
	mpc = 1;
	money += mpc;
}
