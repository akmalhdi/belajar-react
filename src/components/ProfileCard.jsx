// function ProfileCard(){} sama seperti dibawah
const ProfileCard = ({ photo, name, bio, job }) => {
  return (
    <div
      style={{
        width: "240px",
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        color: "black",
        boxShadow: "0 0 3px #e5e5e5",
        textAlign: "center"
      }}
    >
      <img
        src={photo}
        alt=""
        style={{
          width: "100%",
          borderRadius: "50%",
          border: "2px solid #000",
        }}
      />
      <h3
        style={{
          margin: "5px 0",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontSize: "14px",
          marginBottom: "15px",
        }}
      >
        {job}
      </p>
      <p
        style={{
          fontSize: "14px",
          marginBottom: "15px",
        }}
      >
        {bio}
      </p>

      <button>Follow</button>
    </div>
  )
}

export default ProfileCard;
