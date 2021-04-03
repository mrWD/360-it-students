AFRAME.registerComponent('set-image', {
  schema: {
    on: { type: 'string' },
    target: { type: 'selector' },
    url: { type: 'string' },
    dur: { type: 'number', default: 300 },
  },

  init: function () {
    const data = this.data;
    const el = this.el;

    el.addEventListener(data.on, function () {
      console.log(data.url);
      setTimeout(function () {
        if (!data.url) {
          history.back();
        } else {
          window.location.assign(data.url);
        }
      }, data.dur);
    });
  },
});
