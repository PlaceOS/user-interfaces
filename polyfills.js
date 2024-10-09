"use strict";
(self["webpackChunkoutlook_addin"] = self["webpackChunkoutlook_addin"] || []).push([["polyfills"],{

/***/ 42440:
/*!*********************************************!*\
  !*** ./apps/outlook-addin/src/polyfills.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
__webpack_require__(/*! @angular/localize/init */ 1643);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes recent versions of Safari, Chrome (including
 * Opera), Edge on the desktop, and iOS and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
__webpack_require__(/*! zone.js */ 14426); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/***/ }),

/***/ 14426:
/*!**************************************************!*\
  !*** ./node_modules/zone.js/bundles/zone.umd.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
/**
 * @license Angular v<unknown>
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */
(function (factory) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function () {
  'use strict';

  var global = globalThis;
  // __Zone_symbol_prefix global can be used to override the default zone
  // symbol prefix with a custom one if needed.
  function __symbol__(name) {
    var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
    return symbolPrefix + name;
  }
  function initZone() {
    var _a;
    var performance = global['performance'];
    function mark(name) {
      performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
      performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var ZoneImpl = /** @class */function () {
      function ZoneImpl(parent, zoneSpec) {
        this._parent = parent;
        this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
        this._properties = zoneSpec && zoneSpec.properties || {};
        this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
      }
      ZoneImpl.assertZonePatched = function () {
        if (global['Promise'] !== patches['ZoneAwarePromise']) {
          throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
        }
      };
      Object.defineProperty(ZoneImpl, "root", {
        get: function get() {
          var zone = _a.current;
          while (zone.parent) {
            zone = zone.parent;
          }
          return zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ZoneImpl, "current", {
        get: function get() {
          return _currentZoneFrame.zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ZoneImpl, "currentTask", {
        get: function get() {
          return _currentTask;
        },
        enumerable: false,
        configurable: true
      });
      // tslint:disable-next-line:require-internal-with-underscore
      ZoneImpl.__load_patch = function (name, fn, ignoreDuplicate) {
        if (ignoreDuplicate === void 0) {
          ignoreDuplicate = false;
        }
        if (patches.hasOwnProperty(name)) {
          // `checkDuplicate` option is defined from global variable
          // so it works for all modules.
          // `ignoreDuplicate` can work for the specified module
          var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
          if (!ignoreDuplicate && checkDuplicate) {
            throw Error('Already loaded patch: ' + name);
          }
        } else if (!global['__Zone_disable_' + name]) {
          var perfName = 'Zone:' + name;
          mark(perfName);
          patches[name] = fn(global, _a, _api);
          performanceMeasure(perfName, perfName);
        }
      };
      Object.defineProperty(ZoneImpl.prototype, "parent", {
        get: function get() {
          return this._parent;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ZoneImpl.prototype, "name", {
        get: function get() {
          return this._name;
        },
        enumerable: false,
        configurable: true
      });
      ZoneImpl.prototype.get = function (key) {
        var zone = this.getZoneWith(key);
        if (zone) return zone._properties[key];
      };
      ZoneImpl.prototype.getZoneWith = function (key) {
        var current = this;
        while (current) {
          if (current._properties.hasOwnProperty(key)) {
            return current;
          }
          current = current._parent;
        }
        return null;
      };
      ZoneImpl.prototype.fork = function (zoneSpec) {
        if (!zoneSpec) throw new Error('ZoneSpec required!');
        return this._zoneDelegate.fork(this, zoneSpec);
      };
      ZoneImpl.prototype.wrap = function (callback, source) {
        if (typeof callback !== 'function') {
          throw new Error('Expecting function got: ' + callback);
        }
        var _callback = this._zoneDelegate.intercept(this, callback, source);
        var zone = this;
        return function () {
          return zone.runGuarded(_callback, this, arguments, source);
        };
      };
      ZoneImpl.prototype.run = function (callback, applyThis, applyArgs, source) {
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };
      ZoneImpl.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
        if (applyThis === void 0) {
          applyThis = null;
        }
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };
        try {
          try {
            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };
      ZoneImpl.prototype.runTask = function (task, applyThis, applyArgs) {
        if (task.zone != this) {
          throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
        }
        var zoneTask = task;
        // https://github.com/angular/zone.js/issues/778, sometimes eventTask
        // will run in notScheduled(canceled) state, we should not try to
        // run such kind of task but just return
        var type = task.type,
          _b = task.data,
          _c = _b === void 0 ? {} : _b,
          _d = _c.isPeriodic,
          isPeriodic = _d === void 0 ? false : _d,
          _e = _c.isRefreshable,
          isRefreshable = _e === void 0 ? false : _e;
        if (task.state === notScheduled && (type === eventTask || type === macroTask)) {
          return;
        }
        var reEntryGuard = task.state != running;
        reEntryGuard && zoneTask._transitionTo(running, scheduled);
        var previousTask = _currentTask;
        _currentTask = zoneTask;
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };
        try {
          if (type == macroTask && task.data && !isPeriodic && !isRefreshable) {
            task.cancelFn = undefined;
          }
          try {
            return this._zoneDelegate.invokeTask(this, zoneTask, applyThis, applyArgs);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          // if the task's state is notScheduled or unknown, then it has already been cancelled
          // we should not reset the state to scheduled
          var state = task.state;
          if (state !== notScheduled && state !== unknown) {
            if (type == eventTask || isPeriodic || isRefreshable && state === scheduling) {
              reEntryGuard && zoneTask._transitionTo(scheduled, running, scheduling);
            } else {
              var zoneDelegates = zoneTask._zoneDelegates;
              this._updateTaskCount(zoneTask, -1);
              reEntryGuard && zoneTask._transitionTo(notScheduled, running, notScheduled);
              if (isRefreshable) {
                zoneTask._zoneDelegates = zoneDelegates;
              }
            }
          }
          _currentZoneFrame = _currentZoneFrame.parent;
          _currentTask = previousTask;
        }
      };
      ZoneImpl.prototype.scheduleTask = function (task) {
        if (task.zone && task.zone !== this) {
          // check if the task was rescheduled, the newZone
          // should not be the children of the original zone
          var newZone = this;
          while (newZone) {
            if (newZone === task.zone) {
              throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
            }
            newZone = newZone.parent;
          }
        }
        task._transitionTo(scheduling, notScheduled);
        var zoneDelegates = [];
        task._zoneDelegates = zoneDelegates;
        task._zone = this;
        try {
          task = this._zoneDelegate.scheduleTask(this, task);
        } catch (err) {
          // should set task's state to unknown when scheduleTask throw error
          // because the err may from reschedule, so the fromState maybe notScheduled
          task._transitionTo(unknown, scheduling, notScheduled);
          // TODO: @JiaLiPassion, should we check the result from handleError?
          this._zoneDelegate.handleError(this, err);
          throw err;
        }
        if (task._zoneDelegates === zoneDelegates) {
          // we have to check because internally the delegate can reschedule the task.
          this._updateTaskCount(task, 1);
        }
        if (task.state == scheduling) {
          task._transitionTo(scheduled, scheduling);
        }
        return task;
      };
      ZoneImpl.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
      };
      ZoneImpl.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
      };
      ZoneImpl.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
      };
      ZoneImpl.prototype.cancelTask = function (task) {
        if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
        if (task.state !== scheduled && task.state !== running) {
          return;
        }
        task._transitionTo(canceling, scheduled, running);
        try {
          this._zoneDelegate.cancelTask(this, task);
        } catch (err) {
          // if error occurs when cancelTask, transit the state to unknown
          task._transitionTo(unknown, canceling);
          this._zoneDelegate.handleError(this, err);
          throw err;
        }
        this._updateTaskCount(task, -1);
        task._transitionTo(notScheduled, canceling);
        task.runCount = -1;
        return task;
      };
      ZoneImpl.prototype._updateTaskCount = function (task, count) {
        var zoneDelegates = task._zoneDelegates;
        if (count == -1) {
          task._zoneDelegates = null;
        }
        for (var i = 0; i < zoneDelegates.length; i++) {
          zoneDelegates[i]._updateTaskCount(task.type, count);
        }
      };
      return ZoneImpl;
    }();
    _a = ZoneImpl;
    // tslint:disable-next-line:require-internal-with-underscore
    (function () {
      _a.__symbol__ = __symbol__;
    })();
    var DELEGATE_ZS = {
      name: '',
      onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
        return delegate.hasTask(target, hasTaskState);
      },
      onScheduleTask: function onScheduleTask(delegate, _, target, task) {
        return delegate.scheduleTask(target, task);
      },
      onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
        return delegate.invokeTask(target, task, applyThis, applyArgs);
      },
      onCancelTask: function onCancelTask(delegate, _, target, task) {
        return delegate.cancelTask(target, task);
      }
    };
    var _ZoneDelegate = /** @class */function () {
      function _ZoneDelegate(zone, parentDelegate, zoneSpec) {
        this._taskCounts = {
          'microTask': 0,
          'macroTask': 0,
          'eventTask': 0
        };
        this._zone = zone;
        this._parentDelegate = parentDelegate;
        this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
        this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
        this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this._zone : parentDelegate._forkCurrZone);
        this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
        this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
        this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this._zone : parentDelegate._interceptCurrZone);
        this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
        this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
        this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this._zone : parentDelegate._invokeCurrZone);
        this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
        this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
        this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this._zone : parentDelegate._handleErrorCurrZone);
        this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
        this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
        this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this._zone : parentDelegate._scheduleTaskCurrZone);
        this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
        this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
        this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this._zone : parentDelegate._invokeTaskCurrZone);
        this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
        this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
        this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this._zone : parentDelegate._cancelTaskCurrZone);
        this._hasTaskZS = null;
        this._hasTaskDlgt = null;
        this._hasTaskDlgtOwner = null;
        this._hasTaskCurrZone = null;
        var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
        var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
        if (zoneSpecHasTask || parentHasTask) {
          // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
          // a case all task related interceptors must go through this ZD. We can't short circuit it.
          this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
          this._hasTaskDlgt = parentDelegate;
          this._hasTaskDlgtOwner = this;
          this._hasTaskCurrZone = this._zone;
          if (!zoneSpec.onScheduleTask) {
            this._scheduleTaskZS = DELEGATE_ZS;
            this._scheduleTaskDlgt = parentDelegate;
            this._scheduleTaskCurrZone = this._zone;
          }
          if (!zoneSpec.onInvokeTask) {
            this._invokeTaskZS = DELEGATE_ZS;
            this._invokeTaskDlgt = parentDelegate;
            this._invokeTaskCurrZone = this._zone;
          }
          if (!zoneSpec.onCancelTask) {
            this._cancelTaskZS = DELEGATE_ZS;
            this._cancelTaskDlgt = parentDelegate;
            this._cancelTaskCurrZone = this._zone;
          }
        }
      }
      Object.defineProperty(_ZoneDelegate.prototype, "zone", {
        get: function get() {
          return this._zone;
        },
        enumerable: false,
        configurable: true
      });
      _ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new ZoneImpl(targetZone, zoneSpec);
      };
      _ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
      };
      _ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
      };
      _ZoneDelegate.prototype.handleError = function (targetZone, error) {
        return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
      };
      _ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
        var returnTask = task;
        if (this._scheduleTaskZS) {
          if (this._hasTaskZS) {
            returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
          }
          returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
          if (!returnTask) returnTask = task;
        } else {
          if (task.scheduleFn) {
            task.scheduleFn(task);
          } else if (task.type == microTask) {
            scheduleMicroTask(task);
          } else {
            throw new Error('Task is missing scheduleFn.');
          }
        }
        return returnTask;
      };
      _ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
      };
      _ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
        var value;
        if (this._cancelTaskZS) {
          value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
        } else {
          if (!task.cancelFn) {
            throw Error('Task is not cancelable');
          }
          value = task.cancelFn(task);
        }
        return value;
      };
      _ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
        // hasTask should not throw error so other ZoneDelegate
        // can still trigger hasTask callback
        try {
          this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
        } catch (err) {
          this.handleError(targetZone, err);
        }
      };
      // tslint:disable-next-line:require-internal-with-underscore
      _ZoneDelegate.prototype._updateTaskCount = function (type, count) {
        var counts = this._taskCounts;
        var prev = counts[type];
        var next = counts[type] = prev + count;
        if (next < 0) {
          throw new Error('More tasks executed then were scheduled.');
        }
        if (prev == 0 || next == 0) {
          var isEmpty = {
            microTask: counts['microTask'] > 0,
            macroTask: counts['macroTask'] > 0,
            eventTask: counts['eventTask'] > 0,
            change: type
          };
          this.hasTask(this._zone, isEmpty);
        }
      };
      return _ZoneDelegate;
    }();
    var ZoneTask = /** @class */function () {
      function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
        // tslint:disable-next-line:require-internal-with-underscore
        this._zone = null;
        this.runCount = 0;
        // tslint:disable-next-line:require-internal-with-underscore
        this._zoneDelegates = null;
        // tslint:disable-next-line:require-internal-with-underscore
        this._state = 'notScheduled';
        this.type = type;
        this.source = source;
        this.data = options;
        this.scheduleFn = scheduleFn;
        this.cancelFn = cancelFn;
        if (!callback) {
          throw new Error('callback is not defined');
        }
        this.callback = callback;
        var self = this;
        // TODO: @JiaLiPassion options should have interface
        if (type === eventTask && options && options.useG) {
          this.invoke = ZoneTask.invokeTask;
        } else {
          this.invoke = function () {
            return ZoneTask.invokeTask.call(global, self, this, arguments);
          };
        }
      }
      ZoneTask.invokeTask = function (task, target, args) {
        if (!task) {
          task = this;
        }
        _numberOfNestedTaskFrames++;
        try {
          task.runCount++;
          return task.zone.runTask(task, target, args);
        } finally {
          if (_numberOfNestedTaskFrames == 1) {
            drainMicroTaskQueue();
          }
          _numberOfNestedTaskFrames--;
        }
      };
      Object.defineProperty(ZoneTask.prototype, "zone", {
        get: function get() {
          return this._zone;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ZoneTask.prototype, "state", {
        get: function get() {
          return this._state;
        },
        enumerable: false,
        configurable: true
      });
      ZoneTask.prototype.cancelScheduleRequest = function () {
        this._transitionTo(notScheduled, scheduling);
      };
      // tslint:disable-next-line:require-internal-with-underscore
      ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
        if (this._state === fromState1 || this._state === fromState2) {
          this._state = toState;
          if (toState == notScheduled) {
            this._zoneDelegates = null;
          }
        } else {
          throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? " or '" + fromState2 + "'" : '', ", was '").concat(this._state, "'."));
        }
      };
      ZoneTask.prototype.toString = function () {
        if (this.data && typeof this.data.handleId !== 'undefined') {
          return this.data.handleId.toString();
        } else {
          return Object.prototype.toString.call(this);
        }
      };
      // add toJSON method to prevent cyclic error when
      // call JSON.stringify(zoneTask)
      ZoneTask.prototype.toJSON = function () {
        return {
          type: this.type,
          state: this.state,
          source: this.source,
          zone: this.zone.name,
          runCount: this.runCount
        };
      };
      return ZoneTask;
    }();
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function nativeScheduleMicroTask(func) {
      if (!nativeMicroTaskQueuePromise) {
        if (global[symbolPromise]) {
          nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
        }
      }
      if (nativeMicroTaskQueuePromise) {
        var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
        if (!nativeThen) {
          // native Promise is not patchable, we need to use `then` directly
          // issue 1078
          nativeThen = nativeMicroTaskQueuePromise['then'];
        }
        nativeThen.call(nativeMicroTaskQueuePromise, func);
      } else {
        global[symbolSetTimeout](func, 0);
      }
    }
    function scheduleMicroTask(task) {
      // if we are not running in any task, and there has not been anything scheduled
      // we must bootstrap the initial task creation by manually scheduling the drain
      if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
        // We are not running in Task, so we need to kickstart the microtask queue.
        nativeScheduleMicroTask(drainMicroTaskQueue);
      }
      task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
      if (!_isDrainingMicrotaskQueue) {
        _isDrainingMicrotaskQueue = true;
        while (_microTaskQueue.length) {
          var queue = _microTaskQueue;
          _microTaskQueue = [];
          for (var i = 0; i < queue.length; i++) {
            var task = queue[i];
            try {
              task.zone.runTask(task, null, null);
            } catch (error) {
              _api.onUnhandledError(error);
            }
          }
        }
        _api.microtaskDrainDone();
        _isDrainingMicrotaskQueue = false;
      }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = {
      name: 'NO ZONE'
    };
    var notScheduled = 'notScheduled',
      scheduling = 'scheduling',
      scheduled = 'scheduled',
      running = 'running',
      canceling = 'canceling',
      unknown = 'unknown';
    var microTask = 'microTask',
      macroTask = 'macroTask',
      eventTask = 'eventTask';
    var patches = {};
    var _api = {
      symbol: __symbol__,
      currentZoneFrame: function currentZoneFrame() {
        return _currentZoneFrame;
      },
      onUnhandledError: noop,
      microtaskDrainDone: noop,
      scheduleMicroTask: scheduleMicroTask,
      showUncaughtError: function showUncaughtError() {
        return !ZoneImpl[__symbol__('ignoreConsoleErrorUncaughtError')];
      },
      patchEventTarget: function patchEventTarget() {
        return [];
      },
      patchOnProperties: noop,
      patchMethod: function patchMethod() {
        return noop;
      },
      bindArguments: function bindArguments() {
        return [];
      },
      patchThen: function patchThen() {
        return noop;
      },
      patchMacroTask: function patchMacroTask() {
        return noop;
      },
      patchEventPrototype: function patchEventPrototype() {
        return noop;
      },
      isIEOrEdge: function isIEOrEdge() {
        return false;
      },
      getGlobalObjects: function getGlobalObjects() {
        return undefined;
      },
      ObjectDefineProperty: function ObjectDefineProperty() {
        return noop;
      },
      ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
        return undefined;
      },
      ObjectCreate: function ObjectCreate() {
        return undefined;
      },
      ArraySlice: function ArraySlice() {
        return [];
      },
      patchClass: function patchClass() {
        return noop;
      },
      wrapWithCurrentZone: function wrapWithCurrentZone() {
        return noop;
      },
      filterProperties: function filterProperties() {
        return [];
      },
      attachOriginToPatched: function attachOriginToPatched() {
        return noop;
      },
      _redefineProperty: function _redefineProperty() {
        return noop;
      },
      patchCallbacks: function patchCallbacks() {
        return noop;
      },
      nativeScheduleMicroTask: nativeScheduleMicroTask
    };
    var _currentZoneFrame = {
      parent: null,
      zone: new ZoneImpl(null, null)
    };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() {}
    performanceMeasure('Zone', 'Zone');
    return ZoneImpl;
  }
  function loadZone() {
    var _a;
    // if global['Zone'] already exists (maybe zone.js was already loaded or
    // some other lib also registered a global object named Zone), we may need
    // to throw an error, but sometimes user may not want this error.
    // For example,
    // we have two web pages, page1 includes zone.js, page2 doesn't.
    // and the 1st time user load page1 and page2, everything work fine,
    // but when user load page2 again, error occurs because global['Zone'] already exists.
    // so we add a flag to let user choose whether to throw this error or not.
    // By default, if existing Zone is from zone.js, we will not throw the error.
    var global = globalThis;
    var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
    if (global['Zone'] && (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function')) {
      throw new Error('Zone already loaded.');
    }
    // Initialize global `Zone` constant.
    (_a = global['Zone']) !== null && _a !== void 0 ? _a : global['Zone'] = initZone();
    return global['Zone'];
  }
  /**
   * Suppress closure compiler errors about unknown 'Zone' variable
   * @fileoverview
   * @suppress {undefinedVars,globalThis,missingRequire}
   */
  // issue #989, to reduce bundle size, use short name
  /** Object.getOwnPropertyDescriptor */
  var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  /** Object.defineProperty */
  var ObjectDefineProperty = Object.defineProperty;
  /** Object.getPrototypeOf */
  var ObjectGetPrototypeOf = Object.getPrototypeOf;
  /** Object.create */
  var ObjectCreate = Object.create;
  /** Array.prototype.slice */
  var ArraySlice = Array.prototype.slice;
  /** addEventListener string const */
  var ADD_EVENT_LISTENER_STR = 'addEventListener';
  /** removeEventListener string const */
  var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
  /** zoneSymbol addEventListener */
  var ZONE_SYMBOL_ADD_EVENT_LISTENER = __symbol__(ADD_EVENT_LISTENER_STR);
  /** zoneSymbol removeEventListener */
  var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = __symbol__(REMOVE_EVENT_LISTENER_STR);
  /** true string const */
  var TRUE_STR = 'true';
  /** false string const */
  var FALSE_STR = 'false';
  /** Zone symbol prefix string const. */
  var ZONE_SYMBOL_PREFIX = __symbol__('');
  function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
  }
  function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
  }
  var zoneSymbol = __symbol__;
  var isWindowExists = typeof window !== 'undefined';
  var internalWindow = isWindowExists ? window : undefined;
  var _global = isWindowExists && internalWindow || globalThis;
  var REMOVE_ATTRIBUTE = 'removeAttribute';
  function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
      if (typeof args[i] === 'function') {
        args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
      }
    }
    return args;
  }
  function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function _loop_1(i) {
      var name_1 = fnNames[i];
      var delegate = prototype[name_1];
      if (delegate) {
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
        if (!isPropertyWritable(prototypeDesc)) {
          return "continue";
        }
        prototype[name_1] = function (delegate) {
          var patched = function patched() {
            return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
          };
          attachOriginToPatched(patched, delegate);
          return patched;
        }(delegate);
      }
    };
    for (var i = 0; i < fnNames.length; i++) {
      _loop_1(i);
    }
  }
  function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
      return true;
    }
    if (propertyDesc.writable === false) {
      return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
  }
  var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
  // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.
  var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && _global.process.toString() === '[object process]';
  var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
  // we are in electron of nw, so we are both browser and nodejs
  // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.
  var isMix = typeof _global.process !== 'undefined' && _global.process.toString() === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
  var zoneSymbolEventNames$1 = {};
  var enableBeforeunloadSymbol = zoneSymbol('enable_beforeunload');
  var wrapFn = function wrapFn(event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
      return;
    }
    var eventNameSymbol = zoneSymbolEventNames$1[event.type];
    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
      // window.onerror have different signature
      // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
      // and onerror callback will prevent default when callback return true
      var errorEvent = event;
      result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
      if (result === true) {
        event.preventDefault();
      }
    } else {
      result = listener && listener.apply(this, arguments);
      if (
      // https://github.com/angular/angular/issues/47579
      // https://www.w3.org/TR/2011/WD-html5-20110525/history.html#beforeunloadevent
      // This is the only specific case we should check for. The spec defines that the
      // `returnValue` attribute represents the message to show the user. When the event
      // is created, this attribute must be set to the empty string.
      event.type === 'beforeunload' &&
      // To prevent any breaking changes resulting from this change, given that
      // it was already causing a significant number of failures in G3, we have hidden
      // that behavior behind a global configuration flag. Consumers can enable this
      // flag explicitly if they want the `beforeunload` event to be handled as defined
      // in the specification.
      _global[enableBeforeunloadSymbol] &&
      // The IDL event definition is `attribute DOMString returnValue`, so we check whether
      // `typeof result` is a string.
      typeof result === 'string') {
        event.returnValue = result;
      } else if (result != undefined && !result) {
        event.preventDefault();
      }
    }
    return result;
  };
  function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
      // when patch window object, use prototype to check prop exist or not
      var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
      if (prototypeDesc) {
        desc = {
          enumerable: true,
          configurable: true
        };
      }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
      return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
      return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // slice(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.slice(2);
    var eventNameSymbol = zoneSymbolEventNames$1[eventName];
    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;
      if (!target && obj === _global) {
        target = _global;
      }
      if (!target) {
        return;
      }
      var previousValue = target[eventNameSymbol];
      if (typeof previousValue === 'function') {
        target.removeEventListener(eventName, wrapFn);
      }
      // issue #978, when onload handler was added before loading zone.js
      // we should remove it with originalDescSet
      originalDescSet && originalDescSet.call(target, null);
      target[eventNameSymbol] = newValue;
      if (typeof newValue === 'function') {
        target.addEventListener(eventName, wrapFn, false);
      }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;
      if (!target && obj === _global) {
        target = _global;
      }
      if (!target) {
        return null;
      }
      var listener = target[eventNameSymbol];
      if (listener) {
        return listener;
      } else if (originalDescGet) {
        // result will be null when use inline event attribute,
        // such as <button onclick="func();">OK</button>
        // because the onclick function is internal raw uncompiled handler
        // the onclick will be evaluated when first time event was triggered or
        // the property is accessed, https://github.com/angular/zone.js/issues/525
        // so we should use original native get to retrieve the handler
        var value = originalDescGet.call(this);
        if (value) {
          desc.set.call(this, value);
          if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
            target.removeAttribute(prop);
          }
          return value;
        }
      }
      return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
  }
  function patchOnProperties(obj, properties, prototype) {
    if (properties) {
      for (var i = 0; i < properties.length; i++) {
        patchProperty(obj, 'on' + properties[i], prototype);
      }
    } else {
      var onProperties = [];
      for (var prop in obj) {
        if (prop.slice(0, 2) == 'on') {
          onProperties.push(prop);
        }
      }
      for (var j = 0; j < onProperties.length; j++) {
        patchProperty(obj, onProperties[j], prototype);
      }
    }
  }
  var originalInstanceKey = zoneSymbol('originalInstance');
  // wrap some native API on `window`
  function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass) return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
      var a = bindArguments(arguments, className);
      switch (a.length) {
        case 0:
          this[originalInstanceKey] = new OriginalClass();
          break;
        case 1:
          this[originalInstanceKey] = new OriginalClass(a[0]);
          break;
        case 2:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
          break;
        case 3:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
          break;
        case 4:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
          break;
        default:
          throw new Error('Arg list too long.');
      }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () {});
    var prop;
    for (prop in instance) {
      // https://bugs.webkit.org/show_bug.cgi?id=44721
      if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;
      (function (prop) {
        if (typeof instance[prop] === 'function') {
          _global[className].prototype[prop] = function () {
            return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
          };
        } else {
          ObjectDefineProperty(_global[className].prototype, prop, {
            set: function set(fn) {
              if (typeof fn === 'function') {
                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                // keep callback in wrapped function so we can
                // use it in Function.prototype.toString to return
                // the native one.
                attachOriginToPatched(this[originalInstanceKey][prop], fn);
              } else {
                this[originalInstanceKey][prop] = fn;
              }
            },
            get: function get() {
              return this[originalInstanceKey][prop];
            }
          });
        }
      })(prop);
    }
    for (prop in OriginalClass) {
      if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
        _global[className][prop] = OriginalClass[prop];
      }
    }
  }
  function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
      delegate = proto[delegateName] = proto[name];
      // check whether proto[name] is writable
      // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
      var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
      if (isPropertyWritable(desc)) {
        var patchDelegate_1 = patchFn(delegate, delegateName, name);
        proto[name] = function () {
          return patchDelegate_1(this, arguments);
        };
        attachOriginToPatched(proto[name], delegate);
      }
    }
    return delegate;
  }
  // TODO: @JiaLiPassion, support cancel task later if necessary
  function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
      var data = task.data;
      data.args[data.cbIdx] = function () {
        task.invoke.apply(this, arguments);
      };
      setNative.apply(data.target, data.args);
      return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) {
      return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
          return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        } else {
          // cause an error by calling it directly.
          return delegate.apply(self, args);
        }
      };
    });
  }
  function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
  }
  var isDetectedIEOrEdge = false;
  var ieOrEdge = false;
  function isIE() {
    try {
      var ua = internalWindow.navigator.userAgent;
      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
        return true;
      }
    } catch (error) {}
    return false;
  }
  function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
      return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
      var ua = internalWindow.navigator.userAgent;
      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
        ieOrEdge = true;
      }
    } catch (error) {}
    return ieOrEdge;
  }
  function isFunction(value) {
    return typeof value === 'function';
  }
  function isNumber(value) {
    return typeof value === 'number';
  }
  /**
   * @fileoverview
   * @suppress {missingRequire}
   */
  // Note that passive event listeners are now supported by most modern browsers,
  // including Chrome, Firefox, Safari, and Edge. There's a pending change that
  // would remove support for legacy browsers by zone.js. Removing `passiveSupported`
  // from the codebase will reduce the final code size for existing apps that still use zone.js.
  var passiveSupported = false;
  if (typeof window !== 'undefined') {
    try {
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passiveSupported = true;
        }
      });
      // Note: We pass the `options` object as the event handler too. This is not compatible with the
      // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
      // without an actual handler.
      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, options);
    } catch (err) {
      passiveSupported = false;
    }
  }
  // an identifier to tell ZoneTask do not create a new invoke closure
  var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
  };
  var zoneSymbolEventNames = {};
  var globalSources = {};
  var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
  var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
  function prepareEventNames(eventName, eventNameToString) {
    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }
  function patchEventTarget(_global, api, apis, patchOptions) {
    var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function invokeTask(task, target, event) {
      // for better performance, check isRemoved which is set
      // by removeEventListener
      if (task.isRemoved) {
        return;
      }
      var delegate = task.callback;
      if (typeof delegate === 'object' && delegate.handleEvent) {
        // create the bind version of handleEvent when invoke
        task.callback = function (event) {
          return delegate.handleEvent(event);
        };
        task.originalDelegate = delegate;
      }
      // invoke static task.invoke
      // need to try/catch error here, otherwise, the error in one event listener
      // will break the executions of the other event listeners. Also error will
      // not remove the event listener when `once` options is true.
      var error;
      try {
        task.invoke(task, target, [event]);
      } catch (err) {
        error = err;
      }
      var options = task.options;
      if (options && typeof options === 'object' && options.once) {
        // if options.once is true, after invoke once remove listener here
        // only browser need to do this, nodejs eventEmitter will cal removeListener
        // inside EventEmitter.once
        var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
        target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
      }
      return error;
    };
    function globalCallback(context, event, isCapture) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;
      if (!event) {
        return;
      }
      // event.target is needed for Samsung TV and SourceBuffer
      // || global is needed https://github.com/angular/zone.js/issues/190
      var target = context || event.target || _global;
      var tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
      if (tasks) {
        var errors = [];
        // invoke all tasks which attached to current target with given event.type and capture = false
        // for performance concern, if task.length === 1, just invoke
        if (tasks.length === 1) {
          var err = invokeTask(tasks[0], target, event);
          err && errors.push(err);
        } else {
          // https://github.com/angular/zone.js/issues/836
          // copy the tasks array before invoke, to avoid
          // the callback will remove itself or other listener
          var copyTasks = tasks.slice();
          for (var i = 0; i < copyTasks.length; i++) {
            if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
              break;
            }
            var err = invokeTask(copyTasks[i], target, event);
            err && errors.push(err);
          }
        }
        // Since there is only one error, we don't need to schedule microTask
        // to throw the error.
        if (errors.length === 1) {
          throw errors[0];
        } else {
          var _loop_2 = function _loop_2(i) {
            var err = errors[i];
            api.nativeScheduleMicroTask(function () {
              throw err;
            });
          };
          for (var i = 0; i < errors.length; i++) {
            _loop_2(i);
          }
        }
      }
    }
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
      return globalCallback(this, event, false);
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
      return globalCallback(this, event, true);
    };
    function patchEventTargetMethods(obj, patchOptions) {
      if (!obj) {
        return false;
      }
      var useGlobalCallback = true;
      if (patchOptions && patchOptions.useG !== undefined) {
        useGlobalCallback = patchOptions.useG;
      }
      var validateHandler = patchOptions && patchOptions.vh;
      var checkDuplicate = true;
      if (patchOptions && patchOptions.chkDup !== undefined) {
        checkDuplicate = patchOptions.chkDup;
      }
      var returnTarget = false;
      if (patchOptions && patchOptions.rt !== undefined) {
        returnTarget = patchOptions.rt;
      }
      var proto = obj;
      while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
        proto = ObjectGetPrototypeOf(proto);
      }
      if (!proto && obj[ADD_EVENT_LISTENER]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = obj;
      }
      if (!proto) {
        return false;
      }
      if (proto[zoneSymbolAddEventListener]) {
        return false;
      }
      var eventNameToString = patchOptions && patchOptions.eventNameToString;
      // We use a shared global `taskData` to pass data for `scheduleEventTask`,
      // eliminating the need to create a new object solely for passing data.
      // WARNING: This object has a static lifetime, meaning it is not created
      // each time `addEventListener` is called. It is instantiated only once
      // and captured by reference inside the `addEventListener` and
      // `removeEventListener` functions. Do not add any new properties to this
      // object, as doing so would necessitate maintaining the information
      // between `addEventListener` calls.
      var taskData = {};
      var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
      var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
      var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
      var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
      var nativePrependEventListener;
      if (patchOptions && patchOptions.prepend) {
        nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
      }
      /**
       * This util function will build an option object with passive option
       * to handle all possible input from the user.
       */
      function buildEventListenerOptions(options, passive) {
        if (!passiveSupported && typeof options === 'object' && options) {
          // doesn't support passive but user want to pass an object as options.
          // this will not work on some old browser, so we just pass a boolean
          // as useCapture parameter
          return !!options.capture;
        }
        if (!passiveSupported || !passive) {
          return options;
        }
        if (typeof options === 'boolean') {
          return {
            capture: options,
            passive: true
          };
        }
        if (!options) {
          return {
            passive: true
          };
        }
        if (typeof options === 'object' && options.passive !== false) {
          return __assign(__assign({}, options), {
            passive: true
          });
        }
        return options;
      }
      var customScheduleGlobal = function customScheduleGlobal(task) {
        // if there is already a task for the eventName + capture,
        // just return, because we use the shared globalZoneAwareCallback here.
        if (taskData.isExisting) {
          return;
        }
        return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
      };
      /**
       * In the context of events and listeners, this function will be
       * called at the end by `cancelTask`, which, in turn, calls `task.cancelFn`.
       * Cancelling a task is primarily used to remove event listeners from
       * the task target.
       */
      var customCancelGlobal = function customCancelGlobal(task) {
        // if task is not marked as isRemoved, this call is directly
        // from Zone.prototype.cancelTask, we should remove the task
        // from tasksList of target first
        if (!task.isRemoved) {
          var symbolEventNames = zoneSymbolEventNames[task.eventName];
          var symbolEventName = void 0;
          if (symbolEventNames) {
            symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
          }
          var existingTasks = symbolEventName && task.target[symbolEventName];
          if (existingTasks) {
            for (var i = 0; i < existingTasks.length; i++) {
              var existingTask = existingTasks[i];
              if (existingTask === task) {
                existingTasks.splice(i, 1);
                // set isRemoved to data for faster invokeTask check
                task.isRemoved = true;
                if (task.removeAbortListener) {
                  task.removeAbortListener();
                  task.removeAbortListener = null;
                }
                if (existingTasks.length === 0) {
                  // all tasks for the eventName + capture have gone,
                  // remove globalZoneAwareCallback and remove the task cache from target
                  task.allRemoved = true;
                  task.target[symbolEventName] = null;
                }
                break;
              }
            }
          }
        }
        // if all tasks for the eventName + capture have gone,
        // we will really remove the global event callback,
        // if not, return
        if (!task.allRemoved) {
          return;
        }
        return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
      };
      var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
        return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };
      var customSchedulePrepend = function customSchedulePrepend(task) {
        return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };
      var customCancelNonGlobal = function customCancelNonGlobal(task) {
        return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
      };
      var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
      var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
      var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
        var typeOfDelegate = typeof delegate;
        return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
      };
      var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
      var unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];
      var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
      function copyEventListenerOptions(options) {
        if (typeof options === 'object' && options !== null) {
          // We need to destructure the target `options` object since it may
          // be frozen or sealed (possibly provided implicitly by a third-party
          // library), or its properties may be readonly.
          var newOptions = __assign({}, options);
          // The `signal` option was recently introduced, which caused regressions in
          // third-party scenarios where `AbortController` was directly provided to
          // `addEventListener` as options. For instance, in cases like
          // `document.addEventListener('keydown', callback, abortControllerInstance)`,
          // which is valid because `AbortController` includes a `signal` getter, spreading
          // `{...options}` wouldn't copy the `signal`. Additionally, using `Object.create`
          // isn't feasible since `AbortController` is a built-in object type, and attempting
          // to create a new object directly with it as the prototype might result in
          // unexpected behavior.
          if (options.signal) {
            newOptions.signal = options.signal;
          }
          return newOptions;
        }
        return options;
      }
      var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
        if (returnTarget === void 0) {
          returnTarget = false;
        }
        if (prepend === void 0) {
          prepend = false;
        }
        return function () {
          var target = this || _global;
          var eventName = arguments[0];
          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }
          var delegate = arguments[1];
          if (!delegate) {
            return nativeListener.apply(this, arguments);
          }
          if (isNode && eventName === 'uncaughtException') {
            // don't patch uncaughtException of nodejs to prevent endless loop
            return nativeListener.apply(this, arguments);
          }
          // don't create the bind delegate function for handleEvent
          // case here to improve addEventListener performance
          // we will create the bind delegate when invoke
          var isHandleEvent = false;
          if (typeof delegate !== 'function') {
            if (!delegate.handleEvent) {
              return nativeListener.apply(this, arguments);
            }
            isHandleEvent = true;
          }
          if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
            return;
          }
          var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
          var options = copyEventListenerOptions(buildEventListenerOptions(arguments[2], passive));
          var signal = options === null || options === void 0 ? void 0 : options.signal;
          if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
            // the signal is an aborted one, just return without attaching the event listener.
            return;
          }
          if (unpatchedEvents) {
            // check unpatched list
            for (var i = 0; i < unpatchedEvents.length; i++) {
              if (eventName === unpatchedEvents[i]) {
                if (passive) {
                  return nativeListener.call(target, eventName, delegate, options);
                } else {
                  return nativeListener.apply(this, arguments);
                }
              }
            }
          }
          var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
          var once = options && typeof options === 'object' ? options.once : false;
          var zone = Zone.current;
          var symbolEventNames = zoneSymbolEventNames[eventName];
          if (!symbolEventNames) {
            prepareEventNames(eventName, eventNameToString);
            symbolEventNames = zoneSymbolEventNames[eventName];
          }
          var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
          var existingTasks = target[symbolEventName];
          var isExisting = false;
          if (existingTasks) {
            // already have task registered
            isExisting = true;
            if (checkDuplicate) {
              for (var i = 0; i < existingTasks.length; i++) {
                if (compare(existingTasks[i], delegate)) {
                  // same callback, same capture, same event name, just return
                  return;
                }
              }
            }
          } else {
            existingTasks = target[symbolEventName] = [];
          }
          var source;
          var constructorName = target.constructor['name'];
          var targetSource = globalSources[constructorName];
          if (targetSource) {
            source = targetSource[eventName];
          }
          if (!source) {
            source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
          }
          // In the code below, `options` should no longer be reassigned; instead, it
          // should only be mutated. This is because we pass that object to the native
          // `addEventListener`.
          // It's generally recommended to use the same object reference for options.
          // This ensures consistency and avoids potential issues.
          taskData.options = options;
          if (once) {
            // When using `addEventListener` with the `once` option, we don't pass
            // the `once` option directly to the native `addEventListener` method.
            // Instead, we keep the `once` setting and handle it ourselves.
            taskData.options.once = false;
          }
          taskData.target = target;
          taskData.capture = capture;
          taskData.eventName = eventName;
          taskData.isExisting = isExisting;
          var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
          // keep taskData into data to allow onScheduleEventTask to access the task information
          if (data) {
            data.taskData = taskData;
          }
          if (signal) {
            // When using `addEventListener` with the `signal` option, we don't pass
            // the `signal` option directly to the native `addEventListener` method.
            // Instead, we keep the `signal` setting and handle it ourselves.
            taskData.options.signal = undefined;
          }
          // The `scheduleEventTask` function will ultimately call `customScheduleGlobal`,
          // which in turn calls the native `addEventListener`. This is why `taskData.options`
          // is updated before scheduling the task, as `customScheduleGlobal` uses
          // `taskData.options` to pass it to the native `addEventListener`.
          var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
          if (signal) {
            // after task is scheduled, we need to store the signal back to task.options
            taskData.options.signal = signal;
            // Wrapping `task` in a weak reference would not prevent memory leaks. Weak references are
            // primarily used for preventing strong references cycles. `onAbort` is always reachable
            // as it's an event listener, so its closure retains a strong reference to the `task`.
            var onAbort_1 = function onAbort_1() {
              return task.zone.cancelTask(task);
            };
            nativeListener.call(signal, 'abort', onAbort_1, {
              once: true
            });
            // We need to remove the `abort` listener when the event listener is going to be removed,
            // as it creates a closure that captures `task`. This closure retains a reference to the
            // `task` object even after it goes out of scope, preventing `task` from being garbage
            // collected.
            task.removeAbortListener = function () {
              return signal.removeEventListener('abort', onAbort_1);
            };
          }
          // should clear taskData.target to avoid memory leak
          // issue, https://github.com/angular/angular/issues/20442
          taskData.target = null;
          // need to clear up taskData because it is a global object
          if (data) {
            data.taskData = null;
          }
          // have to save those information to task in case
          // application may call task.zone.cancelTask() directly
          if (once) {
            taskData.options.once = true;
          }
          if (!(!passiveSupported && typeof task.options === 'boolean')) {
            // if not support passive, and we pass an option object
            // to addEventListener, we should save the options to task
            task.options = options;
          }
          task.target = target;
          task.capture = capture;
          task.eventName = eventName;
          if (isHandleEvent) {
            // save original delegate for compare to check duplicate
            task.originalDelegate = delegate;
          }
          if (!prepend) {
            existingTasks.push(task);
          } else {
            existingTasks.unshift(task);
          }
          if (returnTarget) {
            return target;
          }
        };
      };
      proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
      if (nativePrependEventListener) {
        proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
      }
      proto[REMOVE_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        var options = arguments[2];
        var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        var delegate = arguments[1];
        if (!delegate) {
          return nativeRemoveEventListener.apply(this, arguments);
        }
        if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
          return;
        }
        var symbolEventNames = zoneSymbolEventNames[eventName];
        var symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        }
        var existingTasks = symbolEventName && target[symbolEventName];
        // `existingTasks` may not exist if the `addEventListener` was called before
        // it was patched by zone.js. Please refer to the attached issue for
        // clarification, particularly after the `if` condition, before calling
        // the native `removeEventListener`.
        if (existingTasks) {
          for (var i = 0; i < existingTasks.length; i++) {
            var existingTask = existingTasks[i];
            if (compare(existingTask, delegate)) {
              existingTasks.splice(i, 1);
              // set isRemoved to data for faster invokeTask check
              existingTask.isRemoved = true;
              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                existingTask.allRemoved = true;
                target[symbolEventName] = null;
                // in the target, we have an event listener which is added by on_property
                // such as target.onclick = function() {}, so we need to clear this internal
                // property too if all delegates with capture=false were removed
                // https:// github.com/angular/angular/issues/31643
                // https://github.com/angular/angular/issues/54581
                if (!capture && typeof eventName === 'string') {
                  var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                  target[onPropertySymbol] = null;
                }
              }
              // In all other conditions, when `addEventListener` is called after being
              // patched by zone.js, we would always find an event task on the `EventTarget`.
              // This will trigger `cancelFn` on the `existingTask`, leading to `customCancelGlobal`,
              // which ultimately removes an event listener and cleans up the abort listener
              // (if an `AbortSignal` was provided when scheduling a task).
              existingTask.zone.cancelTask(existingTask);
              if (returnTarget) {
                return target;
              }
              return;
            }
          }
        }
        // https://github.com/angular/zone.js/issues/930
        // We may encounter a situation where the `addEventListener` was
        // called on the event target before zone.js is loaded, resulting
        // in no task being stored on the event target due to its invocation
        // of the native implementation. In this scenario, we simply need to
        // invoke the native `removeEventListener`.
        return nativeRemoveEventListener.apply(this, arguments);
      };
      proto[LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        var listeners = [];
        var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
        for (var i = 0; i < tasks.length; i++) {
          var task = tasks[i];
          var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
          listeners.push(delegate);
        }
        return listeners;
      };
      proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];
        if (!eventName) {
          var keys = Object.keys(target);
          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1];
            // in nodejs EventEmitter, removeListener event is
            // used for monitoring the removeListener call,
            // so just keep removeListener eventListener until
            // all other eventListeners are removed
            if (evtName && evtName !== 'removeListener') {
              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
            }
          }
          // remove removeListener listener finally
          this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
        } else {
          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }
          var symbolEventNames = zoneSymbolEventNames[eventName];
          if (symbolEventNames) {
            var symbolEventName = symbolEventNames[FALSE_STR];
            var symbolCaptureEventName = symbolEventNames[TRUE_STR];
            var tasks = target[symbolEventName];
            var captureTasks = target[symbolCaptureEventName];
            if (tasks) {
              var removeTasks = tasks.slice();
              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }
            if (captureTasks) {
              var removeTasks = captureTasks.slice();
              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }
          }
        }
        if (returnTarget) {
          return this;
        }
      };
      // for native toString patch
      attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
      attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
      if (nativeRemoveAllListeners) {
        attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
      }
      if (nativeListeners) {
        attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
      }
      return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
      results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
  }
  function findEventTasks(target, eventName) {
    if (!eventName) {
      var foundTasks = [];
      for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
          var tasks = target[prop];
          if (tasks) {
            for (var i = 0; i < tasks.length; i++) {
              foundTasks.push(tasks[i]);
            }
          }
        }
      }
      return foundTasks;
    }
    var symbolEventName = zoneSymbolEventNames[eventName];
    if (!symbolEventName) {
      prepareEventNames(eventName);
      symbolEventName = zoneSymbolEventNames[eventName];
    }
    var captureFalseTasks = target[symbolEventName[FALSE_STR]];
    var captureTrueTasks = target[symbolEventName[TRUE_STR]];
    if (!captureFalseTasks) {
      return captureTrueTasks ? captureTrueTasks.slice() : [];
    } else {
      return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
    }
  }
  function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
      api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
        return function (self, args) {
          self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
          // we need to call the native stopImmediatePropagation
          // in case in some hybrid application, some part of
          // application will be controlled by zone, some are not
          delegate && delegate.apply(self, args);
        };
      });
    }
  }
  /**
   * @fileoverview
   * @suppress {missingRequire}
   */
  function patchQueueMicrotask(global, api) {
    api.patchMethod(global, 'queueMicrotask', function (delegate) {
      return function (self, args) {
        Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
      };
    });
  }
  /**
   * @fileoverview
   * @suppress {missingRequire}
   */
  var taskSymbol = zoneSymbol('zoneTask');
  function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
      var data = task.data;
      data.args[0] = function () {
        return task.invoke.apply(this, arguments);
      };
      var handleOrId = setNative.apply(window, data.args);
      // Whlist on Node.js when get can the ID by using `[Symbol.toPrimitive]()` we do
      // to this so that we do not cause potentally leaks when using `setTimeout`
      // since this can be periodic when using `.refresh`.
      if (isNumber(handleOrId)) {
        data.handleId = handleOrId;
      } else {
        data.handle = handleOrId;
        // On Node.js a timeout and interval can be restarted over and over again by using the `.refresh` method.
        data.isRefreshable = isFunction(handleOrId.refresh);
      }
      return task;
    }
    function clearTask(task) {
      var _a = task.data,
        handle = _a.handle,
        handleId = _a.handleId;
      return clearNative.call(window, handle !== null && handle !== void 0 ? handle : handleId);
    }
    setNative = patchMethod(window, setName, function (delegate) {
      return function (self, args) {
        var _a;
        if (isFunction(args[0])) {
          var options_1 = {
            isRefreshable: false,
            isPeriodic: nameSuffix === 'Interval',
            delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
            args: args
          };
          var callback_1 = args[0];
          args[0] = function timer() {
            try {
              return callback_1.apply(this, arguments);
            } finally {
              // issue-934, task will be cancelled
              // even it is a periodic task such as
              // setInterval
              // https://github.com/angular/angular/issues/40387
              // Cleanup tasksByHandleId should be handled before scheduleTask
              // Since some zoneSpec may intercept and doesn't trigger
              // scheduleFn(scheduleTask) provided here.
              var handle_1 = options_1.handle,
                handleId_1 = options_1.handleId,
                isPeriodic_1 = options_1.isPeriodic,
                isRefreshable_1 = options_1.isRefreshable;
              if (!isPeriodic_1 && !isRefreshable_1) {
                if (handleId_1) {
                  // in non-nodejs env, we remove timerId
                  // from local cache
                  delete tasksByHandleId[handleId_1];
                } else if (handle_1) {
                  // Node returns complex objects as handleIds
                  // we remove task reference from timer object
                  handle_1[taskSymbol] = null;
                }
              }
            }
          };
          var task_1 = scheduleMacroTaskWithCurrentZone(setName, args[0], options_1, scheduleTask, clearTask);
          if (!task_1) {
            return task_1;
          }
          // Node.js must additionally support the ref and unref functions.
          var _b = task_1.data,
            handleId = _b.handleId,
            handle = _b.handle,
            isRefreshable = _b.isRefreshable,
            isPeriodic = _b.isPeriodic;
          if (handleId) {
            // for non nodejs env, we save handleId: task
            // mapping in local cache for clearTimeout
            tasksByHandleId[handleId] = task_1;
          } else if (handle) {
            // for nodejs env, we save task
            // reference in timerId Object for clearTimeout
            handle[taskSymbol] = task_1;
            if (isRefreshable && !isPeriodic) {
              var originalRefresh_1 = handle.refresh;
              handle.refresh = function () {
                var zone = task_1.zone,
                  state = task_1.state;
                if (state === 'notScheduled') {
                  task_1._state = 'scheduled';
                  zone._updateTaskCount(task_1, 1);
                } else if (state === 'running') {
                  task_1._state = 'scheduling';
                }
                return originalRefresh_1.call(this);
              };
            }
          }
          return (_a = handle !== null && handle !== void 0 ? handle : handleId) !== null && _a !== void 0 ? _a : task_1;
        } else {
          // cause an error by calling it directly.
          return delegate.apply(window, args);
        }
      };
    });
    clearNative = patchMethod(window, cancelName, function (delegate) {
      return function (self, args) {
        var id = args[0];
        var task;
        if (isNumber(id)) {
          // non nodejs env.
          task = tasksByHandleId[id];
          delete tasksByHandleId[id];
        } else {
          // nodejs env ?? other environments.
          task = id === null || id === void 0 ? void 0 : id[taskSymbol];
          if (task) {
            id[taskSymbol] = null;
          } else {
            task = id;
          }
        }
        if (task === null || task === void 0 ? void 0 : task.type) {
          if (task.cancelFn) {
            // Do not cancel already canceled functions
            task.zone.cancelTask(task);
          }
        } else {
          // cause an error by calling it directly.
          delegate.apply(window, args);
        }
      };
    });
  }
  function patchCustomElements(_global, api) {
    var _a = api.getGlobalObjects(),
      isBrowser = _a.isBrowser,
      isMix = _a.isMix;
    if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
      return;
    }
    // https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-lifecycle-callbacks
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback', 'formAssociatedCallback', 'formDisabledCallback', 'formResetCallback', 'formStateRestoreCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
  }
  function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
      // EventTarget is already patched.
      return;
    }
    var _a = api.getGlobalObjects(),
      eventNames = _a.eventNames,
      zoneSymbolEventNames = _a.zoneSymbolEventNames,
      TRUE_STR = _a.TRUE_STR,
      FALSE_STR = _a.FALSE_STR,
      ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
      var eventName = eventNames[i];
      var falseEventName = eventName + FALSE_STR;
      var trueEventName = eventName + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    var EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
      return;
    }
    api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
  }
  function patchEvent(global, api) {
    api.patchEventPrototype(global, api);
  }
  /**
   * @fileoverview
   * @suppress {globalThis}
   */
  function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
      return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) {
      return ip.target === target;
    });
    if (!tip || tip.length === 0) {
      return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) {
      return targetIgnoreProperties.indexOf(op) === -1;
    });
  }
  function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
      return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
  }
  /**
   * Get all event name properties which the event name startsWith `on`
   * from the target object itself, inherited properties are not considered.
   */
  function getOnEventNames(target) {
    return Object.getOwnPropertyNames(target).filter(function (name) {
      return name.startsWith('on') && name.length > 2;
    }).map(function (name) {
      return name.substring(2);
    });
  }
  function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
      return;
    }
    if (Zone[api.symbol('patchEvents')]) {
      // events are already been patched by legacy patch.
      return;
    }
    var ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    var patchTargets = [];
    if (isBrowser) {
      var internalWindow_1 = window;
      patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
      var ignoreErrorProperties = isIE() ? [{
        target: internalWindow_1,
        ignoreProperties: ['error']
      }] : [];
      // in IE/Edge, onProp not exist in window object, but in WindowPrototype
      // so we need to pass WindowPrototype to check onProp exist or not
      patchFilteredProperties(internalWindow_1, getOnEventNames(internalWindow_1), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow_1));
    }
    patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);
    for (var i = 0; i < patchTargets.length; i++) {
      var target = _global[patchTargets[i]];
      target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
    }
  }
  /**
   * @fileoverview
   * @suppress {missingRequire}
   */
  function patchBrowser(Zone) {
    Zone.__load_patch('legacy', function (global) {
      var legacyPatch = global[Zone.__symbol__('legacyPatch')];
      if (legacyPatch) {
        legacyPatch();
      }
    });
    Zone.__load_patch('timers', function (global) {
      var set = 'set';
      var clear = 'clear';
      patchTimer(global, set, clear, 'Timeout');
      patchTimer(global, set, clear, 'Interval');
      patchTimer(global, set, clear, 'Immediate');
    });
    Zone.__load_patch('requestAnimationFrame', function (global) {
      patchTimer(global, 'request', 'cancel', 'AnimationFrame');
      patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
      patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });
    Zone.__load_patch('blocking', function (global, Zone) {
      var blockingMethods = ['alert', 'prompt', 'confirm'];
      for (var i = 0; i < blockingMethods.length; i++) {
        var name_2 = blockingMethods[i];
        patchMethod(global, name_2, function (delegate, symbol, name) {
          return function (s, args) {
            return Zone.current.run(delegate, global, args, name);
          };
        });
      }
    });
    Zone.__load_patch('EventTarget', function (global, Zone, api) {
      patchEvent(global, api);
      eventTargetPatch(global, api);
      // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
      var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
      if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
      }
    });
    Zone.__load_patch('MutationObserver', function (global, Zone, api) {
      patchClass('MutationObserver');
      patchClass('WebKitMutationObserver');
    });
    Zone.__load_patch('IntersectionObserver', function (global, Zone, api) {
      patchClass('IntersectionObserver');
    });
    Zone.__load_patch('FileReader', function (global, Zone, api) {
      patchClass('FileReader');
    });
    Zone.__load_patch('on_property', function (global, Zone, api) {
      propertyDescriptorPatch(api, global);
    });
    Zone.__load_patch('customElements', function (global, Zone, api) {
      patchCustomElements(global, api);
    });
    Zone.__load_patch('XHR', function (global, Zone) {
      // Treat XMLHttpRequest as a macrotask.
      patchXHR(global);
      var XHR_TASK = zoneSymbol('xhrTask');
      var XHR_SYNC = zoneSymbol('xhrSync');
      var XHR_LISTENER = zoneSymbol('xhrListener');
      var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
      var XHR_URL = zoneSymbol('xhrURL');
      var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
      function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
          // XMLHttpRequest is not available in service worker
          return;
        }
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
          return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
          var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
          if (XMLHttpRequestEventTarget_1) {
            var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
            oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
          var data = task.data;
          var target = data.target;
          target[XHR_SCHEDULED] = false;
          target[XHR_ERROR_BEFORE_SCHEDULED] = false;
          // remove existing event listener
          var listener = target[XHR_LISTENER];
          if (!oriAddListener) {
            oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }
          if (listener) {
            oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
          }
          var newListener = target[XHR_LISTENER] = function () {
            if (target.readyState === target.DONE) {
              // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
              // readyState=4 multiple times, so we need to check task state here
              if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                // check whether the xhr has registered onload listener
                // if that is the case, the task should invoke after all
                // onload listeners finish.
                // Also if the request failed without response (status = 0), the load event handler
                // will not be triggered, in that case, we should also invoke the placeholder callback
                // to close the XMLHttpRequest::send macroTask.
                // https://github.com/angular/angular/issues/38795
                var loadTasks = target[Zone.__symbol__('loadfalse')];
                if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                  var oriInvoke_1 = task.invoke;
                  task.invoke = function () {
                    // need to load the tasks again, because in other
                    // load listener, they may remove themselves
                    var loadTasks = target[Zone.__symbol__('loadfalse')];
                    for (var i = 0; i < loadTasks.length; i++) {
                      if (loadTasks[i] === task) {
                        loadTasks.splice(i, 1);
                      }
                    }
                    if (!data.aborted && task.state === SCHEDULED) {
                      oriInvoke_1.call(task);
                    }
                  };
                  loadTasks.push(task);
                } else {
                  task.invoke();
                }
              } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                // error occurs when xhr.send()
                target[XHR_ERROR_BEFORE_SCHEDULED] = true;
              }
            }
          };
          oriAddListener.call(target, READY_STATE_CHANGE, newListener);
          var storedTask = target[XHR_TASK];
          if (!storedTask) {
            target[XHR_TASK] = task;
          }
          sendNative.apply(target, data.args);
          target[XHR_SCHEDULED] = true;
          return task;
        }
        function placeholderCallback() {}
        function clearTask(task) {
          var data = task.data;
          // Note - ideally, we would call data.target.removeEventListener here, but it's too late
          // to prevent it from firing. So instead, we store info for the event listener.
          data.aborted = true;
          return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
          return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
          };
        });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
          return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
              // a fetch is scheduling, so we are using xhr to polyfill fetch
              // and because we already schedule macroTask for fetch, we should
              // not schedule a macroTask for xhr again
              return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
              // if the XHR is sync there is no task to schedule, just execute the code.
              return sendNative.apply(self, args);
            } else {
              var options = {
                target: self,
                url: self[XHR_URL],
                isPeriodic: false,
                args: args,
                aborted: false
              };
              var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
              if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
                // xhr request throw error when send
                // we should invoke task instead of leaving a scheduled
                // pending macroTask
                task.invoke();
              }
            }
          };
        });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
          return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
              // If the XHR has already completed, do nothing.
              // If the XHR has already been aborted, do nothing.
              // Fix #569, call abort multiple times before done will cause
              // macroTask task count be negative number
              if (task.cancelFn == null || task.data && task.data.aborted) {
                return;
              }
              task.zone.cancelTask(task);
            } else if (Zone.current[fetchTaskAborting] === true) {
              // the abort is called from fetch polyfill, we need to call native abort of XHR.
              return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
          };
        });
      }
    });
    Zone.__load_patch('geolocation', function (global) {
      /// GEO_LOCATION
      if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
      }
    });
    Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
      // handle unhandled promise rejection
      function findPromiseRejectionHandler(evtName) {
        return function (e) {
          var eventTasks = findEventTasks(global, evtName);
          eventTasks.forEach(function (eventTask) {
            // windows has added unhandledrejection event listener
            // trigger the event listener
            var PromiseRejectionEvent = global['PromiseRejectionEvent'];
            if (PromiseRejectionEvent) {
              var evt = new PromiseRejectionEvent(evtName, {
                promise: e.promise,
                reason: e.rejection
              });
              eventTask.invoke(evt);
            }
          });
        };
      }
      if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
      }
    });
    Zone.__load_patch('queueMicrotask', function (global, Zone, api) {
      patchQueueMicrotask(global, api);
    });
  }
  function patchPromise(Zone) {
    Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ObjectDefineProperty = Object.defineProperty;
      function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
          var className = obj.constructor && obj.constructor.name;
          return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
      }
      var __symbol__ = api.symbol;
      var _uncaughtPromiseErrors = [];
      var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] !== false;
      var symbolPromise = __symbol__('Promise');
      var symbolThen = __symbol__('then');
      var creationTrace = '__creationTrace__';
      api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
          var rejection = e && e.rejection;
          if (rejection) {
            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
          } else {
            console.error(e);
          }
        }
      };
      api.microtaskDrainDone = function () {
        var _loop_3 = function _loop_3() {
          var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
          try {
            uncaughtPromiseError.zone.runGuarded(function () {
              if (uncaughtPromiseError.throwOriginal) {
                throw uncaughtPromiseError.rejection;
              }
              throw uncaughtPromiseError;
            });
          } catch (error) {
            handleUnhandledRejection(error);
          }
        };
        while (_uncaughtPromiseErrors.length) {
          _loop_3();
        }
      };
      var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
      function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
          var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
          if (typeof handler === 'function') {
            handler.call(this, e);
          }
        } catch (err) {}
      }
      function isThenable(value) {
        return value && value.then;
      }
      function forwardResolution(value) {
        return value;
      }
      function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
      }
      var symbolState = __symbol__('state');
      var symbolValue = __symbol__('value');
      var symbolFinally = __symbol__('finally');
      var symbolParentPromiseValue = __symbol__('parentPromiseValue');
      var symbolParentPromiseState = __symbol__('parentPromiseState');
      var source = 'Promise.then';
      var UNRESOLVED = null;
      var RESOLVED = true;
      var REJECTED = false;
      var REJECTED_NO_CATCH = 0;
      function makeResolver(promise, state) {
        return function (v) {
          try {
            resolvePromise(promise, state, v);
          } catch (err) {
            resolvePromise(promise, false, err);
          }
          // Do not return value or you will break the Promise spec.
        };
      }
      var once = function once() {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
          return function () {
            if (wasCalled) {
              return;
            }
            wasCalled = true;
            wrappedFunction.apply(null, arguments);
          };
        };
      };
      var TYPE_ERROR = 'Promise resolved with itself';
      var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
      // Promise Resolution
      function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
          throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
          // should only get value.then once based on promise spec.
          var then = null;
          try {
            if (typeof value === 'object' || typeof value === 'function') {
              then = value && value.then;
            }
          } catch (err) {
            onceWrapper(function () {
              resolvePromise(promise, false, err);
            })();
            return promise;
          }
          // if (value instanceof ZoneAwarePromise) {
          if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
            clearRejectedNoCatch(value);
            resolvePromise(promise, value[symbolState], value[symbolValue]);
          } else if (state !== REJECTED && typeof then === 'function') {
            try {
              then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
            }
          } else {
            promise[symbolState] = state;
            var queue = promise[symbolValue];
            promise[symbolValue] = value;
            if (promise[symbolFinally] === symbolFinally) {
              // the promise is generated by Promise.prototype.finally
              if (state === RESOLVED) {
                // the state is resolved, should ignore the value
                // and use parent promise value
                promise[symbolState] = promise[symbolParentPromiseState];
                promise[symbolValue] = promise[symbolParentPromiseValue];
              }
            }
            // record task information in value when error occurs, so we can
            // do some additional work such as render longStackTrace
            if (state === REJECTED && value instanceof Error) {
              // check if longStackTraceZone is here
              var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
              if (trace) {
                // only keep the long stack trace into error when in longStackTraceZone
                ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                  configurable: true,
                  enumerable: false,
                  writable: true,
                  value: trace
                });
              }
            }
            for (var i = 0; i < queue.length;) {
              scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
            }
            if (queue.length == 0 && state == REJECTED) {
              promise[symbolState] = REJECTED_NO_CATCH;
              var uncaughtPromiseError = value;
              try {
                // Here we throws a new Error to print more readable error log
                // and if the value is not an error, zone.js builds an `Error`
                // Object here to attach the stack information.
                throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
              } catch (err) {
                uncaughtPromiseError = err;
              }
              if (isDisableWrappingUncaughtPromiseRejection) {
                // If disable wrapping uncaught promise reject
                // use the value instead of wrapping it.
                uncaughtPromiseError.throwOriginal = true;
              }
              uncaughtPromiseError.rejection = value;
              uncaughtPromiseError.promise = promise;
              uncaughtPromiseError.zone = Zone.current;
              uncaughtPromiseError.task = Zone.currentTask;
              _uncaughtPromiseErrors.push(uncaughtPromiseError);
              api.scheduleMicroTask(); // to make sure that it is running
            }
          }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
      }
      var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
      function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
          // if the promise is rejected no catch status
          // and queue.length > 0, means there is a error handler
          // here to handle the rejected promise, we should trigger
          // windows.rejectionhandled eventHandler or nodejs rejectionHandled
          // eventHandler
          try {
            var handler = Zone[REJECTION_HANDLED_HANDLER];
            if (handler && typeof handler === 'function') {
              handler.call(this, {
                rejection: promise[symbolValue],
                promise: promise
              });
            }
          } catch (err) {}
          promise[symbolState] = REJECTED;
          for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
            if (promise === _uncaughtPromiseErrors[i].promise) {
              _uncaughtPromiseErrors.splice(i, 1);
            }
          }
        }
      }
      function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
          try {
            var parentPromiseValue = promise[symbolValue];
            var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
            if (isFinallyPromise) {
              // if the promise is generated from finally call, keep parent promise's state and value
              chainPromise[symbolParentPromiseValue] = parentPromiseValue;
              chainPromise[symbolParentPromiseState] = promiseState;
            }
            // should not pass value to finally callback
            var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
            resolvePromise(chainPromise, true, value);
          } catch (error) {
            // if error occurs, should always return this error
            resolvePromise(chainPromise, false, error);
          }
        }, chainPromise);
      }
      var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
      var noop = function noop() {};
      var AggregateError = global.AggregateError;
      var ZoneAwarePromise = /** @class */function () {
        function ZoneAwarePromise(executor) {
          var promise = this;
          if (!(promise instanceof ZoneAwarePromise)) {
            throw new Error('Must be an instanceof Promise.');
          }
          promise[symbolState] = UNRESOLVED;
          promise[symbolValue] = []; // queue;
          try {
            var onceWrapper = once();
            executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
          } catch (error) {
            resolvePromise(promise, false, error);
          }
        }
        ZoneAwarePromise.toString = function () {
          return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
          if (value instanceof ZoneAwarePromise) {
            return value;
          }
          return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
          return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.withResolvers = function () {
          var result = {};
          result.promise = new ZoneAwarePromise(function (res, rej) {
            result.resolve = res;
            result.reject = rej;
          });
          return result;
        };
        ZoneAwarePromise.any = function (values) {
          if (!values || typeof values[Symbol.iterator] !== 'function') {
            return Promise.reject(new AggregateError([], 'All promises were rejected'));
          }
          var promises = [];
          var count = 0;
          try {
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
              var v = values_1[_i];
              count++;
              promises.push(ZoneAwarePromise.resolve(v));
            }
          } catch (err) {
            return Promise.reject(new AggregateError([], 'All promises were rejected'));
          }
          if (count === 0) {
            return Promise.reject(new AggregateError([], 'All promises were rejected'));
          }
          var finished = false;
          var errors = [];
          return new ZoneAwarePromise(function (resolve, reject) {
            for (var i = 0; i < promises.length; i++) {
              promises[i].then(function (v) {
                if (finished) {
                  return;
                }
                finished = true;
                resolve(v);
              }, function (err) {
                errors.push(err);
                count--;
                if (count === 0) {
                  finished = true;
                  reject(new AggregateError(errors, 'All promises were rejected'));
                }
              });
            }
          });
        };
        ZoneAwarePromise.race = function (values) {
          var resolve;
          var reject;
          var promise = new this(function (res, rej) {
            resolve = res;
            reject = rej;
          });
          function onResolve(value) {
            resolve(value);
          }
          function onReject(error) {
            reject(error);
          }
          for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
            var value = values_2[_i];
            if (!isThenable(value)) {
              value = this.resolve(value);
            }
            value.then(onResolve, onReject);
          }
          return promise;
        };
        ZoneAwarePromise.all = function (values) {
          return ZoneAwarePromise.allWithCallback(values);
        };
        ZoneAwarePromise.allSettled = function (values) {
          var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
          return P.allWithCallback(values, {
            thenCallback: function thenCallback(value) {
              return {
                status: 'fulfilled',
                value: value
              };
            },
            errorCallback: function errorCallback(err) {
              return {
                status: 'rejected',
                reason: err
              };
            }
          });
        };
        ZoneAwarePromise.allWithCallback = function (values, callback) {
          var resolve;
          var reject;
          var promise = new this(function (res, rej) {
            resolve = res;
            reject = rej;
          });
          // Start at 2 to prevent prematurely resolving if .then is called immediately.
          var unresolvedCount = 2;
          var valueIndex = 0;
          var resolvedValues = [];
          var _loop_4 = function _loop_4(value) {
            if (!isThenable(value)) {
              value = this_1.resolve(value);
            }
            var curValueIndex = valueIndex;
            try {
              value.then(function (value) {
                resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                unresolvedCount--;
                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }, function (err) {
                if (!callback) {
                  reject(err);
                } else {
                  resolvedValues[curValueIndex] = callback.errorCallback(err);
                  unresolvedCount--;
                  if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                  }
                }
              });
            } catch (thenErr) {
              reject(thenErr);
            }
            unresolvedCount++;
            valueIndex++;
          };
          var this_1 = this;
          for (var _i = 0, values_3 = values; _i < values_3.length; _i++) {
            var value = values_3[_i];
            _loop_4(value);
          }
          // Make the unresolvedCount zero-based again.
          unresolvedCount -= 2;
          if (unresolvedCount === 0) {
            resolve(resolvedValues);
          }
          return promise;
        };
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
          get: function get() {
            return 'Promise';
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ZoneAwarePromise.prototype, Symbol.species, {
          get: function get() {
            return ZoneAwarePromise;
          },
          enumerable: false,
          configurable: true
        });
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
          var _a;
          // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
          // may be an object without a prototype (created through `Object.create(null)`); thus
          // `this.constructor` will be undefined. One of the use cases is SystemJS creating
          // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
          // object and copies promise properties into that object (within the `getOrCreateLoad`
          // function). The zone.js then checks if the resolved value has the `then` method and
          // invokes it with the `value` context. Otherwise, this will throw an error: `TypeError:
          // Cannot read properties of undefined (reading 'Symbol(Symbol.species)')`.
          var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
          if (!C || typeof C !== 'function') {
            C = this.constructor || ZoneAwarePromise;
          }
          var chainPromise = new C(noop);
          var zone = Zone.current;
          if (this[symbolState] == UNRESOLVED) {
            this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
          } else {
            scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
          }
          return chainPromise;
        };
        ZoneAwarePromise.prototype["catch"] = function (onRejected) {
          return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype["finally"] = function (onFinally) {
          var _a;
          // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.
          var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
          if (!C || typeof C !== 'function') {
            C = ZoneAwarePromise;
          }
          var chainPromise = new C(noop);
          chainPromise[symbolFinally] = symbolFinally;
          var zone = Zone.current;
          if (this[symbolState] == UNRESOLVED) {
            this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
          } else {
            scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
          }
          return chainPromise;
        };
        return ZoneAwarePromise;
      }();
      // Protect against aggressive optimizers dropping seemingly unused properties.
      // E.g. Closure Compiler in advanced mode.
      ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
      ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
      ZoneAwarePromise['race'] = ZoneAwarePromise.race;
      ZoneAwarePromise['all'] = ZoneAwarePromise.all;
      var NativePromise = global[symbolPromise] = global['Promise'];
      global['Promise'] = ZoneAwarePromise;
      var symbolThenPatched = __symbol__('thenPatched');
      function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
          // check Ctor.prototype.then propertyDescriptor is writable or not
          // in meteor env, writable is false, we should ignore such case
          return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
          var _this = this;
          var wrapped = new ZoneAwarePromise(function (resolve, reject) {
            originalThen.call(_this, resolve, reject);
          });
          return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
      }
      api.patchThen = patchThen;
      function zoneify(fn) {
        return function (self, args) {
          var resultPromise = fn.apply(self, args);
          if (resultPromise instanceof ZoneAwarePromise) {
            return resultPromise;
          }
          var ctor = resultPromise.constructor;
          if (!ctor[symbolThenPatched]) {
            patchThen(ctor);
          }
          return resultPromise;
        };
      }
      if (NativePromise) {
        patchThen(NativePromise);
        patchMethod(global, 'fetch', function (delegate) {
          return zoneify(delegate);
        });
      }
      // This is not part of public API, but it is useful for tests, so we expose it.
      Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
      return ZoneAwarePromise;
    });
  }
  function patchToString(Zone) {
    // override Function.prototype.toString to make zone.js patched function
    // look like native function
    Zone.__load_patch('toString', function (global) {
      // patch Func.prototype.toString to let them look like native
      var originalFunctionToString = Function.prototype.toString;
      var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
      var PROMISE_SYMBOL = zoneSymbol('Promise');
      var ERROR_SYMBOL = zoneSymbol('Error');
      var newFunctionToString = function toString() {
        if (typeof this === 'function') {
          var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
          if (originalDelegate) {
            if (typeof originalDelegate === 'function') {
              return originalFunctionToString.call(originalDelegate);
            } else {
              return Object.prototype.toString.call(originalDelegate);
            }
          }
          if (this === Promise) {
            var nativePromise = global[PROMISE_SYMBOL];
            if (nativePromise) {
              return originalFunctionToString.call(nativePromise);
            }
          }
          if (this === Error) {
            var nativeError = global[ERROR_SYMBOL];
            if (nativeError) {
              return originalFunctionToString.call(nativeError);
            }
          }
        }
        return originalFunctionToString.call(this);
      };
      newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
      Function.prototype.toString = newFunctionToString;
      // patch Object.prototype.toString to let them look like native
      var originalObjectToString = Object.prototype.toString;
      var PROMISE_OBJECT_TO_STRING = '[object Promise]';
      Object.prototype.toString = function () {
        if (typeof Promise === 'function' && this instanceof Promise) {
          return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
      };
    });
  }
  function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
      return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
      if (opts && opts.prototype) {
        callbacks.forEach(function (callback) {
          var source = "".concat(targetName, ".").concat(method, "::") + callback;
          var prototype = opts.prototype;
          // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
          // `customElements.define`. We explicitly wrap the patching code into try-catch since
          // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
          // make those properties non-writable. This means that patching callback will throw an error
          // `cannot assign to read-only property`. See this code as an example:
          // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
          // We don't want to stop the application rendering if we couldn't patch some
          // callback, e.g. `attributeChangedCallback`.
          try {
            if (prototype.hasOwnProperty(callback)) {
              var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
              if (descriptor && descriptor.value) {
                descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                api._redefineProperty(opts.prototype, callback, descriptor);
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } catch (_a) {
            // Note: we leave the catch block empty since there's no way to handle the error related
            // to non-writable property.
          }
        });
      }
      return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
  }
  function patchUtil(Zone) {
    Zone.__load_patch('util', function (global, Zone, api) {
      // Collect native event names by looking at properties
      // on the global namespace, e.g. 'onclick'.
      var eventNames = getOnEventNames(global);
      api.patchOnProperties = patchOnProperties;
      api.patchMethod = patchMethod;
      api.bindArguments = bindArguments;
      api.patchMacroTask = patchMacroTask;
      // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS`
      // to define which events will not be patched by `Zone.js`. In newer version (>=0.9.0), we
      // change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep the name consistent with
      // angular repo. The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be
      // supported for backwards compatibility.
      var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
      var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
      if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
      }
      if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
      }
      api.patchEventPrototype = patchEventPrototype;
      api.patchEventTarget = patchEventTarget;
      api.isIEOrEdge = isIEOrEdge;
      api.ObjectDefineProperty = ObjectDefineProperty;
      api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
      api.ObjectCreate = ObjectCreate;
      api.ArraySlice = ArraySlice;
      api.patchClass = patchClass;
      api.wrapWithCurrentZone = wrapWithCurrentZone;
      api.filterProperties = filterProperties;
      api.attachOriginToPatched = attachOriginToPatched;
      api._redefineProperty = Object.defineProperty;
      api.patchCallbacks = patchCallbacks;
      api.getGlobalObjects = function () {
        return {
          globalSources: globalSources,
          zoneSymbolEventNames: zoneSymbolEventNames,
          eventNames: eventNames,
          isBrowser: isBrowser,
          isMix: isMix,
          isNode: isNode,
          TRUE_STR: TRUE_STR,
          FALSE_STR: FALSE_STR,
          ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
          ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
          REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
        };
      };
    });
  }
  function patchCommon(Zone) {
    patchPromise(Zone);
    patchToString(Zone);
    patchUtil(Zone);
  }
  var Zone$1 = loadZone();
  patchCommon(Zone$1);
  patchBrowser(Zone$1);
});

