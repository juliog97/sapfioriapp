sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(t,e){"use strict";var o;return t.extend("softtek.primerproyecto.controller.Vista1",{onInit:function(){o=this},onPressSeries:function(t){var o=t.getSource().getBindingContext().getProperty("Idtitulo");var r=sap.ui.core.UIComponent.getRouterFor(this);r.navTo("RouteVistaDetalle",{Idtitulo:o});e.show("Seleccionaste el "+o)},onPressBotonError:function(t){}})});