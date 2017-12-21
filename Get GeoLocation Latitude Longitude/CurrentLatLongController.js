({
	doinit : function(component, event, helper) {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){     
                component.set("v.comLat",position.coords.latitude);
                component.set("v.comLong",position.coords.longitude);
            });	
        }
    }
})
