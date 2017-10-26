/* global angular */
(function(window, document) {
    'use strict';

    /*
     * AngularJS Toaster
     * Version: 2.1.0
     *
     * Copyright 2013-2016 Jiri Kavulak.
     * All Rights Reserved.
     * Use, reproduction, distribution, and modification of this code is subject to the terms and
     * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
     *
     * Author: Jiri Kavulak
     * Related to project of John Papa, Hans Fjällemark and Nguyễn Thiện Hùng (thienhung1989)
     */

    angular.module('toast', []).constant(
        'toastConfig', {
            'limit': 0,                   // limits max number of toasts
            'tap-to-dismiss': true,
            'close-button': false,
            'close-html': '<button class="toast-close-button" type="button">&times;</button>',
            'newest-on-top': true,
            'time-out': 5000,
            'icon-classes': {
                error: 'toast-error',
                info: 'toast-info',
                wait: 'toast-wait',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            'body-output-type': '', // Options: '', 'trustedHtml', 'template', 'templateWithData', 'directive'
            'body-template': 'toastBodyTmpl.html',
            'icon-class': 'toast-info',
            'position-class': 'toast-top-right', // Options (see CSS):
            // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-center',
            // 'toast-top-left', 'toast-top-center', 'toast-top-right',
            // 'toast-bottom-left', 'toast-bottom-center', 'toast-bottom-right',
            'title-class': 'toast-title',
            'message-class': 'toast-message',
            'prevent-duplicates': false,
            'mouseover-timer-stop': true // stop timeout on mouseover and restart timer on mouseout
        }
    ).run(['$templateCache', function($templateCache) {
            $templateCache.put('angularjs-toast/toast.html',
                '<div id="toast-container" ng-class="[config.position, config.animation]">' +
                    '<div ng-repeat="toast in toasts" class="toast" ng-class="toast.type" ng-click="click($event, toast)" ng-mouseover="stopTimer(toast)" ng-mouseout="restartTimer(toast)">' +
                        '<div ng-if="toast.showCloseButton" ng-click="click($event, toast, true)" ng-bind-html="toast.closeHtml"></div>' +
                        '<div ng-class="config.title">{{toast.title}}</div>' +
                        '<div ng-class="config.message" ng-switch on="toast.bodyOutputType">' +
                        '<div ng-switch-when="trustedHtml" ng-bind-html="toast.html"></div>' +
                        '<div ng-switch-when="template"><div ng-include="toast.bodyTemplate"></div></div>' +
                        '<div ng-switch-when="templateWithData"><div ng-include="toast.bodyTemplate"></div></div>' +
                        '<div ng-switch-when="directive"><div directive-template directive-name="{{toast.html}}" directive-data="{{toast.directiveData}}"></div></div>' +
                        '<div ng-switch-default >{{toast.body}}</div>' +
                        '</div>' +
                    '</div>' +
                '</div>');
        }
    ]).service(
        'toast', [
            '$rootScope', 'toastConfig', function($rootScope, toastConfig) {
                // http://stackoverflow.com/questions/26501688/a-typescript-guid-class
                var Guid = (function() {
                    var Guid = {};
                    Guid.newGuid = function() {
                        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                            return v.toString(16);
                        });
                    };
                    return Guid;
                }());

                this.pop = function(type, title, body, timeout, bodyOutputType, clickHandler, toastId, showCloseButton, toastId, onHideCallback) {
                    if (angular.isObject(type)) {
                        var params = type; // Enable named parameters as pop argument
                        this.toast = {
                            type: params.type,
                            title: params.title,
                            body: params.body,
                            timeout: params.timeout,
                            bodyOutputType: params.bodyOutputType,
                            clickHandler: params.clickHandler,
                            showCloseButton: params.showCloseButton,
                            closeHtml: params.closeHtml,
                            toastId: params.toastId,
                            onShowCallback: params.onShowCallback,
                            onHideCallback: params.onHideCallback,
                            directiveData: params.directiveData,
                            tapToDismiss: params.tapToDismiss
                        };
                        toastId = params.toastId;
                    } else {
                        this.toast = {
                            type: type,
                            title: title,
                            body: body,
                            timeout: timeout,
                            bodyOutputType: bodyOutputType,
                            clickHandler: clickHandler,
                            showCloseButton: showCloseButton,
                            toastId: toastId,
                            onHideCallback: onHideCallback
                        };
                    }

                    if (!this.toast.toastId || !this.toast.toastId.length) {
                        this.toast.toastId = Guid.newGuid();
                    }

                    $rootScope.$emit('toast-newToast', toastId, this.toast.toastId);
                    
                    return {
                        toastId: toastId,
                        toastId: this.toast.toastId
                    };
                };

                this.clear = function(toastId, toastId) {
                    if (angular.isObject(toastId)) {
                        $rootScope.$emit('toast-clearToasts', toastId.toastId, toastId.toastId);
                    } else {
                        $rootScope.$emit('toast-clearToasts', toastId, toastId);
                    }
                };

                // Create one method per icon class, to allow to call toast.info() and similar
                for (var type in toastConfig['icon-classes']) {
                    this[type] = createTypeMethod(type);
                }

                function createTypeMethod(toastType) {
                    return function(title, body, timeout, bodyOutputType, clickHandler, toastId, showCloseButton, toastId, onHideCallback) {
                        if (angular.isString(title)) {
                            return this.pop(
                                toastType,
                                title,
                                body,
                                timeout,
                                bodyOutputType,
                                clickHandler,
                                toastId,
                                showCloseButton,
                                toastId,
                                onHideCallback);
                        } else { // 'title' is actually an object with options
                            return this.pop(angular.extend(title, { type: toastType }));
                        }
                    };
                }
            }]
        ).factory(
        'toastEventRegistry', [
            '$rootScope', function($rootScope) {
                var deregisterNewToast = null, deregisterClearToasts = null, newToastEventSubscribers = [], clearToastsEventSubscribers = [], toastFactory;

                toastFactory = {
                    setup: function() {
                        if (!deregisterNewToast) {
                            deregisterNewToast = $rootScope.$on(
                                'toast-newToast', function(event, toastId, toastId) {
                                    for (var i = 0, len = newToastEventSubscribers.length; i < len; i++) {
                                        newToastEventSubscribers[i](event, toastId, toastId);
                                    }
                                });
                        }

                        if (!deregisterClearToasts) {
                            deregisterClearToasts = $rootScope.$on(
                                'toast-clearToasts', function(event, toastId, toastId) {
                                    for (var i = 0, len = clearToastsEventSubscribers.length; i < len; i++) {
                                        clearToastsEventSubscribers[i](event, toastId, toastId);
                                    }
                                });
                        }
                    },

                    subscribeToNewToastEvent: function(onNewToast) {
                        newToastEventSubscribers.push(onNewToast);
                    },
                    subscribeToClearToastsEvent: function(onClearToasts) {
                        clearToastsEventSubscribers.push(onClearToasts);
                    },
                    unsubscribeToNewToastEvent: function(onNewToast) {
                        var index = newToastEventSubscribers.indexOf(onNewToast);
                        if (index >= 0) {
                            newToastEventSubscribers.splice(index, 1);
                        }

                        if (newToastEventSubscribers.length === 0) {
                            deregisterNewToast();
                            deregisterNewToast = null;
                        }
                    },
                    unsubscribeToClearToastsEvent: function(onClearToasts) {
                        var index = clearToastsEventSubscribers.indexOf(onClearToasts);
                        if (index >= 0) {
                            clearToastsEventSubscribers.splice(index, 1);
                        }

                        if (clearToastsEventSubscribers.length === 0) {
                            deregisterClearToasts();
                            deregisterClearToasts = null;
                        }
                    }
                };
                return {
                    setup: toastFactory.setup,
                    subscribeToNewToastEvent: toastFactory.subscribeToNewToastEvent,
                    subscribeToClearToastsEvent: toastFactory.subscribeToClearToastsEvent,
                    unsubscribeToNewToastEvent: toastFactory.unsubscribeToNewToastEvent,
                    unsubscribeToClearToastsEvent: toastFactory.unsubscribeToClearToastsEvent
                };
            }]
        )
        .directive('directiveTemplate', ['$compile', '$injector', function($compile, $injector) {
            return {
                restrict: 'A',
                scope: {
                    directiveName: '@directiveName',
                    directiveData: '@directiveData'
                },
                replace: true,
                link: function(scope, elm, attrs) {
                    scope.$watch('directiveName', function(directiveName) {
                        if (angular.isUndefined(directiveName) || directiveName.length <= 0)
                            throw new Error('A valid directive name must be provided via the toast body argument when using bodyOutputType: directive');

                        var directive;

                        try {
                            directive = $injector.get(attrs.$normalize(directiveName) + 'Directive');
                        } catch (e) {
                            throw new Error(directiveName + ' could not be found. ' +
                                'The name should appear as it exists in the markup, not camelCased as it would appear in the directive declaration,' +
                                ' e.g. directive-name not directiveName.');
                        }


                        var directiveDetails = directive[0];

                        if (directiveDetails.scope !== true && directiveDetails.scope) {
                            throw new Error('Cannot use a directive with an isolated scope. ' +
                                'The scope must be either true or falsy (e.g. false/null/undefined). ' +
                                'Occurred for directive ' + directiveName + '.');
                        }

                        if (directiveDetails.restrict.indexOf('A') < 0) {
                            throw new Error('Directives must be usable as attributes. ' +
                                'Add "A" to the restrict option (or remove the option entirely). Occurred for directive ' +
                                directiveName + '.');
                        }

                        if (scope.directiveData)
                            scope.directiveData = angular.fromJson(scope.directiveData);

                        var template = $compile('<div ' + directiveName + '></div>')(scope);

                        elm.append(template);
                    });
                }
            };
        }])
        .directive(
        'toastContainer', [
            '$parse', '$rootScope', '$interval', '$sce', 'toastConfig', 'toast', 'toastEventRegistry',
            function($parse, $rootScope, $interval, $sce, toastConfig, toast, toastEventRegistry) {
                return {
                    replace: true,
                    restrict: 'EA',
                    scope: true, // creates an internal scope for this directive (one per directive instance)
                    link: function(scope, elm, attrs) {
                        var mergedConfig;

                        // Merges configuration set in directive with default one
                        mergedConfig = angular.extend({}, toastConfig, scope.$eval(attrs.toastOptions));

                        scope.config = {
                            toastId: mergedConfig['toast-id'],
                            position: mergedConfig['position-class'],
                            title: mergedConfig['title-class'],
                            message: mergedConfig['message-class'],
                            tap: mergedConfig['tap-to-dismiss'],
                            closeButton: mergedConfig['close-button'],
                            closeHtml: mergedConfig['close-html'],
                            animation: mergedConfig['animation-class'],
                            mouseoverTimer: mergedConfig['mouseover-timer-stop']
                        };

                        scope.$on(
                            "$destroy", function() {
                                toastEventRegistry.unsubscribeToNewToastEvent(scope._onNewToast);
                                toastEventRegistry.unsubscribeToClearToastsEvent(scope._onClearToasts);
                            }
                        );

                        function setTimeout(toast, time) {
                            toast.timeoutPromise = $interval(
                                function() {
                                    scope.removeToast(toast.toastId);
                                }, time, 1
                            );
                        }

                        scope.configureTimer = function(toast) {
                            var timeout = angular.isNumber(toast.timeout) ? toast.timeout : mergedConfig['time-out'];
                            if (typeof timeout === "object") timeout = timeout[toast.type];
                            if (timeout > 0) {
                                setTimeout(toast, timeout);
                            }
                        };

                        function addToast(toast, toastId) {
                            toast.type = mergedConfig['icon-classes'][toast.type];
                            if (!toast.type) {
                                toast.type = mergedConfig['icon-class'];
                            }

                            if (mergedConfig['prevent-duplicates'] === true && scope.toasts.length) {
                                if (scope.toasts[scope.toasts.length - 1].body === toast.body) {
                                    return;
                                } else {
                                    var i, len, dupFound = false;
                                    for (i = 0, len = scope.toasts.length; i < len; i++) {
                                        if (scope.toasts[i].toastId === toastId) {
                                            dupFound = true;
                                            break;
                                        }
                                    }
                                    
                                    if (dupFound) return;
                                }
                            }


                            // set the showCloseButton property on the toast so that
                            // each template can bind directly to the property to show/hide
                            // the close button
                            var closeButton = mergedConfig['close-button'];

                            // if toast.showCloseButton is a boolean value,
                            // it was specifically overriden in the pop arguments
                            if (typeof toast.showCloseButton === "boolean") {

                            } else if (typeof closeButton === "boolean") {
                                toast.showCloseButton = closeButton;
                            } else if (typeof closeButton === "object") {
                                var closeButtonForType = closeButton[toast.type];

                                if (typeof closeButtonForType !== "undefined" && closeButtonForType !== null) {
                                    toast.showCloseButton = closeButtonForType;
                                }
                            } else {
                                // if an option was not set, default to false.
                                toast.showCloseButton = false;
                            }

                            if (toast.showCloseButton) {
                                toast.closeHtml = $sce.trustAsHtml(toast.closeHtml || scope.config.closeHtml);
                            }

                            // Set the toast.bodyOutputType to the default if it isn't set
                            toast.bodyOutputType = toast.bodyOutputType || mergedConfig['body-output-type'];
                            switch (toast.bodyOutputType) {
                                case 'trustedHtml':
                                    toast.html = $sce.trustAsHtml(toast.body);
                                    break;
                                case 'template':
                                    toast.bodyTemplate = toast.body || mergedConfig['body-template'];
                                    break;
                                case 'templateWithData':
                                    var fcGet = $parse(toast.body || mergedConfig['body-template']);
                                    var templateWithData = fcGet(scope);
                                    toast.bodyTemplate = templateWithData.template;
                                    toast.data = templateWithData.data;
                                    break;
                                case 'directive':
                                    toast.html = toast.body;
                                    break;
                            }

                            scope.configureTimer(toast);

                            if (mergedConfig['newest-on-top'] === true) {
                                scope.toasts.unshift(toast);
                                if (mergedConfig['limit'] > 0 && scope.toasts.length > mergedConfig['limit']) {
                                    scope.toasts.pop();
                                }
                            } else {
                                scope.toasts.push(toast);
                                if (mergedConfig['limit'] > 0 && scope.toasts.length > mergedConfig['limit']) {
                                    scope.toasts.shift();
                                }
                            }

                            if (angular.isFunction(toast.onShowCallback)) {
                                toast.onShowCallback();
                            }
                        }

                        scope.removeToast = function(toastId) {
                            var i, len;
                            for (i = 0, len = scope.toasts.length; i < len; i++) {
                                if (scope.toasts[i].toastId === toastId) {
                                    removeToast(i);
                                    break;
                                }
                            }
                        };

                        function removeToast(toastIndex) {
                            var toast = scope.toasts[toastIndex];

                            // toast is always defined since the index always has a match
                            if (toast.timeoutPromise) {
                                $interval.cancel(toast.timeoutPromise);
                            }
                            scope.toasts.splice(toastIndex, 1);

                            if (angular.isFunction(toast.onHideCallback)) {
                                toast.onHideCallback();
                            }
                        }

                        function removeAllToasts(toastId) {
                            for (var i = scope.toasts.length - 1; i >= 0; i--) {
                                if (isUndefinedOrNull(toastId)) {
                                    removeToast(i);
                                } else {
                                    if (scope.toasts[i].toastId == toastId) {
                                        removeToast(i);
                                    }
                                }
                            }
                        }

                        scope.toasts = [];

                        function isUndefinedOrNull(val) {
                            return angular.isUndefined(val) || val === null;
                        }

                        scope._onNewToast = function(event, toastId, toastId) {
                            // Compatibility: if toast has no toastId defined, and if call to display
                            // hasn't either, then the request is for us

                            if ((isUndefinedOrNull(scope.config.toastId) && isUndefinedOrNull(toastId)) || (!isUndefinedOrNull(scope.config.toastId) && !isUndefinedOrNull(toastId) && scope.config.toastId == toastId)) {
                                addToast(toast.toast, toastId);
                            }
                        };
                        scope._onClearToasts = function(event, toastId, toastId) {
                            // Compatibility: if toast has no toastId defined, and if call to display
                            // hasn't either, then the request is for us
                            if (toastId == '*' || (isUndefinedOrNull(scope.config.toastId) && isUndefinedOrNull(toastId)) || (!isUndefinedOrNull(scope.config.toastId) && !isUndefinedOrNull(toastId) && scope.config.toastId == toastId)) {
                                removeAllToasts(toastId);
                            }
                        };

                        toastEventRegistry.setup();

                        toastEventRegistry.subscribeToNewToastEvent(scope._onNewToast);
                        toastEventRegistry.subscribeToClearToastsEvent(scope._onClearToasts);
                    },
                    controller: [
                        '$scope', '$element', '$attrs', function($scope, $element, $attrs) {
                            // Called on mouseover
                            $scope.stopTimer = function(toast) {
                                if ($scope.config.mouseoverTimer === true) {
                                    if (toast.timeoutPromise) {
                                        $interval.cancel(toast.timeoutPromise);
                                        toast.timeoutPromise = null;
                                    }
                                }
                            };

                            // Called on mouseout
                            $scope.restartTimer = function(toast) {
                                if ($scope.config.mouseoverTimer === true) {
                                    if (!toast.timeoutPromise) {
                                        $scope.configureTimer(toast);
                                    }
                                } else if (toast.timeoutPromise === null) {
                                    $scope.removeToast(toast.toastId);
                                }
                            };

                            $scope.click = function(event, toast, isCloseButton) {
                                event.stopPropagation();

                                var tapToDismiss = typeof toast.tapToDismiss === "boolean" 
                                                        ? toast.tapToDismiss 
                                                        : $scope.config.tap;
                                if (tapToDismiss === true || (toast.showCloseButton === true && isCloseButton === true)) {
                                    var removeToast = true;
                                    if (toast.clickHandler) {
                                        if (angular.isFunction(toast.clickHandler)) {
                                            removeToast = toast.clickHandler(toast, isCloseButton);
                                        } else if (angular.isFunction($scope.$parent.$eval(toast.clickHandler))) {
                                            removeToast = $scope.$parent.$eval(toast.clickHandler)(toast, isCloseButton);
                                        } else {
                                            console.log("TOAST-NOTE: Your click handler is not inside a parent scope of toast-container.");
                                        }
                                    }
                                    if (removeToast) {
                                        $scope.removeToast(toast.toastId);
                                    }
                                }
                            };
                        }],
                    templateUrl: 'angularjs-toast/toast.html'
                };
            }]
        );
})(window, document);
