AFRAME.registerComponent('set-image', {
  schema: {
    on: { type: 'string' },
    target: { type: 'selector' },
    src: { type: 'string' },
    dur: { type: 'number', default: 300 },
  },

  init: function () {
    const data = this.data;
    const el = this.el;

    el.addEventListener(data.on, function () {
      setTimeout(function () {
        if (!data.src) {
          history.back();
        } else {
          window.location.assign(data.src);
        }
      }, data.dur);
    });
  },
});
