import { useState } from 'react'
import './App.css'
import { FormItem } from './components/FormItem'
import { InfoItem } from './components/InfoItem';

function App() {
  const [currentObj, updateObj] = useState({
    name: "Ivan Ivanov",
    position: "Designer",
    education: [],
    experience: []
  });

  return (
    <>
      <div className="left">
      <FormItem title="Personal Info" label1="Full Name" label2="Your Position"
      placeholder1="Ivan Ivanov" placeholder2="Web Dev" updateObj={updateObj}/>
      <FormItem title="Education" label1="Edu name" label2="Edu years"
      placeholder1="TheOdinProject" placeholder2="2023-2024" updateObj={updateObj}/>
      <FormItem title="Work Experience" label1="Company Name" label2="Work Date"
      placeholder1="Google" placeholder2="2023-2024" updateObj={updateObj}/>
      </div>
      <div className="right">
        <div className="name">{currentObj.name}</div>
        <div className="position">{currentObj.position}</div>
        <div className="experience">Experience</div>
        {currentObj.experience.map(obj => (
          <InfoItem infoType="experience" key={obj.companyName} upperText={obj.companyName} lowerText={obj.workDate} updateObj={updateObj}/>
        ))}
        <div className="education">Education</div>
        {currentObj.education.map(obj => (
          <InfoItem infoType="education" key={obj.eduName} upperText={obj.eduName} lowerText={obj.eduDate} updateObj={updateObj}/>
        ))}
      </div>
    </>
  )
}

export default App
