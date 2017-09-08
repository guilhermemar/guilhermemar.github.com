
function whellAction (direction) {
    var bodyClass = document.body.classList;

    if (direction == 'down') {

        switch (true) {
            case bodyClass.contains('scene-one'):
                bodyClass.remove('scene-one');
                bodyClass.add('scene-two');
                break;

            case bodyClass.contains('scene-two'):
                bodyClass.remove('scene-two');
                bodyClass.add('scene-three');
                break;

            case bodyClass.contains('scene-three'):
                bodyClass.remove('scene-three');
                bodyClass.add('scene-four');
                break;
        }

    } else {

        switch (true) {
            case bodyClass.contains('scene-four'):
                bodyClass.remove('scene-four');
                bodyClass.add('scene-three');
                break;

            case bodyClass.contains('scene-three'):
                bodyClass.remove('scene-three');
                bodyClass.add('scene-two');
                break;

            case bodyClass.contains('scene-two'):
                bodyClass.remove('scene-two');
                bodyClass.add('scene-one');
                break;
        }

    }
}

var stayCalm = false;
document.body.addEventListener('wheel', function onWheel (e) {
    if (!stayCalm) {
        stayCalm = true;

        whellAction(e.deltaY > 0 ? 'down' : 'up');

        window.setTimeout(function timeout () {
            stayCalm = false;
        }, 1000);
    }
});

var touchYstart = null;
document.body.addEventListener('touchstart', function onTouchStart (e) {
    touchYstart = e.touches[0].clientY;
});

document.body.addEventListener('touchmove', function onTouchEnd (e) {
    if ( touchYstart == null) {
        return;
    }

    console.log(e);

    whellAction(e.touches[0].clientY > touchYstart ? 'up' : 'down');

    touchYstart = null;
});
