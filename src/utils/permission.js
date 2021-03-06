import Vue from 'vue'
import router from '@/router/index'

Vue.directive('permission', {
	inserted: function (el, binding) {
		const action = binding.value.action
		console.log(router.currentRoute.meta.action, binding.value.action)
		const currentRight = router.currentRoute.meta
		if (currentRight) {
			if (currentRight.action.indexOf(action) === -1) {
				// 不具备权限
				const type = binding.value.effect
				if (type === 'disabled') {
					el.disabled = true
					el.classList.add('is-disabled')
				} else {
					el.parentNode.removeChild(el)
				}
			}
		}
	}
})
