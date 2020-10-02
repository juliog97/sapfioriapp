sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
function (Controller,MessageToast) {
	"use strict";
	var oController;
	return Controller.extend("softtek.primerproyecto.controller.Vista1", {
		onInit: function () {
			oController = this;
			
		},
		onPressSeries: function(oEvent){
			var nroTitulo = oEvent.getSource().getBindingContext().getProperty("Idtitulo");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteVistaDetalle",{
				Idtitulo: nroTitulo
			});
		MessageToast.show("Seleccionaste el " + nroTitulo);
		},
		onPressBotonError: function (oEvent) {
			//sap.m.MessageBox.error("Error");
		}
	});
});