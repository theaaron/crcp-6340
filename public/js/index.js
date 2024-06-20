(() => {
  "use strict";
  let userAddress = null;
  let connect = document.querySelector("#connect-wallet-button");

  connect.addEventListener("click", connectWallet);

  async function connectWallet() {
    await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((data) => {
        userAddress = data[0];
        let walletString =
          userAddress.substring(0, 5) + "..." + userAddress.substring(38, 42);
        connect.innerHTML = walletString;
        return userAddress;
      })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log("please connect a wallet");
        } else {
          console.log(err);
        }
      });
  }

  let degreeRot = 6;
  let heroBg = document.getElementById("hero-title");

  function rotateHeroBg() {
    heroBg.style.background = `repeating-linear-gradient(-${degreeRot}deg, rgb(108, 0, 118), rgb(41, 0, 88) 1%)`;
    degreeRot += 0.5;
    requestAnimationFrame(rotateHeroBg);
  }

  if (heroBg) {
    rotateHeroBg();
  }
})();
