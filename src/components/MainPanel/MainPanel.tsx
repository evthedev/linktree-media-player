import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Typography, Row, Col, Avatar, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
  } from '@ant-design/icons';

import { Wrapper } from '../../common/styles';
import { routes } from '../../common/routes';

const { Content, Footer, Sider, Header } = Layout;

export const MainPanel: React.FC = (): JSX.Element => {	

	const [ collapsed, setCollapsed ] = useState<boolean>(true);
	
	return (
		<Router>

			<Layout className="layout" style={{height: '100vh'}}>
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						{ routes.map(route => (
							<Menu.Item key={route.path} icon={route.icon}>
								<Link to={route.path}><h4 className='font-color white t400'>{route.sidebar}</h4></Link>
							</Menu.Item>
						))}
					</Menu>
				</Sider>
				<Layout className="layout" style={{height: '100vh'}}>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className: 'trigger',
						onClick: () => setCollapsed(!collapsed),
					})}
					<Header>
						<Avatar size={64} src='' />
					</Header>
					<Content style={{ padding: '0 50px' }}>
						<Switch>
							{routes.map((route, index) => (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									children={route.main}
								/>
							))}
						</Switch>
					</Content>
					<Footer style={{ textAlign: 'center' }}>Linktree logo</Footer>
				</Layout>
			</Layout>
{/* 
			<Wrapper>
				<div className="container__row">
					<div className="container__col-12 container__col-md-3 container__col-lg-2 background-color secondary-gray text-center padding-t-3">
						<SideMenu />
					</div>
					<div className="container__col-12 container__col-md-9 container__col-lg-10">
					<Switch>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								children={route.main()}
							/>
						))}
					</Switch>
					</div>
				</div>					
			</Wrapper> */}
		</Router>
	)
}