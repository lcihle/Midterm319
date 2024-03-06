window.addEventListener('load', (event) => {
    // Your code here
    fetch("skis.json")
        .then(response => response.json())
        .then(skisList => loadSkis(skisList));
});

function loadSkis(skisList) {

    var CardMovie = document.getElementById("col");

    var checkboxes = [];

    var cards = [];

 

    for (var i = 0; i<skisList.skis.length; i++){

 

        let title = skisList.skis[i].skiName;

        let year = skisList.skis[i].price;

        let url = skisList.skis[i].url;

 

        let checkbox = "checkbox" + i.toString();

        let card = "card" + i.toString();

       

        // create a new HTML div division

        let AddCardMovie = document.createElement("div");

        // add class = “col” to new division for Bootstrap

        AddCardMovie.classList.add("col");

        // create Bootstrap card

        AddCardMovie.innerHTML = `

        

        <img src=${url} class="card-img-top" alt="..."></img>

        <div class="card-body">

        <p class="card-text"> <strong>${title}</strong>: ${year}$</p>

        <div class="d-flex justify-content-between align-items-center">


        </div>

        

        </div>

        </div>

        </div>

        `;

        // append new division

        CardMovie.appendChild(AddCardMovie);

 

        let cbox = document.getElementById(checkbox);

        checkboxes.push(cbox);

        let ccard = document.getElementById(card);

        cards.push(ccard);

 

        // explore console

        console.log(checkbox);

        console.log(card);

   

 

    } // end of for

 

    console.log(checkboxes);

    console.log(cards);

 

    // Add event listeners to checkboxes to toggle card visibility

    // checkboxes.forEach((checkboxParam, index) => {

    // console.log(index);

    // checkboxParam.addEventListener('change', () => {

    // if (checkboxParam.checked) {

    // cards[index].style.display = 'block'; // Show the card

    // } else {

    // cards[index].style.display = 'none'; // Hide the card

    // }

    // });

    // });

    function priceHighLow() {
        CardMovie.innerHTML = ``;
        var arr = skisList.skis.sort((a, b) => b.price - a.price);
        for (var i = 0; i<arr.length; i++){

 

            let title = arr[i].skiName;
    
            let year = arr[i].price;
    
            let url = arr[i].url;
    
     
    
            let checkbox = "checkbox" + i.toString();
    
            let card = "card" + i.toString();
    
           
    
            // create a new HTML div division
    
            let AddCardMovie = document.createElement("div");
    
            // add class = “col” to new division for Bootstrap
    
            AddCardMovie.classList.add("col");
    
            // create Bootstrap card
            
    
            AddCardMovie.innerHTML = `
    
            
    
            <img src=${url} class="card-img-top" alt="..."></img>
    
            <div class="card-body">
    
            <p class="card-text"> <strong>${title}</strong>: ${year}$</p>
    
            <div class="d-flex justify-content-between align-items-center">
    
    
            </div>
    
            
    
            </div>
    
            </div>
    
            </div>
    
            `;
    
            // append new division
    
            CardMovie.appendChild(AddCardMovie);
    
     
    
            let cbox = document.getElementById(checkbox);
    
            checkboxes.push(cbox);
    
            let ccard = document.getElementById(card);
    
            cards.push(ccard);
        }
      //  updateCardDisplay();
    }

    // Sort by low to high price
    function priceLowHigh() {
        CardMovie.innerHTML = ``;
        var arr2 = skisList.skis.sort((a, b) => a.price - b.price);
        for (var i = 0; i<arr2.length; i++){

 

            let title = arr2[i].skiName;
    
            let year = arr2[i].price;
    
            let url = arr2[i].url;
    
     
    
            let checkbox = "checkbox" + i.toString();
    
            let card = "card" + i.toString();
    
           
    
            // create a new HTML div division
    
            let AddCardMovie = document.createElement("div");
    
            // add class = “col” to new division for Bootstrap
    
            AddCardMovie.classList.add("col");
    
            // create Bootstrap card
            
    
            AddCardMovie.innerHTML = `
    
            
    
            <img src=${url} class="card-img-top" alt="..."></img>
    
            <div class="card-body">
    
            <p class="card-text"> <strong>${title}</strong>: ${year}$</p>
    
            <div class="d-flex justify-content-between align-items-center">
    
    
            </div>
    
            
    
            </div>
    
            </div>
    
            </div>
    
            `;
    
            // append new division
    
            CardMovie.appendChild(AddCardMovie);
    
     
    
            let cbox = document.getElementById(checkbox);
    
            checkboxes.push(cbox);
    
            let ccard = document.getElementById(card);
    
            cards.push(ccard);
        }
       
    }

    // Function to update card display based on skisList order
    function updateCardDisplay() {
        for (let i = 0; i < skisList.skis.length; i++) {
            if (checkboxes[i].checked) {
                cards[i].style.display = 'block';
            } else {
                cards[i].style.display = 'none';
            }
        }
    }
    function sortStyle() {
        CardMovie.innerHTML = ``;
        var freestyleSkis = [];
    var allMountainSkis = [];

    for (var i = 0; i < skisList.skis.length; i++) {
        var ski = skisList.skis[i];

        if (ski.style === "freestyle") {
            freestyleSkis.push(ski);
        } else if (ski.style === "all-mountain") {
         //   allMountainSkis.push(ski);
        }
    }

    // Combine the two arrays with freestyle skis first and all-mountain skis last
    var arr3 = freestyleSkis.concat(allMountainSkis);

    for (var i = 0; i<arr3.length; i++){

 

        let title = arr3[i].skiName;

        let year = arr3[i].price;

        let url = arr3[i].url;

 

        let checkbox = "checkbox" + i.toString();

        let card = "card" + i.toString();

       

        // create a new HTML div division

        let AddCardMovie = document.createElement("div");

        // add class = “col” to new division for Bootstrap

        AddCardMovie.classList.add("col");

        // create Bootstrap card
        

        AddCardMovie.innerHTML = `

        

        <img src=${url} class="card-img-top" alt="..."></img>

        <div class="card-body">

        <p class="card-text"> <strong>${title}</strong>: ${year}$</p>

        <div class="d-flex justify-content-between align-items-center">


        </div>

        

        </div>

        </div>

        </div>

        `;

        // append new division

        CardMovie.appendChild(AddCardMovie);

 

        let cbox = document.getElementById(checkbox);

        checkboxes.push(cbox);

        let ccard = document.getElementById(card);

        cards.push(ccard);
    }
   
    

    
   

    // Combine the two arrays with freestyle skis first and all-mountain skis last

    }

    function allMountain() {
        CardMovie.innerHTML = ``;
        var freestyleSkis = [];
    var allMountainSkis = [];

    for (var i = 0; i < skisList.skis.length; i++) {
        var ski = skisList.skis[i];

        if (ski.style === "freestyle") {
         //   freestyleSkis.push(ski);
        } else if (ski.style === "all-mountain") {
            allMountainSkis.push(ski);
        }
    }

    // Combine the two arrays with freestyle skis first and all-mountain skis last
    var arr4 = allMountainSkis.concat(freestyleSkis);

    for (var i = 0; i<arr4.length; i++){

 

        let title = arr4[i].skiName;

        let year = arr4[i].price;

        let url = arr4[i].url;

 

        let checkbox = "checkbox" + i.toString();

        let card = "card" + i.toString();

       

        // create a new HTML div division

        let AddCardMovie = document.createElement("div");

        // add class = “col” to new division for Bootstrap

        AddCardMovie.classList.add("col");

        // create Bootstrap card
        

        AddCardMovie.innerHTML = `

        

        <img src=${url} class="card-img-top" alt="..."></img>

        <div class="card-body">

        <p class="card-text"> <strong>${title}</strong>: ${year}$</p>

        <div class="d-flex justify-content-between align-items-center">


        </div>

        

        </div>

        </div>

        </div>

        `;

        // append new division

        CardMovie.appendChild(AddCardMovie);

 

        let cbox = document.getElementById(checkbox);

        checkboxes.push(cbox);

        let ccard = document.getElementById(card);

        cards.push(ccard);
    }
   
    
    }
    function sortBlack() {
        CardMovie.innerHTML = ``;
        var blackSkis = [];
    var greySkis = [];

    for (var i = 0; i < skisList.skis.length; i++) {
        var ski = skisList.skis[i];

        if (ski.color === "black") {
            blackSkis.push(ski);
        } else if (ski.style === "grey") {
           // greySkis.push(ski);
        }
    }

    // Combine the two arrays with freestyle skis first and all-mountain skis last
   // var arr5 = blackSkis.concat(greySkis);
        for (var i = 0; i<blackSkis.length; i++){

 

            let title = blackSkis[i].skiName;
    
            let year = blackSkis[i].price;
    
            let url = blackSkis[i].url;
    
     
    
            let checkbox = "checkbox" + i.toString();
    
            let card = "card" + i.toString();
    
           
    
            // create a new HTML div division
    
            let AddCardMovie = document.createElement("div");
    
            // add class = “col” to new division for Bootstrap
    
            AddCardMovie.classList.add("col");
    
            // create Bootstrap card
            
    
            AddCardMovie.innerHTML = `
    
            
    
            <img src=${url} class="card-img-top" alt="..."></img>
    
            <div class="card-body">
    
            <p class="card-text"> <strong>${title}</strong>: ${year}$</p>
    
            <div class="d-flex justify-content-between align-items-center">
    
    
            </div>
    
            
    
            </div>
    
            </div>
    
            </div>
    
            `;
    
            // append new division
    
            CardMovie.appendChild(AddCardMovie);
    
     
    
            let cbox = document.getElementById(checkbox);
    
            checkboxes.push(cbox);
    
            let ccard = document.getElementById(card);
    
            cards.push(ccard);
        }

    }
    function sortGrey() {
        CardMovie.innerHTML = ``;
        var blackSkis = [];
    var greySkis = [];

    for (var i = 0; i < skisList.skis.length; i++) {
        var ski = skisList.skis[i];

        if (ski.color === "grey") {
         //   greySkis.push(ski);
        }
    }

    // Combine the two arrays with freestyle skis first and all-mountain skis last
   // var arr5 = greySkis.concat(blackSkis);
        for (var i = 0; i<greySkis.length; i++){

            let title = greySkis[i].skiName;
    
            let year = greySkis[i].price;
    
            let url = greySkis[i].url;
    
     
    
            let checkbox = "checkbox" + i.toString();
    
            let card = "card" + i.toString();
    
           
    
            // create a new HTML div division
    
            let AddCardMovie = document.createElement("div");
    
            // add class = “col” to new division for Bootstrap
    
            AddCardMovie.classList.add("col");
    
            // create Bootstrap card
            
    
            AddCardMovie.innerHTML = `
    
            
    
            <img src=${url} class="card-img-top" alt="..."></img>
    
            <div class="card-body">
    
            <p class="card-text"> <strong>${title}</strong>: ${year}$</p>
    
            <div class="d-flex justify-content-between align-items-center">
    
    
            </div>
    
            
    
            </div>
    
            </div>
    
            </div>
    
            `;
    
            // append new division
    
            CardMovie.appendChild(AddCardMovie);
    
     
    
            let cbox = document.getElementById(checkbox);
    
            checkboxes.push(cbox);
    
            let ccard = document.getElementById(card);
    
            cards.push(ccard);
        }


    }

    // Add event listeners to sorting buttons
    document.getElementById('sortHighLow').addEventListener('click', priceHighLow);
    document.getElementById('sortLowHigh').addEventListener('click', priceLowHigh);
    document.getElementById('sortStyle').addEventListener('click', sortStyle);
    document.getElementById('allMountain').addEventListener('click', allMountain);
    document.getElementById('sortBlack').addEventListener('click', sortBlack);
    document.getElementById('sortGrey').addEventListener('click', sortGrey);

   

 

} // end of function