/***/ }),

/***/ 1643:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/localize/fesm2022/init.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $localize: () => (/* reexport safe */ _angular_localize__WEBPACK_IMPORTED_MODULE_0__["ɵ$localize"])
/* harmony export */ });
/* harmony import */ var _angular_localize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/localize */ 95116);
/**
 * @license Angular v18.2.3
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */




// Attach $localize to the global context, as a side-effect of this module.
globalThis.$localize = _angular_localize__WEBPACK_IMPORTED_MODULE_0__["ɵ$localize"];

/***/ }),

/***/ 95116:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/localize/fesm2022/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearTranslations: () => (/* binding */ clearTranslations),
/* harmony export */   loadTranslations: () => (/* binding */ loadTranslations),
/* harmony export */   "ɵ$localize": () => (/* binding */ _$localize$),
/* harmony export */   "ɵMissingTranslationError": () => (/* binding */ MissingTranslationError),
/* harmony export */   "ɵcomputeMsgId": () => (/* binding */ computeMsgId),
/* harmony export */   "ɵfindEndOfBlock": () => (/* binding */ findEndOfBlock),
/* harmony export */   "ɵisMissingTranslationError": () => (/* binding */ isMissingTranslationError),
/* harmony export */   "ɵmakeParsedTranslation": () => (/* binding */ makeParsedTranslation),
/* harmony export */   "ɵmakeTemplateObject": () => (/* binding */ makeTemplateObject),
/* harmony export */   "ɵparseMessage": () => (/* binding */ parseMessage),
/* harmony export */   "ɵparseMetadata": () => (/* binding */ parseMetadata),
/* harmony export */   "ɵparseTranslation": () => (/* binding */ parseTranslation),
/* harmony export */   "ɵsplitBlock": () => (/* binding */ splitBlock),
/* harmony export */   "ɵtranslate": () => (/* binding */ translate$1)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js */ 68922);
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 4296);
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toArray.js */ 64722);
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 47787);
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ 41423);
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/superPropGet.js */ 36676);
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 56834);
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 25922);
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 42228);









