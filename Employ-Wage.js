//Uc-1 Employe-Attendance
 {
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == IS_ABSENT){
        console.log("UC-1 Employee is Absent");
    } else{
        console.log("UC-1 Employee is Present");
    }

 }
 //uc-2 Calculating EmployWage
 {
    const IS_PART_TIME = 2;
    const IS_FULL_TIME = 1;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    
    let empHrs = 0;
       empCheck = Math.floor(Math.random() * 10) % 3;
    
    switch (empCheck) {
            case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            console.log("Employee is Present");
            break;
    
            case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            console.log("Employee is Present");
            break;
    
            default:
             empHrs = 0;
             console.log("Employee is Abscent");
         }
          let empWage = empHrs * WAGE_PER_HOUR;
          console.log("emp Wage: " + empWage);
    
 }

 {
    const IS_PART_TIME = 2;
    const IS_FULL_TIME = 1;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    
    function getWorkingHours(empCheck){ 
        switch (empCheck) {
            case IS_FULL_TIME:
            console.log("Employee is Present");  
            return FULL_TIME_HOURS;
    
            case IS_PART_TIME:
            console.log("Employee is Present");   
            return PART_TIME_HOURS;
            
            default:
            console.log("Employee is Absent");
            return 0;
         }
        }
          let empHrs = 0;
          empCheck = Math.floor(Math.random() * 10) % 3;
    
          empHrs = getWorkingHours(empCheck);
          let empWage = empHrs * WAGE_PER_HOUR;
          console.log("emp Wage: " + empWage);
     
 }





