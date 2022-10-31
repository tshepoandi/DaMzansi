const questions = {
  0: {
    question: 'Where is the largest hospital in the world located?',
    options: [
      {
        a: 'Kimberly',
        value: false,
      },
      {
        b: 'Soweto',
        value: true,
      },
      {
        c: 'Cape Town',
        value: false,
      },
      {
        d: 'Sandton',
        value: false,
      },
    ],
  },

  1: {
    question: `True or False, Table mountain's high is deeper than Kimberly Hole's Deep`,
    options: [
      {
        a: 'True',
        value: false,
      },
      {
        b: 'False',
        value: true,
      },
    ],
  },

  2: {
    question: 'What are traffic lights called is South Africa',
    options: [
      {
        a: 'Lights',
        value: false,
      },
      {
        b: 'Machines',
        value: false,
      },
      {
        c: 'Stops',
        value: false,
      },
      {
        d: 'none',
        vale: true,
      },
    ],
  },
}

function promptUser() {
  let gameQuestion = questions[0]
  console.log(gameQuestion.question)
  let i = 0
  let correctAnswer
  let questionsQue = setInterval(() => {
    console.log(
      `${String.fromCharCode(97 + i)} ${
        gameQuestion.options[i][String.fromCharCode(97 + i)]
      }`,
    )
    if (gameQuestion.options[i].value) {
      correctAnswer = gameQuestion.options[i][String.fromCharCode(97 + i)]
    }
    i++
    if (i >= gameQuestion.options.length) clearInterval(questionsQue)
  }, 2000)
}

promptUser()
