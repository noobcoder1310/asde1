import React from 'react';
import { useAuth } from "../context/AuthProvider"; // ✅ Corrected import
import toast from 'react-hot-toast';

function Logout() {
  const [authUser, setAuthUser] = useAuth(); // ✅ This will now work correctly

  const handleLogOut = () => {
    try {
      setAuthUser(undefined);

      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
setTimeout(() => {
  window.location.reload();
}, 1500); 
    
  }catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button
        className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
