import { Layout, Menu, Row, Col } from 'antd';

const { Header } = Layout;

const HeaderMenu = () => {
    return (
        <>
            <Header className="header">
                <Row>
                    {/* <Col></Col> */}
                    <Col span={4} offset={20}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
                            <Menu.Item key="1">Ivan Pupkin</Menu.Item>
                            <Menu.Item key="2">Log Out</Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        </>
    )
}

export default HeaderMenu
