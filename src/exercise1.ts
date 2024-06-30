//Exercise 1: Create an Enum

enum TrafficLight {
    Red, Yellow, Green
}



function robot() {  
    let arr: string[] = [];
    //put strings in enums in array
    for (let i in TrafficLight) {
        if (typeof TrafficLight[i] === "string") {
            const light: string = TrafficLight[i]
            arr.push(light);
        }
    }

    const miliseconds = 10000;
                  
    arr.forEach(
        (light, i) => {
          setTimeout(() => console.log(light), miliseconds * i);
        }
    );
   
}

robot();