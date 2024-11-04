function namesScores(arr) {
    const newSortedArray=[...arr].map(l=>l.toLowerCase()).sort((a,b)=>{
      if(a<b)
      {
        return -1
      }
      else 
      {
        return 1
      }
      return 0
    }).map(el=>el.split(''))
  return newSortedArray.reduce((acc,el,index)=>{
      let sumOfLetters=0
      el.forEach(lett=>{
        sumOfLetters+=(lett.charCodeAt()%96)
      })
      return acc+sumOfLetters*(index+1)
    },0)
    }
    
    // Only change code above this line
    const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
    const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
    
    console.log(namesScores(test1));
    //Happy coding
    