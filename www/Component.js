sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"pae/logistica/controller/CustomRouter"

], function (UIComponent, JSONModel, CustomRouter) {
	"use strict";
	return UIComponent.extend("pae.logistica.Component", {
		metadata : {
			manifest : "json"
		},
		init: function(){
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		}
	});
});