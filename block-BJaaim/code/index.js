

let body = document.querySelector(`body`)
class Question{
    constructor(title, options, correctAns){
      this.title = title;
      this.options = options;
      this.correctAns = correctAns;
    //   this.id = `id-${Date.now()}`;
    }
    isCorrect(ans){
      return ans === correctAns;
    }
    getCorrectAns(){
      return this.correctAns;
    }
    createUI(){
      let h1 = document.createElement(`h1`)
      h1.innerText = this.title;
      let option1 = document.createElement(`div`)
      option1.innerText = this.options[0];
      let option2 = document.createElement(`div`)
      option2.innerText = this.options[1];
      let option3 = document.createElement(`div`)
      option3.innerText = this.options[2];
      let option4 = document.createElement(`div`)
      option4.innerText = this.options[3];
      let next = document.createElement(`a`)
      next.innerText = NEXT;
      next.classList.add(`next`)
      body.append(h1);
      h1.append(option1, option2, option3, option4, next)
    }
  }

  class Quiz{
    constructor(allQuestions=[]){
        this.questions = allQuestions
        this.activeIndex = 0;
        this.currentScore = 0;
    }
    nextQuestion(){
        ++this.activeIndex;
        this.createUI();
    }
    createUI(){
        body.innerHTML = "";
        this[this.activeIndex].createUI();
    }
    updateScore(){
        return ++this.currentScore
    }
  }


  let quizApp = new Quiz([{`What is the National Animal of India?`, [`tiger`, `elephant`, `lion`, `giraffe`], `tiger`}, ])