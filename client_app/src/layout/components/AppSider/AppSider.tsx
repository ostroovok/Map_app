import React from 'react';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

interface AppSiderProps {
	collapsed: boolean;
}

const items: ItemType[] = [
	{
		key: '1',
		icon: <UserOutlined />,
		label: 'nav 1',
	},
	{
		key: '2',
		icon: <VideoCameraOutlined />,
		label: 'nav 2',
	},
	{
		key: '3',
		icon: <UploadOutlined />,
		label: 'nav 3',
	},
];

const AppSider: React.FC<AppSiderProps> = ({ collapsed }) => {
	const { Sider } = Layout;

	return (
		<Sider collapsible collapsed={collapsed} trigger={null}>
			<div className={'logo'}>
				<span className={'logo-text'}>{collapsed ? 'MT' : 'Map TODO'}</span>
			</div>
			<Menu defaultSelectedKeys={['1']} items={items} mode={'inline'} theme={'dark'} />
		</Sider>
	);
};

export default AppSider;
