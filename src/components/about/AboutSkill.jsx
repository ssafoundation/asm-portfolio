import React from 'react';
import SkillBar from 'react-skillbars';
const SKILLS = [
    {
        "type": "React Js",
        "level": 80,
    },
    {
        "type": "Express js",
        "level": 75,
    },
    {
        "type": "Node js",
        "level": 80,
    },
    {
        "type": "Wordpress",
        "level": 78,
    },
]
const colors = {
  bar: "#6699ff",
  background: "#6699ff",
  title: {
    text: "#fff",
  },
};

const AboutSkill = () => {
    
    
    return (
        <>
            <SkillBar skills={SKILLS} colors={colors} />
          
        </>
    );
};

export default AboutSkill;