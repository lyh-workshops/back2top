var back2top = new Object();
window.addEventListener('DOMContentLoaded', function () {

    back2topFn(back2top);

    function back2topFn({ width = 70, height = 900, right = 15, top = 0, bg = 'https://cdn.jsdelivr.net/gh/lyh-workshops/back2top/images/scroll.png' }) {
        var body = this.document.body;
        var div = this.document.createElement('div');
        body.appendChild(div);
        div.className = 'back2top';
        div.style.opacity = 0;
        div.style.position = 'fixed';
        div.style.width = width + 'px';
        div.style.height = height + 'px';
        div.style.right = right + 'px';
        div.style.top = top + 'px';
        div.style.border = 'none';
        div.style.marginTop = 0;
        div.style.background = `url(${bg}) center/cover`;
        div.style.display = 'block';

        div.addEventListener('click', function () {
            back2topAnimate(window, 0);
        });

        function back2topAnimate(obj, target, callback) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var step = (target - obj.scrollY) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (obj.scrollY == target) {
                    clearInterval(obj.timer);
                    callback && callback();
                }
                var val = obj.scrollY + step;
                window.scroll(0, val);
            }, 15);
        }

        this.window.addEventListener('scroll', function () {
            if (this.window.scrollY > 0) {
                div.style.opacity = 1;
            } else {
                div.style.opacity = 0;
            }
        });
    }
});