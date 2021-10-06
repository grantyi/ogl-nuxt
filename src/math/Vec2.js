import * as Vec2Func from './functions/Vec2Func.js';
import {ArrayProxy} from './ArrayProxy'

export class Vec2 extends ArrayProxy{
    constructor(x = 0, y = x) {
        return super(x,y)
    }

    get x() {
        return this.proxy[0];
    }

    get y() {
        return this.proxy[1];
    }

    set x(v) {
        this.proxy[0] = v;
    }

    set y(v) {
        this.proxy[1] = v;
    }

    set(x, y = x) {
        if (x.length) return this.copy(x);
        Vec2Func.set(this.proxy, x, y);
        return this.proxy;
    }

    copy(v) {
        Vec2Func.copy(this.proxy, v);
        return this.proxy;
    }

    add(va, vb) {
        if (vb) Vec2Func.add(this.proxy, va, vb);
        else Vec2Func.add(this.proxy, this.proxy, va);
        return this.proxy;
    }

    sub(va, vb) {
        if (vb) Vec2Func.subtract(this.proxy, va, vb);
        else Vec2Func.subtract(this.proxy, this.proxy, va);
        return this.proxy;
    }

    multiply(v) {
        if (v.length) Vec2Func.multiply(this.proxy, this.proxy, v);
        else Vec2Func.scale(this.proxy, this.proxy, v);
        return this.proxy;
    }

    divide(v) {
        if (v.length) Vec2Func.divide(this.proxy, this.proxy, v);
        else Vec2Func.scale(this.proxy, this.proxy, 1 / v);
        return this.proxy;
    }

    inverse(v = this) {
        Vec2Func.inverse(this.proxy, v);
        return this.proxy;
    }

    // Can't use 'length' as Array.prototype uses it
    len() {
        return Vec2Func.length(this.proxy);
    }

    distance(v) {
        if (v) return Vec2Func.distance(this.proxy, v);
        else return Vec2Func.length(this.proxy);
    }

    squaredLen() {
        return this.squaredDistance();
    }

    squaredDistance(v) {
        if (v) return Vec2Func.squaredDistance(this.proxy, v);
        else return Vec2Func.squaredLength(this.proxy);
    }

    negate(v = this) {
        Vec2Func.negate(this.proxy, v);
        return this.proxy;
    }

    cross(va, vb) {
        if (vb) return Vec2Func.cross(va, vb);
        return Vec2Func.cross(this.proxy, va);
    }

    scale(v) {
        Vec2Func.scale(this.proxy, this.proxy, v);
        return this.proxy;
    }

    normalize() {
        Vec2Func.normalize(this.proxy, this.proxy);
        return this.proxy;
    }

    dot(v) {
        return Vec2Func.dot(this.proxy, v);
    }

    equals(v) {
        return Vec2Func.exactEquals(this.proxy, v);
    }

    applyMatrix3(mat3) {
        Vec2Func.transformMat3(this.proxy, this.proxy, mat3);
        return this.proxy;
    }

    applyMatrix4(mat4) {
        Vec2Func.transformMat4(this.proxy, this.proxy, mat4);
        return this.proxy;
    }

    lerp(v, a) {
        Vec2Func.lerp(this.proxy, this.proxy, v, a);
    }

    clone() {
        return new Vec2(this[0], this[1]);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        return this.proxy;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        return a;
    }
}
