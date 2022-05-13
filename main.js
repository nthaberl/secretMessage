let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);

//step 1
secretMessage.pop();

//step 2
console.log(secretMessage.length)

//step 3
secretMessage.push("to");
secretMessage.push("Program");

//step 4
secretMessage[7] = "right";

//step 5
secretMessage.shift();

//step 6
secretMessage.splice(0, 0, "Programming")

//step 7
secretMessage.splice(6, 5, "know");

//step 8
console.log(secretMessage.join(" "))
