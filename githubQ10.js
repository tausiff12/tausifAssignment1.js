// function Hero(name, level)  // parameter are under function here
// {
// name = name;
// level = level;
// }

// above code is just a function and hence this is not correct

// below code is correct use of constructer fN
class Hero {
    constructor(name,level){       // parameter are under constructer here
        this.name = name ;
        this.level = level ;
    }
}