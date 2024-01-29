import "./InfoItem.css"
import xIcon from "../icons/x.svg"

export const InfoItem = ({ infoType, upperText, lowerText, updateObj }) => {
  function handleRemove() {
    updateObj(prevObj => {
      const changedObj = {...prevObj};
      changedObj[infoType].forEach((infoObj, i) => {
        if (infoType == "education" && infoObj.eduName == upperText && infoObj.eduDate == lowerText) {
          changedObj[infoType].splice(i, 1);
        } else if (infoType == "experience" && infoObj.companyName == upperText && infoObj.workDate == lowerText) {
          changedObj[infoType].splice(i, 1);
        }
      });

      return changedObj;
    });
  }

  return (
    <div className="info-item">
        <div className="upper">{upperText}</div>
        <div className="lower">{lowerText}</div>
        <img onClick={handleRemove} src={xIcon} alt="das" />
    </div>
  )
}