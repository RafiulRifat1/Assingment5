function getDonationAmount(id) {
    let donateAmount = document.getElementById(id).value;
    if (isNaN(donateAmount) || donateAmount === '') {
      alert("Invalid Donation Amount");
      return -1;}
    donateAmount = parseFloat(donateAmount);
    if (donateAmount <= 0) {
      alert("Invalid Donation Amount");
      return -1;}
    return donateAmount;
  }

  function findTotalDonation(id) {
    let tk = document.getElementById(id).innerText;
    tk = parseFloat(tk);
    return tk;
  }
  
  
  //Main Function
  
  function donation(id, amount, location) {
    let total = findTotalDonation(id);
    let main_balance = findTotalDonation("available-balance");
    if (main_balance < amount) {
        alert("Insufficient funds for this donation.");
        return;
    }
    total += amount;
    document.getElementById(id).innerText = total;

    main_balance -= amount;
    document.getElementById("available-balance").innerText = main_balance;

    addDonationToHistory(amount, location);
}




function addDonationToHistory(amount, location) {
    let newDiv = document.createElement('div');
    let newH1 = document.createElement('h1');
    let newP = document.createElement('p');
    let data = new Date().toLocaleString();

    newDiv.classList.add('p-8', 'border', 'rounded-2xl', 'sm:w-[900px]', 'w-[90%]', 'mx-auto', 'my-6');
    newH1.classList.add('text-xl', 'font-bold', 'pb-4');
    newP.classList.add('text-base', 'text-[#111111B2]', 'font-light');

    newH1.innerText = `${amount} Taka donated for ${location}`;
    newP.innerText = `Date: ${data}`;

    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);

    document.getElementById('no-donation').classList.add('hidden');
    document.getElementById('history-page').appendChild(newDiv);
    my_modal_5.showModal();
}

// Main Function End
