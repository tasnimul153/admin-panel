import React from 'react';
import Item from './Item';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="app-sidebar sidebar-shadow" style={{
                // transparent but with a slight shadow and bokeh effect
                background: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)'
            
            }}>
                <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li className="app-sidebar__heading">Dashboards</li>
                            <li>
                                <Item name="Dashboard" urlName="" icon="fas fa-rocket myIcon ILeft" />
                            </li>
                            <li className="app-sidebar__heading">Insights</li>
                            <li>
                                <a href="" style={{textDecoration: 'none'}}>
                                    <i className='far fa-gem myIcon ILeft'></i> Data
                                    <i className="fas fa-angle-down myIcon IRight"></i>
                                </a>
                                <ul>
                                    <li>
                                        <Item name="Insights" urlName="insights" icon="fas fa-chart-line myIcon ILeft" />
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Item name="Inbox" urlName="inbox" icon="fas fa-envelope myIcon ILeft" />
                            </li>
                            <li className="app-sidebar__heading">Operations</li>
                            <li>
                                <Item name="User Control" urlName="usercontrol" icon="fas fa-user-cog myIcon ILeft" />
                                <Item name="Web Editor" urlName="webeditor" icon="fas fa-code myIcon ILeft"/>
                                <Item name="Settings" urlName="settings" icon="fas fa-cogs myIcon ILeft" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;