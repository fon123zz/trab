const Word = require("./models/words");

const words = [
     
    "acolhedor",
    "admirável",
    "agradável",
    "altruísta",
    "assertiva",
    "atenciosa",
    "autêntica",
    "audaciosa",
    "ambiciosa",
    "abençoada",
    "angelical",
    "acelerada",
 
    "benfeitor",
    "brilhante",
    "benquisto",

    "carinhosa",
    "cativante",
    "confiante",
    "confiável",
    "cuidadosa",
    "cautelosa",

    "divertida",
    "deferente",
    "destemida",
    "desejável"
  ,
    "eficiente",
    "eloquente",
    "entendido",
    "esforçada",
    "espantoso",
    "excelente",
    "exultante"
 ,
    "felizarda",
    "felizonas",
    "grandiosa",
    "glamurosa",
    "guerreira",
    "honorável",
    "humildoso"
,
    "imponente",
    "impecável",
    "intuitiva",
    "instruída",
    "iluminada",
    "idealista",
    "imbatível"
  ,
    "jubilante",
  
    "magnifica",
    "majestosa",
    "minuciosa"
,
    "obediente",
    "obstinado"
,
    "perspicaz",
    "preparada",
    "prevenida",
    "primorosa",
    "protetora"
  ,
    "realizada",
    "resolvida",
    "romântica",
    "reluzente",
    "receptiva"
,
    "simpático",
    "solidária",
    "sonhadora"
,
    "talentosa",
    "tranquila",
    "tolerante",
    "tentadora"
,
    "venturosa",
    "vitoriosa"
  ];

async function seedDatabase() {
    await Word.deleteMany();

    const insertedWords = await Word.insertMany(
        words.map(word => ({ word }))
    );

    console.log(`${insertedWords.length} palavras inseridas no banco de dados!`);
}

module.exports = seedDatabase;
