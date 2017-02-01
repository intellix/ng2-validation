"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var index_1 = require('../index');
var NOT_EQUAL_TO_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return NotEqualToValidator; }),
    multi: true
};
var NotEqualToValidator = (function () {
    function NotEqualToValidator() {
    }
    NotEqualToValidator.prototype.ngOnInit = function () {
        this.validator = index_1.CustomValidators.notEqualTo(this.notEqualTo);
    };
    NotEqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    NotEqualToValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                    providers: [NOT_EQUAL_TO_VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    NotEqualToValidator.ctorParameters = [];
    NotEqualToValidator.propDecorators = {
        'notEqualTo': [{ type: core_1.Input },],
    };
    return NotEqualToValidator;
}());
exports.NotEqualToValidator = NotEqualToValidator;
//# sourceMappingURL=not-equal-to.js.map