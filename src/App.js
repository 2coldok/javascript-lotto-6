import LottoController from "./controller/LottoController.js";

class App {
  async play() {
    const k = new LottoController()
    await k.start();
  }
}

export default App;
