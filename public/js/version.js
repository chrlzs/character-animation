const version = 1.0;

class Version {
  constructor() {
    this.version = version;
  }

  getVersion() {
    console.log("Version is " + this.version);
    return this.version;
  }
}

export default Version;
