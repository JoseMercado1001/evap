import DS from 'ember-data';

export default DS.Model.extend({
nombre: DS.attr('string'),
tipo: DS.attr('string'),
ponderacion: DS.attr('number'),
ponderacionM: DS.attr('number',{defaulValue: 100}),
proyecto: DS.belongsTo('proyecto')
});
