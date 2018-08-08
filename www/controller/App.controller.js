sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("pae.logistica.controller.App", {
		onPress: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home");
		}
	});

});