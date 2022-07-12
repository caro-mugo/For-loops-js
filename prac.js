// // //block
// // function  foo  (){ 
// //     var  fruit =  'apple'  ; 
// //     console.log(  'inside function: '  ,fruit); 
// //     } 
// //     foo();   
// //     // console.log(fruit);

// //     //function scope
// //     function  foo  (){ 
// //         if  (  true  ){ 
// //         var  fruit1 =  'apple'  ;   //exist in function  scope 
// //         const  fruit2 =  'banana'  ;   //exist in block  scope 
// //         let  fruit3 =  'strawberry'  ;   //exist in block  scope 
// //         } 
// //         console.log(fruit1); 
// //         console.log(fruit2); 
// //         console.log(fruit3); 
// //         } 
// //         foo(); 
// //         //srict mode
// //         function trial(){
// //             "use strict"
// //         var  obj1 = {} 
// //         Object.defineProperty(obj1,  'x'  , {  value  : 42,  writable  :  false  }) 
// //         obj1.x = 9
// //         comsole.log(obj1.x)
// //         }
//         trial()
//         var  sum = 015 +  // !!! syntax error 
//  197 + 
//  142; 
//  function trial(){
//  var  sumWithOctal = 0o10 + 8; 
//  console.log(sumWithOctal);  
//  }
//  function  abc  (){ 
//     (14).sailing =  'home' 
//     'with'  .you =  "far away" 
//     } 
//     abc(); function  abc  (){ 
//         (14).sailing =  'home' 
//         'with'  .you =  "far away" 
//         } 
//         abc();
//         //hoisting
//         console.log(num)
//         var num;//we declared
//         num=6;//we initialized
//         console.log(num)
        //nested scope
        //map()
        let john = {name: 'John Doe'},
        lily = {name: 'Lily Bush'},
        peter = {name: 'Peter Drucker'};
        let userRoles = new Map();
        console.log(typeof(userRoles)); 
        console.log(userRoles instanceof Map);
        let foo = {name: 'Foo'};
        userRoles.get(foo);
        // push()
        let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
        seas.push('Red Sea');
        console.log(seas); 
         // unshift()       
        let ocean= ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
        ocean.unshift('Red Sea');
         console.log(ocean);
         //pop()
        let seass = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
        const lastElement = seass.pop();
        console.log(lastElement); 
        //shift()
        let seea = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
        const firstElement = seea.shift();
        console.log(firstElement);
        //indexOf()
        let seasss = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
        let index = seasss.indexOf('North Sea');
        console.log(index);
        //map()
        let johnn = { name: 'John Doe' },
        lilyy = { name: 'Lily Bush' },
        peterr = { name: 'Peter Drucker' };
      
      let userRoless = new Map([
        [john, 'admin'],
        [lily, 'editor'],
        [peter, 'subscriber'],
      ]);
      
      for (let role of userRoless.values()) {
        console.log(role);
      }
      //filter()
      let cities = [
        {name: 'Los Angeles', population: 3792621},
        {name: 'New York', population: 8175133},
        {name: 'Chicago', population: 2695598},
        {name: 'Houston', population: 2099451},
        {name: 'Philadelphia', population: 1526006}
    ];
      let bigCities = [];
      for (let i = 0; i < cities.length; i++) {
          if (cities[i].population > 3000000) {
              bigCities.push(cities[i]);
          }
      }
      console.log(bigCities);

      let citiess = [
        {name: 'Los Angeles', population: 3792621},
        {name: 'New York', population: 8175133},
        {name: 'Chicago', population: 2695598},
        {name: 'Houston', population: 2099451},
        {name: 'Philadelphia', population: 1526006}
    ];
    cities
    .filter(city => city.population < 3000000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ':' + city.population));
    //foreach()
    let ranks = ['A', 'B', 'C'];
    ranks.forEach(function (e) {
        console.log(e);
    });
    //method2
    let rankss = ['A', 'B', 'C'];
    for (let i = 0; i < ranks.length; i++) {
        console.log(rankss[i]);
    }
    //counter()
    var counter = new Counter();
    var numbers = [1, 2, 3];
    var sum = 0;
    numbers.forEach(function (e) {
        sum += e;
        this.increase();
    }, counter);
    
    console.log(sum); // 6
    console.log(counter.current()); // 3