/**
 * @license Angular v18.2.3
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * The character used to mark the start and end of a "block" in a `$localize` tagged string.
 * A block can indicate metadata about the message or specify a name of a placeholder for a
 * substitution expressions.
 *
 * For example:
 *
 * ```ts
 * $localize`Hello, ${title}:title:!`;
 * $localize`:meaning|description@@id:source message text`;
 * ```
 */
var BLOCK_MARKER$1 = ':';
/**
 * The marker used to separate a message's "meaning" from its "description" in a metadata block.
 *
 * For example:
 *
 * ```ts
 * $localize `:correct|Indicates that the user got the answer correct: Right!`;
 * $localize `:movement|Button label for moving to the right: Right!`;
 * ```
 */
var MEANING_SEPARATOR = '|';
/**
 * The marker used to separate a message's custom "id" from its "description" in a metadata block.
 *
 * For example:
 *
 * ```ts
 * $localize `:A welcome message on the home page@@myApp-homepage-welcome: Welcome!`;
 * ```
 */
var ID_SEPARATOR = '@@';
/**
 * The marker used to separate legacy message ids from the rest of a metadata block.
 *
 * For example:
 *
 * ```ts
 * $localize `:@@custom-id␟2df64767cd895a8fabe3e18b94b5b6b6f9e2e3f0: Welcome!`;
 * ```
 *
 * Note that this character is the "symbol for the unit separator" (␟) not the "unit separator
 * character" itself, since that has no visual representation. See https://graphemica.com/%E2%90%9F.
 *
 * Here is some background for the original "unit separator character":
 * https://stackoverflow.com/questions/8695118/whats-the-file-group-record-unit-separator-control-characters-and-its-usage
 */
