import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '='];

  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const handleInput = (buttonPressed) => {
    if (buttonPressed === "X" || buttonPressed === "/" || buttonPressed === "+" || buttonPressed === "-") {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ");
      return;
    }

    if (buttonPressed === "DEL") {
      setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)));
      return;
    }

    if (buttonPressed === ".") {
      setCurrentNumber(currentNumber + buttonPressed);
      return;
    }

    if (buttonPressed === "+/-") {
      // implementar a lógica para inverter o sinal
      return;
    }

    if (buttonPressed === "=") {
      setLastNumber(currentNumber + " = ");
      calculator();
      return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  };

  const calculator = () => {
    const splitNumbers = currentNumber.split(" ");
    const operator = splitNumbers[1];

    if (operator === "X") {
      setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString());
    }

    if (operator === "/") {
      setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString());
    }

    if (operator === "+") {
      setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString());
    }

    if (operator === "-") {
      setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button}
            style={styles.button}
            onPress={() => handleInput(button)}
          >
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041348',
  },
  result: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 300,
    backgroundColor: '#092047',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#041348',
    height: 90,
    width: '20%',
    margin: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#1afe49',
  },

  textButton: {
    color: '#1afe49',
    fontSize: 25,
  },

  resultText:{
    fontWeight:'100',
    fontSize:30,
    margin:10,
    alignSelf: 'flex-end',
    color: '#1afe49'
    
  },
  historyText:{
    fontSize: 22,
    marginBottom: 0,
    marginRight: 10,
    alignSelf: 'flex-end',
    color: '#1afe49'
  }
});

function handleInput(buttonPressed){
  if(buttonPressed === "X" | buttonPressed === "/" | buttonPressed === "+" | buttonPressed === "-"){
    setCurrentNumber(currentNumber + " " + buttonPressed + " ")
    return
  }

  if(buttonPressed === "DEL"){
    console.log(currentNumber)
    setCurrentNumber(currentNumber.substring(0, (currentNumber.length-1)))
    return
  }

  if(buttonPressed === "."){
    setCurrentNumber(currentNumber + buttonPressed)

    return

    }

    if(buttonPressed === "+/-"){
    return
    }
    
    if (buttonPressed === "AC") {
      setLastNumber("");
      setCurrentNumber("");
      return;
    }

    if(buttonPressed === "="){
    setLastNumber(currentNumber + " = ")
    calculator()
    return
    }

    setCurrentNumber(currentNumber + buttonPressed)
}

function calculator(){
  const splitNumbers = currentNumber.split(" ")
  const operator = splitNumbers[1]
  console.log(splitNumbers)

  if(operator === "X"){
    setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString())
  }

  if(operator === "/"){
    setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString())
  }

  if(operator === "+"){
    setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString())
  }

  if(operator === "-"){
    setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString())
  }
}



