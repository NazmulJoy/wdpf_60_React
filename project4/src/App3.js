import React,{useState} from 'react'

export default function App2() {
    const [profile, setProfile] = useState({
        name:"",
        email: "",
        address: "",
        contact: ""
    });
    const handleChange = (event) => {
        setProfile(profileinfo => {
            return {...profileinfo, [event.target.name]:event.target.value}
        });
    };
    const handleSubmit= (e) => {
         e.preventDefault();
        let output = 'Name: ' + profile.name + '\n';
        output += 'Email: ' + profile.email + '\n';
        output += 'Address: ' + profile.address + '\n';
        output += 'Contact: ' + profile.contact + '\n';
        
        alert(output);
      }
  return (
    <>
    <h1>Student information</h1>
    <form onSubmit={handleSubmit}>
       <b>Name:</b> <input type="text" name="name" value={profile.name} onChange={handleChange} /> <br />
       <b>Email:</b> <input type="text" name="email" value={profile.email} onChange={handleChange} /> <br />
       <b>Address:</b> <input type="text" name="address" value={profile.address} onChange={handleChange} /> <br />
       <b>Contact:</b> <input type="text" name="contact" value={profile.contact} onChange={handleChange} /> <br />
       <button>Submit</button>
    </form>
    </>
    
  )
}

