import React from 'react';
// import { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
// import Wordpress from './Wordpress';
const data = [
    { name: 'Html 5', value: 100 },
    { name: 'Css 3', value: 100 },
    { name: 'Bootstrap 4+', value: 100 },
    { name: 'Jquery', value: 100 },

];
const data2 = [
    { name: 'Html 5', value: 100 },
    { name: 'Css 3', value: 100 },
    { name: 'Bootstrap 4+', value: 100 },
    { name: 'Jquery', value: 100 },

];
const COLORS = ['#FFBB28', '#00C49F', '#0088FE', '#FF8042'];

const MainBody = () => {
    let renderLabel = function (entry) {
        return entry.name;
    }
    return (
        <>
            <div className="dashboard-body">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="home-graph" style={{ height: 350 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie className="html-chart"
                                        data={data}
                                        cx={120}
                                        cy={200}
                                        label={renderLabel}
                                        startAngle={90}
                                        endAngle={450}
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        // paddingAngle={1}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            {/* <ul className="responsive-webdesign">
                                <li>Responsive Web design</li>
                                <li>Psd to Html</li>
                                <li>Frontend Development</li>
                                <li>Psd to React Application</li>
                                <li>Pixel Perfect Web Design</li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="home-graph" style={{ width: '100%', height: 350 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie className="html-chart"
                                        data={data2}
                                        cx={120}
                                        cy={200}
                                        label={renderLabel}
                                        startAngle={90}
                                        endAngle={450}
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        // paddingAngle={1}
                                        dataKey="value"
                                    >
                                        {data2.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                               
                            </ResponsiveContainer>
                            {/* <ul className="responsive-webdesign">
                                <li>Responsive Web design</li>
                                <li>Psd to Html</li>
                                <li>Frontend Development</li>
                                <li>Psd to React Application</li>
                                <li>Pixel Perfect Web Design</li>
                            </ul> */}
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default MainBody;