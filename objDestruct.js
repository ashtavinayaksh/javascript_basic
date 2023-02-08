// Object Destruction

let newObj = {
    name : "Ashtu",
    age : 22,
    skill : "Javascript",
    car : {
        first : 'Bolero SLE',
        second : 'TATA Harreir'
    }
};

// let {name, age, skill} = newObj;

({name, age, skill} = newObj);

let {name: naam, age: umar, skill: pehchan, car} = newObj;

console.log(name)

console.log(`Mera Naam hai ${naam}. Umar hai meri ${umar}. And meri pehchaan ${skill} developer se hai`);

console.log(`Mera Naam hai ${naam}. Umar hai meri ${umar}. And meri pehchaan ${skill} developer se hai. Aur mere paas gaadi hai ${car.second}`);