const fs = require("fs");

const data = "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";

fs.writeFileSync("nodejs_architecture.txt", data);
console.log(data);

//===========================================================================================//

//4. Append additional data //

const fs = require("fs");

const newData =  "Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.";

fs.appendFileSync("nodejs_architecture.txt", newData);

//const data = fs.readFileSync("nodejs_architecture.txt");

console.log(data.toString());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//5.For deleting file

const fs = require("fs");

fs.unlinkSync("./nodejs_architecture.txt", () =>
console.log("File deleted successfully"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//6.Checking the Os version

const { log } = require("console");
const os = require("os");

console.log("Operating system name: " + os.type());

console.log("OS release: " + os.release());

//7. Creating a server

const http = require("http");

const server = http.createServer((req,res) => {
    if (req.url === "/") {
        res.write(
          "<h1>I am Happy To Learn Full Stack Web Developemnt From PW SKILLS!</h1>"  
        );
    }
    res.end();
});

server.listen(5000);
console.log("The Http Server is running on port 5000");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//8.Use of event module

const { channel } = require("diagnostics_channel");
const EventEmitter = require("events");

//const eventEmitter = new eventEmitter();

//const subscribeMessage = (channelName) => {
  console.log("Thanks to Subscribing to ${channelName}");

//};
eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//9.Event Emitter

// const EventEmitter = require("events");

// const eventEmitter = new EventEmitter();

// const subscribeMessage = (channelName) => {
//   console.log(`Thanks For Subscribing to ${channelName}`);
// };

// eventEmitter.addListener("subscribe", subscribeMessage);

// console.log("Calling event listner before removing the event.");
// eventEmitter.emit("subscribe", "College Wallah");

// console.log("Calling event listner after removing the event.");
// eventEmitter.removeListener("subscribe", subscribeMessage);

// eventEmitter.emit("subscribe", "College Wallah");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//10.

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");

console.log(
  `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);

eventEmitter.setMaxListeners(5);

console.log(
  `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);