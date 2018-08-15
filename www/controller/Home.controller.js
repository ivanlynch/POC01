sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
	"use strict";
	var imageRoute;

	return Controller.extend("pae.logistica.controller.Home", {
		onInit: function(){
			var data = {
				fechaActual: new Date()
			}
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(data);
			sap.ui.getCore().setModel(oModel);
		}
	})
});