const AboutTeamCard = ({ name, role, description }) => {
    return (
      <div className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content">
        <h3 className="text-xl font-bold text-gray-200">{name}</h3>
        <p className="text-gray-400">{role}</p>
        <p className="mt-2">{description}</p>
      </div>
    );
  };
  
  export default AboutTeamCard;
  