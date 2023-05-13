function getStd(name,std) {
    switch (std) {
        case 10:
            return `${name} your sub is maths sci ss sanskrit guj eng comp`;
            break;
        case 11:
            return `${name} your sub is maths eng phy che comp`;
            break;
        case 12:
            return `${name} your sub is maths phy che`;
            break;
    
        default:
            return `${name} your sub is not announced now`
            break;
    }
}
var getYourSub = getStd("Rudra",11);
console.log(getYourSub);

//another way to write this same code
var getStd = function(name,std) {
    switch (std) {
        case 10:
            return `${name} your sub is maths sci ss sanskrit guj eng comp`;
            break;
        case 11:
            return `${name} your sub is maths eng phy che comp`;
            break;
        case 12:
            return `${name} your sub is maths phy che`;
            break;
    
        default:
            return `${name} your sub is not announced now`
            break;
    }
}
var getYourSub = getStd("Rudra",10);
console.log(getYourSub);