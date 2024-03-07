///////////////////milestone 1

const zucchine = [
  {
    varietà: "zucchino nero di Milano",
    peso: 500,
    lunghezza: 20
  },
  {
    varietà: "zucchino romanesco", 
    peso: 400,
    lunghezza: 15
  },
  {
    varietà: "zucchino ortolano di Faenza",
    peso: 300,
    lunghezza: 10
  },
  {
    varietà: "zucchino siciliano",
    peso: 200,
    lunghezza: 5
  },
  {
    varietà: "zucchino toscano",
    peso: 100,
    lunghezza: 2
  },
  {
    varietà: "zucchino pugliese",
    peso: 50,
    lunghezza: 1
  },
  {
    varietà: "zucchino calabrese",
    peso: 30,
    lunghezza: 18
  },
  {
    varietà: "zucchino sardo",
    peso: 20,
    lunghezza: 0.2
  },
  {
    varietà: "zucchino ligure",
    peso: 10,
    lunghezza: 30
  },
  {
    varietà: "zucchino veneto",
    peso: 5,
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


