window.addEventListener('load', (event) => {
    // Your code here
    fetch("data2.json")
        .then(response => response.json())
        .then(skisList => loadSkis(skisList));
});

function loadSkis(skisList) {

    var CardMovie = document.getElementById("col");

    var checkboxes = [];

    var cards = [];

 

    for (var i = 0; i<skisList.snowboard.length; i++){

 

        let title = skisList.snowboard[i].skiName;

        let year = skisList.snowboard[i].price;

        let url = skisList.snowboard[i].url;

 

        let checkbox = "checkbox" + i.toString();

        let card = "card" + i.toString();

       

        // create a new HTML div division

        let AddCardMovie = document.createElement("div");

        // add class = “col” to new division for Bootstrap

        AddCardMovie.classList.add("col");

        // create Bootstrap card

        let j = 0;
            if (url == "Burton2022FamilyTreeHometownHeroXCamberSplitboard.webp") {
                j = 0;
            }
            else if (url == "BurtonFlightAttendantCamberSplitboard.webp") {
                j = 1
            }
            else if (url == "BurtonProcessCamberSnowboard.webp") {
                j = 2
            }

            else if (url == "Gnu-GWO-Snowboard.jpg") {
                j = 3
            }

            else if (url == "GNUFrostingSnowboard.jpg") {
                j = 4
            }

            else if (url == "GNUHyperSnowboard.jpg") {
                j = 5
            }

            else if (url == "Whitespace155Montano.webp") {
                j = 6
            }

            else if (url == "WhitespaceFreestyleShaunWhitePro.webp") {
                j = 7
            }
            
    
            let sendLink = "http://localhost:3000/snowboardDetails/" + j;
            console.log(sendLink);
     
            AddCardMovie.innerHTML = `
            <a href="${sendLink}">  
                <img src="${url}" class="card-img-top" alt="...">
            </a>
            <div class="card-body">
                <p class="card-text"><strong>${title}</strong>: ${year}$</p>
                <div class="d-flex justify-content-between align-items-center"></div>
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
        var arr = skisList.snowboard.sort((a, b) => b.price - a.price);
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
            
    
            let j = 0;
            if (url == "Burton2022FamilyTreeHometownHeroXCamberSplitboard.webp") {
                j = 0;
            }
            else if (url == "BurtonFlightAttendantCamberSplitboard.webp") {
                j = 1
            }
            else if (url == "BurtonProcessCamberSnowboard.webp") {
                j = 2
            }

            else if (url == "Gnu-GWO-Snowboard.jpg") {
                j = 3
            }

            else if (url == "GNUFrostingSnowboard.jpg") {
                j = 4
            }

            else if (url == "GNUHyperSnowboard.jpg") {
                j = 5
            }

            else if (url == "Whitespace155Montano.webp") {
                j = 6
            }

            else if (url == "WhitespaceFreestyleShaunWhitePro.webp") {
                j = 7
            }
            
    
            let sendLink = "http://localhost:3000/snowboardDetails/" + j;
            console.log(sendLink);
     
            AddCardMovie.innerHTML = `
            <a href="${sendLink}">  
                <img src="${url}" class="card-img-top" alt="...">
            </a>
            <div class="card-body">
                <p class="card-text"><strong>${title}</strong>: ${year}$</p>
                <div class="d-flex justify-content-between align-items-center"></div>
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
        var arr2 = skisList.snowboard.sort((a, b) => a.price - b.price);
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
            
    
            let j = 0;
            if (url == "Burton2022FamilyTreeHometownHeroXCamberSplitboard.webp") {
                j = 0;
            }
            else if (url == "BurtonFlightAttendantCamberSplitboard.webp") {
                j = 1
            }
            else if (url == "BurtonProcessCamberSnowboard.webp") {
                j = 2
            }

            else if (url == "Gnu-GWO-Snowboard.jpg") {
                j = 3
            }

            else if (url == "GNUFrostingSnowboard.jpg") {
                j = 4
            }

            else if (url == "GNUHyperSnowboard.jpg") {
                j = 5
            }

            else if (url == "Whitespace155Montano.webp") {
                j = 6
            }

            else if (url == "WhitespaceFreestyleShaunWhitePro.webp") {
                j = 7
            }
            
    
            let sendLink = "http://localhost:3000/snowboardDetails/" + j;
            console.log(sendLink);
     
            AddCardMovie.innerHTML = `
            <a href="${sendLink}">  
                <img src="${url}" class="card-img-top" alt="...">
            </a>
            <div class="card-body">
                <p class="card-text"><strong>${title}</strong>: ${year}$</p>
                <div class="d-flex justify-content-between align-items-center"></div>
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

    for (var i = 0; i < skisList.snowboard.length; i++) {
        var ski = skisList.snowboard[i];

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
        

        let j = 0;
        if (url == "Burton2022FamilyTreeHometownHeroXCamberSplitboard.webp") {
            j = 0;
        }
        else if (url == "BurtonFlightAttendantCamberSplitboard.webp") {
            j = 1
        }
        else if (url == "BurtonProcessCamberSnowboard.webp") {
            j = 2
        }

        else if (url == "Gnu-GWO-Snowboard.jpg") {
            j = 3
        }

        else if (url == "GNUFrostingSnowboard.jpg") {
            j = 4
        }

        else if (url == "GNUHyperSnowboard.jpg") {
            j = 5
        }

        else if (url == "Whitespace155Montano.webp") {
            j = 6
        }

        else if (url == "WhitespaceFreestyleShaunWhitePro.webp") {
            j = 7
        }
    
            let sendLink = "http://localhost:3000/snowboardDetails/" + j;
            console.log(sendLink);
     
            AddCardMovie.innerHTML = `
            <a href="${sendLink}">  
                <img src="${url}" class="card-img-top" alt="...">
            </a>
            <div class="card-body">
                <p class="card-text"><strong>${title}</strong>: ${year}$</p>
                <div class="d-flex justify-content-between align-items-center"></div>
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

    for (var i = 0; i < skisList.snowboard.length; i++) {
        var ski = skisList.snowboard[i];

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
        

        let j = 0;
        if (url == "Burton2022FamilyTreeHometownHeroXCamberSplitboard.webp") {
            j = 0;
        }
        else if (url == "BurtonFlightAttendantCamberSplitboard.webp") {
            j = 1
        }
        else if (url == "BurtonProcessCamberSnowboard.webp") {
            j = 2
        }

        else if (url == "Gnu-GWO-Snowboard.jpg") {
            j = 3
        }

        else if (url == "GNUFrostingSnowboard.jpg") {
            j = 4
        }

        else if (url == "GNUHyperSnowboard.jpg") {
            j = 5
        }

        else if (url == "Whitespace155Montano.webp") {
            j = 6
        }

        else if (url == "WhitespaceFreestyleShaunWhitePro.webp") {
            j = 7
        }
            
    
            let sendLink = "http://localhost:3000/snowboardDetails/" + j;
            console.log(sendLink);
     
            AddCardMovie.innerHTML = `
            <a href="${sendLink}">  
                <img src="${url}" class="card-img-top" alt="...">
            </a>
            <div class="card-body">
                <p class="card-text"><strong>${title}</strong>: ${year}$</p>
                <div class="d-flex justify-content-between align-items-center"></div>
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

    for (var i = 0; i < skisList.snowboard.length; i++) {
        var ski = skisList.snowboard[i];

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
            
    
            let j = 0;
            if (url == "Burton2022FamilyTreeHometownHeroXCamberSplitboard.webp") {
                j = 0;
            }
            else if (url == "BurtonFlightAttendantCamberSplitboard.webp") {
                j = 1
            }
            else if (url == "BurtonProcessCamberSnowboard.webp") {
                j = 2
            }

            else if (url == "Gnu-GWO-Snowboard.jpg") {
                j = 3
            }

            else if (url == "GNUFrostingSnowboard.jpg") {
                j = 4
            }

            else if (url == "GNUHyperSnowboard.jpg") {
                j = 5
            }

            else if (url == "Whitespace155Montano.webp") {
                j = 6
            }

            else if (url == "WhitespaceFreestyleShaunWhitePro.webp") {
                j = 7
            }
            
    
            let sendLink = "http://localhost:3000/snowboardDetails/" + j;
            console.log(sendLink);
     
            AddCardMovie.innerHTML = `
            <a href="${sendLink}">  
                <img src="${url}" class="card-img-top" alt="...">
            </a>
            <div class="card-body">
                <p class="card-text"><strong>${title}</strong>: ${year}$</p>
                <div class="d-flex justify-content-between align-items-center"></div>
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

    for (var i = 0; i < skisList.snowboard.length; i++) {
        var ski = skisList.snowboard[i];

        if (ski.color === "grey") {
            greySkis.push(ski);
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
            
    
            let j = 0;
            if (url == "Burton2022FamilyTreeHometownHeroXCamberSplitboard.webp") {
                j = 0;
            }
            else if (url == "BurtonFlightAttendantCamberSplitboard.webp") {
                j = 1
            }
            else if (url == "BurtonProcessCamberSnowboard.webp") {
                j = 2
            }

            else if (url == "Gnu-GWO-Snowboard.jpg") {
                j = 3
            }

            else if (url == "GNUFrostingSnowboard.jpg") {
                j = 4
            }

            else if (url == "GNUHyperSnowboard.jpg") {
                j = 5
            }

            else if (url == "Whitespace155Montano.webp") {
                j = 6
            }

            else if (url == "WhitespaceFreestyleShaunWhitePro.webp") {
                j = 7
            }
            
    
            let sendLink = "http://localhost:3000/snowboardDetails/" + j;
            console.log(sendLink);
     
            AddCardMovie.innerHTML = `
            <a href="${sendLink}">  
                <img src="${url}" class="card-img-top" alt="...">
            </a>
            <div class="card-body">
                <p class="card-text"><strong>${title}</strong>: ${year}$</p>
                <div class="d-flex justify-content-between align-items-center"></div>
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
    function sortWhite() {
        CardMovie.innerHTML = ``;
        var whiteSkis = [];
    var greySkis = [];

    for (var i = 0; i < skisList.snowboard.length; i++) {
        var ski = skisList.snowboard[i];

        if (ski.color === "white") {
            whiteSkis.push(ski);
        } 
    }

    // Combine the two arrays with freestyle skis first and all-mountain skis last
   // var arr5 = whiteSkis.concat(greySkis);
        for (var i = 0; i<whiteSkis.length; i++){

 

            let title = whiteSkis[i].skiName;
    
            let year = whiteSkis[i].price;
    
            let url = whiteSkis[i].url;
    
     
    
            let checkbox = "checkbox" + i.toString();
    
            let card = "card" + i.toString();
    
           
    
            // create a new HTML div division
    
            let AddCardMovie = document.createElement("div");
    
            // add class = “col” to new division for Bootstrap
    
            AddCardMovie.classList.add("col");
    
            // create Bootstrap card
            
    
            let j = 0;
            if (url == "Burton2022FamilyTreeHometownHeroXCamberSplitboard.webp") {
                j = 0;
            }
            else if (url == "BurtonFlightAttendantCamberSplitboard.webp") {
                j = 1
            }
            else if (url == "BurtonProcessCamberSnowboard.webp") {
                j = 2
            }

            else if (url == "Gnu-GWO-Snowboard.jpg") {
                j = 3
            }

            else if (url == "GNUFrostingSnowboard.jpg") {
                j = 4
            }

            else if (url == "GNUHyperSnowboard.jpg") {
                j = 5
            }

            else if (url == "Whitespace155Montano.webp") {
                j = 6
            }

            else if (url == "WhitespaceFreestyleShaunWhitePro.webp") {
                j = 7
            }
            
    
            let sendLink = "http://localhost:3000/snowboardDetails/" + j;
            console.log(sendLink);
     
            AddCardMovie.innerHTML = `
            <a href="${sendLink}">  
                <img src="${url}" class="card-img-top" alt="...">
            </a>
            <div class="card-body">
                <p class="card-text"><strong>${title}</strong>: ${year}$</p>
                <div class="d-flex justify-content-between align-items-center"></div>
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
    function sortBlue() {
        CardMovie.innerHTML = ``;
        var whiteSkis = [];
    var greySkis = [];

    for (var i = 0; i < skisList.snowboard.length; i++) {
        var ski = skisList.snowboard[i];

        if (ski.color === "blue") {
            whiteSkis.push(ski);
        } 
    }

    // Combine the two arrays with freestyle skis first and all-mountain skis last
   // var arr5 = whiteSkis.concat(greySkis);
        for (var i = 0; i<whiteSkis.length; i++){

 

            let title = whiteSkis[i].skiName;
    
            let year = whiteSkis[i].price;
    
            let url = whiteSkis[i].url;
    
     
    
            let checkbox = "checkbox" + i.toString();
    
            let card = "card" + i.toString();
    
           
    
            // create a new HTML div division
    
            let AddCardMovie = document.createElement("div");
    
            // add class = “col” to new division for Bootstrap
    
            AddCardMovie.classList.add("col");
    
            // create Bootstrap card
            
    
            let j = 0;
            if (url == "Burton2022FamilyTreeHometownHeroXCamberSplitboard.webp") {
                j = 0;
            }
            else if (url == "BurtonFlightAttendantCamberSplitboard.webp") {
                j = 1
            }
            else if (url == "BurtonProcessCamberSnowboard.webp") {
                j = 2
            }

            else if (url == "Gnu-GWO-Snowboard.jpg") {
                j = 3
            }

            else if (url == "GNUFrostingSnowboard.jpg") {
                j = 4
            }

            else if (url == "GNUHyperSnowboard.jpg") {
                j = 5
            }

            else if (url == "Whitespace155Montano.webp") {
                j = 6
            }

            else if (url == "WhitespaceFreestyleShaunWhitePro.webp") {
                j = 7
            }
            
    
            let sendLink = "http://localhost:3000/snowboardDetails/" + j;
            console.log(sendLink);
     
            AddCardMovie.innerHTML = `
            <a href="${sendLink}">  
                <img src="${url}" class="card-img-top" alt="...">
            </a>
            <div class="card-body">
                <p class="card-text"><strong>${title}</strong>: ${year}$</p>
                <div class="d-flex justify-content-between align-items-center"></div>
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
    document.getElementById('sortWhite').addEventListener('click', sortWhite);
    document.getElementById('sortBlue').addEventListener('click', sortBlue);

   

 

} // end of function
