import React,{ useState} from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.scss';
const TextEditor =()=>{
 
 const State = {
  editorState:EditorState.createEmpty()
}
const [state, setState] = useState(State);
    const   {editorState} = state;
    // console.log(editorState);
  const   onEditorStateChange = (editorState)=>{
setState({
    editorState,
})
  }
  const uploadImageCallBack =(file)=>{
    return new Promise(
      (resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID 305019083bf2059');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', ()=>{
          const response = JSON.parse(xhr.responseText);
          console.log(response);
          resolve(response);
        });
        xhr.addEventListener('error', ()=>{
          const error = JSON.parse(xhr.responseText);
          console.log(error);
          reject(error);
        });
      }
    );
  }
    return (
        <div className = 'editor'>
            <Editor
            placeholder='Tell Your Story'
      editorState= {editorState}
      toolbarClassName='toolbarClassName'
      wrapperClassName='wrapperClassName'
      editorClassName='editorClassName'
      onEditorStateChange={onEditorStateChange}
      toolbar={{
        inline:{inDropdown:true},
        list:{inDropdown:true},
        textAlign:{inDropdown:true},
        link:{inDropdown:true},
        history:{inDropdown:true},
        image:{uploadCallback:uploadImageCallBack, alt:{present:true, mandatory:false}}
      }}
       />
        </div>

    )
};

export default TextEditor;
       