/*
const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    {  name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
];
*/

/*
1. Count Employees Number by Factory => [ {name: 'BR1', count: 4}, ... ]
*/
const countEmployeesNumber = (factories) => {
    const factoryCounter = [];

    factories.forEach(factory => {
        const temp = {};
        temp.name = factory.name;
        temp.count = factory.employees.length;
        factoryCounter.push(temp);
    });

    return factoryCounter;
};

//Check Q1
//console.log(countEmployeesNumber(factories));

/*
2. Count Factories Number by Employee  => [ {employee: 'John', count: 2}, ... ]
*/
const countFactoriesNumber = (factories) => {
    const employeeCounter = [];

    factories.forEach(factory => {
       
        factory.employees.forEach(employee => {
            
            var checkExist = false;
            var existNum = 0;
            for (let i = 0; i < employeeCounter.length; i++) {
                if(employeeCounter[i].name == employee){
                    checkExist = true;
                    existNum = i;
                    break;
                };
            };
            
            if(checkExist){
                employeeCounter[existNum].count += 1;
            } else{
                const temp = {};
                temp.name = employee;
                temp.count = 1;
                employeeCounter.push(temp);
            };
        });
    });

    return employeeCounter;
};

//Check Q2
//console.log(countEmployeesNumber(factories));

/*
3. Order employees list by alphabetical order  =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }
*/
const arrangeEmployees = (factories) => {
    factories.forEach(factory => {
        factory.employees.sort()
    });

};

//Check Ans Q3
//console.log(arrangeEmployees(factories));

/*
const employeeType = [
    {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
    {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
    {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
      {id: 1, name: "Alice", type: 2},
      {id: 2, name: "Bob", type: 3},
      {id: 3, name: "John", type: 2},
      {id: 4, name: "Karen", type: 1},
      {id: 5, name: "Miles", type: 3},
      {id: 6, name: "Henry", type: 1}
];

const tasks = [
    {id: 1, title: "task01", duration: 60},
    {id: 2, title: "task02", duration: 120},
    {id: 3, title: "task03", duration: 180},
    {id: 4, title: "task04", duration: 360},
    {id: 5, title: "task05", duration: 30},
    {id: 6, title: "task06", duration: 220},
    {id: 7, title: "task07", duration: 640},
    {id: 8, title: "task08", duration: 250},
    {id: 9, title: "task09", duration: 119},
    {id: 10, title: "task10", duration: 560},
    {id: 11, title: "task11", duration: 340},
    {id: 12, title: "task12", duration: 45},
    {id: 13, title: "task13", duration: 86},
    {id: 14, title: "task14", duration: 480},
    {id: 15, title: "task15", duration: 900}
];
*/

/*
4. Count total hours worked in 1 day ?  => 39
*/
const getTimeFromString = (time) => {
    var hour, minute, second = time.split(':');

    return hour, minute, second;
}

const checkWorkTime = (employee) => {
    var workTime = 0;
    employeeType.forEach(type => {
        if(type.id == employee.type){

            var [ startHour, startMinute, startSecond ] = getTimeFromString(type.work_begin);
            
            var [ endHour, endMinute, endSecond ] = getTimeFromString(type.work_end);
            if(endHour == 0){
                endHour = 24;
            }

            const startTime = startHour*3600 + startMinute*60 + startSecond;
            const endTime = endHour*3600 + endMinute*60 + endSecond;

            workTime = (endTime - startTime)/3600/100;
        }
    });
    
    return workTime;
};

var totalWorkTime = 0;
employees.forEach(employee => {
    totalWorkTime += checkWorkTime(employee);
});

//Check Q4
//console.log(totalWorkTime);

/*
5. Make a function that take as parameters dayTime and return number of employee working howManyEmployeeByTime(time) => int
*/
const howManyEmployeeByTime = (time) => {
    var workingEmployee = 0;
    employeeType.forEach(type => {
        employees.forEach(employee => {
            if(type.id == employee.type){

                var [ startHour, startMinute, startSecond ] = getTimeFromString(type.work_begin);
                
                var [ endHour, endMinute, endSecond ] = getTimeFromString(type.work_end);
                if(endHour == 0){
                    endHour = 24;
                }

                if(time >= startHour && time <= endHour){
                    workingEmployee += 1;
                }
            }
        });
    });

    return workingEmployee;
};

//Check Q5
//console.log(howManyEmployeeByTime(20));

/*
6. How many days of work needed to done all tasks ?  => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.
*/
var totalWorkTime = 0;
for (let i = 9; i <= 24; i++) {
    totalWorkTime += howManyEmployeeByTime(i);
}
//each worker working 1hr = 60min
totalWorkTime *= 60;

var totalTaskTime = 0;
tasks.forEach(task => {
    totalTaskTime += task.duration
});

var ans = totalTaskTime / totalWorkTime;

//Ans Q6
//console.log(ans);