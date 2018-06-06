

export class Time{

    private month;
    private day;
    private years;
    private hours;
    private minutes;
    private seconds;
    private weeks;
    private months;
   
   constructor(){
   
   let currentTime = Date.now();
   let time = new Date();
   
    
   
   this.month  = time.getMonth()+1;        // get month 0-11 , month off by one    
   this.day= time.getDate();             //get day  1 - 31
   this.years = time.getFullYear();     //get year  yyyy
   this.hours = time.getHours()-12;        // get hours 0-24
   this.minutes = time.getMinutes();    // get minues 0-60
   this.seconds = time.getSeconds();   // get seconds  0-60
   this.weeks =  86400000*7;  // get timestamp of a week
   this.months =  this.weeks * 4;  // get the timestamp of a month 
   
   
       }
   
   
   
   
   getMonth(){ return this.month};
   getDay(){ return this.day};
   getYears(){ return this.years};
   getHours(){ 
               
       if(this.hours <=0){
   
       this.hours+=12;      
                 
       }
                    
       
       return this.hours
   };
   getMinutes(){ return this.minutes};
   getSeconds(){ return this.seconds};
   
   getWeeks(){ return this.weeks};    //get timestamp of one week from now 
   getMonths(){ return this.months};   //get timestapm of one month from now 
   // getMultipleMonths(w){ return w*this.weeks}; // get timestamp of the past amount of weeks specified in input  
   // getMultipleWeeks(m) {return m*this.months } // get timestamp of the past amount of month specified in input  
   getPastWeek(w){ // get timestamp of the past amount of weeks specified in input  
   
   return (this.getCurrentTime() - (w*this.weeks))
   
   }
   getPastMonths(m){ // get timestamp of the past amount of month specified in input 
   
       return (this.getCurrentTime() - (m*this.months))
   
   }
   
   getCurrentTime(){ //it will return current timestamp  
       let currentTime = Date.now();
       return currentTime;
   
   }
   
   getCurrentTimePrinted(){ //it will return current timestamp  01-1-1111 11:11:11  
       
       return this.getPrintedTimeStamp(this.getCurrentTime()) ;
   }
   
   getPrintedTimeStamp(time){
   
   
           let t2 = new Date(time);
            
           let month =t2.getMonth()+1;
           let date =t2.getDate();
           let year =t2.getFullYear();
           let hours =t2.getHours()-12;
           let minutes = t2.getMinutes();
           let seconds = (t2.getSeconds());
   
           if(hours <=0){
   
               hours+=12;      
         
             }
             
           // console.log(t2.getMonth());
            return (`${month}-${date}-${year} ${hours}:${minutes}:${seconds} `);
       }
   
   
   
   
   
   
   
   }
    