var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import './Button.css';
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        return _super.call(this, props) || this;
    }
    Button.prototype.render = function () {
        return (React.createElement("button", { className: "btn" }, this.props.label));
    };
    Button.defaultProps = {
        label: 'Hello World'
    };
    return Button;
}(React.Component));
export default Button;
//# sourceMappingURL=Button.js.map