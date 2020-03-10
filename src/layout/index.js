import React from 'react';
import { Layout, Menu, Icon } from 'antd';

// 从 Layout 组件模块下引入 Header, Footer, Sider, Content 组件
const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class BasicLayout extends React.Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>HelloWorld</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="dashboard"/><span>Dashboard</span></span>}
                        >
                            <Menu.Item key="2">分析页</Menu.Item>
                            <Menu.Item key="3">监控页</Menu.Item>
                            <Menu.Item key="4">工作台</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                    {/* 将内容部分替换成 children 变量，实现内容的切换 */}
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>James Blog</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;