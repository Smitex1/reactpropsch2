import "./App.css";
import Profile from "./Profile/profile";

function App() {
  const handleName = (fullName) => alert(fullName);
  const styleProfile = {
    margin: 20,
    padding: 20,
    fontFamily: "Barlow Condensed",
    textAlign: "center",
    border: "5px solid #320d3e",
    borderRadius: 25,
  };
  const styleImg = {
    width: 300,
    border: "5px solid ##0000ff",
    borderRadius: 10,
  };

  //handleName sends an alert message with the name of the profile user.
  return (
    <div style={styleProfile}>
      <Profile
        fullName="SMITH PRAISE "
        profession="FullStack Developer"
        handleName={handleName}
      >
        <img src="/RESUMEPICS.jpg" alt="" style={styleImg} />
      </Profile>
    </div>
  );
}

export default App;
