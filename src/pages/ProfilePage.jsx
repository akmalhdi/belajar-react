import axios from "axios"
import ProfileCard from "../components/ProfileCard"
import { useState, useEffect } from "react"


const ProfilePage = () => {
    const [profile, setProfile] = useState(null)

    const fetchProfile = async() => {
        const token = localStorage.getItem('token')
        const res = await axios.get("http://localhost:8000/api/me", {
            headers:{
                Authorization: `Bearer ${token}`,
                Accept: "application/json"
            }
        })
        setProfile(res?.data?.data ?? null)
    }

    console.log(profile)

    useEffect(() => {
        fetchProfile()
    }, [])

    return (
      <ProfileCard
        photo="https://i.pravatar.cc/150?img=51"
        name={profile?.name}
        job={profile?.email}
      />
    );
}

export default ProfilePage