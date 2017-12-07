/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var utils_1 = require("./utils");
/**
 * An abstract component that Blueprint components can extend
 * in order to add some common functionality like runtime props validation.
 */
var AbstractComponent = (function (_super) {
    tslib_1.__extends(AbstractComponent, _super);
    function AbstractComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Not bothering to remove entries when their timeouts finish because clearing invalid ID is a no-op
        _this.timeoutIds = [];
        /**
         * Clear all known timeouts.
         */
        _this.clearTimeouts = function () {
            if (_this.timeoutIds.length > 0) {
                for (var _i = 0, _a = _this.timeoutIds; _i < _a.length; _i++) {
                    var timeoutId = _a[_i];
                    clearTimeout(timeoutId);
                }
                _this.timeoutIds = [];
            }
        };
        if (!utils_1.isNodeEnv("production")) {
            _this.validateProps(_this.props);
        }
        return _this;
    }
    AbstractComponent.prototype.componentWillReceiveProps = function (nextProps) {
        if (!utils_1.isNodeEnv("production")) {
            this.validateProps(nextProps);
        }
    };
    AbstractComponent.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    /**
     * Set a timeout and remember its ID.
     * All stored timeouts will be cleared when component unmounts.
     * @returns a "cancel" function that will clear timeout when invoked.
     */
    AbstractComponent.prototype.setTimeout = function (callback, timeout) {
        var handle = setTimeout(callback, timeout);
        this.timeoutIds.push(handle);
        return function () { return clearTimeout(handle); };
    };
    /**
     * Ensures that the props specified for a component are valid.
     * Implementations should check that props are valid and usually throw an Error if they are not.
     * Implementations should not duplicate checks that the type system already guarantees.
     *
     * This method should be used instead of React's
     * [propTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) feature.
     * In contrast to propTypes, these runtime checks are _always_ run, not just in development mode.
     */
    AbstractComponent.prototype.validateProps = function (_) {
        // implement in subclass
    };
    return AbstractComponent;
}(React.Component));
exports.AbstractComponent = AbstractComponent;

//# sourceMappingURL=abstractComponent.js.map
