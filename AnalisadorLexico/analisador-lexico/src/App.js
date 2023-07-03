import { Container, Grid, TextField, } from "@mui/material";
import { useState } from "react";
import { langLexer } from './lexer';
import { dicionario } from './dicionario';

function App () {
  const [programText, setProgramText] = useState('')
  const [updatedDict, setupdatedDict] = useState(dicionario)
  const [errors, setErrors] = useState([])
  console.log(updatedDict)

function handleDict(dicionario) {
  const x = []
  for (const key in dicionario){

    x.push(
      <ul>
        {
          key + ": " + dicionario [key]
        }
      </ul>

    )
                  
  }
  return x
}

  function handleProgramText(value) {
    const lexingResult = langLexer.tokenize(value);
    const copyDict = JSON.parse(JSON.stringify(dicionario));
    lexingResult.tokens.forEach(token => {
      copyDict[token.tokenType.name] = copyDict[token.tokenType.name] + 1
    });

    setErrors(lexingResult.errors)
    setupdatedDict(copyDict);
    setProgramText(value);
  }

    return (
      <div class = "center">
      <Container>
        <Grid container>
          <Grid item xs={4}>
          <span style={{fontSize: "20px", fontWeight: "bold"}}>Analisador Lexico </span>
            <TextField
              multiline
              rows={20}
              style={{ display: "flex" }}
              value={programText}
              onChange={e => handleProgramText(e.target.value)}
            />
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <span style={{fontSize: "20px", fontWeight: "bold"}}>Erros </span>
            <ul>
              {
                errors.map(error =>
                  <div>
                    <li>
                    <font color="red">Line: {error.line}</font>
                      <br></br>
                      <font color="red">Column: {error.column}</font>
                      <br></br>
                      <font color = "red">Message: {error.message}</font>
                      </li>
                      <hr></hr>
                    </div>

                )
              }
            </ul>

          </Grid>
          <Grid item xs={4} style={{textAlign: "left" }}>
          <ul>
              {
               handleDict (updatedDict)
              }
            </ul>
      </Grid>
        </Grid>
      </Container>
     
    </div>

  );
}

export default App;
