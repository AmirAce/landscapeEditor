@component
export class NewScript extends BaseScriptComponent {
    
    
    private originalposition : vec3;
    private originalrotation : quat;
    private boxId : Number;
    private isinitialized = false;
    
    public initialize(id :  number , initialposition: vec3 , initialrotation : quat){
        
    if(this.isinitialized){
            return;
        }        
        this.isinitialized = true;
        this.originalposition = initialposition;
        this.originalrotation = initialrotation;
        this.getTransform().setWorldPosition(initialposition);
        this.getTransform().setWorldRotation(initialrotation);
        this.getSceneObject().name = "box " + id;
        this.boxId = id;  
        
             
          
    }
    
      public getID() : Number {
        return this.boxId;
    }
    onAwake() {
 
    }
}
  