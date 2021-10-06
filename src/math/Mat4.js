import * as Mat4Func from './functions/Mat4Func.js';
import {ArrayProxy} from './ArrayProxy'
export class Mat4 extends ArrayProxy{
    constructor(
        m00 = 1,
        m01 = 0,
        m02 = 0,
        m03 = 0,
        m10 = 0,
        m11 = 1,
        m12 = 0,
        m13 = 0,
        m20 = 0,
        m21 = 0,
        m22 = 1,
        m23 = 0,
        m30 = 0,
        m31 = 0,
        m32 = 0,
        m33 = 1
    ) {
        return super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33)
    }

    set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        if (m00.length) return this.proxy.copy(m00);
        Mat4Func.set(this.proxy, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this.proxy;
    }

    translate(v, m = this) {
        Mat4Func.translate(this.proxy, m, v);
        return this.proxy;
    }

    rotate(v, axis, m = this) {
        Mat4Func.rotate(this.proxy, m, v, axis);
        return this.proxy;
    }

    scale(v, m = this) {
        Mat4Func.scale(this.proxy, m, typeof v === 'number' ? [v, v, v] : v);
        return this.proxy;
    }

    multiply(ma, mb) {
        if (mb) {
            Mat4Func.multiply(this.proxy, ma, mb);
        } else {
            Mat4Func.multiply(this.proxy, this.proxy, ma);
        }
        return this.proxy;
    }

    identity() {
        Mat4Func.identity(this);
        return this.proxy;
    }

    copy(m) {
        Mat4Func.copy(this.proxy, m);
        return this.proxy;
    }

    fromPerspective({ fov, aspect, near, far } = {}) {
        Mat4Func.perspective(this.proxy, fov, aspect, near, far);
        return this.proxy;
    }

    fromOrthogonal({ left, right, bottom, top, near, far }) {
        Mat4Func.ortho(this.proxy, left, right, bottom, top, near, far);
        return this.proxy;
    }

    fromQuaternion(q) {
        Mat4Func.fromQuat(this.proxy, q);
        return this.proxy;
    }

    setPosition(v) {
        this.x = v[0];
        this.y = v[1];
        this.z = v[2];
        return this.proxy;
    }

    inverse(m = this) {
        Mat4Func.invert(this.proxy, m);
        return this.proxy;
    }

    compose(q, pos, scale) {
        Mat4Func.fromRotationTranslationScale(this.proxy, q, pos, scale);
        return this.proxy;
    }

    getRotation(q) {
        Mat4Func.getRotation(q,this);
        return this.proxy;
    }

    getTranslation(pos) {
        Mat4Func.getTranslation(pos,this);
        return this.proxy;
    }

    getScaling(scale) {
        Mat4Func.getScaling(scale,this);
        return this.proxy;
    }

    getMaxScaleOnAxis() {
        return Mat4Func.getMaxScaleOnAxis(this);
    }

    lookAt(eye, target, up) {
        Mat4Func.targetTo(this.proxy, eye, target, up);
        return this.proxy;
    }

    determinant() {
        return Mat4Func.determinant(this);
    }

    fromArray(a, o = 0) {
        this.proxy[0] = a[o];
        this.proxy[1] = a[o + 1];
        this.proxy[2] = a[o + 2];
        this.proxy[3] = a[o + 3];
        this.proxy[4] = a[o + 4];
        this.proxy[5] = a[o + 5];
        this.proxy[6] = a[o + 6];
        this.proxy[7] = a[o + 7];
        this.proxy[8] = a[o + 8];
        this.proxy[9] = a[o + 9];
        this.proxy[10] = a[o + 10];
        this.proxy[11] = a[o + 11];
        this.proxy[12] = a[o + 12];
        this.proxy[13] = a[o + 13];
        this.proxy[14] = a[o + 14];
        this.proxy[15] = a[o + 15];
        return this.proxy;
    }

    toArray(a = [], o = 0) {
        a[o] = this.proxy[0];
        a[o + 1] = this.proxy[1];
        a[o + 2] = this.proxy[2];
        a[o + 3] = this.proxy[3];
        a[o + 4] = this.proxy[4];
        a[o + 5] = this.proxy[5];
        a[o + 6] = this.proxy[6];
        a[o + 7] = this.proxy[7];
        a[o + 8] = this.proxy[8];
        a[o + 9] = this.proxy[9];
        a[o + 10] = this.proxy[10];
        a[o + 11] = this.proxy[11];
        a[o + 12] = this.proxy[12];
        a[o + 13] = this.proxy[13];
        a[o + 14] = this.proxy[14];
        a[o + 15] = this.proxy[15];
        return a;
    }
}
