// prototypal method
function question (title, options, correctAnsIndex) {
    let question = Object.create(questionMethods)
    question.title = title;
    question.options = options;
    question.correctAnswer = correctAnsIndex;
     return question;

}

let questionMethods = {
    isAnswerCorrect: function(ans){
        return this.correctAnswer === ans;
    },
    getCorrectAnswer: function(){
        return this.correctAnswer;
    }
}

let firstQuestion = question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    2
  );
  let secondQuestion =  question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    3
  )

  console.log(firstQuestion.title, "prototypal")
  console.log(firstQuestion.options)
  console.log(firstQuestion.isAnswerCorrect(3))
  console.log(firstQuestion.getCorrectAnswer())
  console.log(secondQuestion.title)
  console.log(secondQuestion.options)
  console.log(secondQuestion.isAnswerCorrect(3))
  console.log(secondQuestion.getCorrectAnswer())

  // Pseudoclassical

function Question (title, options, correctAnsIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnsIndex;
}

Question.prototype = {
    isAnswerCorrect: function(ans){
        return this.correctAnswer === ans;
    },
    getCorrectAnswer: function(){
        return this.correctAnswer;
    }
}

let firstQuestion1 = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion1 = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

  console.log(firstQuestion1.title, "pseudoclassical pattern")
  console.log(firstQuestion1.options)
  console.log(firstQuestion1.isAnswerCorrect(3))
  console.log(firstQuestion1.getCorrectAnswer())
  console.log(secondQuestion1.title)
  console.log(secondQuestion1.options)
  console.log(secondQuestion1.isAnswerCorrect(3))
  console.log(secondQuestion1.getCorrectAnswer())


    // Class Method

    class ClassQuestion {
        constructor (title, options, correctAnsIndex){
        this.title = title;
        this.options = options;
        this.correctAnswer = correctAnsIndex;
        }
        isAnswerCorrect(answer){
            return this.correctAnswer === answer;
        }
        getCorrectAnswer(){
            return this.correctAnswer;
        }
    }
    
    let firstQuestion2 = new ClassQuestion(
        'Where is the capital of Jordan',
        ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
        1
      );
      let secondQuestion2 = new ClassQuestion(
        'Where is the capital of Jamaica',
        ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
        2
      );
    
      console.log(firstQuestion2.title, "class")
      console.log(firstQuestion2.options)
      console.log(firstQuestion2.isAnswerCorrect(3))
      console.log(firstQuestion2.getCorrectAnswer())
      console.log(secondQuestion2.title)
      console.log(secondQuestion2.options)
      console.log(secondQuestion2.isAnswerCorrect(3))
      console.log(secondQuestion2.getCorrectAnswer())