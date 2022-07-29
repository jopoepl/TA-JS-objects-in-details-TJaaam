function createQuestion(title, options, correctAnswerIndex) {
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswer = correctAnswerIndex;
    question.isAnsCorrect = function(index){
      return index === correctAnswerIndex;
    }
    question.getCorrectAnswer = function (){
      return question.options[question.correctAnswer]
    }
    return question;
  
  }
  
  const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };