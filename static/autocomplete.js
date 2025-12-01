// ---------------------------
// Fixed Cuisine + City Arrays
// ---------------------------

const cuisines = [
    'Afghani','African','American','Andhra','Arabian','Argentine','Armenian','Asian','Asian Fusion','Assamese','Australian','Awadhi',
    'Bakery','Bar Food','Bbq','Belgian','Bengali','Beverages','Bihari','Biryani','Brazilian','Breakfast','British','Bubble Tea','Burger',
    'Burmese','Cafe','Cajun','Canadian','Cantonese','Caribbean','Charcoal Grill','Chettinad','Chinese','Coffee And Tea','Contemporary',
    'Continental','Cuban','Cuisine Varies','Curry','Deli','Desserts','Dim Sum','Diner','Drinks Only','Durban','European','Fast Food',
    'Filipino','Finger Food','Fish And Chips','French','Fusion','German','Goan','Gourmet Fast Food','Greek','Grill','Gujarati','Hawaiian',
    'Healthy Food','Hyderabadi','Ice Cream','Indian','Indonesian','International','Iranian','Irish','Italian','Izgara','Japanese','Juices',
    'Kashmiri','Kebab','Kerala','Kiwi','Korean','Latin American','Lebanese','Lucknowi','Maharashtrian','Malay','Malaysian','Malwani',
    'Mangalorean','Mediterranean','Mexican','Middle Eastern','Mineira','Mithai','Modern Australian','Modern Indian','Moroccan','Mughlai',
    'Naga','Nepalese','New American','North Eastern','North Indian','Oriya','Pakistani','Parsi','Patisserie','Peranakan','Persian',
    'Peruvian','Pizza','Portuguese','Pub Food','Rajasthani','Ramen','Raw Meats','Restaurant Cafe','Salad','Sandwich','Scottish','Seafood',
    'Singaporean','Soul Food','South African','South American','South Indian','Southern','Southwestern','Spanish','Sri Lankan','Steak',
    'Street Food','Sunda','Sushi','Taiwanese','Tapas','Tea','Teriyaki','Tex-Mex','Thai','Tibetan','Turkish','Turkish Pizza','Vegetarian',
    'Vietnamese','Western','World Cuisine'
];

const cities = [
    'Abu Dhabi','Agra','Ahmedabad','Albany','Allahabad','Amritsar','Ankara','Armidale','Athens','Auckland','Augusta','Aurangabad',
    'Balingup','Bandung','Bangalore','Beechworth','Bhopal','Bhubaneshwar','Birmingham','Bogor','Boise','Brasilia','Cape Town',
    'Cedar Rapids','Chandigarh','Chatham-Kent','Chennai','Clatskanie','Cochrane','Coimbatore','Colombo','Columbus','Consort','Dalton',
    'Davenport','Dehradun','Des Moines','Doha','Dubai','Dubuque','East Ballina','Edinburgh','Faridabad','Fernley','Flaxton','Forrest',
    'Gainesville','Ghaziabad','Goa','Gurgaon','Guwahati','Hepburn Springs','Huskisson','Hyderabad','Indore','Jaipur','Jakarta',
    'Johannesburg','Kanpur','Kochi','Kolkata','Lakes Entrance','Lakeview','Lincoln','London','Lorn','Lucknow','Ludhiana','Macedon',
    'Macon','Makati City','Manchester','Mangalore','Mayfield','Middleton Beach','Mohali','Monroe','Montville','Mumbai','Mysore','Nagpur',
    'Nashik','New Delhi','Noida','Orlando','Palm Cove','Panchkula','Pasay City','Pasig City','Patna','Pensacola','Phillip Island',
    'Pretoria','Puducherry','Pune','Quezon City','Ranchi','Sandton','Santa Rosa','Secunderabad','Sharjah','Singapore','Surat','São Paulo',
    'Tagaytay City','Taguig City','Tampa Bay','Tangerang','Trentham East','Vadodara','Varanasi','Victor Harbor','Vizag','Wellington City',
    'Winchester Bay','Yorkton','Istanbul'
];

// ---------------------------
// AUTOCOMPLETE ENGINE
// ---------------------------
function setupAutocomplete(inputId, suggestionId, list) {
    const input = document.getElementById(inputId);
    const suggestBox = document.getElementById(suggestionId);

    // Prevent digits while typing
    input.addEventListener("input", function () {
        // Remove any digits
        this.value = this.value.replace(/[0-9]/g, '');
        const value = this.value.toLowerCase().trim();
        suggestBox.innerHTML = "";

        if (!value) {
            suggestBox.style.display = "none";
            return;
        }

        const matches = list.filter(item => item.toLowerCase().includes(value));
        matches.slice(0, 7).forEach(match => {
            const li = document.createElement("li");
            const idx = match.toLowerCase().indexOf(value);
            const before = match.slice(0, idx);
            const matchText = match.slice(idx, idx + value.length);
            const after = match.slice(idx + value.length);
            li.innerHTML = `${before}<span class="highlight">${matchText}</span>${after}`;
            li.onclick = () => {
                input.value = match;
                suggestBox.innerHTML = "";
                suggestBox.style.display = "none";
            };
            suggestBox.appendChild(li);
        });

        suggestBox.style.display = matches.length ? "block" : "none";
    });

    document.addEventListener("click", (event) => {
        if (event.target !== input) {
            suggestBox.innerHTML = "";
            suggestBox.style.display = "none";
        }
    });
}

// Initialize both inputs
setupAutocomplete("cuisineInput", "suggestions", cuisines);
setupAutocomplete("cityInput", "citySuggestions", cities);
