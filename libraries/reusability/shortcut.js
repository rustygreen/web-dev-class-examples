window.mylib = {
  byId: function (id) {
    return document.getElementById(id);
  },

  value: function (id) {
    return byId(id).value;
  },

  num: function (id) {
    return Number(byId(id).value);
  }
};
