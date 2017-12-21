({	
    CreateNote : function(component, event, helper) {
        var chktask = component.get("v.chktask");        
        if(chktask === true){
           helper.CreateTask(component, event, helper);
           helper.CreateNote(component, event, helper);		   
           //window.location.reload();
           console.log('Task & Notes Both are Created');
       }
       else{          
           helper.CreateNote(component, event, helper);
  		   //window.location.reload();
           console.log('Only Notes Created');
       }
	}
})
