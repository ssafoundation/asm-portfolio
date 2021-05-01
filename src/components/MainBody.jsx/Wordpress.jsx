import React from 'react';
import { Pie, Cell } from 'recharts';
const data2 = [
    { name: 'Html 5', value: 100 },
    { name: 'Css 3', value: 100 },
    { name: 'Bootstrap 4+', value: 100 },
    { name: 'Jquery', value: 100 },

];
const COLORS = ['#FFBB28', '#00C49F', '#0088FE', '#FF8042'];
const Wordpress = () => {
    let renderLabel = function (entry) {
        return entry.name;
    }
    return (
        <>

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

        </>
    );
};

export default Wordpress;