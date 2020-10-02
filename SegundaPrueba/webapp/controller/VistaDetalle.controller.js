sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
],
function (Controller,MessageToast) {
	"use strict";
	var oController;

	return Controller.extend("softtek.SegundaPrueba.controller.VistaDetalle", {
		
		onInit: function () {
			oController = this;
			oController.oRouter = this.getOwnerComponent().getRouter();
            oController.oRouter.attachRouteMatched(oController._onRouteMatched, oController);
			//oController.oRouter = sap.ui.core.UIComponent.getRouterFor();
			//oController.oRouter.attachRouteMatched(oController._onRouteMatched, oController);
		},
		_onRouteMatched: function (oEvent) {
			// var nroTitulo = oEvent.getParameter("arguments").Idtitulo;
			// 	if(nroTitulo){
			// 			var oModel = this.getView().getModel();	
			// 			var sPath = oModel.createKey("/SeriesSet", {
   //                 	Idtitulo: nroTitulo
   //             			});
			// 	}

			// sPath = sPath + "/TemporadasSet";//+ "/SeriesSet";
			// oModel.read(sPath, {
			// 	success: function (resultado) {
			// 		var modeloJSON = new sap.ui.model.json.JSONModel(resultado.results);
			// 		oController.getView().byId("_tablaDetalle").setModel(modeloJSON, "VerTemporadas");
			// 	},
			// 	error: function (error) {
			// 		var mensaje = "Error al obtener las temporadas de la serie " + nroTitulo;
			// 		MessageToast.show(mensaje);
			// 	}
			// });
			// //oModel.read("/SeriesSet(nroTitulo)")
			var nroTitulo = oEvent.getParameter("arguments").Idtitulo;

			if (nroTitulo) {
				var oModel = this.getView().getModel();
				var sPath = oModel.createKey("/SeriesSet", {
                   	Idtitulo: nroTitulo
                });
				
				
				//var sPath = "/SeriesSet('" + nroTitulo + "')";
				oModel.read(sPath, {
					success: function (resultado) {
						oController._setCabecera(resultado);
					},
					error: function (error) {
						var mensaje = "Error al obtener numero de serie" + nroTitulo;
						MessageToast.show(mensaje);
					}
				});

				oModel = this.getView().getModel();
				sPath = sPath + "/TemporadasSet";
				oModel.read(sPath, {
					success: function (resultado) {
						var modeloJSON = new sap.ui.model.json.JSONModel(resultado.results);
						oController.getView().byId("_tablaDetalle").setModel(modeloJSON, "VerTemporadas");
					},
					error: function (error) {
						var mensaje = "Error al obtener detalle de la serie" + nroTitulo;
						MessageToast.show(mensaje);
					}
				});
			}

		},
		_setCabecera: function (result) {
			var texto = "Temporadas de la serie : " + result.Titulo;
			oController.getView().byId("_tituloCabecera").setText(texto);
		},
		onNavToBack: function(){
			oController.oRouter.navTo("RouteVista1");
		}
	});

});