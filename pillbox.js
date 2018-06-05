class Pillbox {
  constructor(id, username){
    this.id = id
    this.username = username
    this.meds = []
  }

  getInteractions(medicine){
    const medGenName = medicine.genName
    const interactions = this.meds.filter((curr) => curr.checkInteractions(medGenName))
    return interactions
  }

  addMed(medicine){
    const interactions = this.getInteractions(medicine)
    if(interactions.length === 0){
      this.meds.push(medicine)
      console.log(`Successfully added ${medicine.genName} to pillbox`)
    }else{
      console.log(`${medicine.genName} has an interaction with something in our pillbox`)
    }
  }
}

module.exports = Pillbox