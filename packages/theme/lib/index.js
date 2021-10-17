"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = exports.DEFAULT_ACCENT_COLOR = exports.ThemeType = void 0;
const tslib_1 = require("tslib");
const dark_1 = tslib_1.__importDefault(require("./themes/dark"));
const default_1 = tslib_1.__importDefault(require("./themes/default"));
const legacy_1 = require("./themes/legacy");
var ThemeType;
(function (ThemeType) {
    ThemeType["default"] = "default";
    ThemeType["dark"] = "dark";
})(ThemeType = exports.ThemeType || (exports.ThemeType = {}));
exports.DEFAULT_ACCENT_COLOR = legacy_1.themeBrandPrimary;
function theme(themeId, brandColor = exports.DEFAULT_ACCENT_COLOR) {
    return themeId === ThemeType.dark
        ? dark_1.default(brandColor)
        : default_1.default(brandColor);
}
exports.theme = theme;
const defaultThemeConfigWithDefaultAccentColor = default_1.default(exports.DEFAULT_ACCENT_COLOR);
//# sourceMappingURL=index.js.map