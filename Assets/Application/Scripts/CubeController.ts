
//
@component
export class CubeController extends BaseScriptComponent { 

//
 
    private originalPosition: vec3;
    private originalRotation: quat;
    private cubeId : number; 
    //private audioComponentPlayManager: AudioComponentPlayManager;
//    private lastPlayTime: number = 0;
    private isInitialized: boolean = false; 
    
 
    onAwake() {
      //  this.bodyComponent.enabled = true;
     //   this.bodyComponent.onCollisionEnter.add(this.handleCollisionEnter.bind(this));
    } 

    public initialize (id: number, initialPosition: vec3, initialRotation: quat, ) : void {
//        audioComponentPlayManager:AudioComponentPlayManager
        if (this.isInitialized) { 
            return;
//        }   
////this.audioComponentPlayManager = audioComponentPlayManager;
        this.isInitialized = true;
        this.originalPosition = initialPosition;
        this.originalRotation = initialRotation;
        this.getTransform().setWorldPosition(initialPosition);
        this.getTransform().setWorldRotation(initialRotation); 
        //this.enableGravity(false);
        //this.bodyComponent.enabled = true;
        var startPosition = this.getTransform().getWorldPosition();
        var startRotation = this.getTransform().getWorldRotation();
        const time = 1;
        this.getSceneObject().name= "Cube " + id;
        this.cubeId = id;
        
         var i = 0;
        var rate = 1.0 / time; 
        while (i <= 1) 
        {
            i += getDeltaTime() * rate; 
            this.getTransform().setWorldPosition(vec3.lerp(startPosition, this.originalPosition, i));
            this.getTransform().setWorldRotation(quat.slerp(startRotation, this.originalRotation, i));
            //this.yieldControl();
        }
        this.getTransform().setWorldPosition(this.originalPosition);
        this.getTransform().setWorldRotation(this.originalRotation);
          
       
        
      //this.bodyComponent.velocity = new vec3(0, 0, 0);
      //this.bodyComponent.angularVelocity = new vec3(0, 0, 0);
     // this.bodyComponent.enabled = true;
    
        
    } 
//    
//

//    public drop(): void    {
//        this.enableGravity(true);
//    }
//
//    public async revert() : Promise<void> {
//        const time = 1;
//        this.enableGravity(false);
//        var startPosition = this.getTransform().getWorldPosition();
//        var startRotation = this.getTransform().getWorldRotation();
//        this.bodyComponent.enabled = false;
//       

//    private enableGravity(boolean: boolean) {
//        var worldSettings = Physics.WorldSettingsAsset.create();
//        worldSettings.gravity = new vec3(0, boolean ? -980 : 0, 0);
//        this.bodyComponent.worldSettings = worldSettings;
//    } 

//    private yieldControl(): Promise<void> { 
//        return new Promise(resolve => {
//            this.createEvent("UpdateEvent").bind(() => {
//                resolve();  
//            });  
//        });
    }
//triggerStart(eventArgs: InteractableEventArgs): void{
//            studio.log("cube touched!")
//        }

}
