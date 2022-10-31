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

function promptUser() {
  let gameQuestion = questions[0]
  console.log(gameQuestion.question)
  let i = 0
  let questionsQue = setInterval(() => {
    console.log(
      `${String.fromCharCode(97 + i)} ${
        gameQuestion.options[i][String.fromCharCode(97 + i)]
      }`,
    )
    i++
    if (i >= gameQuestion.options.length) clearInterval(questionsQue)
  }, 2000)
}

promptUser()