var LEGACY_ID_INDICATOR = "\u241F";

/**
 * A lazily created TextEncoder instance for converting strings into UTF-8 bytes
 */
var textEncoder;
/**
 * Return the message id or compute it using the XLIFF1 digest.
 */
function digest(message) {
  return message.id || computeDigest(message);
}
/**
 * Compute the message id using the XLIFF1 digest.
 */
function computeDigest(message) {
  return sha1(serializeNodes(message.nodes).join('') + "[".concat(message.meaning, "]"));
}
/**
 * Return the message id or compute it using the XLIFF2/XMB/$localize digest.
 */
function decimalDigest(message, preservePlaceholders) {
  return message.id || computeDecimalDigest(message, preservePlaceholders);
}
/**
 * Compute the message id using the XLIFF2/XMB/$localize digest.
 */
function computeDecimalDigest(message, preservePlaceholders) {
  var visitor = new _SerializerIgnoreExpVisitor(preservePlaceholders);
  var parts = message.nodes.map(function (a) {
    return a.visit(visitor, null);
  });
  return computeMsgId(parts.join(''), message.meaning);
}
/**
 * Serialize the i18n ast to something xml-like in order to generate an UID.
 *
 * The visitor is also used in the i18n parser tests
 *
 * @internal
 */
var _SerializerVisitor = /*#__PURE__*/function () {
  function _SerializerVisitor() {
    (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _SerializerVisitor);
  }
  return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_SerializerVisitor, [{
    key: "visitText",
    value: function visitText(text, context) {
      return text.value;
    }
  }, {
    key: "visitContainer",
    value: function visitContainer(container, context) {
      var _this = this;
      return "[".concat(container.children.map(function (child) {
        return child.visit(_this);
      }).join(', '), "]");
    }
  }, {
    key: "visitIcu",
    value: function visitIcu(icu, context) {
      var _this2 = this;
      var strCases = Object.keys(icu.cases).map(function (k) {
        return "".concat(k, " {").concat(icu.cases[k].visit(_this2), "}");
      });
      return "{".concat(icu.expression, ", ").concat(icu.type, ", ").concat(strCases.join(', '), "}");
    }
  }, {
    key: "visitTagPlaceholder",
    value: function visitTagPlaceholder(ph, context) {
      var _this3 = this;
      return ph.isVoid ? "<ph tag name=\"".concat(ph.startName, "\"/>") : "<ph tag name=\"".concat(ph.startName, "\">").concat(ph.children.map(function (child) {
        return child.visit(_this3);
      }).join(', '), "</ph name=\"").concat(ph.closeName, "\">");
    }
  }, {
    key: "visitPlaceholder",
    value: function visitPlaceholder(ph, context) {
      return ph.value ? "<ph name=\"".concat(ph.name, "\">").concat(ph.value, "</ph>") : "<ph name=\"".concat(ph.name, "\"/>");
    }
  }, {
    key: "visitIcuPlaceholder",
    value: function visitIcuPlaceholder(ph, context) {
      return "<ph icu name=\"".concat(ph.name, "\">").concat(ph.value.visit(this), "</ph>");
    }
  }, {
    key: "visitBlockPlaceholder",
    value: function visitBlockPlaceholder(ph, context) {
      var _this4 = this;
      return "<ph block name=\"".concat(ph.startName, "\">").concat(ph.children.map(function (child) {
        return child.visit(_this4);
      }).join(', '), "</ph name=\"").concat(ph.closeName, "\">");
    }
  }]);
}();
var serializerVisitor = new _SerializerVisitor();
function serializeNodes(nodes) {
  return nodes.map(function (a) {
    return a.visit(serializerVisitor, null);
  });
}
/**
 * Serialize the i18n ast to something xml-like in order to generate an UID.
 *
 * Ignore the expressions so that message IDs stays identical if only the expression changes.
 *
 * @internal
 */
