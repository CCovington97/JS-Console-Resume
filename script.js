var nameString = "Connor Covington";
console.log(`Name: \n*${nameString.toUpperCase()}`);
console.log(' ');
console.log("Career:\n*Pain");
console.log(' ');
console.log("Description:\n*I'm in pain. Constant agony. Feelsbadman.")
console.log(' ');
console.log('Interests:');
var interests = ['Interest 1', 'Interest 2', 'Interest 3'];

for(var i = 0; i < interests.length; i++) {
    console.log(`*${interests[i]}`);
    }
console.log(' ');
console.log('Past Positions:');
var corp = "Company/Place Name Employed:";
var pos = "Position Held:";
var desc = "Short Description of Required Tasks:";
console.log(' ');
var target = [
    corp,
    "*Target",
    pos,
    "*Target Guy (TM)",
    desc,
    "*If this was really long, how would it look? Would it format correctly? Will it break everything? Will Gohan be able to defeat Perfect Cell and avenge his father? Find out next time on Dragon Ball Z."
]

for(var j = 0; j < target.length; j++) {
    console.log(target[j]);
}
console.log(' ');
var gbhoa = [
    corp,
    "*Georgebrook HOA",
    pos,
    "*Lawn Guy",
    desc,
    "*Blood, sweat, and tears"
]

for(var k = 0; k < gbhoa.length; k++) {
    console.log(gbhoa[k]);
}

console.log(' ');
console.log('Skills:');

function displaySkill(skillName, isCool) {
    if (isCool == true) {
        console.log('*BAM ' + skillName);
    } else if (isCool == false) {
        console.log('*' + skillName);
    }
}

displaySkill("Wait", false);
displaySkill("I'm supposed to have skills?", false);
displaySkill("Whoops", false);
displaySkill("OmegaLUL", true);