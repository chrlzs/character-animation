import Version from './version.js';
import Character from './character.js';

class App {
  static init() {
    this.updateVersionText();
    this.createCharacter();
  }

  static updateVersionText() {
    let ver = new Version();
    let version = ver.getVersion();
    let span = document.getElementById("version");
    span.textContent = version;
    this.setPageTitle(version);
  }

  static setPageTitle(version) {
    document.title = "Version " + version;
  }

  static createCharacter() {
    const character = new Character();
  }
}

document.addEventListener("readystatechange", function (event) {
  if (document.readyState === "complete") {
    App.init();
  }
});