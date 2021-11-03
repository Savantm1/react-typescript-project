import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
import HeaderMenu from '../Components/HeaderMenu/HeaderMenu';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';
import { CRYPTO_ROUTE, CURRENCY_ROUTE, DOWNLOAD_ROUTE, FRIENDS_ROUTE, MESSAGES_ROUTE, PERSON_ROUTE, SEARCH_ROUTE, SHARES_ROUTE, UPLOAD_ROUTE } from '../consts';

const { Sider, Content } = Layout;

const LayoutApp = (props: any) => {
    return (
        <div>
            <HeaderMenu />
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Person Cabinet">
                            <Menu.Item key="1">
                                <Link to={PERSON_ROUTE}>Cabinet</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Statistics">
                            <Menu.Item key="2">
                                <Link to={CRYPTO_ROUTE}>Crypto</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to={CURRENCY_ROUTE}>Currency</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to={SHARES_ROUTE}>Shares</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Chat">
                            <Menu.Item key="5">
                                <Link to={MESSAGES_ROUTE}>Messages</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to={FRIENDS_ROUTE}>Friends</Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to={SEARCH_ROUTE}>Search</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<NotificationOutlined />} title="Files">
                            <Menu.Item key="8">
                                <Link to={UPLOAD_ROUTE}>Upload File</Link>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <Link to={DOWNLOAD_ROUTE}>Download File</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: "93vh",
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default LayoutApp
