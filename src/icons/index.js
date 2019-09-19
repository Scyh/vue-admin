import Vue from 'vue'
import iconSvg from '@/components/iconSvg'

Vue.component('icon-svg', iconSvg);

const r = require.context('./svgs', true, /\.svg$/);

const requrieAll = r => r.keys().map(r);

requrieAll(r);