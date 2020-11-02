import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout, Avatar, Drawer } from 'antd';

import linktreeAvatar from '../../assets/images/linktree-avatar@2x.png';
import linktreeLogo from '../../assets/images/brand-logo@2x.png';

import { Hamburger, StyledLink } from '../../common/styles';
import { routes } from '../../config/routes';

const { Content, Footer, Header } = Layout;

export const MainPanel: React.FC = (): JSX.Element => {	

	const [ collapsed, setCollapsed ] = useState<boolean>(true);
	
	return (
		<Router>
			<Layout className="layout" style={{background: 'transparent'}}>
				<Drawer
					placement='left'
					keyboard={true}
					closable={false}
					maskClosable={true}
					onClose={() => setCollapsed(true)}
					visible={!collapsed}
					width={150}
				>
					{ routes.map((route, index) => (
						<StyledLink to={route.path} key={index}><span className='h5' onClick={() => setCollapsed(true)}>{route.icon} {route.sidebar}</span></StyledLink>
					)) }
				</Drawer>
				<Layout className="layout text-center" style={{maxWidth: '320px', width: '100%', background: 'transparent', margin: '50px auto'}}>
					<Hamburger onClick={() => setCollapsed(!collapsed) } />
					<Header style={{background: 'transparent', height: 'auto'}}>
						<Avatar size={64} src={linktreeAvatar} />
						<h6>@da_funk_soul_brotha</h6>
					</Header>
					<Content style={{paddingTop: '10px', marginBottom: '50px'}}>
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
					<Footer style={{ textAlign: 'center', background: 'transparent' }}>
						<img className="brand-logo" src={linktreeLogo} style={{ maxWidth: '85px'}}alt="brand-logo"/>
					</Footer>
				</Layout>
			</Layout>
		</Router>
	)
}