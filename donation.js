// Hidden Section Start

function togglePages(showPageId, hidePageId, activeBtnId, inactiveBtnId) {
    document.getElementById(hidePageId).classList.add("hidden");
    document.getElementById(showPageId).classList.remove("hidden");
    document.getElementById(activeBtnId).classList.add("bg-[#B4F461]");
    document.getElementById(inactiveBtnId).classList.remove("bg-[#B4F461]");
}
document.getElementById("history-btn").addEventListener("click", function () {
    togglePages("history-page", "donation-page", "history-btn", "donation-btn");
});
document.getElementById("donation-btn").addEventListener("click", function () {
    togglePages("donation-page", "history-page", "donation-btn", "history-btn");
});


  // Hidden Section End
  
  // Noakhali donation Start
  
  document
    .getElementById("noakhali-button")
    .addEventListener("click", function () {
      let amount = getDonationAmount("noakhali-input");
  
      if (amount == -1) {
        stopImmediatePropagation();
      }
  
      donation(
        "noakhali-total-donation",
        amount,
        "Flood at Noakhali, Bangladesh."
      );
  
      document.getElementById("noakhali-input").value = "";
    });
  
  //   Feni donation
  
  document.getElementById("feni-button").addEventListener("click", function () {
    let amount = getDonationAmount("feni-input");
  
    if (amount == -1) {
      stopImmediatePropagation();
    }
  
    donation("feni-total-donation", amount, "Flood Relief in Feni, Bangladesh.");
  
    document.getElementById("feni-input").value = "";
  });
  
  // Quota donation
  
  document
    .getElementById("quota-button")
    .addEventListener("click", function () {
      let amount = getDonationAmount("quota-input");
  
      if (amount == -1) {
        stopImmediatePropagation();
      }
  
      donation(
        "quota-total-donation",
        amount,
        "Injured in the Quota Movement, Bangladesh."
      );
  
      document.getElementById("quota-input").value = "";
    });