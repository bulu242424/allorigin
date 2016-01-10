/**
 * @file 获取变量的类型
 * @author yanhaijing.com
 * @date 2016年1月3日 21:37:13
 */

var toString = ''.toString;

function type(x) {
    if(x === null){
        return 'null';
    }

    var t= typeof x;

    if(t !== 'object'){
        return t;
    }
    var c;
    try {
        c = toString.call(x).slice(8, -1).toLowerCase();
    } catch(exp) {
        return 'object';
    }
    if(c !== 'object'){
        return c;
    }

    if(x.constructor==Object){
        return c;
    }

    return 'unknown';
}

function isObject(x) {
    return type(x) === 'object';
}

function isFunction(x) {
    return type(x) === 'function';
}
function isNull(x) {
    return type(x) === 'null';
}
function isUndef(x) {
    return type(x) === 'undefined';
}
function isNullOrUndef(x) {
    return isNull(x) || isUndef(x);
}
export {type, isObject, isFunction, isNull, isUndef, isNullOrUndef};
