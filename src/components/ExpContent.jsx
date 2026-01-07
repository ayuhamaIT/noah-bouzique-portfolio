const ExpContent = ({ expContent }) => {
  return (
    <div className="card-border rounded-xl p-10">
      <h1 className="font-semibold text-3xl">{expContent.title}</h1>
      <p>{expContent.date}</p>
      <p className="text-white-50">Compétences aacquises</p>
      <ul className="list-disc ms-5 text-white-50">
        {expContent.competences.map((competences, index) => (
          <li key={index}>{competences}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpContent;