var _SerializerIgnoreExpVisitor = /*#__PURE__*/function (_SerializerVisitor2) {
  function _SerializerIgnoreExpVisitor(preservePlaceholders) {
    var _this5;
    (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, _SerializerIgnoreExpVisitor);
    _this5 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _SerializerIgnoreExpVisitor);
    _this5.preservePlaceholders = preservePlaceholders;
    return _this5;
  }
  (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_SerializerIgnoreExpVisitor, _SerializerVisitor2);
  return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_SerializerIgnoreExpVisitor, [{
    key: "visitPlaceholder",
    value: function visitPlaceholder(ph, context) {
      // Do not take the expression into account when `preservePlaceholders` is disabled.
      return this.preservePlaceholders ? (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_SerializerIgnoreExpVisitor, "visitPlaceholder", this, 3)([ph, context]) : "<ph name=\"".concat(ph.name, "\"/>");
    }
  }, {
    key: "visitIcu",
    value: function visitIcu(icu) {
      var _this6 = this;
      var strCases = Object.keys(icu.cases).map(function (k) {
        return "".concat(k, " {").concat(icu.cases[k].visit(_this6), "}");
      });
      // Do not take the expression into account
      return "{".concat(icu.type, ", ").concat(strCases.join(', '), "}");
    }
  }]);
}(_SerializerVisitor);
/**
 * Compute the SHA1 of the given string
 *
 * see https://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 *
 * WARNING: this function has not been designed not tested with security in mind.
 *          DO NOT USE IT IN A SECURITY SENSITIVE CONTEXT.
 */
