window.mylib = {
  byId: function (id) {
    return document.getElementById(id);
  },

  value: function (id) {
    return this.byId(id).value;
  },

  num: function (id) {
    return Number(this.byId(id).value);
  }
};
