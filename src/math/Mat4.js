import * as Mat4Func from './functions/Mat4Func.js';

export class Mat4 {
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
        this.data = [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33];
        return this;
    }

    get x() {
        return this.data[12];
    }

    get y() {
        return this.data[13];
    }

    get z() {
        return this.data[14];
    }

    get w() {
        return this.data[15];
    }

    set x(v) {
        this.data[12] = v;
    }

    set y(v) {
        this.data[13] = v;
    }

    set z(v) {
        this.data[14] = v;
    }

    set w(v) {
        this.data[15] = v;
    }

    set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        if (m00.length) return this.copy(m00);
        Mat4Func.set(this.data, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    }

    translate(v, m = this) {
        Mat4Func.translate(this.data, m, v);
        return this;
    }

    rotate(v, axis, m = this) {
        Mat4Func.rotate(this.data, m, v, axis);
        return this;
    }

    scale(v, m = this) {
        Mat4Func.scale(this.data, m, typeof v === 'number' ? [v, v, v] : v);
        return this;
    }

    multiply(ma, mb) {
        if (mb) {
            Mat4Func.multiply(this.data, ma, mb);
        } else {
            Mat4Func.multiply(this.data, this.data, ma);
        }
        return this;
    }

    identity() {
        Mat4Func.identity(this.data);
        return this;
    }

    copy(m) {
        Mat4Func.copy(this.data, m);
        return this;
    }

    fromPerspective({ fov, aspect, near, far } = {}) {
        Mat4Func.perspective(this.data, fov, aspect, near, far);
        return this;
    }

    fromOrthogonal({ left, right, bottom, top, near, far }) {
        Mat4Func.ortho(this.data, left, right, bottom, top, near, far);
        return this;
    }

    fromQuaternion(q) {
        Mat4Func.fromQuat(this.data, q);
        return this;
    }

    setPosition(v) {
        this.x = v[0];
        this.y = v[1];
        this.z = v[2];
        return this;
    }

    inverse(m = this) {
        Mat4Func.invert(this.data, m);
        return this;
    }

    compose(q, pos, scale) {
        Mat4Func.fromRotationTranslationScale(this.data, q, pos, scale);
        return this;
    }

    getRotation(q) {
        Mat4Func.getRotation(q,this.data);
        return this;
    }

    getTranslation(pos) {
        Mat4Func.getTranslation(pos,this.data);
        return this;
    }

    getScaling(scale) {
        Mat4Func.getScaling(scale,this.data);
        return this;
    }

    getMaxScaleOnAxis() {
        return Mat4Func.getMaxScaleOnAxis(this.data);
    }

    lookAt(eye, target, up) {
        Mat4Func.targetTo(this.data, eye, target, up);
        return this;
    }

    determinant() {
        return Mat4Func.determinant(this.data);
    }

    fromArray(a, o = 0) {
        this.data[0] = a[o];
        this.data[1] = a[o + 1];
        this.data[2] = a[o + 2];
        this.data[3] = a[o + 3];
        this.data[4] = a[o + 4];
        this.data[5] = a[o + 5];
        this.data[6] = a[o + 6];
        this.data[7] = a[o + 7];
        this.data[8] = a[o + 8];
        this.data[9] = a[o + 9];
        this.data[10] = a[o + 10];
        this.data[11] = a[o + 11];
        this.data[12] = a[o + 12];
        this.data[13] = a[o + 13];
        this.data[14] = a[o + 14];
        this.data[15] = a[o + 15];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this.data[0];
        a[o + 1] = this.data[1];
        a[o + 2] = this.data[2];
        a[o + 3] = this.data[3];
        a[o + 4] = this.data[4];
        a[o + 5] = this.data[5];
        a[o + 6] = this.data[6];
        a[o + 7] = this.data[7];
        a[o + 8] = this.data[8];
        a[o + 9] = this.data[9];
        a[o + 10] = this.data[10];
        a[o + 11] = this.data[11];
        a[o + 12] = this.data[12];
        a[o + 13] = this.data[13];
        a[o + 14] = this.data[14];
        a[o + 15] = this.data[15];
        return a;
    }
}
