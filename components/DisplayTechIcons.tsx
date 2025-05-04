interface TechIconProps {
  careerSkills: string[];
}

const DisplayTechIcons = ({ careerSkills }: TechIconProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-3 text-sm text-white">
      {careerSkills.map((skill, idx) => (
        <span key={idx}>{skill}</span>
      ))}
    </div>
  );
};

export default DisplayTechIcons;


