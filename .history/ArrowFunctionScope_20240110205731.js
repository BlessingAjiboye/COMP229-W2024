const tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon",  "Silver"],
    print: function(delay = 1000) {
    setTimeout(function() {
    console.log(this.mountains.join(", "));
    }, delay);
    }
    };
    tahoe.print(); // Uncaught TypeError: Cannot read property 'join' of undefined
    