function sha1(str) {
  var _textEncoder;
  (_textEncoder = textEncoder) !== null && _textEncoder !== void 0 ? _textEncoder : textEncoder = new TextEncoder();
  var utf8 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(textEncoder.encode(str));
  var words32 = bytesToWords32(utf8, Endian.Big);
  var len = utf8.length * 8;
  var w = new Uint32Array(80);
  var a = 0x67452301,
    b = 0xefcdab89,
    c = 0x98badcfe,
    d = 0x10325476,
    e = 0xc3d2e1f0;
  words32[len >> 5] |= 0x80 << 24 - len % 32;
  words32[(len + 64 >> 9 << 4) + 15] = len;
  for (var i = 0; i < words32.length; i += 16) {
    var h0 = a,
      h1 = b,
      h2 = c,
      h3 = d,
      h4 = e;
    for (var j = 0; j < 80; j++) {
      if (j < 16) {
        w[j] = words32[i + j];
      } else {
        w[j] = rol32(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
      }
      var fkVal = fk(j, b, c, d);
      var f = fkVal[0];
      var k = fkVal[1];
      var temp = [rol32(a, 5), f, e, k, w[j]].reduce(add32);
      e = d;
      d = c;
      c = rol32(b, 30);
      b = a;
      a = temp;
    }
    a = add32(a, h0);
    b = add32(b, h1);
    c = add32(c, h2);
    d = add32(d, h3);
    e = add32(e, h4);
  }
  // Convert the output parts to a 160-bit hexadecimal string
  return toHexU32(a) + toHexU32(b) + toHexU32(c) + toHexU32(d) + toHexU32(e);
}
/**
 * Convert and format a number as a string representing a 32-bit unsigned hexadecimal number.
 * @param value The value to format as a string.
 * @returns A hexadecimal string representing the value.
 */
function toHexU32(value) {
  // unsigned right shift of zero ensures an unsigned 32-bit number
  return (value >>> 0).toString(16).padStart(8, '0');
}
function fk(index, b, c, d) {
  if (index < 20) {
    return [b & c | ~b & d, 0x5a827999];
  }
  if (index < 40) {
    return [b ^ c ^ d, 0x6ed9eba1];
  }
  if (index < 60) {
    return [b & c | b & d | c & d, 0x8f1bbcdc];
  }
  return [b ^ c ^ d, 0xca62c1d6];
}
/**
 * Compute the fingerprint of the given string
 *
 * The output is 64 bit number encoded as a decimal string
 *
 * based on:
 * https://github.com/google/closure-compiler/blob/master/src/com/google/javascript/jscomp/GoogleJsMessageIdGenerator.java
 */
function fingerprint(str) {
  var _textEncoder2;
  (_textEncoder2 = textEncoder) !== null && _textEncoder2 !== void 0 ? _textEncoder2 : textEncoder = new TextEncoder();
  var utf8 = textEncoder.encode(str);
  var view = new DataView(utf8.buffer, utf8.byteOffset, utf8.byteLength);
  var hi = hash32(view, utf8.length, 0);
  var lo = hash32(view, utf8.length, 102072);
  if (hi == 0 && (lo == 0 || lo == 1)) {
    hi = hi ^ 0x130f9bef;
    lo = lo ^ -0x6b5f56d8;
  }
  return BigInt.asUintN(32, BigInt(hi)) << BigInt(32) | BigInt.asUintN(32, BigInt(lo));
}
function computeMsgId(msg) {
  var meaning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var msgFingerprint = fingerprint(msg);
  if (meaning) {
    // Rotate the 64-bit message fingerprint one bit to the left and then add the meaning
    // fingerprint.
    msgFingerprint = BigInt.asUintN(64, msgFingerprint << BigInt(1)) | msgFingerprint >> BigInt(63) & BigInt(1);
    msgFingerprint += fingerprint(meaning);
  }
  return BigInt.asUintN(63, msgFingerprint).toString();
}
function hash32(view, length, c) {
  var a = 0x9e3779b9,
    b = 0x9e3779b9;
  var index = 0;
  var end = length - 12;
  for (; index <= end; index += 12) {
    a += view.getUint32(index, true);
    b += view.getUint32(index + 4, true);
    c += view.getUint32(index + 8, true);
    var res = mix(a, b, c);
    a = res[0], b = res[1], c = res[2];
  }
  var remainder = length - index;
  // the first byte of c is reserved for the length
  c += length;
  if (remainder >= 4) {
    a += view.getUint32(index, true);
    index += 4;
    if (remainder >= 8) {
      b += view.getUint32(index, true);
      index += 4;
      // Partial 32-bit word for c
      if (remainder >= 9) {
        c += view.getUint8(index++) << 8;
      }
      if (remainder >= 10) {
        c += view.getUint8(index++) << 16;
      }
      if (remainder === 11) {
        c += view.getUint8(index++) << 24;
      }
    } else {
      // Partial 32-bit word for b
      if (remainder >= 5) {
        b += view.getUint8(index++);
      }
      if (remainder >= 6) {
        b += view.getUint8(index++) << 8;
      }
      if (remainder === 7) {
        b += view.getUint8(index++) << 16;
      }
    }
  } else {
    // Partial 32-bit word for a
    if (remainder >= 1) {
      a += view.getUint8(index++);
    }
    if (remainder >= 2) {
      a += view.getUint8(index++) << 8;
    }
    if (remainder === 3) {
      a += view.getUint8(index++) << 16;
    }
  }
  return mix(a, b, c)[2];
}
function mix(a, b, c) {
  a -= b;
  a -= c;
  a ^= c >>> 13;
  b -= c;
  b -= a;
  b ^= a << 8;
  c -= a;
  c -= b;
  c ^= b >>> 13;
  a -= b;
  a -= c;
  a ^= c >>> 12;
  b -= c;
  b -= a;
  b ^= a << 16;
  c -= a;
  c -= b;
  c ^= b >>> 5;
  a -= b;
  a -= c;
  a ^= c >>> 3;
  b -= c;
  b -= a;
  b ^= a << 10;
  c -= a;
  c -= b;
  c ^= b >>> 15;
  return [a, b, c];
}
// Utils
var Endian;
(function (Endian) {
  Endian[Endian["Little"] = 0] = "Little";
  Endian[Endian["Big"] = 1] = "Big";
})(Endian || (Endian = {}));
function add32(a, b) {
  return add32to64(a, b)[1];
}
function add32to64(a, b) {
  var low = (a & 0xffff) + (b & 0xffff);
  var high = (a >>> 16) + (b >>> 16) + (low >>> 16);
  return [high >>> 16, high << 16 | low & 0xffff];
}
// Rotate a 32b number left `count` position
function rol32(a, count) {
  return a << count | a >>> 32 - count;
}
function bytesToWords32(bytes, endian) {
  var size = bytes.length + 3 >>> 2;
  var words32 = [];
  for (var i = 0; i < size; i++) {
    words32[i] = wordAt(bytes, i * 4, endian);
  }
  return words32;
}
function byteAt(bytes, index) {
  return index >= bytes.length ? 0 : bytes[index];
}
function wordAt(bytes, index, endian) {
  var word = 0;
  if (endian === Endian.Big) {
    for (var i = 0; i < 4; i++) {
      word += byteAt(bytes, index + i) << 24 - 8 * i;
    }
  } else {
    for (var _i = 0; _i < 4; _i++) {
      word += byteAt(bytes, index + _i) << 8 * _i;
    }
  }
  return word;
}

// This module specifier is intentionally a relative path to allow bundling the code directly
/**
 * Parse a `$localize` tagged string into a structure that can be used for translation or
 * extraction.
 *
 * See `ParsedMessage` for an example.
 */
function parseMessage(messageParts, expressions, location, messagePartLocations) {
  var expressionLocations = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var substitutions = {};
  var substitutionLocations = {};
  var associatedMessageIds = {};
  var metadata = parseMetadata(messageParts[0], messageParts.raw[0]);
  var cleanedMessageParts = [metadata.text];
  var placeholderNames = [];
  var messageString = metadata.text;
  for (var i = 1; i < messageParts.length; i++) {
    var _parsePlaceholder = parsePlaceholder(messageParts[i], messageParts.raw[i]),
      messagePart = _parsePlaceholder.messagePart,
      _parsePlaceholder$pla = _parsePlaceholder.placeholderName,
      placeholderName = _parsePlaceholder$pla === void 0 ? computePlaceholderName(i) : _parsePlaceholder$pla,
      associatedMessageId = _parsePlaceholder.associatedMessageId;
    messageString += "{$".concat(placeholderName, "}").concat(messagePart);
    if (expressions !== undefined) {
      substitutions[placeholderName] = expressions[i - 1];
      substitutionLocations[placeholderName] = expressionLocations[i - 1];
    }
    placeholderNames.push(placeholderName);
    if (associatedMessageId !== undefined) {
      associatedMessageIds[placeholderName] = associatedMessageId;
    }
    cleanedMessageParts.push(messagePart);
  }
  var messageId = metadata.customId || computeMsgId(messageString, metadata.meaning || '');
  var legacyIds = metadata.legacyIds ? metadata.legacyIds.filter(function (id) {
    return id !== messageId;
  }) : [];
  return {
    id: messageId,
    legacyIds: legacyIds,
    substitutions: substitutions,
    substitutionLocations: substitutionLocations,
    text: messageString,
    customId: metadata.customId,
    meaning: metadata.meaning || '',
    description: metadata.description || '',
    messageParts: cleanedMessageParts,
    messagePartLocations: messagePartLocations,
    placeholderNames: placeholderNames,
    associatedMessageIds: associatedMessageIds,
    location: location
  };
}
/**
 * Parse the given message part (`cooked` + `raw`) to extract the message metadata from the text.
 *
 * If the message part has a metadata block this function will extract the `meaning`,
 * `description`, `customId` and `legacyId` (if provided) from the block. These metadata properties
 * are serialized in the string delimited by `|`, `@@` and `␟` respectively.
 *
 * (Note that `␟` is the `LEGACY_ID_INDICATOR` - see `constants.ts`.)
 *
 * For example:
 *
 * ```ts
 * `:meaning|description@@custom-id:`
 * `:meaning|@@custom-id:`
 * `:meaning|description:`
 * `:description@@custom-id:`
 * `:meaning|:`
 * `:description:`
 * `:@@custom-id:`
 * `:meaning|description@@custom-id␟legacy-id-1␟legacy-id-2:`
 * ```
 *
 * @param cooked The cooked version of the message part to parse.
 * @param raw The raw version of the message part to parse.
 * @returns A object containing any metadata that was parsed from the message part.
 */
function parseMetadata(cooked, raw) {
  var _splitBlock = splitBlock(cooked, raw),
    messageString = _splitBlock.text,
    block = _splitBlock.block;
  if (block === undefined) {
    return {
      text: messageString
    };
  } else {
    var _block$split = block.split(LEGACY_ID_INDICATOR),
      _block$split2 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_block$split),
      meaningDescAndId = _block$split2[0],
      legacyIds = _block$split2.slice(1);
    var _meaningDescAndId$spl = meaningDescAndId.split(ID_SEPARATOR, 2),
      _meaningDescAndId$spl2 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_meaningDescAndId$spl, 2),
      meaningAndDesc = _meaningDescAndId$spl2[0],
      customId = _meaningDescAndId$spl2[1];
    var _meaningAndDesc$split = meaningAndDesc.split(MEANING_SEPARATOR, 2),
      _meaningAndDesc$split2 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_meaningAndDesc$split, 2),
      meaning = _meaningAndDesc$split2[0],
      description = _meaningAndDesc$split2[1];
    if (description === undefined) {
      description = meaning;
      meaning = undefined;
    }
    if (description === '') {
      description = undefined;
    }
    return {
      text: messageString,
      meaning: meaning,
      description: description,
      customId: customId,
      legacyIds: legacyIds
    };
  }
}
/**
 * Parse the given message part (`cooked` + `raw`) to extract any placeholder metadata from the
 * text.
 *
 * If the message part has a metadata block this function will extract the `placeholderName` and
 * `associatedMessageId` (if provided) from the block.
 *
 * These metadata properties are serialized in the string delimited by `@@`.
 *
 * For example:
 *
 * ```ts
 * `:placeholder-name@@associated-id:`
 * ```
 *
 * @param cooked The cooked version of the message part to parse.
 * @param raw The raw version of the message part to parse.
 * @returns A object containing the metadata (`placeholderName` and `associatedMessageId`) of the
 *     preceding placeholder, along with the static text that follows.
 */
