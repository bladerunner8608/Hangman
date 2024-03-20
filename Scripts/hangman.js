//check out Node.js for information on making your own API endpoints

class Hangman {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.puzzleStatus = 'playing'
    }
    getGameStatus(){
        let finished = true

        this.word.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter === ' ') {
    
            } else {
                 finished = false
            }
        })
    
        if(this.remainingGuesses === 0){
            this.puzzleStatus = 'failed'
        } else if (finished) {
            this.puzzleStatus = 'finished'
        } else {
            this.puzzleStatus = 'playing'
        }
    }
    get statusMessage(){
        if(this.puzzleStatus === 'playing'){
            return `Guesses Left: ${this.remainingGuesses}`
        } else if (this.puzzleStatus === 'failed'){
            return `Nice try!  The answer was "${this.word.join('')}"`
        } else {
            return 'Great work!  You guessed the correct answer!'
        }
    }
    get puzzle(){
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle
    }
    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if(this.puzzleStatus !== 'playing'){
            return
        }
    
        if (isUnique){
            this.guessedLetters.push(guess)
        }
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.getGameStatus()
    }
}




