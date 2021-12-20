import React , {useState} from 'react';
import Name from '../../../../../components/name';
import Button from '../../../../../components/button';
import Input from '../../../../../components/input';
// import Dropdown from '../../../../../components/dropdown';
import Confirm from '../../../../../components/confirmModal/confirm';
import Editor from '../../../../../components/editor';
import './index.scss';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [categories,setCategories] = useState();
    const [text, setText] = useState('');
    const [richEdit, setRichEdit] = useState('');
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showPostModal, setShowPostModal] = useState(false);
    const [alertText, setAlertText] = useState('');

const handleValueChange =(e, key)=>{
setIsBtnDisabled(true);
let val = e.target.value;
if(key === 1)
{
setTitle(val);
console.log(val)
}else if(key === 2)
{
    setAuthor(val);
    console.log(val)
}else if(key === 3)
{
    setCategories(val);
    console.log(val)
}else if(key === 4)
{
    setText(val);
    console.log(val)
}else if(key === 5)
{
    setRichEdit(val);
    console.log(val)
}
if(text !== '' && title !== '' && categories !== '' && author !== '')
{
    setIsBtnDisabled(false);
}
    }

const handlePost = ()=>{
    setIsBtnDisabled(true);
    let user = {
        title,
        author,
        categories,
        text
    }
    if(user)
    {
        setIsBtnDisabled(false);
        console.log(user);
        setShowPostModal(true);
        setAlertText('You Posted a Blog successfully !'); 
    }
}
 
    const handleCancle = ()=>{
     if(isBtnDisabled === false)
     {
        setShowConfirmModal(true);
        setAlertText('Are you sure want to cancle ?'); 
     }
    }

    const handleConfirm =()=>{
        setShowConfirmModal(true);
     if(title !=='' && text !=='' && author !=='' && categories !=='')
        {
            setCategories('');
            setText('');
            setRichEdit();
            setAuthor();
            setTitle();
        setShowConfirmModal(false);
        }
    }

return(
<div className = 'container'>
<Name tabTitle='Posts' title='New Post' className = 'container__elements' />
<h2 className = 'container__elements1'>* Title</h2>
<Input className = 'container__elements1'  value = {title} onValueChange ={(e)=>{handleValueChange(e, 1)}} />
<h2 className = 'container__elements1'>* Author</h2>
<Input className = 'container__elements1'  value = {author} onValueChange ={(e)=>handleValueChange(e, 2)} />
<h2 className = 'container__elements1'>* Categories</h2>
<select name='' value= {categories} onValueChange ={(e)=>handleValueChange(e, 3)} onChange = {(e)=>handleValueChange(e, 3)} className = 'container__elements1 dropdown'>
<option value ='default'>--Select--</option>
<option >Development</option>
<option >Marketting</option>
<option >Bussiness</option>
</select>
<h2 className = 'container__elements1'>* Description</h2>
<textarea  cols='5' rows='5' value ={text} onChange ={(e)=>handleValueChange(e, 4)} className = 'container__elements2 container__text-area'></textarea>
<h2 className = 'container__elements1'>* Text Editor</h2>
<Editor value ={richEdit} onChange ={(e)=>handleValueChange(e, 5)} className = 'container__elements3'/>
<div className= 'container1'>
<Button className= 'container1__elements3' isBtnDisabled = {isBtnDisabled} buttonClick = {handlePost}>Add Post</Button>
<Button className= 'container1__elements3' isBtnDisabled = {isBtnDisabled} buttonClick = {handleCancle}>Cancel</Button>
</div>
    {showConfirmModal && (
          <Confirm buttonText={'OK'} isCancelRequired={true} confirmTitle={alertText}
            onConfirm={handleConfirm } onCancel={ ()=>{setShowConfirmModal(false)} } />
        )}
        {showPostModal && (
          <Confirm buttonText={'OK'} isCancelRequired={false} confirmTitle={alertText}
            onConfirm={()=>{setShowPostModal(false) }} onCancel={ ()=>{setShowPostModal(false)} } />
        )}
</div>
)
};



NewPost.propTypes = {
};

NewPost.defaultProps = {
    
};

export default React.memo(NewPost);