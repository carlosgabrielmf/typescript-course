"use strict";
(() => {
    let MyCustomVariable = 'Nombre';
    console.log(typeof MyCustomVariable);
    MyCustomVariable = 20;
    console.log(typeof MyCustomVariable);
    MyCustomVariable = {
        name: 'Flash',
        age: 60,
        powers: [1, 2, 3],
    };
    console.log(typeof MyCustomVariable);
    console.log(MyCustomVariable);
})();
//# sourceMappingURL=union-types.js.map