function parsePlaceholder(cooked, raw) {
  var _splitBlock2 = splitBlock(cooked, raw),
    messagePart = _splitBlock2.text,
    block = _splitBlock2.block;
  if (block === undefined) {
    return {
      messagePart: messagePart
    };
  } else {
    var _block$split3 = block.split(ID_SEPARATOR),
      _block$split4 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_block$split3, 2),
      placeholderName = _block$split4[0],
      associatedMessageId = _block$split4[1];
    return {
      messagePart: messagePart,
      placeholderName: placeholderName,
      associatedMessageId: associatedMessageId
    };
  }
}
/**
 * Split a message part (`cooked` + `raw`) into an optional delimited "block" off the front and the
 * rest of the text of the message part.
 *
 * Blocks appear at the start of message parts. They are delimited by a colon `:` character at the
 * start and end of the block.
 *
 * If the block is in the first message part then it will be metadata about the whole message:
 * meaning, description, id.  Otherwise it will be metadata about the immediately preceding
 * substitution: placeholder name.
 *
 * Since blocks are optional, it is possible that the content of a message block actually starts
 * with a block marker. In this case the marker must be escaped `\:`.
 *
 * @param cooked The cooked version of the message part to parse.
 * @param raw The raw version of the message part to parse.
 * @returns An object containing the `text` of the message part and the text of the `block`, if it
 * exists.
 * @throws an error if the `block` is unterminated
 */
function splitBlock(cooked, raw) {
  if (raw.charAt(0) !== BLOCK_MARKER$1) {
    return {
      text: cooked
    };
  } else {
    var endOfBlock = findEndOfBlock(cooked, raw);
    return {
      block: cooked.substring(1, endOfBlock),
      text: cooked.substring(endOfBlock + 1)
    };
  }
}
function computePlaceholderName(index) {
  return index === 1 ? 'PH' : "PH_".concat(index - 1);
}
/**
 * Find the end of a "marked block" indicated by the first non-escaped colon.
 *
 * @param cooked The cooked string (where escaped chars have been processed)
 * @param raw The raw string (where escape sequences are still in place)
 *
 * @returns the index of the end of block marker
 * @throws an error if the block is unterminated
 */
