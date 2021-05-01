[!start game](https://res.cloudinary.com/dltwds8yr/image/upload/v1619905733/Screenshot_2021-05-01_at_23.35.47_bgyg0b.png)
[!game](https://res.cloudinary.com/dltwds8yr/image/upload/v1619907162/Screenshot_2021-05-02_at_00.12.19_fhsbyq.png)
[!game](https://res.cloudinary.com/dltwds8yr/image/upload/v1619907162/Screenshot_2021-05-02_at_00.12.02_ejo3wk.png)

# veggieNinja

![alt text](http://url/to/img.png)

## Description
veggieNinja is a simple game where the player have to slice vegetables falling down trougth the screen. Player should use a mini-sword, controlling it with its mouse, to slice the vegetables in two pieces. As the game progresses, more vegetables are falling down the screen and as more the player slices the score increments. The game ends when vegetables not sliced touches the end of the screen or a piece of meat is sliced.


## MVP (DOM - CANVAS)
This is a game where player can touch the elements falling down the screen, with its mouse cursor, to change their form.


## Backlog

* Create Meat class with veggie properties but in collision ends the game.
* Introduce a graffic effect in movement swor when elements are sliced.
* Make more veggies appear from down of the screen with speed effect
* Responsive mobile design


## Data structure

### main.js

```
createSplashScreen()

removeSplashScreen()

createGameScreen()

removeGameScreen()

createGameOverScreen()

startGame()

endGame()
```
### game.js
```
class Game{
    start()
    startLoop()
    checkCollisions()
    gameOver()
    updateGameStatus()
}
```
### veggie.js
```
class Veggie{
    draw()
    drawSplash()
    updatePosition(){
    isInsideScreen()
```
### player.js
```
class Player
    removeLives()
    didCollide()
```
### sounds.js
```
class Sounds
    playCut()
```


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen


## Links


### Trello
[Link url](https://trello.com/b/YUrxg95V/m1-project)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/TaiaMakh/M1-veggiNinja)
[Link Deploy](https://taiamakh.github.io/M1-veggiNinja/)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)