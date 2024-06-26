import { useState } from "react";

const MyProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    avatar:
      "https://media.licdn.com/dms/image/D4D35AQHplVtpLnlGwA/profile-framedphoto-shrink_800_800/0/1712734978239?e=1719993600&v=beta&t=0AiOfmhZYh4aaRPiP2v25-6r4gxjZZ3HszpExE3X5Ms",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });
  const [isUpdated, setIsUpdated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Logic for updating user profile
    console.log("User profile updated:", userInfo);
    setIsUpdated(true);
    setTimeout(() => setIsUpdated(false), 3000); // Reset the update message after 3 seconds
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">My Profile</h2>
          <img
            src={userInfo.avatar}
            alt={userInfo.name}
            className="rounded-full h-24 w-24 mx-auto mb-4 border-4 border-blue-500"
          />
        </div>
        <form onSubmit={handleUpdateProfile}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Bio:
            </label>
            <textarea
              name="bio"
              value={userInfo.bio}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200"
          >
            Update Profile
          </button>
        </form>
        {isUpdated && (
          <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
            Profile updated successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
