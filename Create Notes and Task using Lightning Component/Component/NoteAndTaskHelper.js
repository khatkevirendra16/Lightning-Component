({
    CreateNote : function(component, event, helper) {  // Used for creating Only Notes
		var action = component.get("c.createNote");        
        var body = component.get("v.notebody");
        var title = component.get("v.subject");
        var aid = component.get("v.parentid");        
    action.setParams({
        	"title" : title,
        	"body" : body, 
            "aid" :  aid
    });
    action.setCallback(this, function(a) {
            if (a.getState() === "SUCCESS") {
                var Note1 = a.getReturnValue();
                if(Note1!=null){         	   		
                    console.log("Note Create Sucessfully");
        		}
            } else if (a.getState() === "ERROR") {
                console.log("oof");
            }
    });
    $A.enqueueAction(action);    
	},
    
    CreateTask : function(component, event, helper) {
		var action = component.get("c.createTask");             
        var title = component.get("v.subject");
        var body = component.get("v.notebody");
        var pid = component.get("v.parentid");        
        var ddate = component.get("v.today");

    action.setParams({
        	"title" : title,
        	"body" : body, 
            "aid" :  pid ,            
            "ddate" :  ddate
    });
    action.setCallback(this, function(a) {
            if (a.getState() === "SUCCESS") {
                var Task1 = a.getReturnValue();
                if(Task1!=null){         	   		
                    console.log("Task Create Sucessfully");
        		}
            } else if (a.getState() === "ERROR") {
                console.log("oof");
            }
    });
    $A.enqueueAction(action);
	}
})
