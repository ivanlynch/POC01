sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	var oRouter = 0;

	return Controller.extend("pae.logistica.controller.App", {
		onInit: function(){
			oRouter = this.getOwnerComponent().getRouter();
		},
		onLogin: function(){
			/*
			var triggered = false;
			var UserID = this.getView().byId("UserID").getValue();
			var Password = this.getView().byId("Password").getValue();
			if(!triggered){
				triggered = true;
				if((UserID != "Admin") && (Password != "1234")){
					MessageToast.show("Usuario Incorrecto");
				}else{
					MessageToast.show("Validando Usuario", {
						duration: 1500,
						autoClose: false,
						onClose: function(){
							MessageToast.show("Usuario Correcto", {
								duration: 1500,
								autoClose: false
							});
							oRouter.navTo("Home");
						}
					});
				}
			}else {
				triggered = false;
			}
			*/
			oRouter.navTo("Home");
		}
	});

});