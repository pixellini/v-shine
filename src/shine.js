import shine from './directive-shine';

const ShineDirective = {
    install (Vue) {
        Vue.directive('shine', shine);
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ShineDirective)
  }

export default ShineDirective;