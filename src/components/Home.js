import React,{useState} from 'react';
import { Layout, Menu,Button } from 'tdesign-react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  SearchIcon,
  NotificationFilledIcon,
  HomeIcon,
  DashboardIcon,
  ServerIcon,
  RootListIcon,
  ControlPlatformIcon,
  PreciseMonitorIcon,
  MailIcon,
  UserCircleIcon,
  PlayCircleIcon,
  Edit1Icon,
  AppIcon, CodeIcon, FileIcon, UserIcon, ViewListIcon, RollbackIcon 
} from 'tdesign-icons-react';
const { HeadMenu, MenuItem,SubMenu } = Menu;
const { Header, Content, Footer, Aside } = Layout;

export default function Home() {
  let nav=useNavigate()
  const [active, setActive] = useState('/home/list');
  const [collapsed, setCollapsed] = useState(false);
  const [expands, setExpands] = useState(['1', '2']);

  const [darkActive, setDarkActive] = useState('1-1');
  const [darkCollapsed, setDarkCollapsed] = useState(false);
  const [darkExpands, setDarkExpands] = useState(['1', '2']);
  
  let tiao=(e)=>{
    setActive(e)
    nav(e)
  }
  return (
    <div>
      <div className="tdesign-demo-item--layout">
        <Layout>
          <Header>
            <HeadMenu
         
              value="item1"
              logo={<img width="136" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.Sd83UV7HGykwFY4O4wOOhAAAAA?w=155&h=88&c=7&r=0&o=5&pid=1.7" alt="logo" />}
              operations={
                <div className="t-menu__operations">
                  <SearchIcon className="t-menu__operations-icon" />
                  <NotificationFilledIcon className="t-menu__operations-icon" />
                  <HomeIcon className="t-menu__operations-icon" />
                </div>
              }
            >
              <MenuItem value="item1">已选内容</MenuItem>
              <MenuItem value="item2">菜单内容一</MenuItem>
              <MenuItem value="item3">菜单内容二</MenuItem>
              <MenuItem value="item4" disabled>
                菜单内容三
              </MenuItem>
            </HeadMenu>
          </Header>
          <Layout>
            <Aside style={{ borderTop: '1px solid var(--component-border)' ,height:'800px'}}>
              <button variant="text" shape="square" icon={<ViewListIcon />} onClick={() =>nav('/add') } >发布文章</button>
              <Menu
                value={active}
                collapsed={collapsed}
                expandMutex={false}
                expanded={expands}
                onExpand={(values) => setExpands(values)}
                // onChange={(v) => setActive(v)}
                onChange={(e)=>tiao(e)}
                operations={
                  <Button variant="text" shape="square" icon={<ViewListIcon />} onClick={() => setCollapsed(!collapsed)} />
                }
                style={{ marginRight: 20 }}
              >
                <MenuItem value="0" icon={<AppIcon />}>
                  仪表盘
                </MenuItem>
                <SubMenu value="1" title={<span>资源列表</span>} icon={<CodeIcon />}>
                  <MenuItem value="/home/list" >
                    <span>内容管理</span>
                  </MenuItem>
                  <MenuItem value="1-2" >
                    <span>评论管理</span>
                  </MenuItem>
                </SubMenu>
                <SubMenu value="2" title={<span>调度平台</span>} icon={<FileIcon />}>
                  <SubMenu value="2-1" title="二级菜单-1">
                    <MenuItem value="2-1-1">三级菜单-1</MenuItem>
                    <MenuItem value="2-1-2">三级菜单-2</MenuItem>
                    <MenuItem value="2-1-3">三级菜单-3</MenuItem>
                  </SubMenu>
                  <MenuItem value="2-2">
                    <span>二级菜单-2</span>
                  </MenuItem>
                </SubMenu>
                <SubMenu value="3" title={<span>精准监控</span>} icon={<UserIcon />}>
                  <MenuItem value="3-1">
                    <span>二级菜单-1</span>
                  </MenuItem>
                  <MenuItem value="/home/shu">
                    <span>数据管理</span>
                  </MenuItem>
                </SubMenu>
                <MenuItem value="4" disabled icon={<RollbackIcon />}>
                  根目录
                </MenuItem>
                <SubMenu value="5" title={<span>消息区</span>} icon={<MailIcon />}>
                  <MenuItem value="5-1">
                    <span>二级菜单-1</span>
                  </MenuItem>
                  <MenuItem value="5-2">
                    <span>二级菜单-2</span>
                  </MenuItem>
                </SubMenu>
              </Menu>
            </Aside>
            <Layout>
              <Content>
                <Outlet></Outlet>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}
