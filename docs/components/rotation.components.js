AFRAME.registerComponent('rotation-listener', {
    init: function () {
        var animationRuns = false

        this.el.addEventListener('mouseenter', () => {
            animationRuns = true
            if (this.el.hasAttribute('animation') == false) {
                this.el.setAttribute('animation', {
                    property: 'rotation',
                    to: '360 360 0',
                    easing: 'linear',
                    dur: 7500,
                    loop: 'true',
                })
            }
            this.el.play()
            
        })

        this.el.addEventListener('mouseleave', () => {
            animationRuns = false
            setTimeout(() => {
                if (animationRuns) {
                    clearTimeout(this)
                    return
                }
                this.el.pause()
            }, 1000)
        })
    }
})