import { VectorUtils } from "./VectorUtils";
import { HandInputData } from "../../SpectaclesInteractionKit/Providers/HandInputData/HandInputData";
import { HandType } from "../../SpectaclesInteractionKit/Providers/HandInputData/HandType";
import TrackedHand from "../../SpectaclesInteractionKit/Providers/HandInputData/TrackedHand"

@component
export class HandSmasher extends BaseScriptComponent {
    @input forceMultiplier: number = 100;
    @input selectorAreaSize: number = 10;
    @input projectionDistanceMultiplier: number = 2;

    
    
   // interactor: Component.TouchInteractor;
    
    
    private handProvider: HandInputData = HandInputData.getInstance();
    private leftHand = this.handProvider.getHand("left" as HandType);
    private rightHand = this.handProvider.getHand("right" as HandType);
    private probe = Physics.createGlobalProbe();

    private previousLeftPosition: vec3;
    private previousRightPosition: vec3;

    onAwake() {
        this.createEvent("UpdateEvent").bind(() => {
            this.onUpdate();
        })
    } 

    onUpdate() {
        this.previousLeftPosition = this.applyselection(this.leftHand, this.previousLeftPosition);
        this.previousRightPosition = this.applyselection(this.rightHand, this.previousRightPosition);
    }
    
    
    //var interactor = script.cameraScript.getSceneObject().getComponent("TouchInteractor") as any;
// onPressStart fires when user taps/down on an Interactable
//interactor.onPressStart.add(onPressStart); 
//
//// onHoverStart fires when cursor/finger moves over an Interactable
//interactor.onHoverStart.add(onHoverStart);
//
//// Callback: log the SceneObject that was hit
//function onPressStart(eventData: any) {
//    var interactable = eventData.interactable;               // the Interactable component
//    var hitObject     = interactable.getSceneObject();       // its SceneObject
//    Studio.log("Pressed: " + hitObject.name);
//}
//
//// Callback: log when hover begins
//function onHoverStart(eventData: any) {
//    var hitObject = eventData.interactable.getSceneObject();
//    Studio.log("Hover start on: " + hitObject.name);
//}
    
    
//    
    private applyselection(hand: TrackedHand, previousPostion: vec3): vec3 {
        const currentPosition = hand.indexKnuckle.position;
        //this.addCube(currentPosition);
        return currentPosition != null ? currentPosition : previousPostion
    }

    private addCube(previousPostion: vec3, currentPosition: vec3) {
        if (previousPostion == null || currentPosition == null) {
            return;
        }
        const handVector = currentPosition.sub(previousPostion);
        this.probe.sphereCastAll(this.selectorAreaSize, currentPosition,
            currentPosition.add(handVector.mult(VectorUtils.scalar3(this.projectionDistanceMultiplier))),
            (hits: RayCastHit[]) => {
                for (const hit of hits) {
                    const objectHit = hit.collider.getSceneObject();
                Studio.log(`Tapped object at: objectHit.getTransform()`);
}
                   // objectHit.createCube()
//                    if( bodyComponent != null){
//                      
//                    }
                //}
            });
    } 
}

//Camera Object
//
//// @input Component.TouchInteractor         touchInteractor
//// @input Component.ScriptComponent         cameraScript   // camera that holds the Interactor
//
//// Wait until Camera’s interactor component is ready
//var interactor = script.CursorController.getSceneObject().getComponent("InteractorCursors") as any;
//
//// onPressStart fires when user taps/down on an Interactable
//interactor.onPressStart.add(onPressStart);
//
//// onHoverStart fires when cursor/finger moves over an Interactable
//interactor.onHoverStart.add(onHoverStart); 
//
//// Callback: log the SceneObject that was hit
//function onPressStart(eventData: any) {
//    var interactable = eventData.interactable;               // the Interactable component
//    var hitObject     = interactable.getSceneObject();       // its SceneObject
//    Studio.log("Pressed: " + hitObject.name);
//}
//
//// Callback: log when hover begins
//function onHoverStart(eventData: any) {
//    var hitObject = eventData.interactable.getSceneObject();
//    Studio.log("Hover start on: " + hitObject.name);
//}
//