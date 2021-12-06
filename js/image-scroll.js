document.addEventListener('DOMContentLoaded', function () {
    const ele1 = document.getElementById('container1');
    const ele2 = document.getElementById('container2');
    //ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };
    let vel = 10;

    const mouseDownHandler1 = function (e) {
        ele1.style.cursor = 'grabbing';
        ele1.style.userSelect = 'none';

        pos = {
            left: ele1.scrollLeft,
            top: ele1.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler1);
        document.addEventListener('mouseup', mouseUpHandler1);
    };

    const mouseDownHandler2 = function (e) {
        ele2.style.cursor = 'grabbing';
        ele2.style.userSelect = 'none';

        pos = {
            left: ele2.scrollLeft,
            top: ele2.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler2);
        document.addEventListener('mouseup', mouseUpHandler2);
    };

    const mouseMoveHandler1 = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele1.scrollTop = pos.top - dy;
        ele1.scrollLeft = pos.left - dx;
    };

    const mouseMoveHandler2 = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele2.scrollTop = pos.top - dy;
        ele2.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler1 = function () {
        ele1.style.cursor = 'grab';
        ele1.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler1);
        document.removeEventListener('mouseup', mouseUpHandler1);
    };

    const mouseUpHandler2 = function () {
        ele2.style.cursor = 'grab';
        ele2.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler2);
        document.removeEventListener('mouseup', mouseUpHandler2);
    };

    // Attach the handler
    ele1.addEventListener('mousedown', mouseDownHandler1);
    ele2.addEventListener('mousedown', mouseDownHandler2);
});