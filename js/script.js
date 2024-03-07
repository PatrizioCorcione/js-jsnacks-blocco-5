///////////////////milestone 1

const zucchine = [
  {
    varietà: "zucchino nero di Milano",
    peso: 500,
    lunghezza: 20
  },
  {
    varietà: "zucchino romanesco", 
    peso: 40,
    lunghezza: 15
  },
  {
    varietà: "zucchino ortolano di Faenza",
    peso: 30,
    lunghezza: 10
  },
  {
    varietà: "zucchino siciliano",
    peso: 20,
    lunghezza: 5
  },
  {
    varietà: "zucchino toscano",
    peso: 10,
    lunghezza: 2
  },
  {
    varietà: "zucchino pugliese",
    peso: 50,
    lunghezza: 1
  },
  {
    varietà: "zucchino calabrese",
    peso: 300,
    lunghezza: 18
  },
  {
    varietà: "zucchino sardo",
    peso: 20,
    lunghezza: 0.2
  },
  {
    varietà: "zucchino ligure",
    peso: 100,
    lunghezza: 30
  },
  {
    varietà: "zucchino veneto",
    peso: 150,
    lunghezza: 17
  }
]

pesoTot = 0;

zucchine.forEach((zucchina) => {
  let {peso} = zucchina;
  pesoTot = pesoTot + peso;
  
});
console.log(pesoTot);

//////////////////////milestone 2
let zucchineLunghe = [];
let zucchineCorte = [];
pesoTotCorte = 0;
pesoTotLunghe = 0;

zucchine.forEach(element => {
  if (element.lunghezza > 15) {
    zucchineLunghe.push(element);
    pesoTotLunghe = pesoTotLunghe + element.peso;

  } else {
    zucchineCorte.push(element);
    pesoTotCorte = pesoTotCorte + element.peso;
  }
});

console.log(zucchineCorte);
console.log(zucchineLunghe);
console.log(pesoTotCorte);
console.log(pesoTotLunghe);

//////////////////////milestone 3

function ribaltone(string) {

  let stringa = string.split("").reverse().join("");
  return stringa;
  
}
console.log(ribaltone("Ugo De Ughi"));

//////////////////////milestone 4

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

function mixArray(numbers, letters) {

  const mix = [];
  
  for (let i = 0; i < numbers.length; i++) {
    mix.push(numbers[i], letters[i]);
  }
  
  return mix;

}

console.log(mixArray(numbers, letters));

//////////////////////milestone 5


const min = Math.floor(Math.random() * 5);
const max = Math.floor(Math.random() * numbers.length - min + 1) + min;

function range(min, max, numbers) {
  let rangeArray = [];

  rangeArray = numbers.filter((element,index) => {
    return index >= min && index <= max;
  });

  return rangeArray;
}

console.log(min);
console.log(max);
console.log(range(min, max, letters));
