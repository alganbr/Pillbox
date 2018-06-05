class Medicine{
  constructor(genName, sciName, interactions){
    this.genName = genName  //general name
    this.sciName = sciName  //scientific name
    this.interactions = interactions  //for now it should contain scientific names of drugs that the current drug has contraindicated interactions with
  }
  checkInteractions(medName){
    //medName is scientific name
    const test = this.interactions.filter((medicine) => medicine === medName)
    return test.length > 0
  }
}

module.exports = Medicine