mylib = {
  byId: function (elementId){
    return document.getElementById(elementId);
  },

  value: function (elementId){
    return this.byId(elementId).value;
  },

  num: function num(elementId){
    return Number(this.value(elementId));
  }
};