# veggieNinja

## Description
veggieNinja is a simple game where the player have to slice vegetables falling down trougth the screen. Player should use a mini-sword, controlling it with its mouse, to slice the vegetables in two pieces. As the game progresses, more vegetables are falling down the screen and as more the player slices the score increments. The game ends when vegetables not sliced touches the end of the screen or a piece of meat is sliced.


## MVP (DOM - CANVAS)
This is a game where player can touch the elements falling down the screen, with its mouse cursor, to change their form.


## Backlog

* Listening for mouse movement
* Once spliced the elements each side falls down with a parabolic movement.
* Introduce sound effect when elements are sliced.
* Introduce a graffic effect in movement swor when elements are sliced.
* Responsive mobile design


## Data structure

### main.js

```
createSplashScreen(){
    .addEventListener("mouseover", startGame);
}
startGame(){

}
endGame(){

}

createGameScreen(){
}

createGameOverScreen(){
}
```
### game.js
```
class Game{
    atributes: live, score
}
function handleMouseOver(event){
    addEventListener('mouseover')

} //colisión entre mouse y veggie
```
### veggie.js
```
class Veggie{
    atributes: position x, position y
}
draw(){
}
updatePosition(){
    y++ //from top to bottom of the canvas
}
isInsideScreen(){
    //to check later eliminate veggies outside the canvas
}
```
### player.js
```
class Player{
    atributes: live, score;
}
removeLives
.addEventListener(load, style.cursor) //Change img of coursor once page is loaded
```

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen


## Task
Task definition in order of priority

* Create splash screen
* Create class Player (parameters, life and score)
* Create class Fruit (parameters)
* Create collision (mouse movement vs fruit)
* Create collision (fruit vs screen)
* Create remove splash screen
* Update Fruit position
* Handle screen collision
* Update game status
* Record score

game -> eventlistenner click -> +score -> modify img
remove event listener




## Links


### Trello
[Link url](https://trello.com/b/YUrxg95V/m1-project)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)