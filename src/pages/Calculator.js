import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import NumberArea from "../components/NumberArea";
import Output from "../components/Output";
import OperationArea from "../components/OperationArea";

const Calculator = () => {
    
    const [equation, setEquation] = useState([0])
    
    //SOLVE
    const solve = () => {
        //console.log(equation)
        if (equation[equation.length-1] === "-" || equation[equation.length-1] === "+" || equation[equation.length-1] === "/" || equation[equation.length-1] === "*") {
            alert("Please do not end in an operation!")
        } else if (equation.join("").match("[-+/*]")) {
            let math = equation.join("").match("[-+/*]")[0];
            let newEq = equation.join('').split(math);
            let ans = parseFloat(newEq[0]);
            for (let i = 1; i < newEq.length; i++) {
                if (math === "+") {
                    ans += parseFloat(newEq[i]);
                } else if (math === "-") {
                    ans -= parseFloat(newEq[i]);
                    
                } else if (math === "/") {
                    ans /= parseFloat(newEq[i]);
                    
                } else if (math === "*") {
                    ans *= parseFloat(newEq[i]);

                }
                setEquation([ans])
            }
        }
    }

    const handleClear = () => {
        setEquation([])
    }

    return (
        <View style={styles.container}>
            <Text>Calculator!</Text>
            <View style={[styles.calculator]}>
                <Output equation={equation}/>
                <View style={[styles.numAndOutput]}>
                    <NumberArea equation={equation} setEquation={setEquation}/>
                    <View style={[styles.operations]}>
                        <OperationArea equation={equation} setEquation={setEquation} solve={solve}/>
                    </View>
                </View>
                <View>
                    <Button title={"Clear"}  onPress={handleClear}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calculator: {
        flexDirection: "column",
    },
    numAndOutput: {
        flexDirection: "row",
    },
    operations: {
        flexDirection: "column",
    },
});


export default Calculator;