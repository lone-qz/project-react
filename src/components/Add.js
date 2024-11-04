import React, { useRef, useState } from 'react';
import { Textarea, Dialog, Tag, Input, Space,Upload, MessagePlugin, Checkbox, Button  } from 'tdesign-react';
import axios from 'axios';
export default function Add() {
    let [tiele, setTiele] = useState('');
    let [img,setImg] = useState('./logo192.png');
    const [inputVisible, toggleInputVisible] = useState(false);
    const [tagList, setTagList] = useState([
        {
            name: '可删除标签',
            showClose: true,
        },
        {
            name: '可删除标签',
            showClose: true,
        },
        {
            name: '可删除标签',
            showClose: true,
            disabled: true,
        },
    ]);

    /**
     * @param {number} i
     */
    const deleteTag = (i) => {
        const newtagList = [...tagList];
        newtagList.splice(i, 1);
        setTagList(newtagList);
    };

    const handleClickAdd = () => {
        toggleInputVisible(true);
    };

    const handleInputEnter = (value) => {
        toggleInputVisible(false);
        if (value) setTagList((currentList) => currentList.concat([{ name: value, showClose: true }]));
    };
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(true);
    };
    const onConfirm = (context) => {
        console.log('点击了确认按钮', context);
        setVisible(false);
        axios.post('http://localhost:3000/add', { title: tiele, text: value ,img:img})
    };
    const onCancel = (context) => {
        console.log('点击了取消按钮', context);
    };
    const onClickCloseBtn = (context) => {
        console.log('点击了关闭按钮', context);
    };
    const onKeydownEsc = (context) => {
        console.log('按下了ESC', context);
    };
    const onClickOverlay = (context) => {
        console.log('点击了蒙层', context);
    };
    const handleClose = (context) => {
        console.log('关闭弹窗，点击关闭按钮、按下ESC、点击蒙层等触发', context);
        setVisible(false);
    };
    let box = useRef(null);
    let [show, setShow] = useState(true);
    let [show1, setShow1] = useState(true);
    const [value, onChange] = useState('');
    let onKeydown = (e) => {
        if (e.keyCode === 13) {
            console.log(e);
            onChange(value + '\n');
        }
    }
    let ss = (e) => {
        console.log(e);
        setShow1(!show1)
        if (!show1) {
            box.current.style.width = '50%'
        } else {
            box.current.style.width = '100%'
        }
    }
    return (
        <div>
            {show && <div>
                <div className="hea"> <h2>文章管理</h2>
                    <input type="text" placeholder="请输入标题（5-100）字" className="input" value={tiele} onChange={(e) => { setTiele(e.target.value) }} />
            
                    <button className="btn">发布文章</button>
                </div>
                <div> <button onClick={() => { onChange(value + '##') }}>标题</button><button >图片</button><button onClick={() => { onChange(value + '*倾斜字体') }}>斜体</button><button onClick={() => onChange(value + '-删除样式')}>删除线</button><button onClick={() => { handleClick() }}>保存</button></div>
            </div>
            }
            {
                show1 && <div className='lf'>
                    <Textarea
                        style={{ backgroundColor: '#ccc' }}
                        placeholder="请输入内容"
                        onKeydown={onKeydown}
                        value={value}
                        onChange={(value) => {
                            console.log(value);
                            onChange(value);
                        }}

                        rows={35}
                    />
                </div>
            }
            <div className='rg' ref={box}>
                <div className='nav'>
                    <button onClick={(e) => ss(e)}>{show1 ? '隐藏' : '显示'}</button>
                </div>
                <div className='main'>

                    {
                        value
                        && value.split('\n').map((item, index) => (

                            item.includes('##') ? (<h2 key={index}>{item.slice(2,)}</h2>) : item.includes('-') ? 
                            <del key={index}>{item.slice(1,)}</del> : item.includes('*') ? <i key={index}>{item.slice(1,)}</i> : <p key={index}>{item}</p>


                        ))

                    }
                </div>
            </div>
            <Dialog
                header="Basic Modal"
                visible={visible}
                confirmOnEnter
                onClose={handleClose}
                onConfirm={onConfirm}
                onCancel={onCancel}
                onEscKeydown={onKeydownEsc}
                onCloseBtnClick={onClickCloseBtn}
                onOverlayClick={onClickOverlay}
            >
                文章标签： <div style={{ display: 'flex', cursor: 'pointer' }}>
                    {inputVisible ? (  
                        <Input onBlur={handleInputEnter} onEnter={handleInputEnter} style={{ width: '94px' }} />
                    ) : (
                        <Tag onClick={handleClickAdd}> 
                            可添加标签
                        </Tag>
                    )}
                </div>
            </Dialog>
        </div>
    )
}
