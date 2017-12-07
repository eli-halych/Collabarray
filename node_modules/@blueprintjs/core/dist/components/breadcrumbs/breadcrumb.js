/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
exports.Breadcrumb = function (breadcrumbProps) {
    var classes = classNames(Classes.BREADCRUMB, (_a = {},
        _a[Classes.DISABLED] = breadcrumbProps.disabled,
        _a), breadcrumbProps.className);
    return (React.createElement("a", { className: classes, href: breadcrumbProps.href, onClick: breadcrumbProps.disabled ? null : breadcrumbProps.onClick, tabIndex: breadcrumbProps.disabled ? null : 0, target: breadcrumbProps.target }, breadcrumbProps.text));
    var _a;
};

//# sourceMappingURL=breadcrumb.js.map
