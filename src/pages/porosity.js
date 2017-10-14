import React from 'react'
import update from 'immutability-helper'
import Quiz from '../components/quiz'
import Result from '../components/result'
import quizQuestions from '../data/quizquestions'
import Question from '../components/question'



class porosity extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nonsense: 10,
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Nintendo: 0,
        Microsoft: 0,
        Sony: 0
      },
      result: ''
    };

        console.log(this.props);
        console.log("FML");


   this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };



  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    console.log("answer slected");

    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
        console.log("set next");
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
        console.log("SetResults");
    }
  }



  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    console.log("answersCount="+ answersCount);
    console.log("answersCountKeys="+ answersCountKeys);
        console.log("answersCountValues="+ answersCountValues);

    const stupidNonsense = answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    console.log(stupidNonsense.toString());
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    console.log("set results is running");
    console.log(result);
    if (result.length === 1) {
      console.log("determined");
      this.setState({ result: result[0] });
    } else {
      console.log("undetermined");
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
      counter={this.state.counter}
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    console.log("render result");
    console.log(this.state.result);
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Quiz</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}

      </div>
    );
  }

}

export default porosity;