function findEndOfBlock(cooked, raw) {
  for (var cookedIndex = 1, rawIndex = 1; cookedIndex < cooked.length; cookedIndex++, rawIndex++) {
    if (raw[rawIndex] === '\\') {
      rawIndex++;
    } else if (cooked[cookedIndex] === BLOCK_MARKER$1) {
      return cookedIndex;
    }
  }
  throw new Error("Unterminated $localize metadata block in \"".concat(raw, "\"."));
}
var MissingTranslationError = /*#__PURE__*/function (_Error) {
  function MissingTranslationError(parsedMessage) {
    var _this7;
    (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, MissingTranslationError);
    _this7 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MissingTranslationError, ["No translation found for ".concat(describeMessage(parsedMessage), ".")]);
    _this7.parsedMessage = parsedMessage;
    _this7.type = 'MissingTranslationError';
    return _this7;
  }
  (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__["default"])(MissingTranslationError, _Error);
  return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(MissingTranslationError);
}( /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Error));
function isMissingTranslationError(e) {
  return e.type === 'MissingTranslationError';
}
/**
 * Translate the text of the `$localize` tagged-string (i.e. `messageParts` and
 * `substitutions`) using the given `translations`.
 *
 * The tagged-string is parsed to extract its `messageId` which is used to find an appropriate
 * `ParsedTranslation`. If this doesn't match and there are legacy ids then try matching a
 * translation using those.
 *
 * If one is found then it is used to translate the message into a new set of `messageParts` and
 * `substitutions`.
 * The translation may reorder (or remove) substitutions as appropriate.
 *
 * If there is no translation with a matching message id then an error is thrown.
 * If a translation contains a placeholder that is not found in the message being translated then an
 * error is thrown.
 */
function translate$1(translations, messageParts, substitutions) {
  var message = parseMessage(messageParts, substitutions);
  // Look up the translation using the messageId, and then the legacyId if available.
  var translation = translations[message.id];
  // If the messageId did not match a translation, try matching the legacy ids instead
  if (message.legacyIds !== undefined) {
    for (var i = 0; i < message.legacyIds.length && translation === undefined; i++) {
      translation = translations[message.legacyIds[i]];
    }
  }
  if (translation === undefined) {
    throw new MissingTranslationError(message);
  }
  return [translation.messageParts, translation.placeholderNames.map(function (placeholder) {
    if (message.substitutions.hasOwnProperty(placeholder)) {
      return message.substitutions[placeholder];
    } else {
      throw new Error("There is a placeholder name mismatch with the translation provided for the message ".concat(describeMessage(message), ".\n") + "The translation contains a placeholder with name ".concat(placeholder, ", which does not exist in the message."));
    }
  })];
}
/**
 * Parse the `messageParts` and `placeholderNames` out of a target `message`.
 *
 * Used by `loadTranslations()` to convert target message strings into a structure that is more
 * appropriate for doing translation.
 *
 * @param message the message to be parsed.
 */
function parseTranslation(messageString) {
  var parts = messageString.split(/{\$([^}]*)}/);
  var messageParts = [parts[0]];
  var placeholderNames = [];
  for (var i = 1; i < parts.length - 1; i += 2) {
    placeholderNames.push(parts[i]);
    messageParts.push("".concat(parts[i + 1]));
  }
  var rawMessageParts = messageParts.map(function (part) {
    return part.charAt(0) === BLOCK_MARKER$1 ? '\\' + part : part;
  });
  return {
    text: messageString,
    messageParts: makeTemplateObject(messageParts, rawMessageParts),
    placeholderNames: placeholderNames
  };
}
/**
 * Create a `ParsedTranslation` from a set of `messageParts` and `placeholderNames`.
 *
 * @param messageParts The message parts to appear in the ParsedTranslation.
 * @param placeholderNames The names of the placeholders to intersperse between the `messageParts`.
 */
function makeParsedTranslation(messageParts) {
  var placeholderNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var messageString = messageParts[0];
  for (var i = 0; i < placeholderNames.length; i++) {
    messageString += "{$".concat(placeholderNames[i], "}").concat(messageParts[i + 1]);
  }
  return {
    text: messageString,
    messageParts: makeTemplateObject(messageParts, messageParts),
    placeholderNames: placeholderNames
  };
}
/**
 * Create the specialized array that is passed to tagged-string tag functions.
 *
 * @param cooked The message parts with their escape codes processed.
 * @param raw The message parts with their escaped codes as-is.
 */
function makeTemplateObject(cooked, raw) {
  Object.defineProperty(cooked, 'raw', {
    value: raw
  });
  return cooked;
}
function describeMessage(message) {
  var meaningString = message.meaning && " - \"".concat(message.meaning, "\"");
  var legacy = message.legacyIds && message.legacyIds.length > 0 ? " [".concat(message.legacyIds.map(function (l) {
    return "\"".concat(l, "\"");
  }).join(', '), "]") : '';
  return "\"".concat(message.id, "\"").concat(legacy, " (\"").concat(message.text, "\"").concat(meaningString, ")");
}

/**
 * Load translations for use by `$localize`, if doing runtime translation.
 *
 * If the `$localize` tagged strings are not going to be replaced at compiled time, it is possible
 * to load a set of translations that will be applied to the `$localize` tagged strings at runtime,
 * in the browser.
 *
 * Loading a new translation will overwrite a previous translation if it has the same `MessageId`.
 *
 * Note that `$localize` messages are only processed once, when the tagged string is first
 * encountered, and does not provide dynamic language changing without refreshing the browser.
 * Loading new translations later in the application life-cycle will not change the translated text
 * of messages that have already been translated.
 *
 * The message IDs and translations are in the same format as that rendered to "simple JSON"
 * translation files when extracting messages. In particular, placeholders in messages are rendered
 * using the `{$PLACEHOLDER_NAME}` syntax. For example the message from the following template:
 *
 * ```html
 * <div i18n>pre<span>inner-pre<b>bold</b>inner-post</span>post</div>
 * ```
 *
 * would have the following form in the `translations` map:
 *
 * ```ts
 * {
 *   "2932901491976224757":
 *      "pre{$START_TAG_SPAN}inner-pre{$START_BOLD_TEXT}bold{$CLOSE_BOLD_TEXT}inner-post{$CLOSE_TAG_SPAN}post"
 * }
 * ```
 *
 * @param translations A map from message ID to translated message.
 *
 * These messages are processed and added to a lookup based on their `MessageId`.
 *
 * @see {@link clearTranslations} for removing translations loaded using this function.
 * @see {@link $localize} for tagging messages as needing to be translated.
 * @publicApi
 */
function loadTranslations(translations) {
  // Ensure the translate function exists
  if (!$localize.translate) {
    $localize.translate = translate;
  }
  if (!$localize.TRANSLATIONS) {
    $localize.TRANSLATIONS = {};
  }
  Object.keys(translations).forEach(function (key) {
    $localize.TRANSLATIONS[key] = parseTranslation(translations[key]);
  });
}
/**
 * Remove all translations for `$localize`, if doing runtime translation.
 *
 * All translations that had been loading into memory using `loadTranslations()` will be removed.
 *
 * @see {@link loadTranslations} for loading translations at runtime.
 * @see {@link $localize} for tagging messages as needing to be translated.
 *
 * @publicApi
 */
function clearTranslations() {
  $localize.translate = undefined;
  $localize.TRANSLATIONS = {};
}
/**
 * Translate the text of the given message, using the loaded translations.
 *
 * This function may reorder (or remove) substitutions as indicated in the matching translation.
 */
function translate(messageParts, substitutions) {
  try {
    return translate$1($localize.TRANSLATIONS, messageParts, substitutions);
  } catch (e) {
    console.warn(e.message);
    return [messageParts, substitutions];
  }
}

/**
 * Tag a template literal string for localization.
 *
 * For example:
 *
 * ```ts
 * $localize `some string to localize`
 * ```
 *
 * **Providing meaning, description and id**
 *
 * You can optionally specify one or more of `meaning`, `description` and `id` for a localized
 * string by pre-pending it with a colon delimited block of the form:
 *
 * ```ts
 * $localize`:meaning|description@@id:source message text`;
 *
 * $localize`:meaning|:source message text`;
 * $localize`:description:source message text`;
 * $localize`:@@id:source message text`;
 * ```
 *
 * This format is the same as that used for `i18n` markers in Angular templates. See the
 * [Angular i18n guide](guide/i18n/prepare#mark-text-in-component-template).
 *
 * **Naming placeholders**
 *
 * If the template literal string contains expressions, then the expressions will be automatically
 * associated with placeholder names for you.
 *
 * For example:
 *
 * ```ts
 * $localize `Hi ${name}! There are ${items.length} items.`;
 * ```
 *
 * will generate a message-source of `Hi {$PH}! There are {$PH_1} items`.
 *
 * The recommended practice is to name the placeholder associated with each expression though.
 *
 * Do this by providing the placeholder name wrapped in `:` characters directly after the
 * expression. These placeholder names are stripped out of the rendered localized string.
 *
 * For example, to name the `items.length` expression placeholder `itemCount` you write:
 *
 * ```ts
 * $localize `There are ${items.length}:itemCount: items`;
 * ```
 *
 * **Escaping colon markers**
 *
 * If you need to use a `:` character directly at the start of a tagged string that has no
 * metadata block, or directly after a substitution expression that has no name you must escape
 * the `:` by preceding it with a backslash:
 *
 * For example:
 *
 * ```ts
 * // message has a metadata block so no need to escape colon
 * $localize `:some description::this message starts with a colon (:)`;
 * // no metadata block so the colon must be escaped
 * $localize `\:this message starts with a colon (:)`;
 * ```
 *
 * ```ts
 * // named substitution so no need to escape colon
 * $localize `${label}:label:: ${}`
 * // anonymous substitution so colon must be escaped
 * $localize `${label}\: ${}`
 * ```
 *
 * **Processing localized strings:**
 *
 * There are three scenarios:
 *
 * * **compile-time inlining**: the `$localize` tag is transformed at compile time by a
 * transpiler, removing the tag and replacing the template literal string with a translated
 * literal string from a collection of translations provided to the transpilation tool.
 *
 * * **run-time evaluation**: the `$localize` tag is a run-time function that replaces and
 * reorders the parts (static strings and expressions) of the template literal string with strings
 * from a collection of translations loaded at run-time.
 *
 * * **pass-through evaluation**: the `$localize` tag is a run-time function that simply evaluates
 * the original template literal string without applying any translations to the parts. This
 * version is used during development or where there is no need to translate the localized
 * template literals.
 *
 * @param messageParts a collection of the static parts of the template string.
 * @param expressions a collection of the values of each placeholder in the template string.
 * @returns the translated string, with the `messageParts` and `expressions` interleaved together.
 *
 * @globalApi
 * @publicApi
 */
var _$localize$ = function $localize$1(messageParts) {
  for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expressions[_key - 1] = arguments[_key];
  }
  if (_$localize$.translate) {
    // Don't use array expansion here to avoid the compiler adding `__read()` helper unnecessarily.
    var translation = _$localize$.translate(messageParts, expressions);
    messageParts = translation[0];
    expressions = translation[1];
  }
  var message = stripBlock(messageParts[0], messageParts.raw[0]);
  for (var i = 1; i < messageParts.length; i++) {
    message += expressions[i - 1] + stripBlock(messageParts[i], messageParts.raw[i]);
  }
  return message;
};
var BLOCK_MARKER = ':';
/**
 * Strip a delimited "block" from the start of the `messagePart`, if it is found.
 *
 * If a marker character (:) actually appears in the content at the start of a tagged string or
 * after a substitution expression, where a block has not been provided the character must be
 * escaped with a backslash, `\:`. This function checks for this by looking at the `raw`
 * messagePart, which should still contain the backslash.
 *
 * @param messagePart The cooked message part to process.
 * @param rawMessagePart The raw message part to check.
 * @returns the message part with the placeholder name stripped, if found.
 * @throws an error if the block is unterminated
 */
function stripBlock(messagePart, rawMessagePart) {
  return rawMessagePart.charAt(0) === BLOCK_MARKER ? messagePart.substring(findEndOfBlock(messagePart, rawMessagePart) + 1) : messagePart;
}

// This file exports all the `utils` as private exports so that other parts of `@angular/localize`

// This file contains the public API of the `@angular/localize` entry-point

// DO NOT ADD public exports to this file.



/***/ }),

/***/ 4418:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ 59274:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ 94166:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ 4418);

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ }),

/***/ 86068:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ 41423:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/callSuper.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _callSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ 23649);
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 82351);
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ 68299);



function _callSuper(t, o, e) {
  return o = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o), (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t, (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])() ? Reflect.construct(o, e || [], (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t).constructor) : o.apply(t, e));
}


/***/ }),

/***/ 25922:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ 29661:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 82351);
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ 83357);


function _construct(t, e, r) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__["default"])()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p, r.prototype), p;
}


/***/ }),

/***/ 42228:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ 9011);

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ 86652:
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _get)
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ 83471);

function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}


/***/ }),

/***/ 23649:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ 56834:
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ 83357);

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, e);
}


/***/ }),

/***/ 18241:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeFunction)
/* harmony export */ });
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}


/***/ }),

/***/ 82351:
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}


/***/ }),

/***/ 90452:
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ 79333:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ 66539:
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ 51806:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ 68299:
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ 71207);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ 86068);


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
}


/***/ }),

/***/ 83357:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ 4296:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ 59274);
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ 79333);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 22843);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ 66539);




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ 83471:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _superPropBase)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ 23649);

function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t)););
  return t;
}


/***/ }),

/***/ 36676:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropGet.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _superPropertyGet)
/* harmony export */ });
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ 86652);
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPrototypeOf.js */ 23649);


function _superPropertyGet(t, e, r, o) {
  var p = (0,_get_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1 & o ? t.prototype : t), e, r);
  return 2 & o ? function (t) {
    return p.apply(r, t);
  } : p;
}


/***/ }),

/***/ 64722:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ 59274);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ 90452);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 22843);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ 66539);




function _toArray(r) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ 47787:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ 94166);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ 90452);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 22843);
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ 51806);




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ 54526:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ 71207);

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ 9011:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ 71207);
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ 54526);


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ 71207:
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ 22843:
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ 4418);

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }),

/***/ 68922:
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _wrapNativeSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ 23649);
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ 83357);
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ 18241);
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ 29661);




function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(t, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, t);
  }, _wrapNativeSuper(t);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(42440));
/******/ }
]);
//# sourceMappingURL=polyfills.js.map