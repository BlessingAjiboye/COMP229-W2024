
const tahoe = {
    mountains: ["Freel",  "Rose",  "Tallac",  "Rubicon",  "Silver"],
    print: (delay = 1000)  => {
    setTimeout(()  => {
    console.log(this.mountains.join(", "));
    },  delay);
    }
    };
    tahoe.print();  // Uncaught TypeError: Cannot read property 'join' of undefined
    