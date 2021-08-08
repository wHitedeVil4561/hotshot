function displayonlyaction() {
    // location.reload();
    // window.location.reload();
    let drama = document.querySelector("#drama");
    
    let scifi = document.querySelector("#sci-fi");
    drama.style.display = 'none';
    scifi.style.display = 'none';
    let action = document.querySelector("#action");
    action.style.display = 'block';
    
 }
function displayonlydrama() {
//    window.location.reload();
    let action = document.querySelector("#action");

    let scifi = document.querySelector("#sci-fi");
    action.style.display = 'none';
    scifi.style.display = 'none';
    let drama = document.querySelector("#drama");
    drama.style.display = 'block';
 }
 function displayonlyscifi() {
    //  location.reload();
    //  window.location.reload();
     let drama = document.querySelector("#drama");

     let action = document.querySelector("#action");
     drama.style.display = 'none';
     action.style.display = 'none';
     let scifi = document.querySelector("#sci-fi");
     scifi.style.display = 'block';
 }
 function searchposter() {
     const input = document.getElementById('searchbar').value.toUpperCase();
    //  console.log(input);
    //  const cardContainer = document.getElementsByClassName('card-lists');
    //  console.log(cardContainer);
     const card = document.getElementsByClassName('card');
    //  console.log(card);

     for (let i = 0; i < card.length; i++) {
         let title = card[i].querySelector('.card-body .card-title');
        //  console.log(title);

         if(title.innerText.toUpperCase().indexOf(input) > -1){
             card[i].style.display = "";
         }
         else{
             card[i].style.display = "none";
         }
         
     }
 } 