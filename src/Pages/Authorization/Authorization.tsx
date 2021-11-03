import { Divider, Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { Form, Input, Button, Checkbox } from 'antd'
import styles from './Authorization.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import { changeLoginStatus } from '../../Redux/PersonReducer'

const Authorization = () => {

    interface LoginType {
        login?: string
        username?: string
        password: string
    }
    let adminData = useSelector((state: any) :LoginType => state.person.adminData);
console.log(adminData);
    const onFinish = (values: LoginType) : void=> {

        if(adminData.login === values.username && adminData.password === values. password){
            dispatch(changeLoginStatus(true));
        }

        console.log('Success:');
    };

    const onFinishFailed = (errorInfo: any): void => {
        console.log('Failed:', errorInfo);
    };

    const dispatch = useDispatch();
   


    return (
        <>
            <Layout className={styles.authorization_container}>
                <Content >
                    <Divider >Authorization</Divider>
                    <Form
                        name="basic"
                        labelCol={{ span: 8, offset: 0 }}
                        wrapperCol={{ span: 10  }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className={styles.authorization_form_container}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" 
                            wrapperCol={{ span: 6, offset: 10 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 4, offset: 11 }}>
                            <Button type="primary" htmlType="submit">
                                Log In
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </>
    )
}

export default Authorization
