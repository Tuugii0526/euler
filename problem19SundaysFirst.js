function countingSundays(firstYear, lastYear) {
    let sundays=0;
    let isLeapYear;
    let leftDays=0;
    let nextYear;
  for(let i=1900;i<=2000;i++)
  {
    if(i%4==0 && i%100!==0 || i%400===0)
    {
      isLeapYear=true
    }
    else 
    {
      isLeapYear=false
    }
    for(let j=1;j<=12;j++)
    { 
      if(j==2)
      {
        if(isLeapYear)
        {
           leftDays+=29
           leftDays%=7
           if((leftDays+1)%7==0 && i>=firstYear && i<=lastYear)
           {
             sundays++
           }
           continue
        }
        else
        {
           leftDays+=28
           leftDays%=7
           if((leftDays+1)%7==0 && i>=firstYear && i<=lastYear)
           {
             sundays++
           }
           continue
        }
      }
      if(j==4 || j==6 || j==9 || j==11)
      {
           leftDays+=30
           leftDays%=7
           if((leftDays+1)%7==0 && i>=firstYear && i<=lastYear)
           {
             sundays++
           }
           continue
      }
      if(j==12)
      {
           nextYear=i+1
           leftDays+=31
           leftDays%=7
           if((leftDays+1)%7==0 && nextYear>=firstYear && nextYear<=lastYear)
           {
             sundays++
           }
           continue
      }
  
           leftDays+=31
           leftDays%=7
           if((leftDays+1)%7==0 && i>=firstYear && i<=lastYear)
           {
             sundays++
           }
    }
  } 
    return sundays;
  }
  