const freelanceNames = ["Alice", "Bob", "Carol", "Peter", "Isabella", "Marcella"];
const freelanceOccupations = ["Writer", "Teacher", "Programmer", "Painter", "Tennis Coach", "Web Designer"];
const freelancePrices = [30, 50, 70, 20, 45, 60];

function init() {

    const h1 = document.createElement("h1");
    h1.innerHTML = "Freelance Forum"
    document.body.append(h1);

    const p = document.createElement("p");
    p.innerHTML = "The average starting price is"
    document.body.append(p);

    const freelanceContainer = document.createElement("div")
    freelanceContainer.id = "freelanceContainer"
    document.body.append(freelanceContainer);

    console.dir(freelanceContainer);

    //function renderFreelancers () {
      //  const 
   // }
    //freelanceContainer.classList.add()
//}
    function renderFreelancers() {
        const freelancer = document.querySelector("#freelanceContainer")
        container.innerHTML = "";

        freeLancer.forEach

        freelancePrices.forEach((freeLancer) => {}
        const randomName = freelanceNames[Math.floor(Math.random() * freelanceNames.length)];
        const randomOccupation = freelanceOccupations[Math.floor(Math.random() * freelanceOccupations.length)];
        const randomPrice = freelancePrices[Math.floor(Math.random() * freelancePrices.length)];

        console.log(`"Available Freelancers:" ${randomName}, ${randomOccupation}, $${randomPrice}`);

        const freelancerDiv = document.createElement("div");
        freelancerDiv.textContent = `${randomName} - ${randomOccupation} - $${randomPrice}`;
        freelanceContainer.appendChild(freelancerDiv);
    })
    setInterval(renderFreelancers, 3000);
}
