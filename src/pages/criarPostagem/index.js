import React, {useState} from 'react';
import apiMock from '../../services/MockAPIs/posts-no-header';
import Header from '../../assets/components/header'
import { useHistory} from 'react-router-dom';


function CriarPostagem(){
  const [text, setText] = useState('');
  const history = useHistory();
  
  async function handleSubmit(){
    console.log(text)
    let content = `{"content": "${text}"}`
    await apiMock.post('/posts', content)
      .then(response=>{
          alert("post criado com sucesso!");
          history.push('/feed')
      }).catch(error=>{
        alert("problema na criação do post");
        console.log(error.message)
      })
  }

  return(
    <div>
      <Header/>
      <h1>Criando postagem</h1>
      <textarea onChange={(s)=>setText(s.target.value)}></textarea>
      <button type="button" onClick={handleSubmit}>Publicar</button>
    </div>
  )
}

export default CriarPostagem;