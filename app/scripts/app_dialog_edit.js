var DPMW;
(function (DPMW_1) {
    var global = CDP.global;
    function onStart(initFlg) {
    }
    define('scripts/app_dialog_edit', [
        'hogan',
        'cdp.ui.jqm',
    ], function () {
        var DPMW = global.DPMW;
        CDP.lazyLoad('lazy');
        return { main: onStart };
    });
})(DPMW || (DPMW = {}));
//# sourceMappingURL=app_dialog_edit.js.map