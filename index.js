
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    return (year - this.startDate.getUTCFullYear())
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let vertical =  Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let horBeg = eastWest.indexOf(this.beginningLocation.horizontal);
    let horEnd = eastWest.indexOf(this.endingLocation.horizontal);
    let horizontal = Math.abs(horBeg - horEnd)
    
    return horizontal + vertical
  }
  
  estimatedTime(peak_hours) {
    
    if(peak_hours) {
      return this.blocksTravelled()/2 
    } else {
      return this.blocksTravelled()/3 
    }
  }
}