import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  duracion: DS.attr('number'),
  vpn: DS.attr('number'),
  recuperacion: DS.attr('number'),
  riesgo: DS.attr('number'),
  criterio: DS.hasMany('criterio')
});
