export default function bitcoinFetch(url, target) {
  async function fetchBtc() {
    try {
      const btcFetch = await fetch(url);
      const btcJSON = await btcFetch.json();
      const btc100 = 100 / btcJSON.BRL.sell;
      const divBtc = document.querySelector(target);
      divBtc.innerText = +btc100.toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchBtc(); 
}

