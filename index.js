const freelanceNames = ["Alice", "Bob", "Carol", "Shannon", "Ari", "Jessica"];
const freelanceOccupations = ["Writer", "Teacher", "Programmer", "Instructor", "Teaching Assistant", "Learner Experience Manager"];
const freelancePrices = [30, 50, 70, 55, 65, 45];

let freelancerCount = 1;

function init() {

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";
    wrapper.style.textAlign = "center";
    wrapper.style.width = "100%";
    document.body.append(wrapper);

    const h1 = document.createElement("h1");
    h1.innerHTML = "Freelance Forum";
    wrapper.appendChild(h1);

    const p = document.createElement("p");
    p.id = "averagePrice";
    wrapper.appendChild(p);

    const h2 = document.createElement("h2");
    h2.innerHTML = "Available Freelancers"
    wrapper.appendChild(h2);

    const titleContainer = document.createElement("div");
    titleContainer.id = "titleContainer";
    titleContainer.style.display = "flex";
    titleContainer.style.justifyContent = "center";
    titleContainer.style.gap = "60px";
    wrapper.appendChild(titleContainer);

    const titles = ["Names", "Occupations", "Starting Price"];
    const container = document.getElementById("titleContainer");
    titles.forEach(title => {
        const span = document.createElement("span");
        span.textContent = title;
        span.style.justify = "10px";
        container.appendChild(span);
    })

    function updateAveragePrice() {
        const total = freelancePrices.reduce((sum, price) => sum + price, 0);
        const average = (total / freelancePrices.length).toFixed(2);
        document.getElementById("averagePrice").innerHTML = `<strong>The average starting price is $${average}</strong>`;
    }
    const freelanceContainer = document.createElement("div");
    freelanceContainer.id = "freelanceContainer";
    freelanceContainer.style.display = "flex";
    freelanceContainer.style.justifyContent = "center";
    freelanceContainer.style.gap = "60px"
   wrapper.appendChild(freelanceContainer);

    function renderFreelancers() {
        freelanceContainer.innerHTML = "";

        for (let i = 0; i < freelanceNames.length; i++) {
            const freelancerDiv = document.createElement("div");
            freelancerDiv.classList.add("freelancer");

            const nameSpan = document.createElement("span");
            nameSpan.textContent = freelanceNames[i];
            nameSpan.style.marginRight = "10px"; 

            const occupationSpan = document.createElement("span");
            occupationSpan.textContent = freelanceOccupations[i];
            occupationSpan.style.marginRight = "10px";

            const priceSpan = document.createElement("span");
            priceSpan.textContent = `$${freelancePrices[i]}`;
            priceSpan.style.fontWeight = "bold";

            freelancerDiv.appendChild(nameSpan);
            freelancerDiv.appendChild(occupationSpan);
            freelancerDiv.appendChild(priceSpan);

            freelanceContainer.appendChild(freelancerDiv);
        }
        updateAveragePrice();
    }

    function addRandomFreelancer() {
        
        const newName = freelanceNames[Math.floor(Math.random() * freelanceNames.length)];
        const randomOccupation = freelanceOccupations[Math.floor(Math.random() * freelanceOccupations.length)];
        const randomPrice = Math.floor(Math.random() * 81) + 20;

        freelanceNames.push(newName);
        freelanceOccupations.push(randomOccupation);
        freelancePrices.push(randomPrice);

        const freelancerDiv = document.createElement("div");
        freelancerDiv.style.display = "flex";
        freelancerDiv.style.gap = "10px";
        freelancerDiv.style.marginTop = "5px";

        const randomnameSpan = document.createElement("span");
        randomnameSpan.textContent = newName;
        randomnameSpan.style.marginRight = "10px";

        const randoccSpan = document.createElement("span");
        randoccSpan.textContent = randomOccupation;
        randoccSpan.style.marginRight = "10px";

        const randompriceSpan = document.createElement("span");
        randompriceSpan.textContent = `$${randomPrice}`
        randompriceSpan.style.fontWeight = "bold";

        freelanceContainer.appendChild(randomnameSpan);
        freelanceContainer.appendChild(randoccSpan);
        freelanceContainer.appendChild(randompriceSpan);

        freelanceContainer.appendChild(freelancerDiv);

        updateAveragePrice();
    }

   
    setInterval(addRandomFreelancer, 3000);
}
document.addEventListener("DOMContentLoaded", init);

