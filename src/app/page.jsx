
import data from "@/data/lang/en/questions.json"
import Question from "@/components/question"
import Link from "next/link";
export  default function Home() {
  let numberQuestion = 7;
  let question = dropQuestion(numberQuestion).question;
  let option1 = dropQuestion(numberQuestion).option1;
  let option2 = dropQuestion(numberQuestion).option2;
  let option3 = dropQuestion(numberQuestion).option3;
  let option4 = dropQuestion(numberQuestion).option4;


  
  const id = 5
  return (
    // <Question question={question} option1={option1} option2={option2} option3={option3} option4={option4} onClick={validate}/>
    <Link href="pages/questions/[id]" as={`pages/questions/${id}`}>IR</Link>
  )
}

function dropQuestion(i) {
  const question = data[i].question;
  const option1 = data[i].responses.optionA;
  const option2 = data[i].responses.optionB;
  const option3 = data[i].responses.optionC;
  const option4 = data[i].responses.optionD;

  return {question, option1, option2, option3, option4}
}
export const validate = e => {
  let isCorrect = e.target.getAttribute('iscorrect')
  if (isCorrect == "true") {
      e.target.classList.add('bg-green-500');
      e.target.classList.remove('hover:bg-black');
  } else {
      e.target.classList.add('bg-red-600');
      e.target.classList.remove('hover:bg-black');
  }
}
