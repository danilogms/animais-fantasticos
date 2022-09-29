export default function initBitcoinFetch() {
  async function fetchBtc() {
    try {
      const btcFetch = await fetch("https://blockchain.info/ticker");
      const btcJSON = await btcFetch.json();
      const btc100 = 100 / btcJSON.BRL.sell;
      const divBtc = document.querySelector(".btc-preco");
      divBtc.innerText = +btc100.toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchBtc(); 
}

