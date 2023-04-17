function getSeason(date) {
    if (date===undefined) {
      return 'Unable to determine the time of year!';
    }
    
    try{
      date.getMonth();
    }
    catch{
      throw new Error('Invalid date!');
    }

    let awDate = new Date;
    if (date.getMonth !== awDate.getMonth){
      throw new Error('Invalid date!');
    }
  
    const month = date.getMonth();
  
    if (month === 11 || month === 0 || month === 1) {
      return 'winter';
    } else if (month >= 2 && month <= 4) {
      return 'spring';
    } else if (month >= 5 && month <= 7) {
      return 'summer';
    } else if (month >= 8 && month <= 10) {
      return 'autumn';
    }
  }

module.exports = {
  getSeason
};
