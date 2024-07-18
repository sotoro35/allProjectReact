import '@tensorflow/tfjs-backend-webgl'
const qna = require('@tensorflow-models/qna');

const App= ()=>{

  const clickBtn= async()=>{
    const model= await qna.load()
    alert('loaded model')

    let passage= "There are various restaurants in Seongsu-dong, such as Shellfish Island, Coach, and Youngi Restaurant, but the most popular place here is Shellfish Island."
    let question= "What is the most famous restaurant in Seongsu-dong??"
    const results= model.findAnswers(question, passage)
    console.log(results)

  }

  const clickBtn2= ()=>{
    
    var openApiURL = 'http://aiopen.etri.re.kr:8000/WikiQA';
    var access_key =  'b73a29a8-5ba1-4f80-abaf-ef29ac15b441';
    var question = '성수동 맛집 알려줘';
    var type = 'hybridqa';
    
    var requestJson = {
        'argument': {
            'question': question,
            'type': type
        }
    };
  
    var options = {
      method:'POST',
      body: JSON.stringify(requestJson),
      headers: {'Content-Type':'application/json','Authorization':access_key}
    };
   
    fetch(openApiURL, options).then(res=>res.text()).then(text=>alert(text))
  }

  return (
    <div style={{padding:16,}}>
    <button onClick={clickBtn}> click me</button>
    <button onClick={clickBtn2}> click</button>
    </div>
  )
}

export default App