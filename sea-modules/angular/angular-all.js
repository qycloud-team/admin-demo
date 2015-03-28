define("angular/angular-all", [], function (require, exports, module) {
    require('angular/1.3.12/angular');
    require('angular/plugins/ui-router/ui-router');
    //require(__uri("./plugins/translate/angular-translate.js"));
    require("angular/plugins/ui-bootstrap/ui-bootstrap");
    //require(__uri('./plugins/infinite-scroll/infinite-scroll.js'));
    // require(__uri('./plugins/ui-bootstrap/ui-bootstrap.js'))
});

define("angular/1.3.12/angular", function (require, exports, module) {
    __inline("./1.3.12/angular-debug.js");
});
//__inline("./plugins/translate/angular-translate.js");
//__inline("./plugins/infinite-scroll/infinite-scroll.js");
//__inline("./plugins/ui-bootstrap/ui-bootstrap.js");
define("angular/plugins/ui-bootstrap/ui-bootstrap", [], function (require, exports, module) {
    __inline('./plugins/ui-bootstrap/ui-bootstrap.js');
});
define("angular/plugins/ui-router/ui-router", function (require, exports, module) {
    __inline('./plugins/ui-router/ui-router.js');
});
