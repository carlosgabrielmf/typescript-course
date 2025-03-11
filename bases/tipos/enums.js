"use strict";
(() => {
    //Cada uno incrementa en 1 el valor del anterior si no se especifica un valor
    let Role;
    (function (Role) {
        Role[Role["Employee"] = 0] = "Employee";
        Role[Role["Manager"] = 1] = "Manager";
        Role[Role["Admin"] = 2] = "Admin";
    })(Role || (Role = {}));
    const role = Role.Employee;
})();
