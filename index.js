// code your solution here
function saturdayFun(activity="This Saturday, I want to roller-skate!"){
    if (activity === "bathe my dog"){
        activity = "This Saturday, I want to bathe my dog!";
    }
    return activity
}

function mondayWork(activity="This Monday, I will go to the office."){
    if( activity === "work from home"){
        activity = "This Monday, I will work from home.";
    }
    return activity;
}
function wrapAdjective(special="special"){
    return function(string = "a hard worker "){
        return `You are ${special}${string}${special}!`;
    };
}

console.log(saturdayFun("bathe my dog"));