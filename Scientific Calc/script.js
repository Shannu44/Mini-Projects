function appendCharacter(character) {
    document.getElementById("result").value += character;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("result").value;
    
    // Simple REST API call to Plumber for basic operations
    let url = "http://localhost:8000";

    if (expression.includes("sin")) {
        let value = extractValue(expression, "sin");
        url += `/sin?x=${value}`;
    } else if (expression.includes("cos")) {
        let value = extractValue(expression, "cos");
        url += `/cos?x=${value}`;
    } else if (expression.includes("tan")) {
        let value = extractValue(expression, "tan");
        url += `/tan?x=${value}`;
    } else if (expression.includes("log")) {
        let value = extractValue(expression, "log");
        url += `/log?x=${value}`;
    } else if (expression.includes("sqrt")) {
        let value = extractValue(expression, "sqrt");
        url += `/sqrt?x=${value}`;
    } else {
        // Evaluate basic arithmetic expressions
        try {
            document.getElementById("result").value = eval(expression);
            return;
        } catch (error) {
            alert("Invalid expression");
            return;
        }
    }

    // Fetch result from R server
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").value = data;
    })
    .catch(error => alert("Error with the calculation"));
}

function extractValue(expression, operation) {
    let startIndex = expression.indexOf(operation) + operation.length + 1;
    let endIndex = expression.indexOf(")", startIndex);
    return expression.substring(startIndex, endIndex);
}
