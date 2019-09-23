<template>
    <span>{{frameVal}}</span>
</template>
<script>

export default {
    name: 'countTO',
    props: {
        startVal: {
            default: 0,
            type: Number
        },
        endVal: {
            type: Number,
            required: true
        },
        decimalPlaces: {
            type: Number,
            default: 0
        },
        decimal: {
            type: String,
            default: '.'
        },
        useEasing: {
            type: Boolean,
            default: true
        },
        useGrouping: {
            type: Boolean,
            default: true
        },
        easingFn: {
            type: Function,
            default: (t, b, c, d) => c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b
        },
        duration: {
            type: Number,
            default: 2000
        },
        separator: {
            type: String,
            default: ','
        },
        prefix: {
            type: String,
            default: ''
        },
        suffix: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            rAF: null,
            frameVal: this.startVal,
            startTime: null,
            remaining: null,
            countDown: this.startVal > this.endVal,
            decimalMult: Math.pow(10, this.decimalPlaces)
        }
    },
    created() {
        this.start();
    },
    methods: {
        start() {
            this.rAF = requestAnimationFrame(this.count);
        },

        count(timeStamp) {
            !this.startTime && (this.startTime = timeStamp);

            const progress = timeStamp - this.startTime;
            this.remaining = this.duration - progress;

            let _frameVal = this.frameVal;

            if (this.useEasing) {
                if (this.countDown) {
                    _frameVal = this.startVal - this.easingFn(progress, 0, this.startVal - this.endVal, this.duration);
                } else {
                    _frameVal = this.easingFn(progress, this.startVal, this.endVal - this.startVal, this.duration);
                }
            } else {
                if (this.countDown) {
                    _frameVal = this.startVal - ((this.startVal - this.endVal) * (progress / this.duration));
                } else {
                    _frameVal = this.startVal + (this.endVal - this.startVal) * (progress / this.duration);
                }
            }

            if (this.countDown) {
                _frameVal = (_frameVal < this.endVal) ? this.endVal : _frameVal;
            } else {
                _frameVal = (_frameVal > this.endVal) ? this.endVal : _frameVal;
            }

            this.frameVal = _frameVal
            this.frameVal = this.formatNumber((_frameVal * this.decimalMult) / this.decimalMult);

            if (progress < this.duration) {
                this.rAF = requestAnimationFrame(this.count);
            } else {
                cancelAnimationFrame(this.rAF);
            }
        },
        formatNumber(num) {
            const neg = (num < 0) ? '-' : '';
            let result = '',
                x = [],
                x1 = '',
                x2 = '',
                x3 = '';
            result = Math.abs(num).toFixed(this.decimalPlaces);
            result += '';
            x = result.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? this.decimal + x[1] : '';
            if (this.useGrouping) {
                x3 = '';
                for (let i = 0, len = x1.length; i < len; ++i) {
                    if (i !== 0 && (i % 3) === 0) {
                        x3 = this.separator + x3;
                    }
                    x3 = x1[len - i - 1] + x3;
                }
                x1 = x3;
            }
            return neg + this.prefix + x1 + x2 + this.suffix;
        },
    }
}
</script>