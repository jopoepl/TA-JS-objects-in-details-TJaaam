

let body = document.querySelector(`body`)
let form = document.createElement(`form`);


class Question{
    constructor(title, options, correctAnsIndex){
      this.title = title;
      this.options = options;
      this.correctAns = correctAnsIndex;
    //   this.id = `id-${Date.now()}`;
    }

    isCorrect(ans){
      alert(`Your answer is ${ans === this.options[this.correctAnsIndex]}`);
    }
    getCorrectAns(){
      return this.options[this.correctAnsIndex];
    }
    createUI(){

    let next = document.createElement(`button`)
    next.innerText = "NEXT";
    next.type = "submit"
    next.classList.add(`next`)

    let submit = document.createElement(`button`)
    submit.innerText = "Submit";
    submit.classList.add(`submit`)
    submit.type = "submit"

    //   let title = document.createElement(`div`)
    // //   title.innerText = this.title;
    // let activeQuestion = this.questions[Quiz.activeIndex];
    // console.log(this.activeIndex)
    this.options.forEach((option) => {
        
            let h1 = document.createElement(`h1`)
            h1.innerText = this.title;
        
              let option1 = document.createElement(`input`)
              option1.innerText = this.options[0];
              option1.type = "radio";
              option1.id = "option1"
              option1.name = "options"
              option1.value = this.options[0]
              let option1label = document.createElement(`label`)
              option1label.innerText = this.options[0]
              
              option1label.for = "option1"
        
        
        
              let option2 = document.createElement(`input`)
              option2.innerText = this.options[1];
              option2.value = this.options[1]
              option2.type = "radio";
              option2.id = "option2"
              option2.name = "options"
              let option2label = document.createElement(`label`)
              option2label.innerText = this.options[1]
              option2label.for = "option2"
        
              let option3 = document.createElement(`input`)
              option3.innerText = this.options[2];
              option3.value = this.options[2];
              option3.type = "radio";
              option3.id = "option3"
              option3.name = "options"
              let option3label = document.createElement(`label`)
              option3label.innerText = this.options[2]
              option3label.for = "option3"
        
              let option4 = document.createElement(`input`)
              option4.type = "radio";
              option4.id = "option4"
              option4.name = "options"
              let option4label = document.createElement(`label`)
              option4label.innerText = this.options[3]
              option4label.value = this.options[3]
              option4label.for = "option4"
        
              form.append(h1);
              form.append(option1label, option1, option2label, option2, option3label,option3, option4label, option4, submit, next)
              body.append(form)

    })

 
    }
  }

  class Quiz{
    constructor(allQuestions=[]){
        this.questions = allQuestions
        this.activeIndex = 0;
        this.currentScore = 0;
    }
    addQuestion(title, options, ansIndex){
        let question = new Question(title, options, ansIndex);
        this.questions.push(question);
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


  let quizApp = new Quiz();

  quizApp.addQuestion(`Capital of India?`, [`Mumbai`, `Delhi`, `Chandigarh`, `Bangalore`], 0)
  quizApp.addQuestion(`Capital of US?`, [`New York`, `Washington`, `Chicago`, `Michigan`], 1)
  quizApp.addQuestion(`Capital of UAE?`, [`Abu Dhabhi`, `Riyadh`, `Dubai`, `Muscat`], 2)
  quizApp.addQuestion(`Capital of UK?`, [`Sussex`, `Manchester`, `London`, `Essex`], 2)

quizApp.questions[0].createUI()


form.addEventListener("submit", function(event){
    // let answer = document.getElementById('options').checked
    // console.log(answer)
    // if(answer === this.getCorrectAns()){
    //     this.isCorrect()
    //     this.updateScore();
    //     ++this.activeIndex;

    console.log(event.target, input.value, input.checked)
})

