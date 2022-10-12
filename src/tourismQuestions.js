const questions = {
  0: {
    question: 'Where is the largest hospital in the world located?',
    options: [
      {
        0: 'Kimberly',
        value: false,
      },
      {
        1: 'Soweto',
        value: true,
      },
      {
        2: 'Cape Town',
        value: false,
      },
      {
        3: 'Sandton',
        value: false,
      },
    ],
  },

  1: {
    question: `True or False, Table mountain's high is deeper than Kimberly Hole's Deep`,
    options: [
      {
        0: 'True',
        value: false,
      },
      {
        1: 'False',
        value: true,
      },
    ],
  },

  2: {
    question: 'What are traffic lights called is South Africa',
    options: [
      {
        0: 'Lights',
        value: false,
      },
      {
        1: 'Machines',
        value: false,
      },
      {
        2: 'Stops',
        value: false,
      },
      {
        rightAnswer: 'Robots',
      },
    ],
  },
}

let guesses
let correctAnswer
let questionNumber = 0
let gameQuestion = `${Object.values(questions[questionNumber])[0]} \nis it:\n\n`
const abc = 'abcde'
let userScore = 0

for (let i = 0; i < questions[0].options.length; i++) {
  guesses = Object.values(questions[0].options[i])
  gameQuestion += `${abc[i]}:${guesses[0]}\n`
  if (guesses[1] === true) {
    correctAnswer = guesses[0]
  }
}
let userResponse = 'Kimberly'

console.log(gameQuestion)
const answer = userResponse === correctAnswer ? 'correct' : 'incorrect'

if (userResponse === correctAnswer) {
  console.log(`Your Guess is ${answer}`)
}
