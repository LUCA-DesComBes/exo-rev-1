const btnInfo = document.getElementById("btnInfo");
const footer = document.querySelector("footer");
const imgArrow = document.getElementById("imgArrow");
const morePara = document.getElementById("more");
const citaPara = document.getElementById("citaPara");
const authorPara = document.getElementById("authorPara");
const firstSect = document.getElementById("first-sect");

btnInfo.addEventListener("click", async () => {
    const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
        method: "GET",
        headers: {
           'X-Api-Key': 'B22707ankcE7AzSpHnEfJg==funFlDEc235jd7EP'
        }
    })
    const data = await res.json();
    console.log(data);
    
	footer.classList.toggle("dn");
	if (imgArrow.src.endsWith("angle-down.svg")) {
		imgArrow.src = "./asset/angle-up.svg";
		morePara.textContent = "LESS";
	} else {
		imgArrow.src = "./asset/angle-down.svg";
		morePara.textContent = "MORE";
	}
    citaPara.textContent = `"${data[0].quote}"`
    authorPara.textContent = data[0].author
    // if (firstSect.innerHTML != "") {
        
    // }
});
