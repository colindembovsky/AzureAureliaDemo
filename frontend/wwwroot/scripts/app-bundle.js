var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('api',["require", "exports", "aurelia-framework", "aurelia-fetch-client", "aurelia-configuration"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, aurelia_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApiWrapper = (function () {
        function ApiWrapper(client, aureliaConfig) {
            this.client = client;
            this.aureliaConfig = aureliaConfig;
            this.message = 'Hello World!';
            client.configure(function (config) {
                config
                    .withBaseUrl(aureliaConfig.get("api.baseUri"))
                    .withDefaults({
                    headers: {
                        Accept: 'application/json',
                    },
                });
            });
        }
        return ApiWrapper;
    }());
    ApiWrapper = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient, aurelia_configuration_1.AureliaConfiguration])
    ], ApiWrapper);
    exports.ApiWrapper = ApiWrapper;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLFVBQVU7UUFJbkIsb0JBQW1CLE1BQWtCLEVBQVUsYUFBbUM7WUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBWTtZQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtZQUgzRSxZQUFPLEdBQUcsY0FBYyxDQUFDO1lBSTVCLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNuQixNQUFNO3FCQUNELFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUM3QyxZQUFZLENBQUM7b0JBQ1YsT0FBTyxFQUFFO3dCQUNMLE1BQU0sRUFBRSxrQkFBa0I7cUJBQzdCO2lCQUNKLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNMLGlCQUFDO0lBQUQsQ0FmQSxBQWVDLElBQUE7SUFmWSxVQUFVO1FBRHRCLDhCQUFVO3lDQUtvQixpQ0FBVSxFQUF5Qiw0Q0FBb0I7T0FKekUsVUFBVSxDQWV0QjtJQWZZLGdDQUFVIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCB7IEF1cmVsaWFDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1jb25maWd1cmF0aW9uJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBBcGlXcmFwcGVyIHtcclxuICAgIHB1YmxpYyBtZXNzYWdlID0gJ0hlbGxvIFdvcmxkISc7XHJcbiAgICBwdWJsaWMgdmFsdWVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2xpZW50OiBIdHRwQ2xpZW50LCBwcml2YXRlIGF1cmVsaWFDb25maWc6IEF1cmVsaWFDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgY2xpZW50LmNvbmZpZ3VyZShjb25maWcgPT4ge1xyXG4gICAgICAgICAgICBjb25maWdcclxuICAgICAgICAgICAgICAgIC53aXRoQmFzZVVybChhdXJlbGlhQ29uZmlnLmdldChcImFwaS5iYXNlVXJpXCIpKVxyXG4gICAgICAgICAgICAgICAgLndpdGhEZWZhdWx0cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('app',["require", "exports", "aurelia-framework", "./api"], function (require, exports, aurelia_framework_1, api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(api) {
            this.api = api;
            this.message = 'Hello World!';
            this.values = [];
            this.initValues();
        }
        App.prototype.initValues = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, ex_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            _a = this;
                            return [4, this.api.client.fetch("/values")
                                    .then(function (res) { return res.json(); })];
                        case 1:
                            _a.values = _b.sent();
                            return [3, 3];
                        case 2:
                            ex_1 = _b.sent();
                            console.error(ex_1);
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            });
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [api_1.ApiWrapper])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlBLElBQWEsR0FBRztRQUlkLGFBQW1CLEdBQWU7WUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1lBSDNCLFlBQU8sR0FBRyxjQUFjLENBQUM7WUFDekIsV0FBTSxHQUFhLEVBQUUsQ0FBQztZQUczQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUVhLHdCQUFVLEdBQXhCOzs7Ozs7OzRCQUVJLEtBQUEsSUFBSSxDQUFBOzRCQUFVLFdBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztxQ0FDakQsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxFQUFBOzs0QkFENUIsR0FBSyxNQUFNLEdBQUcsU0FDYyxDQUFDOzs7OzRCQUU3QixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUUsQ0FBQyxDQUFDOzs7Ozs7U0FFckI7UUFDSCxVQUFDO0lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtJQWhCWSxHQUFHO1FBRGYsOEJBQVU7eUNBS2UsZ0JBQVU7T0FKdkIsR0FBRyxDQWdCZjtJQWhCWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgQXBpV3JhcHBlciB9IGZyb20gJy4vYXBpJztcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBBcHAge1xuICBwdWJsaWMgbWVzc2FnZSA9ICdIZWxsbyBXb3JsZCEnO1xuICBwdWJsaWMgdmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGk6IEFwaVdyYXBwZXIpIHtcbiAgICB0aGlzLmluaXRWYWx1ZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5pdFZhbHVlcygpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy52YWx1ZXMgPSBhd2FpdCB0aGlzLmFwaS5jbGllbnQuZmV0Y2goXCIvdmFsdWVzXCIpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGV4KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        apiBaseUrl: "http://localhost:64705/api",
        debug: true,
        testing: true,
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsVUFBVSxFQUFFLDRCQUE0QjtRQUN4QyxLQUFLLEVBQUUsSUFBSTtRQUNYLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQyIsImZpbGUiOiJlbnZpcm9ubWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgYXBpQmFzZVVybDogXCJodHRwOi8vbG9jYWxob3N0OjY0NzA1L2FwaVwiLFxuICBkZWJ1ZzogdHJ1ZSxcbiAgdGVzdGluZzogdHJ1ZSxcbn07XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-configuration');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVuQyxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWZELDhCQWVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpXG4gICAgLnBsdWdpbignYXVyZWxpYS1jb25maWd1cmF0aW9uJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1><h3>Values</h3><ul><li repeat.for=\"val of values\">${val}</li></ul></template>"; });
//# sourceMappingURL=app-bundle.js.map