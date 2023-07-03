const chevrotain = require("chevrotain")
const { Lexer } = require("chevrotain")


const createToken = chevrotain.createToken

// definição de tokens

// variaveis
const Variavel = createToken({ name: "identifier", pattern: /espetacular[a-zA-Z]\w*/ })
const Str = createToken({ name: "str", pattern: /([A-Z]\w*)/ })
const Numbers = createToken({ name: "number", pattern: /[0-9]+/ })
const NumbersFloat = createToken({ name: "numberfloat", pattern: /[0-9]+\.[0-9]+/ })
const MaiorMenor = createToken({ name: "maiormenor", pattern: /(!<!|!>!)/ })

// palavras reservadas
const cabecadeteia = createToken({ name: "main", pattern: /cabecadeteia/ })
const aranha = createToken({ name: "if", pattern: /aranha/ })
const verso = createToken({ name: "then", pattern: /verso/ })
const venom = createToken({ name: "else", pattern: /venom/ })
const casa_out = createToken({ name: "cout", pattern: /casa_out/ })
const casa_in = createToken({ name: "cin", pattern: /casa_in/ })
const escalaparede = createToken({ name: "while", pattern: /escalaparede/ })
const lancateia = createToken({ name: "for", pattern: /lancateia/ })

// tipo
const stanlee = createToken({ name: "string", pattern: /stanlee/ })
const p2 = createToken({ name: "float", pattern: /p2/ })
const p1 = createToken({ name: "int", pattern: /p1/ })
const mj = createToken({ name: "bool", pattern: /mj/ })
const gws = createToken({ name: "double", pattern: /gws/ })

// logicos - operadores - condição - simbolos
const OrAnd = createToken({ name: "OrAnd", pattern: /(\&!|\%!)/ })
const Aritmeticos = createToken({ name: "aritmeticos", pattern: /(\!\+\!|\!\-\!|#|\!\*\!)/ })
const Comparadores = createToken ({ name: "comparadores", pattern: /(\!<\!|\!>\!|!!|\!=\!)/ })
const Simbolos = createToken({ name: "simbolos", pattern: /(\*\~|\.|\~\*\~|\@\*|\@|\!\;|\>\~|\~\<|,|"|{|}|!|:)/ })


//pular tokens vazios
const WhiteSpace = createToken({
    name: "WhiteSpace",
    pattern: /\s+/,
    group: Lexer.SKIPPED
})

//todos os tokens
const alltokens = [
    WhiteSpace,

    Variavel,
    Str,
    NumbersFloat,
    Numbers,
    MaiorMenor,

    cabecadeteia,
    aranha,
    verso,
    venom,
    lancateia,
    escalaparede,
    casa_in,
    casa_out,
    stanlee,
    p1,
    p2,
    mj,
    gws,

    OrAnd,
    Aritmeticos,
    Comparadores,
    Simbolos,

]

let langLexer = new Lexer(alltokens)
export { langLexer }
