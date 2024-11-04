import React, { useState ,useEffect} from 'react';
import { Drawer, Button, Popup, Dialog } from 'tdesign-react';
import axios from 'axios';
export default function List() {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  let [list, setLS] = useState([])
  const handleClick = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  const onConfirm = (context) => {
    setVisible1(false);
  };
  let del = (id) => {
    console.log('删除')
    axios.get('http://localhost:3000/del?id='+id).then(res=>{
        
    })
    setVisible1(true);
  }
  useEffect(() => {
    axios.get('http://localhost:3000/ls').then(res=>{
      setLS(res.data.data)
    })
  },[visible1])
  return (
    <div>
      {/* <div className="list" */}
      {
        list.map((item, index) => {
          return (
            <div className='list'>
              <div>
                <img src={item.img}></img>
                <p>{item.title}</p>
                <p>{item.text}</p>
              </div>
              <div>
                <p>日期</p>

                <p><span onClick={handleClick}>查看数据 </span> <span> 编辑</span><span> 浏览 </span>  <Popup content="删除" placement="bottom" showArrow destroyOnClose><span onClick={() => { del(item._id) }}> ...</span></Popup></p>



              </div>
            </div>
          )
        })
      }

      {/* </div> */}
      <Drawer header="抽屉标题" visible={visible} onClose={handleClose}>
        <p>抽屉的内容</p>
      </Drawer>
      <Dialog
        header="Basic Modal"
        visible={visible1}
        confirmOnEnter
        onClose={() => setVisible1(false)}
      >
        <p>您确认要删除吗</p>
      </Dialog>
    </div>
  )
}
